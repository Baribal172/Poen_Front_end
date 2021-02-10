import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage.js";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
	return (
		<div className='App'>
			<Router>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Switch>
					<Route path='/about' component={AboutPage}></Route>
					<Route path='/' component={HomePage}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
