import { useState } from "react";
const App2= ()=>
{
    const changeName=()=>
    {
        setName("new name");
    }
   const [name, setName] = useState("");
    // [variable, functiom that will be used to update variable's value]
    // = useState(initial value of the variable)
    return(
        <>
        <h1> Hello {name} </h1>
        <button onClick={changeName}> Change Name </button>
        <button onClick={()=> setName("lllllllppppppp")}> Change Name here  </button>
       
        </>
    )
}
export default App2;