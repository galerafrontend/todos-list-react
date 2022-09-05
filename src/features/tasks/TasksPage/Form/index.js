import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useRef, useState } from "react";
import { FormField, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
	const [newTaskContent, setNewTaskContent] = useState("");
	const inputRef = useRef(null)

	const dispatch = useDispatch();

	const onFormSubmit = (event) => {
		event.preventDefault();

		const trimmedNewTaskContent = newTaskContent.trim();

		if (!trimmedNewTaskContent) {
			return;
		}

		dispatch(addTask({
			content: trimmedNewTaskContent,
			done: false,
			id: nanoid(),
		}));

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