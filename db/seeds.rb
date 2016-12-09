
10.times do |count|
  @user = User.create(first_name: "first_name#{count}", last_name: "last_name#{count}",
  email: "example#{count}@railstutorial.org", password: "foobar", password_confirmation: "foobar")
  50.times do |count2|
    @news = @user.messages.create(content: "Hello #{count2}", user_id: @user.id)
  end
end
