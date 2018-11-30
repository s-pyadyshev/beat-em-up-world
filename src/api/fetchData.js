import 'whatwg-fetch';

const fetchData = url => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error();
            }
            return response;
        })
        .then((response) => response.json())
    }

export default fetchData;
