import React, { ReactNode, createContext, useReducer, useState } from "react";

interface SelectContextProps {
  data: string;
  setData: (value: any) => void;
}

const SelectContext = createContext<SelectContextProps>({
  data: "",
  setData: () => {},
});

const useSelect = () => {
  const context = React.useContext(SelectContext);

  if (!context) {
    throw new Error("selectContext 없음");
  }
  return context;
};

interface SelectProviderProps {
  children: ReactNode;
  data: string;
}

function reducer(state: string, action: any) {
  switch (action.type) {
    case "ADD":
      return action.value;
    default:
      return state;
  }
}

const SelectProvider = ({ children, ...values }: SelectProviderProps) => {
  const [state, dispatch] = useReducer(reducer, values.data);

  return (
    <SelectContext.Provider
      value={{
        ...values,
        data: state,
        setData: (value: any) => {
          dispatch({ type: "ADD", value: value });
        },
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

const SelectMain = ({ children, ...values }: SelectProviderProps) => {
  return <SelectProvider {...values}>{children}</SelectProvider>;
};

const Option = ({ value, children }: { value: any; children: ReactNode }) => {
  const { setData } = useSelect();

  const handleSelect = () => {
    setData(value);
  };

  return <div onClick={handleSelect}>{children}</div>;
};

const SearchField = () => {
  const { setData } = useSelect();

  const [input, setInput] = useState("");

  return (
    <input
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        setData(e.target.value);
      }}
    />
  );
};

const SearchShow = () => {
  const { data } = useSelect();

  return (
    <div>
      <span>current value: </span>
      {data}
    </div>
  );
};

const Select = Object.assign(SelectMain, {
  Option: Option,
  Search: SearchField,
  Show: SearchShow,
});

const CompoundSelect: React.FC = () => {
  return (
    <Select data={"hi"}>
      <Select.Show />
      <Select.Option value={"옵션1"}>옵션1</Select.Option>
      <Select.Option value={"옵션2"}>옵션2</Select.Option>
      <Select.Option value={"옵션3"}>옵션3</Select.Option>
      <Select.Option value={"옵션4"}>옵션4</Select.Option>
      <Select.Search />
    </Select>
  );
};

export default CompoundSelect;
