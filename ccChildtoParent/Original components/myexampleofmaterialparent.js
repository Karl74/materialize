// Include React
import React from "react"


import {Container, Row, Col} from "react-grid-system"

import {Card, CardHeader, CardTitle, CardTex} from 'material-ui/Card' 
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField';


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
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            color = "black"
          />

      <Card>    

            <h1>This is React </h1>  

      <div>   

      <h2> Controls here </h2>   
            <TextField
              hintText="Your User Name"
              floatingLabelText="User Name"
              floatingLabelFixed={true}
            />
            <br />
            <TextField
              hintText="Password "
              floatingLabelText="Password"
              type="password"
            />
            <br />   
      </div>  


       
            <div>
              <Child setParent={this.setParent} />
            </div>

            <div>
              <Grandchild setParent={this.setParent}/>
            </div>

            <div>
              <Ggchild setParent={this.setParent} />
            </div>
        </Card>    
        </Container>
       </MuiThemeProvider>
        

    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
