class UsersSignupTest < IntegrationWebkitTest

  def test_invalid_signup_information
    visit signup_path
    assert_no_difference 'User.count' do
      fill_in("user_name", :with => "")
      fill_in("user_email", :with => "user@invalid")
      fill_in("user_password", :with => "pass")
      fill_in("user_password_confirmation", :with => "word")
      click_button "Create me!"
    end
  end

  def test_valid_signup_information
    visit signup_path
    assert_difference 'User.count', 0 do
      fill_in("user_name", :with => "Vasiliy Pupkin")
      fill_in("user_email", :with => "Pupkin@valid.com")
      fill_in("user_password", :with => "password")
      fill_in("user_password_confirmation", :with => "password")
      click_button "Create me!"
    end
    assert page.has_text?("pupkin@valid.com")
  end
end
