import { useState } from "react"; //these are named exports so => {useState}

function StateDemo(){
    
    //state
    // let counter = 1; //wrong 
    let [counter, setCounter] = useState(1)  //counter, setCounter are variables

    let [username, setUsername] = useState('Ravi')

    function IncrementCounter(){
        // counter = counter+1; //this wont change the value. i.e this is wrong way to write states
        setCounter(counter+1) //right way
        console.log(counter);
        //p tag must be re-rendered to overcome this, How? ==> useState hook
        // Never modify state using this normal approach
    }
    function decrementCounter(){
        setCounter(counter-1)
    }
    function changeName(){
        setUsername('Teja')
    }
    return (
        <div className="text-center">
            <h1 className="text-info">State Demo</h1>
            <p className="display-3 fs-1">{counter}</p>
            <button className="btn btn-success" onClick={IncrementCounter}>Increment</button>

            <button className="btn btn-danger" onClick={decrementCounter}>Decrement</button>

            <p className="lead fs-1">{username}</p>
            <button className="btn btn-warning" onClick={changeName}>Change name</button>
        </div>
    )
}
export default StateDemo;