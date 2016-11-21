var Frends = React.createClass({
  render: function() {
    Frends = this.props.user_frends

    FrendsLength = this.props.user_frends.length;

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
