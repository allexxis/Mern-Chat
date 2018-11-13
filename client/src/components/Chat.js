import React ,{Component} from 'react';
import Grid from '@material-ui/core/Grid'
import {TextField,Card,Paper,Typography, GridList, GridListTile, ListItem,List, Icon, IconButton} from '@material-ui/core'
import chatBackground from '../images/index.png'
import purple from '@material-ui/core/colors/purple'
import * as ReactDOM from 'react-dom';

export default class Chat extends Component {
    
    constructor(props){
        super(props)
        this.state={
            key:0,
            textfield:'',
            username:'hiram',
            messages:[
                
            ],

        }
        
    }
    renderMessages=(user,message,key)=>{
        return(
        <Paper  style={styles.messagePaper} key={key}>
            <Typography variant='subtitle1' color='secondary' styles={styles.messageTitle}>{user}</Typography>
            <Typography   noWrap type="body1" style={styles.messageText}>{message}</Typography>
        </Paper>    
        )
    }
    handleChangeInput=(input)=>{
        this.setState({
            textfield:input
        })
    }
    
    handleSend=()=>{
        let newMessage={
            username:this.state.username,
            id:this.state.key+1,
            content:this.state.textfield
        }
        let newList = [...this.state.messages]
        newList.unshift(newMessage)
        window.alert(newMessage.id)
       this.setState({
           messages:newList,
           key:this.state.key+1
       })
       const chatlist = this.refs.chat;
       const scrollHeight = chatlist.scrollHeight;
       const clientHeight = chatlist.clientHeight;
       const maxScrollTop = scrollHeight - clientHeight;
       ReactDOM.findDOMNode(chatlist).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
       this.setState({textfield:''})
       
    }
    render() {
        return (
                <Grid  style={styles.chatScreen} alignItems='center' container direction="row" spacing={8}>    
                    <Grid item wrap='nowrap'  container direction='column' lg={7}
                    style={styles.chatContainer}>
                        <Grid ref='chat' style={styles.chat}>
                            {
                                this.state.messages.map((message)=>{
                                    return(
                                        <Paper  style={styles.messagePaper} key={message.id}>
                                            <Typography variant='subtitle1' color='secondary' styles={styles.messageTitle}>{message.username}</Typography>
                                            <Typography   noWrap type="body1" style={styles.messageText}>{message.content}</Typography>
                                        </Paper> 
                                    )
                                })
                            }
                        </Grid>
                        <Grid container direction='row' style={styles.messageInputContainer}>
                            <TextField  value={this.state.textfield} onChange={e => this.handleChangeInput(e.target.value)} ref='texfield' style={styles.messageInput}/>
                            <IconButton color='primary'
                            style={{width: '55px', height: '55px',marginLeft:10}}
                            onClick={()=>this.handleSend()}>
                            <Icon>send</Icon>
                            </IconButton>
                        </Grid>           
                    </Grid>
                    <Grid container direction='column' lg={5} style={styles.optionsContainer}>
                        <Typography vartiant='title' style={style.optionsTitle}>To start sending messages select an username</Typography>               
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
    },
    optionsContainer:{
        marginTop:10,
        height:700,
        backgroundColor:'#FAFAFA',
        justifyContent:'flex-start'
    },
    optionsTitle:{
        marginTop:40,
        marginLeft:40,
    }
})
