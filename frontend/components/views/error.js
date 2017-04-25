import React from 'react';

import { Alert }         from 'reactstrap';

export default React.createClass({

  componentWillMount() {
    this.renderError(this.props.error)
  },

  componentWillReceiveProps(nextProps) {
    this.renderError(nextProps.error)
  },

  renderError(error) {
    this.erorItems = error.map( function(error_item, index) {
      return (
        <div key={index}>
          <strong>{error_item}</strong>
        </div>
      );
    });
  },

  render: function() {
      return (
        <div className="Error">
          <Alert color="danger">{this.erorItems}</Alert>
        </div>
      );
  }
});
