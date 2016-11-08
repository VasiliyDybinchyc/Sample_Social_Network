require "test_helper"

class UsersLoginTest < ActiveSupport::TestCase

  def setup
    @Valid_user = users(:Valid_user)
    @Invalid_user = users(:Invalid_user)
  end

  def test_login_with_invalid_information
    login(@Invalid_user)
    assert page.has_text?("Log in")
  end

  def test_login_with_valid_information
    login(@Valid_user)
    assert page.has_text?(@Valid_user.email)
  end

end
