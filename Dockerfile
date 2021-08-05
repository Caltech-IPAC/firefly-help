
FROM node:12.22.4-slim AS deps
WORKDIR "/app"
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
COPY ./buildScript ./buildScript
COPY build.gradle settings.gradle ./
COPY --from=deps /app/node_modules ./app/node_modules

ENV GRADLE_USER_HOME=/work \
    GRADLE_OPTS="-Dorg.gradle.daemon=false -Dorg.gradle.internal.launcher.welcomeMessageEnabled=false"


ENTRYPOINT []
CMD ["gradle", "tasks"]
#CMD ["sleep", "30m"]
