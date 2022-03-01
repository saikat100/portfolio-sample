import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../src/Components/Home";
import Post from "../src/Components/Post";
import About from "../src/Components/About";
import SinglePost from "../src/Components/SinglePost";


function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home" />} />
			<Route path="/home" element={<Home />} />
			<Route path="/post" element={<Post />} />
			<Route path="/about" element={<About />} />
			<Route path="/singlepost" element={<SinglePost />} />
		</Routes>
	);
}

export default App;
