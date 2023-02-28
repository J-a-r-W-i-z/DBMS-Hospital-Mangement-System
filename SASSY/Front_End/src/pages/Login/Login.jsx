import React, { useState } from "react"
import "./Login.scss"

function LoginForm() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [userType, setUserType] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	const handleLogin = async (event) => {
		event.preventDefault()
		try {
			const response = await fetch("/api/login/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password, user_type: userType }),
			})
			if (response.ok) {
				// Redirect to the appropriate dashboard based on user type
				window.location.replace(`/${userType}_dashboard/`)
			} else {
				const data = await response.json()
				setErrorMessage(data.message)
			}
		} catch (error) {
			setErrorMessage("Something went wrong. Please try again later.")
		}
	}

	return (
		<div className="login-form-container center-flex">
			<h1 className="login-form-heading">Log In to continue</h1>
			<form onSubmit={handleLogin} className="login-form">
				<input
					type="text"
					value={username}
					placeholder="Username"
					onChange={(event) => setUsername(event.target.value)}
				/>
				<input
					type="password"
					value={password}
					placeholder="Password"
					onChange={(event) => setPassword(event.target.value)}
				/>
				<select
					value={userType}
					onChange={(event) => setUserType(event.target.value)}
				>
					<option value="" disabled>
						Select user type
					</option>
					<option value="front-desk-operator">Front desk operator</option>
					<option value="data-entry-operator">Data entry operator</option>
					<option value="doctor">Doctor</option>
					<option value="adminstrator">Adminstrator</option>
				</select>
				<button type="submit" className="btn-primary">
					Login
				</button>
				{errorMessage && <div>{errorMessage}</div>}
			</form>
		</div>
	)
}

export default LoginForm
