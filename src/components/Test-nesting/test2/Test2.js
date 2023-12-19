// // Create test2 component

// import './Test2.css'

// function Test2(){
//     //state
//     return(
//         <div className="test2-div">
//             <h1>Test2 Component</h1>
//         </div>
//     )
// }


function Test2(props){ //props is a single object // { x : 100}
    return (
        <div>
            <h1>Child</h1>
            <h2>{props.x}</h2>
        </div>
    )
}

export default Test2;