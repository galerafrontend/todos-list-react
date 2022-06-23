import "./style.css";

const List = ({tasks, hideDoneTasks}) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id} className={`list__item
            ${hideDoneTasks && task.done ? "list__item--hide" : ""}`}>
                <button className="list__button list__button--toggleDone">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__task${task.done ? " list__task--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--delete">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default List;