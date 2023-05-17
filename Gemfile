source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"

gem "rails", "~> 7.0.3"
gem "sprockets-rails"
gem 'mysql2', '~> 0.5'
gem "puma", "~> 5.0"
gem "jsbundling-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "figaro"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false
gem 'devise'
gem 'jwt'
gem 'active_model_serializers', '~> 0.10.2'

group :development, :test do
  gem 'faker'
  gem 'factory_bot_rails'
  gem 'rspec-rails', '~> 6.0.0'
  gem "database_cleaner"
  gem "shoulda-matchers"
  gem "simplecov", require: false
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem "web-console"
  gem "capistrano", "~> 3.17", require: false
  gem "capistrano3-puma"
  gem "capistrano-rails", require: false
  gem "capistrano-bundler", require: false
  gem "capistrano-figaro-yml"
  gem 'capistrano-rbenv', '~> 2.1', '>= 2.1.4'
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
