#!/usr/bin/env bash
# exit on error

set -o errexit

bundle install
yarn install
bundle exec rake db:migrate:reset
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate
bundle exec rake db:seed