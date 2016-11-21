var MessageForm = React.createClass({

  render: function() {
    return (
    <div id="new-news-filed">
      <h3>Share the news</h3>
      <form class="new_message" id="new_message" enctype="multipart/form-data" action="/messages" accept-charset="UTF-8" method="post">
      <input name="utf8" type="hidden" value="✓"/>
        <div id="news-text-filed">
          <textarea placeholder="Compose new messages..." name="message[content]" id="message_content"></textarea>
        </div>
        <input type="file" name="message[picture]" id="message_picture"/><br/>
        <input type="submit" name="commit" value="Post" class="btn btn-primary" data-disable-with="Post"/>
      </form>
    </div>
    );
  }
});
