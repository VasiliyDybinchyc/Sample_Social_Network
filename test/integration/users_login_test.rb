require "test_helper"

class UsersLoginTest < IntegrationWebkitTest

  def setup
    @Valid_user = users(:Valid_user)
  end

  def test_login_with_invalid_information
    visit login_path
    fill_in("session_email", :with => "")
    fill_in("session_password", :with => "password")
    click_button "Log in"
  end

  def test_login_with_valid_information
    login(@Valid_user)
    assert page.has_text?(@Valid_user.email)
  end

end
