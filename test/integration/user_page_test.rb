class UsersEditTest < IntegrationWebkitTest

  def setup
    @user = users(:Valid_user)
  end

  def test_visit_user_page_and_see_user_name
    login(@user)
    visit user_path(@user.id) # I dont know why but if i put this in setup test falls
    assert page.has_text?(@user.first_name)
    assert page.has_text?(@user.last_name)
  end

  def test_visit_user_page_and_see_personal_info
    login(@user)
    visit user_path(@user.id) # I dont know why but if i put this in setup test falls
    assert page.has_text?(@user.favorite_film)
    assert page.has_text?(@user.favorite_book)
    assert page.has_text?(@user.phone_number)
  end
  
end
