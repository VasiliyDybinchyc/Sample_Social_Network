var SignUp = React.createClass({

  render: function() {
    return(
      <div className="form">

        <h1>Sign up </h1>

        <form className="new_user" id="new_user" enctype="multipart/form-data" action="/users" accept-charset="UTF-8" method="post">

          <label for="user_first_name">First name</label><br/>
          <input className="filed_form_user" type="text" name="user[first_name]" id="user_first_name"/><br/>

          <label for="user_last_name">Last name</label><br/>
          <input className="filed_form_user" type="text" name="user[last_name]" id="user_last_name"/><br/>

          <label for="user_email">Email</label><br/>
          <input className="filed_form_user" type="email" name="user[email]" id="user_email"/><br/>

          <label for="user_password">Password</label><br/>
          <input className="filed_form_user" type="password" name="user[password]" id="user_password"/><br/>

          <label for="user_password_confirmation">Password confirmation</label><br/>
          <input className="filed_form_user" type="password" name="user[password_confirmation]" id="user_password_confirmation"/><br/>

          <label for="user_avatar">Avatar work in progress</label><br/>
          <input type="file" name="user[avatar]" id="user_avatar"/><br/>

          <button name="button" type="submit" id="button-form">
            <span>Create me!</span>
            </button>
        </form>
      </div>
    );
  }
});
