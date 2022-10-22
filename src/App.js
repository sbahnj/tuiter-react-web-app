import Labs from "./labs/a6";
import HelloWorld from "./labs/a6/hello/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";



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
                    <Route index
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>




    );
}
export default App;



