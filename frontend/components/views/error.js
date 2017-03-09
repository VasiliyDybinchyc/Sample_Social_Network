import React from 'react';

import { Alert }         from 'reactstrap';

export default React.createClass({

  render: function() {
    var erorItems = this.props.error.map( function(error_item, index) {
        return (
          <div key={index}>
            <strong>{error_item}</strong>
          </div>
        );
      });
      return (
        <div className="Error">
          <Alert color="danger">{erorItems}</Alert>
        </div>
      );
  }
});
