import { useRef, useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setNewTaskContent("");
        if (newTaskContent.trim() !== "") {
            return addNewTask(newTaskContent.trim());
        }
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                value={newTaskContent}
                className="form__formField"
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                onClick={focusInput}
                className="form__button"
            >
                Dodaj zadanie
            </button>
        </form>
    );
}

export default Form;