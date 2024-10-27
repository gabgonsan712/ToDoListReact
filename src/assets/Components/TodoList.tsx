import {SetStateAction, useState} from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["a", "b"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event: { target: { value: SetStateAction<string>; }; }) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "" ) {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index: number){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index: number) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index: number){
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>ToDoList</h1>
            <div className="contentBox">
                <div className="textBox">
                    <input
                        type="text"
                        placeholder="Create task..."
                        value={newTask}
                        onChange={handleInputChange} />
                    <button className="add-button" onClick={addTask}>Add</button>
                </div>
                <ol className="taskContainer">
                    {tasks.map((task, index) =>
                        <li key={index} className="task">
                            <span className="text">{task}</span>
                            <div className="buttons">
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>

                                    <button className="move-button upButton" onClick={() => moveTaskUp(index)}>⬆️</button>
                                    <button className="move-button downButton" onClick={() => moveTaskDown(index)}>⬇️</button>


                            </div>

                        </li>
                    )}

                </ol>
            </div>

        </div>
    )
}

export default ToDoList;