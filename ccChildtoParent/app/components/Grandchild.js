// Include React
var React = require("react");

// Create the Child Component
var Grandchild = React.createClass({
   

  render: function() {
    return (
      <div>
          
            <h3> Hola </h3>
      </div>

            
    );
  }
});

// Export the component back for use in other files
module.exports = Grandchild;