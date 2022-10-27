import Assignment6 from "./a6";
import Nav from "../nav";
import Todos from "../../public/labs/a5/todos/todos";

function Labs() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route index
                       element={<Assignment6/>}/>
                <Route path="labs/a7"
                       element={<Assignment7/>}/>
            </Routes>

        </div>
    );
}
export default Labs;

