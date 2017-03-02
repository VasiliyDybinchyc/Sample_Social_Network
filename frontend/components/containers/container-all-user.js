import   React            from 'react';
import { connect }        from 'react-redux';
import { Link }           from 'react-router';
import   * as axiosUser   from '../../axios/axios-user';
import   AllUserViews   from '../views/all_user';

const AllUser = React.createClass({

  componentWillMount: function() {
    axiosUser.getUsers()
  },

  render: function() {
    return(
      <div className="All-user">
        <AllUserViews list={this.props.users} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(AllUser);
