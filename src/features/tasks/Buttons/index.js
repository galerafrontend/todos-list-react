import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { ButtonsContainer, Button } from "./styled";
import { selectTasks, toggleHideDone, markAllDone } from "../tasksSlice";

const Buttons = () => {
	const { tasks, hideDoneTasks } = useSelector(selectTasks);
	const dispatch = useDispatch();
	return (
		<ButtonsContainer>
			{tasks.length > 0 && (
				<>
					<Button
						onClick={() => dispatch(toggleHideDone())}
						disabled={tasks.every(({ done }) => !done)}
					>
						{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
					</Button>
					<Button
						onClick={() => dispatch(markAllDone())}
						disabled={tasks.every(({ done }) => done)}
					>
						Ukończ wszystkie
					</Button>
				</>
			)}
		</ButtonsContainer>
	);
};

export default Buttons;