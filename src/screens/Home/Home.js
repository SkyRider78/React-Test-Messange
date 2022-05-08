import { useState } from "react";
import { Link } from "react-router-dom";

import { LoginForm } from "../../components/LoginForm/LoginForm";
import { logIn, signUp } from "../../services/firebase";
import "./Home.scss"

export const Home = ({ isSignUp }) => {
    const [error, setError] = useState("");
    const handleSubmit = async ({ login, pass }) => {
        try {
            if (isSignUp) {
                await signUp(login, pass);
            } else {
                await logIn(login, pass);
            }
        } catch (e) {
            setError(e.message);
        }
    };
    return (
        <>
            <h3>HOME PAGE</h3>
            <LoginForm onSubmit={handleSubmit} />
            {error && <h4 className="errMessage">{error}</h4>}
            <div style={{ margin: 10 }}>
                <Link to={isSignUp ? "/" : "/signup"}>
                    {isSignUp ? "to login" : "to signup"}
                </Link>
            </div>
        </>
    );
};