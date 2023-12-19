import { useState } from "react"; //these are named exports so => {useState}

function StateDemo() {
  //state

  // number state
  // let counter = 1; //wrong
  let [counter, setCounter] = useState(1); //counter, setCounter are variables

  // string state
  let [username, setUsername] = useState("Ravi");

  // Here's the explanation for useState()
  // we use it like [currentState, function to change current state] = useState(initial state)
  // Examples: [user,setUser] = useState({})
  //           [counter, setCounter] = useState(())
  //           [marks, setMarks] = useState([])

  //CHANGE STATE OF OBJECT
  let [person, setPerson] = useState({ pid: 100, name: "ravi", age: 20 });
  function IncrementCounter() {
    // counter = counter+1; //this wont change the value. i.e this is wrong way to write states
    setCounter(counter + 1); //right way
    console.log(counter);
    //p tag must be re-rendered to overcome this, How? ==> useState hook
    // Never modify state using this normal approach
  }

  //array state
  let [skills, setSkills] = useState(['js', 'react', 'angular'])

  function decrementCounter() {
    setCounter(counter - 1);
  }
  function changeName() {
    setUsername("Teja");
  }
  function changePerson() {
    setPerson({ ...person, name: "bhanu", age: 25 }); //"..." spread operator is used to create a copy of the object
    // we can directly change objects by making a copy because objects are mutable, whereas primitives are immutable
  }
  function DelAge() {
    // setPerson({...person,age :""}) //this is also working - I did
    //create copy of person -> sir's approach
    let copyPerson = { ...person };
    // remove age from copy
    delete copyPerson.age;
    // replace person with copy
    setPerson(copyPerson);
  }
  function AddSkill(){
    setSkills(['java',...skills])
    // we did not use unshift or push because they change the original array
  }

  return (
    <div className="text-center">
      <h1 className="text-info">State Demo</h1>
      <p className="display-3 fs-1">{counter}</p>
      <button className="btn btn-success" onClick={IncrementCounter}>
        Increment
      </button>

      <button className="btn btn-danger" onClick={decrementCounter}>
        Decrement
      </button>

      <p className="lead fs-1">{username}</p>
      <button className="btn btn-warning" onClick={changeName}>
        Change name
      </button>

      <h1 className="text-primary display-2">{person.pid}</h1>
      <h1 className="text-primary display-2">{person.name}</h1>
      <h1 className="text-primary display-2">{person.age}</h1>
      <button className="btn btn-primary" onClick={changePerson}>
        Change person data
      </button>
      <button className="btn btn-secondary" onClick={DelAge}>
        Delete age
      </button>

      {/* render skills array */}
      {
        skills.map((skill, index) => <h2 className="text-danger" key={skill}>{skill}</h2>)
      }
      <button className="btn btn-success" onClick={AddSkill}>Add "java" skill</button>
    </div>
  );
}
export default StateDemo;
