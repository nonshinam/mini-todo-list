import React, { useEffect, useState } from "react";
import "./App.css";
import Waters from "./Waters";
import Container from "./Container";
import List from "./List";
import Emoji from "./Emoji";

export default function App() {
  const [task, setTask] = useState("");
  const [isTask, setIsTask] = useState(true);
  const [clock, setClock] = useState("");
  const [todo, setTodo] = useState(() => {
    const data = JSON.parse(localStorage.getItem("todolist"));
    return data || [];
  });
  const [note, setNote] = useState(() => {
    const data = JSON.parse(localStorage.getItem("note"));
    return data || "";
  });
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todo));
    localStorage.setItem("note", JSON.stringify(note));
  }, [todo, note]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todolist"));
    if (todo) {
      setTodo(data);
    }
    const result = JSON.parse(localStorage.getItem("note"));
    if (note) {
      setNote(result);
    }
  }, []);

  function changeInputTaskHandler(event) {
    setTask(event.target.value);
  }

  function changeInputClockHandler(event) {
    setClock(event.target.value);
  }

  function sendTodoHandler() {
    let newObj = {
      id: todo.length + 1,
      task: task,
      clock: clock,
      state: false,
    };
    if (newObj.task) {
      setTodo((prevState) => {
        return [...prevState, newObj];
      });
      setTask("");
      setClock("");
    } else {
      setIsTask(false);
    }
  }

  function tikTaskHandler(id) {
    let tikTask = todo.filter((item) => {
      if (item.id == id) {
        item.state = true;
        return item;
      }
    });
    let list = todo.filter((item) => tikTask !== item);

    setTodo(list, tikTask);
  }

  function removeTaskHandler(id) {
    let newTask = todo.filter((item) => {
      return item.id != id;
    });
    setTodo(newTask);
  }

  return (
    <div className="body">
      <div>
        <h3 className="flex justify-center text-xl font-bold">ToDo List</h3>

        <div className="box-body flex md:flex-row md:justify-center flex-col ">
          <div className="boxs-left">
            <Emoji
              red="rgb(255, 129, 129)"
              gray="#c7c6c6"
              yellow="rgb(255, 242, 55)"
              purple="rgb(153, 153, 253)"
              green="rgb(144, 255, 138)"
              blue="rgb(120, 211, 255)"
            />
            <h6 className="title-water">water tracker</h6>
            <div className="box-water">
              <div>
                <Waters />
              </div>
            </div>
            <Container
              task={task}
              clock={clock}
              onChangeTask={(event) => changeInputTaskHandler(event)}
              onChangeClock={(event) => changeInputClockHandler(event)}
              send={() => sendTodoHandler()}
              isTask={isTask}
              note={note}
              setNote={setNote}
            />
          </div>
          <div className="boxs-right">
            <div className="box">
              {todo.length > 0 &&
                todo.map((item) => (
                  <List
                    key={item.id}
                    {...item}
                    onTik={() => tikTaskHandler(item.id)}
                    onRemove={() => removeTaskHandler(item.id)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
