import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Nav = () => {
	const [error, setError] = useState("");
	const [open, setOpen] = useState(false);
	const { currentUser, logout } = useAuth();
	const history = useHistory();
	async function handleLogout() {
		setError("");

		try {
			await logout();
			history.push("/login");
		} catch {
			setError("Failed to log out");
		}
	}
	return (
		<nav>
			<ul
				className='navLinks'
				style={{ transform: open ? "translateX(0px)" : "" }}
			>
				<label htmlFor='nav-toggle' className='icon-close'>
					<img
						onClick={() => setOpen(!open)}
						className='close'
						src='/close.svg'
						alt='close-menu'
					/>
				</label>
				<div className='links'>
						<Link onClick={() => setOpen(!open)} to='/'>
							<li>
								<img src='homeIcon.svg' />
								<a>Home</a>
							</li>
						</Link>
						<Link onClick={() => setOpen(!open)} to='/profile'>
							<li>
								<img src='profielIcon.svg' />
								<a>Profiel</a>
							</li>
						</Link>
						<Link onClick={() => setOpen(!open)} to='/goals'>
							<li>
								<img src='doelenIcon.svg' />
								<a>Doelen</a>
							</li>
						</Link>
						<Link onClick={() => setOpen(!open)} to='/budget'>
							<li>
								<img src='budgetIcon.svg' />
								<a>Budget</a>
							</li>
						</Link>
						<Link onClick={() => setOpen(!open)} to='/tips'>
							<li>
								<img src='tipsIcon.svg' />
								<a>Tips</a>
							</li>
						</Link>
						<Link onClick={() => setOpen(!open)} to='/settings'>
							<li>
								<img src='settingsIcon.svg' />
								<a>Instellingen</a>
							</li>
						</Link>
						<Link variant='link' onClick={handleLogout}>
							<li>
								<img src='uitloggenIcon.svg' />
								<a>Uitloggen</a>
							</li>
						</Link>
				</div>
			</ul>
			<div className='menu'>
				<label htmlFor='nav-toggle' className='icon-burger'>
					<img
						onClick={() => setOpen(!open)}
						className='hamburger'
						src='/menu.png'
						alt='hamburger-menu'
					/>
				</label>
			</div>
			<style jsx>{`
				nav {
					display: inline-flex;
					float: right;
					justify-content: flex-end;
					align-items: center;
					font-family: Open sans;
				}

				.navLogo {
					width: 200px;
					object-fit: contain;
				}

				.navLinks {
					position: fixed;
					display: block;

					top: 0;
					left: 0;
					height: 100vh;
					width: 100%;
					background-color: #006fff;
					transform: translateX(-500px);
					transition: 0s;
					z-index: 999;
				}

				.links {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					margin: 60px;
				}

				.navLinks a {
					font-size: 18px;
					font-weight: normal;
					cursor: pointer;
					margin-left: 20px;
				}

				.navLinks li {
					padding: 25px;
					color: #fff;
					white-space: nowrap;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.menu {
					display: flex;
					justify-content: flex-end;
				}

				.icon-burger {
					width: 45px;
					height: 45px;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.hamburger {
					margin-right: 3px;
					width: 25px;
					cursor: pointer;
				}
				.icon-close {
					display: flex;
					justify-content: flex-end;
					height: 30px;
				}

				.close {
					position: absolute;
					top: 6px;
					right: 32px;
					width: 25px;
					cursor: pointer;
				}
			`}</style>
		</nav>
	);
};

export default Nav;
