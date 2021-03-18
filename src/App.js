import './styles/reset.css'
import './styles/global.css'
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage.js";
import Intro from "./Pages/Intro.js";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Router>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/intro'>Intro</Link>
				<Switch>
					<Route path='/intro' component={Intro}></Route>
					<Route path='/about' component={AboutPage}></Route>
					<Route path='/' component={HomePage}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
