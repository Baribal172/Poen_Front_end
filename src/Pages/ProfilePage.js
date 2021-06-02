import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProfilePage() {
	const { currentUser, logout } = useAuth();

	return (
		<div>
			<h1>Profile page</h1>
			<Card>
				<Card.Body>
					<strong>Email:</strong> {currentUser.email}
					<Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
						Update Profile
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
}
