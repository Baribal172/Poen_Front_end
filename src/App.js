import "./App.css";
import "./styles/reset.css";
import "./styles/global.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage.js";
import ProfilePage from "./Pages/ProfilePage.js";
import GoalsPage from "./Pages/GoalsPage.js";
import BudgetPage from "./Pages/BudgetPage.js";
import SettingsPage from "./Pages/SettingsPage.js";
import TipsPage from "./Pages/TipsPage.js";
import Intro from "./Pages/Intro.js";
import PrivateRoute from "./Components/PrivateRoute";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";
import BankLinken from "./Pages/BankLinken";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "../src/Components/UpdateProfile";
import { AuthProvider } from "../src/contexts/AuthContext";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import GenderPage from "./Pages/GenderPage";
function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/profile'>Profiel</Link>
					<Link to='/goals'>Doelen</Link>
					<Link to='/budget'>Budget</Link>
					<Link to='/settings'>Settings</Link>
					<Link to='/tips'>Tips</Link>
					<Switch>
						<PrivateRoute exact path='/profile' component={ProfilePage} />
						<PrivateRoute
							exact
							path='/update-profile'
							component={UpdateProfile}
						/>
						<PrivateRoute exact path='/about' component={AboutPage} />
						<PrivateRoute exact path='/goals' component={GoalsPage} />
						<PrivateRoute exact path='/budget' component={BudgetPage} />
						<PrivateRoute exact path='/settings' component={SettingsPage} />
						<PrivateRoute exact path='/tips' component={TipsPage} />
						<PrivateRoute exact path='/intro' component={Intro} />
						<PrivateRoute exact path='/gender' component={GenderPage} />
						<Route path='/register' component={Register}></Route>
						<Route path='/login' component={Login}></Route>
						<PrivateRoute exact path='/bankLinken' component={BankLinken} />
						<Route path='/forgot-password' component={ForgotPassword}></Route>
						<PrivateRoute exact path='/home' component={HomePage} />
						<PrivateRoute exact path='/' component={HomePage} />
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
