import React ,{Component} from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'

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
                
            </Grid>
        )
    }
}
