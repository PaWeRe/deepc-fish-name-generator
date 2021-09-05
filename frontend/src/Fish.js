import React, { Component} from 'react'
import axios from 'axios';

export default class Fish extends Component {
    constructor() {
        super();
        this.state = {
            fish: 'Not yet gotten'
        };
    }

    //Not proper way of making api calls to backend - see https://www.youtube.com/watch?v=kJA9rDX7azM&list=RDCMUCoYzQqZNCRqqAomJwJ6yEdg&start_radio=1&rv=kJA9rDX7azM&t=562
    handleButtonClick = () => {
        axios.get("/getFishName").then(response => {
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