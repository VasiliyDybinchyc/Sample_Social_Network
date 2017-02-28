import React from 'react';

import    * as axiosGallerey  from '../../axios/axios-gallerey';

export default React.createClass({

  updateGalerey: function() {
    let userId = this.props.userId;
    console.log(this.refs.Magick.files[0])
    setTimeout(function(){axiosGallerey.getGallerey(userId)}, 1000);
  },


  render: function() {
    return (
      <div className="user-profile" >
        <form className="new_gallery" onSubmit={this.updateGalerey} id="new_gallery" encType="multipart/form-data" action="/users/2/galleries" acceptCharset="UTF-8" method="post">
          <input name="utf8" type="hidden" value="✓"/>

          <input type="file" name="gallery[picture]" id="gallery_picture" ref="Magick" /><br/>
          <input type="submit" name="commit" value="Post" className="btn btn-primary" data-disable-with="Post" />
        </form>
      </div>
    );
  }

});
