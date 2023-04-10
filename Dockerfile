FROM ruby:3.1.2-slim-bullseye

ENV APP_HOME /demo_app
ENV RAILS_ENV='production'
ENV RAKE_ENV='production'

RUN mkdir ${APP_HOME}
WORKDIR ${APP_HOME}

RUN apt-get update -qq && apt-get install -y curl build-essential libpq-dev libsqlite3-dev sqlite3 default-libmysqlclient-dev nano
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs
RUN npm install -g yarn@1.22.19

COPY Gemfile ${APP_HOME}/Gemfile
COPY Gemfile.lock ${APP_HOME}/Gemfile.lock

RUN gem install bundler -v 2.3.14
RUN bundle install
COPY package.json ${APP_HOME}/package.json
RUN yarn install --check-files
COPY . ${APP_HOME}

EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
