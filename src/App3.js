// Controlled Component

import { Component } from "react";

export default  class Form1 extends Component
{
    state=
    {
        name : "",
        address:"",
        pincode:"",
        phoneNo:""
    }
    handleChange=(event)=>
     {
    console.log(event.target.name)
    //     console.log(event)
    //     console.log(event.target)
    // console.log(event.target.value)
    this.setState({[event.target.name]:event.target.value})
        
     
        // console.log("data is changed")
    }
    submitData =(event)=>
    {
        console.log("Form is submited");
        console.log(this.state)
        var emp =  JSON.stringify(this.state);
        console.log(emp)
        event.preventDefault();
    }
    render()
    {
        return(
            <>
            <form  onSubmit={this.submitData}> 
                <div>
                    <label> Enter Name </label>
   <input type="text" name="name" value={this.state.name}
   onChange={this.handleChange}/>
                </div>
                <div>
                    <label> Enter Address </label>
   <input type="text" name="address" value={this.state.address}
   onChange={this.handleChange}/>
                </div>
                <div>
                    <label> Enter pincode </label>
   <input type="text" name="pincode" value={this.state.pincode}
   onChange={this.handleChange}/>
                </div>
                <div>
                    <label> Enter phoneNo </label>
   <input type="text" name="phoneNo" value={this.state.phoneNo}
   onChange={this.handleChange}/>
                </div>
<div>
    <button type="submit"> Submit Data  </button>
</div>
            </form>
            </>
        )
    }
}