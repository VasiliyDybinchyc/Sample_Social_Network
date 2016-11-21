var PersonalInfo = React.createClass({
  render: function() {
    return (
    <div className='PersonalInfo'>
      <h2>{this.props.user.first_name} {this.props.user.last_name}, {this.props.user.email}</h2>
      <img src={this.props.user.avatar.url}></img>
      <section className='personal-info-filed'>
        <h3>My personal info</h3>
        <div id="personal-info-title">
          <p>phone_number</p>
          <p>favorite_book</p>
          <p>favorite_film</p>
        </div>
        <div id="personal-info">
          <p>{this.props.user.phone_number}</p>
          <p>{this.props.user.favorite_book}</p>
          <p>{this.props.user.favorite_film}</p>
        </div>
        <p>edit personal info work in process</p>
      </section>
    </div>
    );
  }
});
