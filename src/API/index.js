import axios from 'axios';


const homeBuilderApi = async (values, addToast, resetForm, setLoading, setCheckedBox) =>{
    setLoading(true);

    debugger
    await axios
        .post(`https://b96d-103-193-18-5.ngrok.io/api/forms/one`, values )
        .then((resp) => {
            debugger
            resetForm({values: ''});
            setLoading(false);
            setCheckedBox({home_builder: false, commercial_builder: false})
            addToast(`Successfully Submitted` , {appearance: 'success'});
        })
        .catch((err) => {
            debugger
            setLoading(false);
            addToast(`${err?.response?.data?.error_msg}` , {appearance: 'error'});
        });
}

export default homeBuilderApi



export const RealtorBuilderApi = async (values, addToast, resetForm,setLoading, setCheckedBox) =>{

    setLoading(true);
    debugger
    await axios
        .post(`https://b96d-103-193-18-5.ngrok.io/api/forms/two`, values )
        .then((resp) => {
            debugger
            setLoading(false);
            resetForm({values: ''});
            setCheckedBox(false);
            addToast(`Successfully Submitted` , {appearance: 'success'});
        })
        .catch((err) => {
            debugger
            setLoading(false);
            addToast(`${err?.response?.data?.error_msg}` , {appearance: 'error'});
        });
}





export const ThirdFormBuilderApi = async (values, addToast, setLoading, setCheckedBox,resetForm) =>{
    setLoading(true);
    debugger
    await axios
        .post(`https://b96d-103-193-18-5.ngrok.io/api/forms/three`, values )
        .then((resp) => {
            debugger
            setLoading(false);
            resetForm({values: ''});
            setCheckedBox({homeschool: false, teacher_or_skilled: false,wish_we_had: false, advocate_for: false})
            addToast(`Successfully Submitted` , {appearance: 'success'});
        })
        .catch((err) => {
            debugger
            setLoading(false);
            addToast(`${err?.response?.data?.error_msg}` , {appearance: 'error'});
        });
}










export const VotingApi = async (nameData, status, addToast) =>{

    debugger
    if(nameData !== ''){
        const body ={
            nameData: status
        }
        await axios
            .post(`https://b96d-103-193-18-5.ngrok.io/api/poll`, body )
            .then((resp) => {
                debugger
                // setRespData(resp?.data);
                addToast(`Successfully Submitted` , {appearance: 'success'});
            })
            .catch((err) => {
                debugger
                addToast(`${err?.response?.data?.error_msg}` , {appearance: 'error'});
            });
    }else{
        await axios
            .post(`https://b96d-103-193-18-5.ngrok.io/api/poll`, {} )
            .then((resp) => {
                debugger
                addToast(`Successfully Submitted` , {appearance: 'success'});
            })
            .catch((err) => {
                debugger
                addToast(`${err?.response?.data?.error_msg}` , {appearance: 'error'});
            });

    }


}


