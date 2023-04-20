import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className="bg-light-blue dib br3 pa3 ma2" 
                type="search" 
                placeholder="Search robot"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;