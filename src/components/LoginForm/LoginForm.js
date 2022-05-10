import { useState } from "react"
import './LoginForm.scss'

export const LoginForm = ({ onSubmit }) => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    };

    const handleChangePass = (e) => {
        setPass(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ login, pass });

        setLogin("");
        setPass("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="regform-flex">
                <legend>ПОЛЬЗОВАТЕЛЬ</legend>
                <input className="regform-field" type="email" placeholder="Введите логин" value={login} onChange={handleChangeLogin} />
                <input className="regform-field" type="password" placeholder="Введите пароль" value={pass} onChange={handleChangePass} />
                <input className="regform-field" type="submit" />
            </fieldset>
        </form>
    );
};



