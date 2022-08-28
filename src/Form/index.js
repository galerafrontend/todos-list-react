import { useRef, useState } from "react";
import { FormField, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
	const [newTaskContent, setNewTaskContent] = useState("");
	const inputRef = useRef(null)

	const onFormSubmit = (event) => {
		event.preventDefault();

		const trimmedNewTaskContent = newTaskContent.trim();

		if (!trimmedNewTaskContent) {
			return;
		}

		addNewTask(trimmedNewTaskContent);
		setNewTaskContent("");
		inputRef.current.focus();
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
			<Button>
				Dodaj zadanie
			</Button>
		</FormField>
	);
}

export default Form;