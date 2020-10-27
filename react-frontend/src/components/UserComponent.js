import React from 'react';
import UserService from '../services/UserService';
import axios from 'axios'
import 'core-js'

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        
    }
   

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }
    


    
    render (){
        return (
            <div>
                <h1 className = "text-center"> Course List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Course ID</td>
                            <td> Course Name</td>
                            
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                    
                                     <td> {user.id}</td>   
                                     <td> {user.courseList}</td>   
                                       
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }


    

   

}

export default UserComponent