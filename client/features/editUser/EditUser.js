import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../adminView/adminViewSlice"
import {
	fetchSingleUser,
	selectUser,
	editUser,
} from "../editUser/singleUserSlice";

const EditUser = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const navigate = useNavigate();
	const { id } = useParams();

	const [username, setUserName] = useState("");
	const [userType, setUserType] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");


	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			editUser({
				id,
				username,
				userType,
				firstName,
				lastName,
				email,
			})
		);
		dispatch(fetchSingleUser(id));
     	setUserName("");
		setUserType("");		
		setFirstName("");
     	setLastName("");
     	setEmail("");
	};
	//
	const handleDelete = () => {
		dispatch(deleteUser(id));
		navigate("/adminview");
	};

	return (
		<div id="editUserWrapper">
			<div className="editUserContainer">
				<li key={id}>
					<h2 id="editUserHeader"> Edit User Info Below</h2>
				</li>

				<form id="user-form" onSubmit={handleSubmit}>

					<label htmlFor="username">User Name:</label>
					<input
						name="username" 
						value={username}
						placeholder="Enter User Name"
						onChange={(e) => setUserName(e.target.value)}
					/>

					<label htmlFor="userType">User Type:</label>
					<input
						name="userType" 
						value={userType}
						placeholder="Enter User's Type"
						onChange={(e) => setUserType(e.target.value)}
					/>

					<label htmlFor="firstName">First Name:</label>
					<input
						name="firstName" 
						value={firstName}
						placeholder="Enter User's First Name"
						onChange={(e) => setFirstName(e.target.value)}
					/>

					<label htmlFor="lastName">Last Name:</label>
					<input
						name="lastName"
						value={lastName}
						placeholder="Enter User's Last Name"
						onChange={(e) => setLastName(e.target.value)}
					/>

					<label htmlFor="email">Email:</label>
					<input
						name="email"
						value={email}
						placeholder="Enter User's Email Address"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<div className="button-box">
						<button className="submitBtn" type="submit">Submit Changes</button>

						<Link to="/adminview">
							<button className="cancelBtn">Cancel</button>
						</Link>

						<div>
							<button className="deleteBtn" onClick={handleDelete}>Delete</button>
						</div>
						
					</div>
				</form>
			</div>
		</div>	
	);
};

export default EditUser;
