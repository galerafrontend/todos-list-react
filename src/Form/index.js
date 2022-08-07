import { useRef, useState } from "react";
import { FormField, Input, Button } from "./styled";

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
		<FormField
			onSubmit={onFormSubmit}
		>
			<Input
				ref={inputRef}
				value={newTaskContent}
				autoFocus
				placeholder="Co jest do zrobienia?"
				onChange={({ target }) => setNewTaskContent(target.value)}
			/>
			<Button
				onClick={focusInput}
			>
				Dodaj zadanie
			</Button>
		</FormField>
	);
}

export default Form;