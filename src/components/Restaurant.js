import React, { Component } from "react";
import {listOfRestaurants} from "./places";


class Restaurant extends Component{
    constructor(props){
        super(props);
        const num = Math.floor((Math.random() * 17) + 1);
        this.state = {
            name: listOfRestaurants[num.toString()]["name"],
            type: listOfRestaurants[num.toString()]["type"],
            price: listOfRestaurants[num.toString()]["price"],
            rating: listOfRestaurants[num.toString()]["rating"],
        }

        this.select = this.select.bind(this);
    }

    select(){
        const num = Math.floor((Math.random() * 17) + 1);
        this.setState({
            name: listOfRestaurants[num.toString()]["name"],
            type: listOfRestaurants[num.toString()]["type"],
            price: listOfRestaurants[num.toString()]["price"],
            rating: listOfRestaurants[num.toString()]["rating"],
        })
    }

    render(){
        return(
            <div>
                <div className="suggestion">
                    <p className="name">You should go to <span className="specific">{this.state.name}</span>!</p>
                    <p className="type">{this.state.type}</p>
                    <p className="price">Pricing: {this.state.price}</p>
                    <p className="rating">{this.state.rating} / 5 on Google</p>
                </div>
                <button onClick={this.select}>Try something else!</button>
            </div>
        )
    }
}

export default Restaurant;