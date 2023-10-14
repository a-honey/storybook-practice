import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template: React.FC = (args: any) => <Task {...args} />;

// bind를 통해 instance를 생성
export const Default: any = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updateAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned: any = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived: any = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
