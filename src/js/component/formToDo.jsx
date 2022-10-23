import React, {useState} from "react";

const FormToDo = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };

    return (<div className="container mb-2">
            <form onSubmit={handleSubmit}>
                <div className="todo-list">
                    <div className="file-input">
                        <input
                            type="text"
                            className="text border-0"
                            placeholder="New Task"
                            style={{width: 100+"%"}}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
            
                    </div>
                </div>
            </form>
    </div>);

}

export default FormToDo;