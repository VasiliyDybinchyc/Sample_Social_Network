import   React            from 'react';
import { connect }        from 'react-redux';
import { Link }           from 'react-router';
import   * as axiosUser   from '../../axios/axios-user';
import   AllUserViews   from '../views/all_user';

const AllUser = React.createClass({

  componentDidMount: function() {
    axiosUser.getUsers()
  },

  render: function() {
    return(
      <div className="All-user">
        <h1>All User</h1>
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
