import React, { Component } from "react";
import {listOfRestaurants} from "./places";


class Restaurant extends Component{
    constructor(props){
        super(props);
        const num = Math.floor((Math.random() * 20) + 1);
        this.state = {
            name: listOfRestaurants[num.toString()]["name"],
            type: listOfRestaurants[num.toString()]["type"],
            price: listOfRestaurants[num.toString()]["price"],
            rating: listOfRestaurants[num.toString()]["rating"],
        }

        this.select = this.select.bind(this);
    }

    select(){
        const num = Math.floor((Math.random() * 20) + 1);
        this.setState({
            name: listOfRestaurants[num.toString()]["name"],
            type: listOfRestaurants[num.toString()]["type"],
            price: listOfRestaurants[num.toString()]["price"],
            rating: listOfRestaurants[num.toString()]["rating"],
        })
    }

    colorPrice(){
        if (this.state.price === "low"){
            return <p className="price">Pricing: <span style={{color:"green"}}>{this.state.price}</span></p>
        }
        else if (this.state.price === "medium"){
            return <p className="price" >Pricing: <span style={{color:"#FFD700"}}>{this.state.price}</span></p>
        }
        return <p className="price" >Pricing: <span style={{color:"red"}}>{this.state.price}</span></p>
    }

    colorRating(){
        if (this.state.rating >= 4){
            return <p className="rating"><span style={{color:"green"}}>{this.state.rating} / 5</span> on Google</p>
        }
        else if (this.state.rating >= 2.6){
            return <p className="rating"><span style={{color:"#FFD700"}}>{this.state.rating} / 5</span> on Google</p>
        }
        return <p className="rating"><span style={{color:"red"}}>{this.state.rating} / 5</span> on Google</p>
    }

    render(){
        return(
            <div>
                <div className="suggestion">
                    <p className="name">You should go to <span className="specific">{this.state.name}</span>!</p>
                    <p className="type" >{this.state.type}</p>
                    {this.colorPrice()}
                    {this.colorRating()}
                </div>
                <button onClick={this.select}>Try something else!</button>
            </div>
        )
    }
}

export default Restaurant;