import { Component } from "react";
export default class App1 extends Component
{
    state=
    {
        name:""
    };
    changeName=()=>
    {
        this.setState({name:"new name"});
    }
    render()
    {
        return(
            <>
            <h1> {this.state.name} </h1>
            <button onClick={this.changeName}> Change Name </button>
            </>
        )
    }
}