import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

class Profile extends Component{
    state ={
     users:[]
    }
    async componentDidMount(){
        this.getUsers();
    }
    getUsers = async ()=>{
        const res = await axios.get('http://localhost:5000/api/users')
        this.setState({
            users: res.data
        });
    }
    render(){
        console.log(this.state.users)
        const data = this.state.users
        const user = data.filter((data)=> data._id == "5d78b5e11dc9696cde9b851d" )
        console.log("user",user)
        const display = user[0]
        //display = JSON.parse(display)
        if(this.state.users.length == 0){
            return null
        }
        console.log("display", display._id)
        return(
            <div>
                
                <div>
                <img src={display.avatarURL} style={{borderRadius:"50%", width:"200px"}}/>
                <p>Name: "First + Lastname Of user"</p>
                <p>Bio: {display.bio}</p>
                <p>Job: {display.current_company}</p>
                <p>Employment Status : {display.employment_status}</p>
                <a href={display.github}>Github</a>
                <a href={display.twitter}>Twitter</a>
                <a href={display.linkedIn}>LinkedIn</a>
                </div>
                <Link to={"/edit/" + display._id} className="btn btn-secondary">
                                        Edit Profile
                                    </Link>
            </div>
        )
    }
}

export default Profile;