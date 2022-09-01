import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { Tasks, Item, Content, Button } from "./styled";

const List = () => {
	const { tasks, hideDoneTasks } = useSelector(selectTasks);
	const dispatch = useDispatch();
	return (
		<Tasks>
			{tasks.map(task => (
				<Item
					key={task.id}
					hidden={hideDoneTasks && task.done}
				>
					<Button
						toggleDone
						onClick={() => dispatch(toggleTaskDone((task.id)))}
					>
						{task.done ? "✔" : ""}
					</Button>
					<Content done={task.done}>
						{task.content}
					</Content>
					<Button
						remove
						onClick={() =>dispatch(removeTask(task.id))}
					>
						🗑
					</Button>
				</Item>
			))}
		</Tasks>
	);
};

export default List;