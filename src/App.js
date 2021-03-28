import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage.js";
import ProfilePage from "./Pages/ProfilePage.js";
import GoalsPage from "./Pages/GoalsPage.js";
import BudgetPage from "./Pages/BudgetPage.js";
import SettingsPage from "./Pages/SettingsPage.js";
import TipsPage from "./Pages/TipsPage.js";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
	return (
		<div className='App'>
			<Router>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/profile'>Profiel</Link>
				<Link to='/goals'>Doelen</Link>
				<Link to='/budget'>Budget</Link>
				<Link to='/settings'>Settings</Link>
				<Link to='/tips'>Tips</Link>
				<Switch>
					<Route path='/profile' component={ProfilePage}></Route>
					<Route path='/about' component={AboutPage}></Route>
					<Route path='/goals' component={GoalsPage}></Route>
					<Route path='/budget' component={BudgetPage}></Route>
					<Route path='/settings' component={SettingsPage}></Route>
					<Route path='/tips' component={TipsPage}></Route>
					<Route path='/' component={HomePage}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
