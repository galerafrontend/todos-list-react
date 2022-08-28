import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectTasks } from "../tasksSlice";
import { Tasks, Item, Content, Button } from "./styled";

const List = ({ removeTask, toggleTaskDone }) => {
	const { tasks, hideDoneTasks } = useSelector(selectTasks);
	return (
		<Tasks>
			{tasks.map(task => (
				<Item
					key={task.id}
					hidden={hideDoneTasks && task.done}
				>
					<Button
						toggleDone
						onClick={() => toggleTaskDone(task.id)}
					>
						{task.done ? "✔" : ""}
					</Button>
					<Content done={task.done}>
						{task.content}
					</Content>
					<Button
						remove
						onClick={() => removeTask(task.id)}
					>
						🗑
					</Button>
				</Item>
			))}
		</Tasks>
	);
};

export default List;