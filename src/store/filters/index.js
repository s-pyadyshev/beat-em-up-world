const filters = (state = {}, action) => {
    switch (action.type) {
      case 'FILTER_DATA':
        console.log('filtered')
        return state;
      default:
        return state;
    }
};

export default filters;
