import React from 'react';

import {  Label,
          Row,
          Col }         from 'reactstrap';

export default React.createClass({

  render: function() {

      var erorItems = this.props.error.map( function(error_item, index) {
          return (
            <div key={index}>
              <p>{error_item}</p>
            </div>
          );
        });


      return (
        <div className="Error">
          {erorItems}
        </div>
      );
  }
});
