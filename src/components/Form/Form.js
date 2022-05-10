import { useEffect, useRef, useState } from "react";
import './Form.scss';


export const Form = ({ onSubmit }) => {

    const [value, setValue] = useState("");

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(value);
        setValue("");
    };


    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        console.log("did mount", inputRef);
        inputRef.current?.focus(); // добавление фокуса на input


        return () => {
            console.log("will unmount");
        };
    }, []);

    return (
        <form className="form" onSubmit={handleSubmit}>
        <input className="field" value={value} onChange={handleChange} type="text" />
        <input className="btn" type="submit" />
    </form>

    );
};