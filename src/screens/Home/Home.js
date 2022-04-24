import { Link } from "react-router-dom";

import { LoginForm } from "../../components/LoginForm/LoginForm";
import { singUP } from "../../services/firebase";

export const Home = ({ onAuth, isSignUP }) => {
    const handleSubmit = ({ login, pass }) => {
        if (isSignUP) {
            singUP(login, pass);
        } else {
            logIn(login, pass);
        }
    };
    return (
        <>
            <h3>HOME PAGE</h3>;
            <LoginForm onSubmit={handleSubmit} />
            <Link to={isSignUP ? "/" : "/signup"}>
                {isSignUP ? "to login" : "to signup"}
            </Link>
        </>
    );
};