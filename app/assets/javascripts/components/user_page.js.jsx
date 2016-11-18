
var PersonalInfo = React.createClass({
  render: function() {
    return (
    <div className='PersonalInfo'>
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
        
      </section>
    </div>
    );
  }
});

var Frends = React.createClass({
  render: function() {
    Frends = this.props.user_frends

    Frends = shuffle(Frends)

    FrendsLength = this.props.user_frends.length;

    function shuffle(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    UserFrendMap = Frends.slice(0, 10).map( function(user_frends, index) {
        return (
        <a href={"/users/" + user_frends.id} key={index} className="avatar-frend" >
          <img className="avatar-frend" src={user_frends.avatar.url} width="35" height="35"></img>
        </a>
        );
      });

    return (
      <div>
        <div className='Frend'>
          <section id="frends-filed">
            <h3 id="title-frends-filed">My frend</h3>
            { FrendsLength > 0 ?
            <div id="frends_avatars">
              {UserFrendMap}
            </div>
            : 'You not have frend' }
          </section>
        </div>
      </div>
    );
  }
});

var UserPage = React.createClass({
  render: function() {

    return (
      <div className='UserPage'>
        <PersonalInfo user={this.props.user} />
        <Frends user_frends={this.props.user_frends} />
        <Feed feed_items={this.props.feed_items} user_frends={this.props.user_frends} />
      </div>
    );
  }
});
