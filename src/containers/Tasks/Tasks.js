import React, { Component } from 'react';
import Cards from "../../components/Cards/Cards";
import axios from 'axios';

class Tasks extends Component{

    state={
        taskData: []
    };

    componentDidMount(){
        axios.get("http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks",
        {headers:{'Authorization' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzg1OTAsImV4cCI6MTU4Mjk4MzM5MH0.JowfH0YScSyVqdkT-mkTH4XvV6su6hErSJBjbAbRJk0"}})
        .then(res =>{
            this.setState({
                taskData: res.data.results
            });
        })
        .catch(error => {
            console.log(error)
        });
        
    }
    render(){
        const cardsView = (this.state.taskData.length ?
        <Cards data={this.state.taskData}/>
                :
                null);        
        return(
            <div>
              {cardsView}
            </div>
        );
    }
}

export default Tasks;