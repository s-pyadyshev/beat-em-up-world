// import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from './../actions';

// function fetchPosts() {
//     const URL = "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/beatemups.json";
//     return fetch(URL, { method: 'GET'})
//        .then( response => Promise.all([response, response.json()]));
//   }

// const apiClient = () => {
//     return (dispatch) => {
//         dispatch(fetchPostsRequest());
//         return fetchPosts().then(([response, json]) =>{
//           if(response.status === 200){
//             dispatch(fetchPostsSuccess(json))
//           }
//           else{
//             dispatch(fetchPostsError())
//           }
//         })
//       }
// };

// export default apiClient;
