import "./style.css";

const List = ({ tasks, hideDoneTasks, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__item
                ${hideDoneTasks && task.done 
                    ? "list__item--hide" 
                    : ""}`
                }
            >
                <button
                    className="list__button list__button--toggleDone"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span 
                    className={`list__task
                    ${task.done 
                        ? " list__task--done" 
                        : ""}`
                    }
                >
                    {task.content}
                </span>
                <button
                    className="list__button list__button--delete"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default List;