import ImagesComponent from "./ImagesComponent";

const meta = {
  title: "ImagesComponent",
  component: ImagesComponent,
};

export default meta;

const Template = (args: any) => {
  return <ImagesComponent />;
};

export const Default: any = Template.bind({});
Default.args = {};
