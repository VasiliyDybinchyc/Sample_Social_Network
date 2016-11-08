ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require "capybara/rails"
require 'database_cleaner'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  DatabaseCleaner.strategy = :truncation

  def setup
    DatabaseCleaner.start
  end

  def teardown
    DatabaseCleaner.clean
  end
end

class IntegrationWebkitTest < ActiveSupport::TestCase
  include Rails.application.routes.url_helpers
  include Capybara::DSL
  Capybara.default_wait_time = 5
  Capybara.current_driver = :webkit
end
