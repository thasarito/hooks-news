import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { FirebaseContext } from '../firebase';
function Header() {
	const { user, firebase } = React.useContext(FirebaseContext);

	return (
		<div className="header">
			<div className="flex">
				<img className="logo" src="/logo.png" alt="Hooks News Logo" />
				<NavLink className="header-title" to="/">
					Hooks News
				</NavLink>
				<NavLink className="header-link" to="/">
					new
				</NavLink>
				<div className="divider">|</div>
				<NavLink className="header-link" to="/top">
					top
				</NavLink>
				<div className="divider">|</div>
				<NavLink className="header-link" to="/search">
					search
				</NavLink>
				{user && (
					<>
						<div className="divider">|</div>
						<NavLink className="header-link" to="/create">
							submit
						</NavLink>
					</>
				)}
			</div>
			<div className="flex">
				{user ? (
					<>
						<div className="header-name">{user.displayName}</div>
						<div className="divider">|</div>
						<div className="header-button" onClick={() => firebase.logout()}>
							logout
						</div>
					</>
				) : (
					<NavLink className="header-link" to="/login">
						login
					</NavLink>
				)}
			</div>
		</div>
	);
}

export default withRouter(Header);
