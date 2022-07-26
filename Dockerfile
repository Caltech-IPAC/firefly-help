
FROM gradle:7.4-jdk17 AS deps

RUN apt-get update \
    && apt-get install -y htmldoc unzip wget \
# use node v18.x. may not be available via apt-get
    && curl -sL https://deb.nodesource.com/setup_18.x | bash -  \
    && apt-get install -y nodejs \
    && npm install yarn -g  \
# cleanup
    && rm -rf /var/lib/apt/lists/*;

WORKDIR "/work"
COPY ./app/package.json ./app/yarn.lock ./
RUN yarn install --frozen-lockfile

FROM deps AS builder

WORKDIR "/work"
COPY . .
COPY --from=deps /work/node_modules ./app/node_modules

ENV GRADLE_USER_HOME=/work \
    GRADLE_OPTS="-Dorg.gradle.daemon=false -Dorg.gradle.internal.launcher.welcomeMessageEnabled=false"

ARG target=build
ARG env=dev

RUN gradle -Penv=${env} ${target}


FROM httpd:2.4-alpine

RUN rm /usr/local/apache2/htdocs/index.html && mkdir /usr/local/apache2/htdocs/onlinehelp

COPY --from=builder /work/build/ /usr/local/apache2/htdocs/onlinehelp/
