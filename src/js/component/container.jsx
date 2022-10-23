import React, { useState } from "react";
import FormToDo from "./formToDo.jsx";
import TaskList from "./taskList.jsx";

const Container = () => {
    const [list, setList] = useState([]);

    const addTodo = (text) => {
        const newTodos = [...list, { text }];
        setList(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...list];
        newTodos.splice(index, 1);
        setList(newTodos);
      };

    return (<div className="container shadow p-3 mb-5 bg-white rounded">

        <FormToDo addTodo={addTodo} />
        <div>
          {list.map((todo, index) => (
            
                <TaskList
                key={index}
                index={index}
                todo={todo}
                removeTodo={removeTodo}
                />
              
          ))}
        </div>
        <span style={{color: "grey", fontStyle: "italic", fontSize: .75+"em"}}>{`${list.length} items left`}</span>
    </div>);
}

export default Container;