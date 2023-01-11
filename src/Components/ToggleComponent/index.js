import React, {useEffect, useState} from 'react'
import './style.scss'
import { Switch, Space } from 'antd';
import {VotingApi} from "../../API";
import {useToasts} from "react-toast-notifications";

const ToggleComponent = ({name,detail, statusData,handleVote}) => {
    const {addToast}  = useToasts();
    const [vote, setVote] = useState(0);
    const [respData, setRespData] = useState([]);

    // useEffect(()=>{
    //     VotingApi('','','');
    //
    // },[]);

    // const handleVote = (nameData) => {
    //     if(vote === 1){
    //         debugger
    //         setVote(0);
    //     }else{
    //         debugger
    //         setVote(1);
    //
    //         VotingApi(nameData, true, addToast,setRespData);
    //
    //     }
    //
    // }
    // handleVote(name);
    return(
        <section className='toggleWrapperStyle'>
           <span className='spanToggleNumberStyle'>
              {statusData === true ? 1 : 0}
           </span>
            <p className='paraToggleStyle'>
                {detail}
            </p>

            <Switch checkedChildren="Yes" unCheckedChildren="" checked={statusData ? statusData : false} onClick={()=>handleVote(name)}   />

        </section>
    )
}

export default ToggleComponent
