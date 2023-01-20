import axios from 'axios';


const homeBuilderApi = async (values, addToast, resetForm, setLoading, setCheckedBox) =>{
    setLoading(true);
    debugger
    await axios
        .post(`http://68.178.207.95:3000/api/forms/one`, values )
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
        .post(`http://68.178.207.95:3000/api/forms/two`, values )
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
        .post(`http://68.178.207.95:3000/api/forms/three`, values )
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










export const VotingApi = async (body, addToast, setData, setLoading) =>{

    debugger
    if(body !== ""){
      setLoading(true)
        await axios
            .post(`http://68.178.207.95:3000/api/poll`, body )
            .then((resp) => {
                debugger
                setData(resp?.data);
                setLoading(false)
                addToast(`Successfully Submitted` , {appearance: 'success'});
            })
            .catch((err) => {
                debugger
                setLoading(false)
                addToast(`${err?.response?.data?.error_msg}` , {appearance: 'error'});
            });
    }else{
        await axios
            .post(`http://68.178.207.95:3000/api/poll`, {} )
            .then((resp) => {
                debugger
                setLoading(false)
                setData(resp?.data);
            })
            .catch((err) => {
                debugger
                setLoading(false)
                addToast(`${err?.response?.data?.error_msg}` , {appearance: 'error'});
            });

    }


}




export const VotingApiFirst = async (body, addToast, setData,setLoading) =>{

    debugger
    if(body !== ""){
        setLoading(true)
        await axios
            .post(`http://68.178.207.95:3000/api/poll`, body )
            .then((resp) => {
                debugger
                setData(resp?.data);
                setLoading(false)
            })
            .catch((err) => {
                debugger
                setLoading(false)
                addToast(`${err?.response?.data?.error_msg}` , {appearance: 'error'});
            });
    }


}


