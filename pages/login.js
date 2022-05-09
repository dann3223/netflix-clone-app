import React, { useState } from "react";
import { UserSelection } from "../components/UserSelection";
import { SignIn } from "../components/SignIn";
import Head from "next/head";

const Login = () => {
	const [session, setSession] = useState(false);

	const handleSignIn = () => {
		setSession(prevState => (prevState ? false : true));
	};

	if (session) {
		return (
			<>
				<Head>
					<title>Netflix Clone</title>
					<link rel="shortcut icon" href="/netflixlogo.svg" />
				</Head>
				<div className="h-screen">
					<UserSelection />
				</div>
			</>
		);
	}
	return (
		<>
			<Head>
				<title>Netflix Clone</title>
				<link rel="shortcut icon" href="/netflixlogo.svg" />
			</Head>
			<div className="h-screen">
				<SignIn handleSignIn={handleSignIn} />
			</div>
		</>
	);
};

export default Login;
