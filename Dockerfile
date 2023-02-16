FROM ruby:3.2.1-slim-buster
ENV APP_HOME /demo_app
ENV RAILS_ENV='production'
ENV RAKE_ENV='production'

RUN mkdir ${APP_HOME}
WORKDIR ${APP_HOME}

RUN apt-get update -qq && apt-get install -y curl build-essential libpq-dev default-libmysqlclient-dev netcat nano \
    python2 nodejs
RUN nvm install 16.17.1
RUN nvm use 16.17.1

COPY Gemfile ${APP_HOME}/Gemfile
COPY Gemfile.lock ${APP_HOME}/Gemfile.lock

RUN gem install bundler -v 2.1.4
RUN bundle install
COPY package.json package-lock.json ${APP_HOME}/
RUN npm install
COPY . ${APP_HOME}
EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
