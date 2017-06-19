// Include React
var React = require("react");

// Create the Child Component
var Child = React.createClass({
  
  getInitialState: function(){
    return {
      counter: 0
    };
  },
 
  handlerClick: function(){
    var newCounter = this.state.counter + 1;
    this.setState({
      counter: newCounter
    });
    this.props.setParent(newCounter);
  }, 

  render: function() {
    return (
      <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"> Child </h3>
          </div>

            <div className="panel-body">
              <p>This Child has some stuff</p>
              <button className="btn btn-primary" onClick={this.handlerClick}> add </button>
            </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child;
