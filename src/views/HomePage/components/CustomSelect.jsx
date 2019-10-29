import React from "react";
import { Dropdown } from "semantic-ui-react";

const CustomSelect = ({ options, filterHandler }) => {
  return (
    <Dropdown
      fluid
      search
      options={options}
      defaultValue={options[1].value}
      onChange={(_, data) => filterHandler({ type: "date", value: data.value })}
    />
  );
};

export default CustomSelect;
