import './App.css'

function App() {

  //state
  let a = 10;
  let personName = "Ravi"
  let student = {
    sno:100,
    name: "bhanu"
  }

  let skills = ['js', 'angular', 'react', 'node','java', 'Dotnet']

  return (
    <div>
      <h1 className='text-danger display-1 bg-warning'>Welcome to React</h1>
      <h5 style={{backgroundColor: 'red',color:'white'}}>Inline CSS</h5>
      <p>Value of a is {a}</p>
      <p>Name of person is : {personName}</p>
      <h2>Sno : {student.sno}</h2>
      <h2>Name : {student.name}</h2>
      {/* We can use for or some loops but they do not return anything, Here we need to return something */}
      {
        // skills.map(skill=><h2>{skill}</h2>) //you will get a warning
        skills.map((skill,index)=> <h2 key = {index}>{skill}</h2>)
      }
    </div>
  );
}

export default App;
