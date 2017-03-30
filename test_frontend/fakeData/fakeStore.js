import thunk                from 'redux-thunk'
import configureMockStore   from 'redux-mock-store'

export const mockStore = configureMockStore([ thunk ]);

export const storeStateMockUserNotLogin = {
  userState:{
    authentication: false,
    currentUser: []
  },
  sessionState:{
    render: true
  }
};

export const storeStateMockUserLogin = {
  userState:{
    authentication: true,
    currentUser: {id: 1}
  },
  sessionState:{
    render: true
  }
};
