import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { Tasks, Item, Content, Button, StyledLink } from "./styled";
import { Link } from "react-router-dom";

const List = () => {
	const tasks = useSelector(selectTasks);
	const hideDoneTasks = useSelector(selectHideDone);
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
						<StyledLink to={`/lista zadan/${task.id}`}>
							{task.content}
						</StyledLink>
					</Content>
					<Button
						remove
						onClick={() => dispatch(removeTask(task.id))}
					>
						🗑
					</Button>
				</Item>
			))}
		</Tasks>
	);
};

export default List;