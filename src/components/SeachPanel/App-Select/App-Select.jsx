import React from "react";
import Select from "react-select";

import options from "./App-Select-Items";

class MySelect extends React.Component {        
    render() {
        const { onChange } = this.props;
        return (
            <Select 
                id="filter"
                className="filter"
                onChange={onChange}
                options={options}
                defaultValue={options[0]}
            />
        );
    }
}

export default MySelect;

