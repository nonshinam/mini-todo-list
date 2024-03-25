import React from "react";
import { AiOutlineSend } from "react-icons/ai";

export default function Shop({
  task,
  clock,
  onChangeTask,
  onChangeClock,
  send,
  isTask,
  note,
  setNote,
}) {
  function changeInputTask(event) {
    onChangeTask(event);
  }

  function changeInputClock(event) {
    onChangeClock(event);
  }
  function sendTodo(event) {
    send(event);
  }

  return (
    <div className="input-box">
      <div className="inputs">
        <input
          type="text"
          onChange={(event) => changeInputTask(event)}
          value={task}
          placeholder={`${isTask ? " new task" : "enter new task"}`}
        />
        <input
          type="text"
          onChange={(event) => changeInputClock(event)}
          value={clock}
          placeholder="6 - 8"
        />
        <button className="send" onClick={(event) => sendTodo(event)}>
          <AiOutlineSend />
        </button>
      </div>
      <textarea
        placeholder="note"
        row="20"
        value={note}
        onChange={(event) => setNote(event.target.value)}
      ></textarea>
    </div>
  );
}
