import React from "react";

interface TaskType {
  id: string;
  title: string;
  state: string;
}

const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: {
  task: TaskType;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          id={`achiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
        <div>
          <input
            type="text"
            value={title}
            readOnly={true}
            placeholder="Input title"
          />
        </div>
        <div className="actions" onClick={(event) => event.stopPropagation()}>
          {state !== "TASK_ARCHIVED" && (
            <button onClick={() => onPinTask(id)}>
              <span
                className={`icon-start`}
                id={`pinTask-${id}`}
                aria-label={`pinTask-${id}`}
              />
            </button>
          )}
        </div>
      </label>
    </div>
  );
};

export default Task;
