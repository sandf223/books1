import React from "react";

const TabsFiltersItems = ({label, important = false }) => {

    const style = {
      color: important ? 'tomato' : 'black'
    };

    return (
        <div>
            <input type="radio" id="seachComics" name="tab" value="comics" checked></input>
            <label for="seachAll">COMICS</label>
        </div>

        );
};

export default TabsFiltersItems;