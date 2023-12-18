// Create Test1 component

//connect css file to component
import './Test1.css'
import Test2 from "../test2/Test2"
function Test1(){
    //state

    return(
        <div className="test1-div">
            <h1>Test1 component</h1>
            {/* Nest test2 */}
            <Test2/>
        </div>
    );

}

export default Test1;