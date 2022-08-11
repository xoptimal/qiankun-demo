import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import One from "./pages/one";
import Two from "./pages/two";
import Three from "./pages/three";
import Error404 from "./pages/404";
import Theme from "./pages/theme";

function App(props) {
    const {base = '/sub-app-3'} = props

    return (
        <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? base : '/'}>
            <Routes>
                <Route path="/sub-app-2" element={<Two {...props} />}/>
                <Route path="/theme" element={<Theme {...props} />}/>

                <Route path="/one" element={<One {...props} />}/>
                <Route path="/two" element={<Two {...props} />}/>
                <Route path="/three" element={<Three {...props} />}/>
                <Route path="/404" element={<Error404/>}/>
                <Route path="/" element={<Navigate to="/one" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
