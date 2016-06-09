var React = require('react');

var Profile = React.createClass({
  getInitialState: function(){
    return{
      notes: [],
      bio: {},
      repos: []
    }
  },
  render: function(
    return(
      <div className="row">
        <div className="col-md-4">
          User Profile Component
        </div>
        <div className="col-md-4">
          User Repos Component
        </div>
        <div className="col-md-4">
          User Notes Component
        </div>
      </div>
    );
  );
});

module.exports = Profile;
