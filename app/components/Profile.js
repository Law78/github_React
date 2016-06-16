var React = require('react');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return{
      notes: [],
      bio: {
        name: 'defaultName'
      },
      repos: ['a','b','c']
    }
  },
  componentDidMount: function(){
    this.firebaseRef = new Firebase('https://buildfirstappreactjs.firebaseio.com/');
    var childRef = this.firebaseRef.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  handleAddNote: function(newNote){
    // Aggiorno il database con la nuova nota
    this.firebaseRef.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },
  render: function(){
    return(
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote}/>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
