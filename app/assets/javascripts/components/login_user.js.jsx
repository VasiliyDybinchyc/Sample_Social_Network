var LogIn = React.createClass({

  render: function() {
    return(
      <div className="form">
        <h1>Log in</h1>

        <form action="/login" accept-charset="UTF-8" method="post">

          <label for="session_email">Email</label><br/>
          <input className="filed_form_user" type="email" name="session[email]" id="session_email"/><br/>

          <label for="session_password">Password</label><br/>
          <input className="filed_form_user" type="password" name="session[password]" id="session_password"/><br/>

          <label className="checkbox inline" for="session_remember_me"><br/>
                <input name="session[remember_me]" type="hidden" value="0"/>
                <input type="checkbox" value="1" name="session[remember_me]" id="session_remember_me"/>
                <span>Remember me on this computer</span>
          </label><br/>

          <button name="button" type="submit" id="button-form">
            <span>Log in</span>
          </button>
        </form>
      </div>
    );
  }
});
