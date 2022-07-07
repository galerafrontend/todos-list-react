import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, markAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    onClick={toggleHideDone}
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => !done)}
                >
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    onClick={markAllDone}
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);



export default Buttons;