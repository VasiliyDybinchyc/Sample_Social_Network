class UsersSignupTest < IntegrationWebkitTest

  def setup
    visit signup_path
  end

  def test_invalid_signup_information
    assert_no_difference 'User.count' do
      fill_in("user_first_name", :with => "")
      fill_in("user_last_name", :with => "")
      fill_in("user_email", :with => "user@invalid")
      fill_in("user_password", :with => "pass")
      fill_in("user_password_confirmation", :with => "word")
      click_button "Create me!"
    end
  end

  def test_valid_signup_information
    assert_difference 'User.count', 0 do
      fill_in("user_first_name", :with => "Vasiliy")
      fill_in("user_last_name", :with => "Pupkin")
      fill_in("user_email", :with => "Pupkin@valid.com")
      fill_in("user_password", :with => "password")
      fill_in("user_password_confirmation", :with => "password")
      click_button "Create me!"
    end
    assert page.has_text?("pupkin@valid.com")
  end
end
