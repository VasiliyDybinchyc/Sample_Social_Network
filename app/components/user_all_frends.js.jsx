var AllFrend = React.createClass({

  render: function() {
    AllFrends = this.props.user_frends

    AllFrendsLength = this.props.user_frends.length;

    UserAllFrendsMap = AllFrends.map( function(all_user_frends, index) {
        return (
        <div key={index} id={"all-frend-user-"+all_user_frends.id}>
          <p>{all_user_frends.first_name} {all_user_frends.last_name}</p>
          <a href={"/users/" + all_user_frends.id} className="avatar-frend" >
            <img className="avatar-frend" src={all_user_frends.avatar.url}></img>
          </a>
        </div>
        );
      });

    return (
      <div>
        <div className='Feed'>
          <section>
            <h2>All my frend</h2>
            { AllFrendsLength > 0 ?
            <div>
              {UserAllFrendsMap}
            </div>
            : 'You not have frend' }
          </section>
        </div>
      </div>
    );
  }
})
