import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Hello from "../Components/Hello";
import HelloCopy from "../Components/Hello copy";
import SearchBar from "../Components/SearchBar";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/hello" element={<Hello />} />
                <Route exact path="/" element={<HelloCopy />} />

            </Routes>
        </BrowserRouter>
    );
}
export default Router;