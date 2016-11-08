class UsersEditTest < IntegrationWebkitTest

  def setup
    @user = User.create(name: "Example User", email: "user@example.com",
                     password: "password", password_confirmation: "password")
    visit edit_user_path(@user.id)
  end

  def test_invalid_edit_information
    assert_no_difference 'User.count' do
      fill_in("user_name", :with => "")
      fill_in("user_email", :with => "user@invalid")
      fill_in("user_password", :with => "pass")
      fill_in("user_password_confirmation", :with => "word")
      click_button "To change yourself"
    end
    assert page.has_text?("Edit user")
  end

  def test_valid_edit_information
    assert_difference 'User.count', 0 do
      fill_in("user_name", :with => "Name")
      fill_in("user_email", :with => "email@example.com")
      fill_in("user_password", :with => "password")
      fill_in("user_password_confirmation", :with => "password")
      click_button "To change yourself"
    end
    assert page.has_text?("email@example.com")
  end
end
