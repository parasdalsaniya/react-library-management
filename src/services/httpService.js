import axios from "axios";

// axios.interceptors.response.use(null, (error) => {
//     const expectedError =
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status < 500;
//     if (!expectedError) {
//         console.log("Logging the error", error);
//         alert("An unexpected error occurredff");
//     }
//     return Promise.reject(error);
// });

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
