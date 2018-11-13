import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Chat from './components/Chat'
import { MuiThemeProvider ,createMuiTheme} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette:{
      primary:{
          main:'#e91e63'
      },
      secondary:{
          main:'#dd33fa'
      }
  }
})
class App extends Component {
    
  render() {

    return (
          <div className={styles.root}>
          <MuiThemeProvider theme={theme}>
          <CssBaseline />
            <NavBar/>
            <Chat/>
          </MuiThemeProvider>
            
          </div>
    );
  }
}
const styles = ({
    root:{
        backgroundColor:'#EEEEEE',

    }
})    


export default App;
