import   React            from 'react';
import { connect }        from 'react-redux';
import { Link }           from 'react-router';
import   * as axiosUser   from '../../axios/axios-user';
import   AllUserViews     from '../views/all_user';
import   NProgress        from 'react-nprogress';

import { checkReadyToRender }   from '../../helper/helperFrontend';

const AllUser = React.createClass({

  componentWillMount: function() {
    axiosUser.getUsers()
    NProgress.start();
  },

  componentDidMount: function() {
    NProgress.done()
  },

  render: function() {
    return(
      <div>
        {this.props.render &&
          <div className="All-user">
            <AllUserViews list={this.props.users} />
          </div>
        }
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    users: store.userState.users,
    render: store.globalState.render = checkReadyToRender(store.userState.users)
  };
};

export default connect(mapStateToProps)(AllUser);
