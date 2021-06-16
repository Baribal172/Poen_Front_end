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
import ForgotPassword from "./Pages/ForgotPassword";
import UpdateProfile from "../src/Components/UpdateProfile";
import { AuthProvider } from "../src/contexts/AuthContext";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import GenderPage from "./Pages/GenderPage";
import AgePage from "./Pages/AgePage";
import HousingPage from "./Pages/HousingPage";
import SavingPage from "./Pages/SavingPage";
import DataPage from "./Pages/DataPage";
import DoelInstellen from "./Pages/DoelInstellen";
import BudgetInstellen from "./Pages/BudgetInstellen";
import TipsBudget from "./Pages/TipsBudget";
import TipsCijfers from "./Pages/TipsCijfers";
import TipsSparen from "./Pages/TipsSparen";
import TipsFG from "./Pages/TipsFG";
import OverOns from "./Pages/OverOns";
import Bank from "./Pages/Bank";
import Privacy from "./Pages/Privacy";
import Contact from "./Pages/Contact";
import Budget from "./Pages/Budget";
function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Switch>
						<PrivateRoute exact path='/profile' component={ProfilePage} />
						<PrivateRoute
							exact
							path='/update-profile'
							component={UpdateProfile}
						/>
						<PrivateRoute exact path='/goals' component={GoalsPage} />
						<PrivateRoute exact path='/budgetPage' component={BudgetPage} />
						<PrivateRoute exact path='/budget' component={Budget} />
						<PrivateRoute exact path='/settings' component={SettingsPage} />
						<PrivateRoute exact path='/tips' component={TipsPage} />
						<PrivateRoute exact path='/intro' component={Intro} />
						<PrivateRoute exact path='/gender' component={GenderPage} />
						<PrivateRoute exact path='/age' component={AgePage} />
						<PrivateRoute exact path='/housing' component={HousingPage} />
						<PrivateRoute exact path='/saving' component={SavingPage} />
						<PrivateRoute exact path='/data' component={DataPage} />
						<PrivateRoute exact path='/tipsBudget' component={TipsBudget} />
						<PrivateRoute exact path='/tipsCijfers' component={TipsCijfers} />
						<PrivateRoute exact path='/tipsSparen' component={TipsSparen} />
						<PrivateRoute exact path='/tipsFG' component={TipsFG} />
						<PrivateRoute exact path='/profile' component={ProfilePage} />
						<PrivateRoute exact path='/overOns' component={OverOns} />
						<PrivateRoute exact path='/bank' component={Bank} />
						<PrivateRoute exact path='/privacy' component={Privacy} />
						<PrivateRoute exact path='/contact' component={Contact} />
						<PrivateRoute
							exact
							path='/doelInstellen'
							component={DoelInstellen}
						/>
						<PrivateRoute
							exact
							path='/budgetInstellen'
							component={BudgetInstellen}
						/>
						<Route path='/register' component={Register}></Route>
						<Route path='/login' component={Login}></Route>
						<Route path='/' component={Login}></Route>
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
