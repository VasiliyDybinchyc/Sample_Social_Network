ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require "capybara/rails"
require 'database_cleaner'

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all
  self.use_transactional_fixtures = false

  DatabaseCleaner.strategy = :truncation

  def setup
    DatabaseCleaner.start
  end

  def teardown
    DatabaseCleaner.clean
  end

  def login(user)
    visit login_path
    fill_in("session_email", :with => user.email)
    fill_in("session_password", :with => "password")
    click_button "Log in"
  end
end

class IntegrationWebkitTest < ActiveSupport::TestCase
  include Rails.application.routes.url_helpers
  include Capybara::DSL
  Capybara.default_wait_time = 5
  def run_webkit
    Capybara.current_driver = :webkit
  end
end
