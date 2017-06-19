// Include React
var React = require("react");

// Here we include all of the sub-components
var Child = require("./Child");
var Grandchild = require("./Grandchild");
var Ggchild = require("./Ggchild");

// Here we create our main component, Parent. It displays a click count and renders the Child
var Parent = React.createClass({
  getInitialState: function(){
    return {
      number: 0
    };
  },

  setParent: function(newNumber){
    this.setState({
      number: newNumber
    });
  },

  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
            <h1>My Three children components </h1>
            <h2>Counter: {this.state.number}</h2>
        </div> 

        <div className="row">
            
            <div className="col-lg-4">
              <Child setParent={this.setParent} />
            </div>

            <div className="col-lg-4">
              <Grandchild setParent={this.setParent}/>
            </div>

            <div className="col-lg-4">
              <Ggchild setParent={this.setParent} />
            </div>
            
        </div>
        
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
