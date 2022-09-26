import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { ButtonsContainer, Button } from "./styled";
import {
	toggleHideDone,
	markAllDone,
	selectHideDone,
	selectAreTasksEmpty,
	selectIsEveryTaskDone,
	selectIsAnyTaskDone,
	removeAllTasks
} from "../../tasksSlice";

const Buttons = () => {
	const hideDoneTasks = useSelector(selectHideDone);
	const areTasksEmpty = useSelector(selectAreTasksEmpty);
	const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
	const isAnyTaskDone = useSelector(selectIsAnyTaskDone);
	const dispatch = useDispatch();
	return (
		<ButtonsContainer>
			{!areTasksEmpty && (
				<>
				<Button onClick={() => dispatch(removeAllTasks())}>
					Remove all
				</Button>
					<Button
						onClick={() => dispatch(toggleHideDone())}
						disabled={isAnyTaskDone}
					>
						{hideDoneTasks ? "Show" : "Hide"} completed
					</Button>
					<Button
						onClick={() => dispatch(markAllDone())}
						disabled={isEveryTaskDone}
					>
						Complete all
					</Button>
				</>
			)}
		</ButtonsContainer>
	);
};

export default Buttons;