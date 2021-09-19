import React, { Component} from 'react'
import axios from 'axios';

//const apiUrl = `http://localhost:5000`;

export default class Fish extends Component {
    constructor() {
        super();
        this.state = {
            fish: 'Not yet gotten'
        };
    }

    //Alternatively use redux saga - https://www.youtube.com/watch?v=1K26DIKt3w8&list=RDCMUCoYzQqZNCRqqAomJwJ6yEdg&index=24
    handleButtonClick = () => {
        axios.get("/api/getFishName").then(response => {
            this.setState({
                fish: response.data
            });
        });
    };

    render () {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Get random fish name</button>
                <h1> Generate a fish project name: {this.state.fish}</h1>  
            </div>
        );
    }
}