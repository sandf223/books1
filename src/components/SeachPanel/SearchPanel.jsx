import React from "react";
import './SearchPanel.css';

class SearchPanel extends React.Component {
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            const { onKeyPress } = this.props;
            const inputValue = event.target.value;
            const value = inputValue === '' ? null : inputValue;

            onKeyPress(value)
        };
    }
    render() {
        return (
            <input
                className='input-search'
                placeholder="Search"
                id="search"
                onKeyPress={this.handleKeyPress.bind(this)}
            />
        );
    };
}

export default SearchPanel;
