import React from "react";
import CompoundSelect from "./Select";

export default {
  component: CompoundSelect,
  title: "CompoundSelect",
};

const Template: React.FC = () => {
  return <CompoundSelect />;
};

export const Default: React.FC = Template.bind({});
