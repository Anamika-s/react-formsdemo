import  React, { Component } from "react";

export default class Form2 extends Component
{
    name = React.createRef();

    submitData = (event)=>
    {
        
        console.log(this.name.current.value);
        event.preventDefault();
    }
    render()
    {
        return(
            <>
            
            <form onSubmit={this.submitData}>
                      <div>
                    <label> Enter Name </label>
   <input type="text" name="name" ref={this.name} />
                </div>
        
        <div>
            <button type="submit"> Submit Data </button>
        </div>
            </form>
            </>
        )
    }
}