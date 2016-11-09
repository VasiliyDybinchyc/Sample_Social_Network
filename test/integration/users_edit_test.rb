class UsersEditTest < IntegrationWebkitTest

  def setup
    @user = users(:Valid_user)
    login(@user)
    visit edit_user_path(@user.id)
  end

  def test_invalid_edit_information
    assert_no_difference 'User.count' do
      fill_in("user_first_name", :with => "")
      fill_in("user_last_name", :with => "")
      fill_in("user_email", :with => "user@invalid")
      fill_in("user_password", :with => "pass")
      fill_in("user_password_confirmation", :with => "word")
      click_button "To change yourself"
    end
    assert page.has_text?("Edit user")
  end

  def test_valid_edit_information
    assert_difference 'User.count', 0 do
      fill_in("user_first_name", :with => "Name")
      fill_in("user_last_name", :with => "User")
      fill_in("user_email", :with => "email@example.com")
      fill_in("user_password", :with => "password")
      fill_in("user_password_confirmation", :with => "password")
      fill_in("user_phone_number", :with => "some phone")
      fill_in("user_favorite_book", :with => "some book")
      fill_in("user_favorite_film", :with => "some film")
      click_button "To change yourself"
    end
    assert page.has_text?("email@example.com")
    assert page.has_text?("some phone")
    assert page.has_text?("some book")
    assert page.has_text?("some film")
  end
end
