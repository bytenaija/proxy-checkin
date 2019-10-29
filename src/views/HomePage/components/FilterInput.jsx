import React from "react";
import { Input, Icon } from "semantic-ui-react";

const FilterInput = ({ filterHandler }) => {
  return (
    <div className="filter-input-pane">
      <div className="schedule heading">
        <div>
          Scheduled
          <Icon name="down arrow" />
        </div>
        <Input icon iconPosition="left">
          <Icon name="search" />
          <input
            onChange={e =>
              filterHandler({ type: "time", value: e.target.value })
            }
          />
        </Input>
      </div>

      <div className="heading">
        <div>Visitor Name</div>
        <Input icon iconPosition="left">
          <Icon name="search" />
          <input
            onChange={e =>
              filterHandler({ type: "name", value: e.target.value })
            }
          />
        </Input>
      </div>

      <div className="heading">
        <div>Note</div>
      </div>

      <div className="heading">
        <div>Host</div>
        <Input icon iconPosition="left">
          <Icon name="search" />
          <input
            onChange={e =>
              filterHandler({ type: "host", value: e.target.value })
            }
          />
        </Input>
      </div>

      <div className="heading">
        <div>Host Company</div>
        <Input icon iconPosition="left">
          <Icon name="search" />
          <input
            onChange={e =>
              filterHandler({ type: "hostCompany", value: e.target.value })
            }
          />
        </Input>
      </div>
    </div>
  );
};

export default FilterInput;
