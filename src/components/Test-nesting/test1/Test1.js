// // Create Test1 component

// //connect css file to component
// import "./Test1.css";
// import Test2 from "../test2/Test2";
// function Test1() {
//   //state

//   return (
//     <div className="test1-div">
//       <h1>Test1 component</h1>
//       {/* Nest test2 */}
//       <Test2 />
//     </div>
//   );
// }

import Test2 from "../test2/Test2";
import { useState } from "react";

function Test1() {
  // state
  let [counter, setCounter] = useState(100);
  let [user, setUser] = useState({ id: 1, name: "ravi" });
  // we want to convert state of parent to child(transfering)

  return (
    <div className="bg-warning">
      <h1>Parent</h1>
      {/* Nest test2 */}
      <Test2 x={counter} /> {/* x is the attribute*/}
    </div>
  );
}

export default Test1;
