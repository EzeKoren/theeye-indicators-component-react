import React, { useState } from "react";
import "./login.scss";
import { Login } from "./apis/session/session.handler";
import store from "./apis/store";
import { useHistory } from "react-router-dom";
import queryParams from "./apis/queryParams";

import logo from "./assets/logo.png"

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjBiNjMwYTRkNmRmM2MwMDEyNzBhMjU5IiwiaWF0IjoxNjIzNDQxMDk0LCJleHAiOjE2MjM0NTE4OTR9.ywyHiQGs-BnwuVExvG9jZqgNjw6xDS-EJLVPEyacKXk

function LoginPage() {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const [cust, setCust] = useState("");

	const history = useHistory()

	const btnLogin = (email: string, passw: string, cus: string) => {
		Login(email, passw, cus);
	};

	const params = queryParams.get();
	

	const redir = params.redirect_callback;

	const handleState = () => {
		const state = store.getState();
		if (state.session.profile) {
			if (redir != undefined)
				window.location.href = redir + "?" + queryParams.set({access_token: state.session.session?.payload?.token});
			else
				history.push("/main")
		}
	};

	store.subscribe(handleState);

	return (
		<div className="container">
			<div className="logo">
				<img src={logo} alt="TheEye" />
				<p>
					Adding value to humen talent by automating repetitive tasks.
				</p>
			</div>
			<div className="login-container">
				<div className="title">Sign in</div>
				<div className="form">
					<input
						value={user}
						onChange={(
							e: React.ChangeEvent<HTMLInputElement>
						): void => setUser(e.target.value)}
						type="text"
						name="email"
						placeholder="e-mail"
						required
					></input>
					<input
						value={pass}
						onChange={(
							e: React.ChangeEvent<HTMLInputElement>
						): void => setPass(e.target.value)}
						type="password"
						name="password"
						placeholder="password"
						required
					></input>
					<input
						value={cust}
						onChange={(
							e: React.ChangeEvent<HTMLInputElement>
						): void => setCust(e.target.value)}
						type="text"
						name="customer"
						placeholder="Customer (leave empty for default)"
						required
					></input>
					<button
						className="submit-btn"
						onClick={() => btnLogin(user, pass, cust)}
					>
						SIGN IN
					</button>
					<a href="/password/reset">Forgot your password?</a>
					<a href="/register">Don't have an account? Register here</a>
				</div>
			</div>
			<footer className="footer">
				<a href="https://theeye.io">theeye.io</a> | Copyright © 2021
				THEEYE INC.
			</footer>
		</div>
	);
}

export default LoginPage