// Include React
var React = require("react");

// Create the Child Component
var Grandchild = React.createClass({

  getInitialState: function(){
    return {
      counter: 0
    };
  },
  
  handler: function(){
    var newCounter = this.state.counter + 1;
    this.setState({counter: newCounter});
    this.props.setParent(newCounter);
  },

  render: function() {
    return (
      <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"> GrandChild </h3>
          </div>

            <div className="panel-body">
              <p>This GrandChild is a child</p>
              <button className="btn btn-primary" onClick={this.handler}> add </button>
            </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Grandchild;