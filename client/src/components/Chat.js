import React ,{Component} from 'react';
import Grid from '@material-ui/core/Grid'
import {TextField,Card,Paper,Typography, GridList, GridListTile, ListItem,List, Icon, IconButton} from '@material-ui/core'
import Particles from 'react-particles-js'
import particles from './particlesjs-config'
import chatBackground from '../images/index.png'
import purple from '@material-ui/core/colors/purple'

export default class Chat extends Component {
    
    constructor(props){
        super(props)
        this.state={
            username:'',
            messages:[
                {username:'allexxis',id:null,content:'Hola amigos de todo el mundo'},
                {username:'lola',id:null,content:'Que poco de feos'}
            ]
        }
    }
    renderMessages=(mess)=>{
        return(
        <Paper  style={styles.messagePaper} >
            <Typography variant='subtitle1' color='secondary' styles={styles.messageTitle}>username</Typography>
            <Typography   noWrap type="body1" style={styles.messageText}>{mess}</Typography>
        </Paper>    
        )
    }
    render() {
        return (
                <Grid  style={styles.chatScreen} alignItems='center' container direction="row" spacing={8}>    
                    <Grid item wrap='nowrap'  container direction='column' lg={7}
                    style={styles.chatContainer}>
                        <Grid style={styles.chat}>
                            {this.renderMessages('asdasdasdsadasdadasdasdasdsaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddkljh')}
                            {this.renderMessages('asdkljh')}
                            {this.renderMessages('asdkljh')}
                            {this.renderMessages('asdkljh')}
                            {this.renderMessages('asdkljh')}
                            {this.renderMessages('asdkljh')}
                            {this.renderMessages('asdkljh')}
                            {this.renderMessages('asdkljh')}
                            {this.renderMessages('asdkljh')}
                        </Grid>
                        <Grid container direction='row' style={styles.messageInputContainer}>
                            <TextField  style={styles.messageInput}/>
                            <IconButton color='primary'
                            style={{width: '55px', height: '55px',marginLeft:20}}
                            onClick={()=>console.log('asdkjhgasdhajsdhgj')}>
                            <Icon>send</Icon>
                            </IconButton>
                        </Grid>           
                    </Grid>
                    <Grid  lg={5}>               
                    </Grid> 
                </Grid>
        )
    }
}

const styles = ({
    chat:{
        marginTop:40,
        marginLeft:40,
        borderRadius:3,
        padding:10,
        backgroundImage: `url(${chatBackground})`,
        height:500,
        overflow: 'scroll',
        overflowX: 'hidden',
        backgroundColor:'#e91e63',
    },
    chatScreen:{ 
        backgroundColor:'#FAFAFA',
        height:700,
        width:'100%',
        marginTop:10
    },
    chatContainer:{
        height:650,
    },
    messagePaper:{
        
        maxWidth:'100%',
        marginTop:10,
        padding:10,
        borderRadius:3,
        backgroundColor:'#FAFAFA',
        
    },
    messageTitle:{
        color:'#dd33fa'
    },
    messageText:{
        overflow: 'hidden',
        lineHeight: 'inherit'
        
    },
    messageInputContainer:{
        justifyContent:'center',
        marginLeft:40,
        marginTop:30,
        height:100,
    },
    messageInput:{
        
        width:'90%',
        height:30,
        borderBottomColor:'#dd33fa'
    },
    iconSend:{
        marginLeft:20
    }
})
