import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { Tasks, Item, Content, Button, StyledLink } from "./styled";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../Search/queryParameters";
import { toTask } from "../../../../routes";

const List = () => {
	const location = useLocation();
	const query = useQueryParameter(searchQueryParamName);

	const tasks = useSelector(state => selectTasksByQuery(state, query));
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
						<StyledLink to={toTask({ id: task.id })}>
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