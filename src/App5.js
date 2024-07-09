import { useState } from "react"

export const Form3 = ()=>
{
    const [name,setName] = useState("");
    const [address, setAddress] = useState("");
    const [pinCode, setPinCode]= useState("");
    const SubmitData = (event)=>
    {
        console.log("NAme is " + name + " Address " + address
            + " pin code is " +  pinCode);
        
        event.preventDefault();

    }
    return(
        
            <>
            <form onSubmit={SubmitData}>
                <div>
                    <label> Enter Name </label>
                    <input type="text" name="name" value={name} 
                    onChange={(event)=> setName(event.target.value)}/>
                </div>

                <div>
                    <label> Enter address </label>
                    <input type="text" name="address" value={address} 
                    onChange={(event)=> setAddress(event.target.value)}/>
                </div>

                <div>
                    <label> Enter pinCode </label>
                    <input type="text" name="pinCode" value={pinCode} 
                    onChange={(event)=> setPinCode(event.target.value)}/>
                </div>
    <div>
        <button type="submit"> Submit Data </button>
    </div>
            </form>

            </>

        
    )
}