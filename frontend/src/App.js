import Navbar from "./components/NavBar.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
			<BrowserRouter>
				<div className="App">
					<Navbar />
				</div>
				<div className="main">
					{/* <Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create" element={<Create />} />
						<Route path="/posts" element={<BlogList />} />
						<Route path="/posts/:id" element={<BlogDetails />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Registration />} />
					</Routes> */}
				</div>
			</BrowserRouter>
		</div>
  );
}

export default App;
