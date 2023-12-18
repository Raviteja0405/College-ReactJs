// lect - 30
// import "./App.css";
// import img1 from "./images/pic-1.webp";

// function App() { //app is a react-component with same file name.
//   //state
//   let a = 10;
//   let personName = "Ravi";
//   let student = {
//     sno: 100,
//     name: "bhanu",
//   };

//   let skills = ["js", "angular", "react", "node", "java", "Dotnet"];

//   return ( //component can retrun only one element
//     <div>
//       <h1 className="text-danger display-1 bg-warning">Welcome to React</h1>
//       <img
//         src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt=""
//       />
//       {/* Adding images */}
//       <img src={img1} alt="" />
//       <h5 style={{ backgroundColor: "red", color: "white" }}>Inline CSS</h5>
//       <p>Value of a is {a}</p>
//       <p>Name of person is : {personName}</p>
//       <h2>Sno : {student.sno}</h2>
//       <h2>Name : {student.name}</h2>
//       {/* We can use for or some loops but they do not return anything, Here we need to return something */}
//       {
//         // skills.map(skill=><h2>{skill}</h2>) //you will get a warning
//         skills.map((skill, index) => (
//           <h2 key={index}>{skill}</h2>
//         ))
//       }
//     </div>
//   );
// }


// Second Time 
// import "./App.css";
// import Test1 from "./components/Test-nesting/test1/Test1";
// // import Test2 from "./components/test2/Test2"
// function App() {
  //state
  // let emps = [
  //   { eno: 100, name: "ravi", age: 21, city: "hyd" },
  //   { eno: 200, name: "bhanu", age: 31, city: "chennai" },
  //   { eno: 300, name: "manasa", age: 41, city: "bangalore" },
  //   { eno: 400, name: "vikas", age: 51, city: "pune" },
  //   { eno: 500, name: "suresh", age: 61, city: "Delhi" },
  // ];

  // request handler function
  // function test(){
  //   console.log("test function called");
  // }

  // function testAgain(a){
  //   console.log("test again called and a is",a);
  // }
  // return (
  //   <div>
  //     <h1 className="text-info display-1 bg-light">Welcome to React</h1>
  //     <div className="container">
      //   {/* Table of emps */}
      //   {/* <table className="table text-center">
      //   <thead>
      //     <tr>
      //       <th>Eno</th>
      //       <th>Name</th>
      //       <th>Age</th>
      //       <th>City</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {/* inside jsx if you want to write js, you need to write it in pair of braces  */}
      //   {/* {
      //       emps.map(empObj => <tr key= {empObj.eno}>
      //         <td>{empObj.eno}</td>
      //         <td>{empObj.name}</td>
      //         <td>{empObj.age}</td>
      //         <td>{empObj.city}</td>
      //       </tr>)
      //     }
      //   </tbody>
      // </table> */}
      //   {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      //     {emps.map((empObj) => (
      //       <div className="col" key={empObj.eno}>
      //         <div className="card">
      //           <div className="card-body">
      //             <h3>{empObj.eno}</h3>
      //             <p className="lead">{empObj.name}</p>
      //             <p className="lead">{empObj.age}</p>
      //             <p className="lead">{empObj.city}</p>
      //           </div>
      //         </div>
      //       </div>
      //     ))}
      //   </div> */}
      //   {/* Event Handling */}
      //   {/* <button className="btn btn-success" onClick={test}>Click on me</button> un parameterised */}
      //   {/* <button className="btn btn-warning" onClick={()=>testAgain(100)}>Click on me</button> parameterised, we should'nt call it directly */}
      //   {/* we use "on" before the event, and inside {} these we should have a request handler function which is declared bofore return word i.e in states...(ig)*/}
      //   {/* test is the name of the function we should just give name not ()*/}
      //   {/* Component nesting */}
      //   {/* first we are making test1 and test2 as children of root element, to make a children we import */}
      //   // <Test1 />{" "}
      //   {/* we can also write opening and closing tags  if we want something inside it*/}
      //   {/* <Test2></Test2> */}
      //   {/* Now making test1 as root chlld and test2 as child of test1 */}
//       </div>
//     </div>
//   );
// }


// Third time
import "./App.css";
import StateDemo from "./components/states/state-demo/StateDemo"
function App(){
  return <div className="app">
    {/* nest stateDemo */}
    <StateDemo/>
  </div>
}

export default App;
