import './styles/reset.css'
import './styles/global.css'
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage.js";
import Intro from "./Pages/Intro.js";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BankLinken from './Pages/BankLinken';
import ResetWachtwoord from './Pages/ResetWachtwoord';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/home' component={HomePage}></Route>
					<Route path='/intro' component={Intro}></Route>
					<Route path='/about' component={AboutPage}></Route>
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
