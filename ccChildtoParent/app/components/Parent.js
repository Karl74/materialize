// Include React
var React = require("react");

// Here we include all of the sub-components
var Child = require("./Child");
var Grandchild = require("./Grandchild");
var Ggchild = require("./Ggchild");

// Here we create our main component, Parent. It displays a click count and renders the Child
var Parent = React.createClass({

  render: function() {
    return (
      <div>
            <h1>This is React </h1>        
            <div>
              <Child setParent={this.setParent} />
            </div>

            <div>
              <Grandchild setParent={this.setParent}/>
            </div>

            <div>
              <Ggchild setParent={this.setParent} />
            </div>
            
        </div>
        

    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
