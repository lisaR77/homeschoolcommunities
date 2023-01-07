import axios from 'axios';




// export function homeBuilderApi(values) {
// debugger
//     return (dispatch) => {
//     debugger
//         axios
//             .post(`/file/upload`, values )
//             .then((resp) => {
//                 debugger
//                })
//             .catch((err) => {
//                 debugger
//             });
//     };
// }


const homeBuilderApi = async (values, addToast) =>{

    debugger
    await axios
        .post(`https://ca69-111-119-187-54.ngrok.io/api/forms/one`, values )
        .then((resp) => {
            debugger
            addToast(`Successfully Submitted` , {appearance: 'success'});
        })
        .catch((err) => {
            debugger
            addToast(`${err?.response?.data?.error_msg}` , {appearance: 'error'});
        });
}

export default homeBuilderApi
