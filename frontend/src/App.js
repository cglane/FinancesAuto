

import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {AuthenticatePage,
        UploadPage,
        DisplayTable,
        DisplayOptions
        } from './containers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const createReactClass = require('create-react-class');

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};



const App = createReactClass({
 getInitialState() {
        return {
            value: 'Authenticate',
            userId: '2',
            tableKeys: ['date', 'amount', 'location', 'description', 'source', 'notes'],
            tableRows: [['2017-10-10', '-10.2', 'Walmart', 'Shoes', 'Salary', '']]
        };
    },
    handleChange(value, tableKeys, tableRows, userId) {
      // Have to set the table values before switching the tab
      if (tableRows && tableKeys[0]){
        this.setState({
          tableKeys: tableKeys,
          tableRows: tableRows
      });
      }
      if (value) {
        this.setState({
          value: value,
      });
    }
         if (userId) {
          this.setState({
            userId: userId,
          })
      }
    },
render() {
return (
    <MuiThemeProvider>
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
        <Tab label="Authenticate"  value="Authenticate" >
      <div>
        <AuthenticatePage handleChange={this.handleChange}/>
      </div>
    </Tab>
    <Tab label="Upload"  value="Upload">
        <UploadPage userId={this.state.userId} handleChange={this.handleChange}/>
    </Tab>
     <Tab label="Results"  value="Results">
        <DisplayTable key={this.state.value} tablerows={this.state.tableRows} tablekeys={this.state.tableKeys} handleChange={this.handleChange}/>
    </Tab>
     <Tab label="Actions"  value="Actions">
        <DisplayOptions userId={this.state.userId} key={this.state.value} tablerows={this.state.tableRows} tablekeys={this.state.tableKeys} handleChange={this.handleChange}/>
    </Tab>
  </Tabs>
      </MuiThemeProvider>

    )
}
})


export default App