require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  def setup
    @user = users(:Valid_user)
    @messages = @user.messages.build(content: "Lorem ipsum")
  end

  def test_should_be_valid
    assert @messages.valid?
  end

  def test_user_id_should_be_present
    @messages.user_id = nil
    assert_not @messages.valid?
  end

  def test_content_should_be_present
    @messages.content = "   "
    assert_not @messages.valid?
  end

  def test_content_should_be_at_most_200_characters
    @messages.content = "a" * 201
    assert_not @messages.valid?
  end

  def test_order_should_be_most_recent_first
    assert_equal messages(:most_recent), Message.first
  end
end
