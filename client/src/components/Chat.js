import React ,{Component} from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    render() {
        return (
            <Grid className='chat-container' container direction="row">
                <Paper elevation={1}>
                    <Typography variant="h5" component="h3">
                        {this.state.messages[0].username}
                    </Typography>
                    <Typography component="p">
                        {this.state.messages[0].content}
                    </Typography>
                </Paper>
            </Grid>
        )
    }
}
