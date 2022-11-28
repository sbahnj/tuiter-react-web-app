import Labs from "./labs/a6";
import HelloWorld from "./labs/a6/hello/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import IndexElement from "./labs/a6/index_element/index-element";
import Assignment7 from "./labs/a7";



/*function App() {
    return (
        <h1>Hello World!</h1>
    );
}
export default App;*/




function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path = "/labs/a6"
                           element = {<Labs/>}/>
                    <Route path = "/labs/a6/hello"
                           element={<HelloWorld/>}/>
                    <Route path = "/labs/a7"
                           element={<Assignment7/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                    <Route index
                           element={<IndexElement/>}/>
                </Routes>
            </div>
        </BrowserRouter>




    );
}
export default App;



