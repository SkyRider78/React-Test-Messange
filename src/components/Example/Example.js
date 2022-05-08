// Пример реализации счетчика нажатий на кнопку
import { useState } from "react";

export const Counter = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h4> {count} </h4>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

export const MyButton = ({ text, onClick, children }) => {
    console.log(children);
    return (
        <div role="button" onClick={onClick}>
            {children}
        </div>
    );
};