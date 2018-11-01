import React from 'react';

const FilterContainer = (WrappedComponent) => {
    return (props) => <div><WrappedComponent/></div>;
}

export default FilterContainer;
