
FROM node:12.22.4-slim AS deps
WORKDIR "/work"
COPY ./app/package.json ./app/yarn.lock ./
RUN yarn install --frozen-lockfile

FROM gradle:4.10-jre-slim AS builder
USER root
RUN apt-get update \
    && apt-get install -y curl htmldoc \
    && curl -sL https://deb.nodesource.com/setup_12.x | bash -  \
    && apt-get install -y nodejs \
    && npm install yarn -g  \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir -p /work

WORKDIR "/work"
COPY . .
COPY --from=deps /work/node_modules ./app/node_modules

ENV GRADLE_USER_HOME=/work \
    GRADLE_OPTS="-Dorg.gradle.daemon=false -Dorg.gradle.internal.launcher.welcomeMessageEnabled=false"

ARG target=build
ARG env=dev

RUN gradle -Penv=${env} ${target}


FROM httpd:2.4-alpine

RUN rm /usr/local/apache2/htdocs/index.html

COPY --from=builder /work/build/ /usr/local/apache2/htdocs/
