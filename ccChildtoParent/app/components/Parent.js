// Include React
import React from "react"


import {Container, Row, Col} from "react-grid-system"




// Here we include all of the sub-components
var Child = require("./Child");
var Grandchild = require("./Grandchild");
var Ggchild = require("./Ggchild");


import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import injectTapEventPlugin from "react-tap-event-plugin"

injectTapEventPlugin();

// Here we create our main component, Parent. It displays a click count and renders the Child
var Parent = React.createClass({

  render: function() {
    return (
     <MuiThemeProvider>
      <Container>
          

       
            <div>
              <Child setParent={this.setParent} />
            </div>

            <div>
              <Grandchild setParent={this.setParent}/>
            </div>

            <div>
              <Ggchild setParent={this.setParent} />
            </div>
          
        </Container>
       </MuiThemeProvider>
        

    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
