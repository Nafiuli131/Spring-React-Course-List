import React, {Component} from 'react'
import UserService from '../services/UserService';
import axios from 'axios'
import 'core-js'

class PostComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:8080/list')
            .then(
                response => {
                    this.setState({ users: response.data })
                }
            )
    }
    handleChange(field, value) {
        this.setState({[field]: value});
      }
      signupClicked(){
          axios.post('http://localhost:8080/list',this.state)
      }
    
    render() {
        return (
            <>
                <div className="">
                    
                    <div className="parent">
                        <h1>Add a new course</h1><br></br>
                        <div className="container">
                        
                        <select onChange={event => this.handleChange('id', event.target.value)} value={this.state.id}>
                        
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}> 
                                     <td> {user.id}</td>   
                                     <td> {user.courseList}</td> 
                                       
                                </tr>
                            )
                        }
                        </select>
                    </div>
                        
                        <input className="input-box" type="text" placeholder="Course List" onChange={event => this.handleChange('courseList', event.target.value)} required /><br></br>
                        
                        <button className="btn btn-success" onClick={() => this.signupClicked()}>Submit</button><br></br>
                        
                       <h2> <a href="UserComponent.js">See the updated Course List</a></h2>
                        
                    </div>
                </div>
        </>
        )
    }
}
export default PostComponent