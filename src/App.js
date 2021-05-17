import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage.js";
import ProfilePage from "./Pages/ProfilePage.js";
import GoalsPage from "./Pages/GoalsPage.js";
import BudgetPage from "./Pages/BudgetPage.js";
import SettingsPage from "./Pages/SettingsPage.js";
import TipsPage from "./Pages/TipsPage.js";
import "./styles/reset.css";
import "./styles/global.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage.js";
import Intro from "./Pages/Intro.js";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BankLinken from "./Pages/BankLinken";
import ResetWachtwoord from "./Pages/ResetWachtwoord";

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
					<Route path='/home' component={HomePage}></Route>
					<Route path='/intro' component={Intro}></Route>
					<Route path='/register' component={Register}></Route>
					<Route path='/login' component={Login}></Route>
					<Route path='/bankLinken' component={BankLinken}></Route>
					<Route path='/reset-wachtwoord' component={ResetWachtwoord}></Route>
					<Route path='/' component={HomePage}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
