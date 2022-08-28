import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, markAllDone }) => (
	<ButtonsContainer>
		{tasks.length > 0 && (
			<>
				<Button
					onClick={toggleHideDone}
					disabled={tasks.every(({ done }) => !done)}
				>
					{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
				</Button>
				<Button
					onClick={markAllDone}
					disabled={tasks.every(({ done }) => done)}
				>
					Ukończ wszystkie
				</Button>
			</>
		)}
	</ButtonsContainer>
);

export default Buttons;