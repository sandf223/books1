import React from "react";
//import TabsFiltersItems from "./App-Tabs-Filters-Items";
//import './';
/*
const tabFilters = [
    {
        value: "comics",
        title: "COMICS",
        selected: false
    },
    {
        value: "creators",
        title: "CREATORS",
        selected: true
    }
]
*/
// prop.selectedValue = "comics"

// class SearchOption extends ReactComponent {
//     render() {
//         const { value, title, selected } = self.value;

//         return (
//             <input />
//         )
//     }
// }

// class SearchOptionsList extends ReactComponent {
//     render() {
//         return (
//             <div clasaName="vasia">
//                 {tabFilters.map((el) => <SearchOption value={el} />)}
//             </div>
//         );
//     }
// }

const TabsFilters = () => {
    return (
        <div class='filter-cart'>
            <input type="radio" id="seachComics" className='tabs1' name="tab" value="comics"></input>
            <label for="seachAll">COMICS</label>

            <input type="radio" id="seachCreators" className='tabs1'  name="tab" value="creators" ></input>
            <label for="seachAll">CREATORS</label>

            <input type="radio" id="seachEvents" className='tabs1'  name="tab" value="events" ></input>
            <label for="seachAll">EVENTS</label>

            <input type="radio" id="seachSeries" className='tabs1'  name="tab" value="series" ></input>
            <label for="seachAll">SERIES</label>

            <input type="radio" id="seachStories" className='tabs1'  name="tab" value="stories" ></input>
            <label for="seachAll">STORIES</label>
        </div>
    );
};

window.onload = function() {
    document.getElementById('seachComics').checked = true;

};



export default TabsFilters;