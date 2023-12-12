import "./App.css";
import img1 from "./images/pic-1.webp";

function App() {
  //state
  let a = 10;
  let personName = "Ravi";
  let student = {
    sno: 100,
    name: "bhanu",
  };

  let skills = ["js", "angular", "react", "node", "java", "Dotnet"];

  return (
    <div>
      <h1 className="text-danger display-1 bg-warning">Welcome to React</h1>
      <img
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      {/* Adding images */}
      <img src={img1} alt="" />
      <h5 style={{ backgroundColor: "red", color: "white" }}>Inline CSS</h5>
      <p>Value of a is {a}</p>
      <p>Name of person is : {personName}</p>
      <h2>Sno : {student.sno}</h2>
      <h2>Name : {student.name}</h2>
      {/* We can use for or some loops but they do not return anything, Here we need to return something */}
      {
        // skills.map(skill=><h2>{skill}</h2>) //you will get a warning
        skills.map((skill, index) => (
          <h2 key={index}>{skill}</h2>
        ))
      }
    </div>
  );
}

export default App;
