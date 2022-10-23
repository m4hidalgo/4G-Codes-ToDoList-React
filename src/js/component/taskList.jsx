import React, {useState} from "react";

const TaskList = ({todo, index, removeTodo}) => {
    const [display, setDisplay] = useState('none');

    const handleMouseOver = () => {
        setDisplay('block');
    }

    const handleMouseLeave = () => {
        setDisplay('none');
    }

    return (<div className="todo-list">
                <div className="row d-flex" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <div className="col">
                    <span>{todo.text}</span>
                    </div>

                    <div className="col-1">
                    <button 
                        type="button" 
                        className="btn btn-outline-danger border-0 p-0" 
                        style={{display: display}}
                        onClick={() => removeTodo(index)}>
                            ✕
                    </button>
                    
                    </div>

                </div>
                <hr></hr>
    </div>);

}

export default TaskList;