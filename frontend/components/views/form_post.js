import React from 'react';

import    * as axiosNews    from '../../axios/axios-news';

export default React.createClass({

  updateNews: function() {
    let userId = this.props.userId;
    setTimeout(function(){axiosNews.getNews(userId)}, 2000);
  },


  render: function() {
    return (
      <div className="user-profile" >
        <h3>Add news</h3>
        <form className="new_message" onSubmit={this.updateNews} id="new_message" encType="multipart/form-data" action="/users/2/messages" acceptCharset="UTF-8" method="post">
          <input name="utf8" type="hidden" value="✓"/>
          <div id="news-text-filed">
            <textarea placeholder="Compose new messages..." name="message[content]" id="message_content" ></textarea>
          </div>
          <input type="file" name="message[picture]" id="message_picture" ref="Magick" /><br/>
          <input type="submit" name="commit" value="Post" className="btn btn-primary" data-disable-with="Post" />
        </form>
      </div>
    );
  }
});
