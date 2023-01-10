import React, {useState} from 'react'
import './style.scss'
import { Switch, Space } from 'antd';
import {VotingApi} from "../../API";
import {useToasts} from "react-toast-notifications";

const ToggleComponent = ({name,detail}) => {
    const {addToast}  = useToasts();
    const [vote, setVote] = useState(0);


    const handleVote = (nameData) => {
        if(vote === 1){
            debugger
            setVote(0);
        }else{
            debugger
            setVote(1);

            // VotingApi(nameData, true, addToast);

        }

    }
    // handleVote(name);
    return(
        <section className='toggleWrapperStyle'>
           <span className='spanToggleNumberStyle'>
              {vote}
           </span>
            <p className='paraToggleStyle'>
                {detail}
            </p>

            <Switch checkedChildren="Yes" unCheckedChildren="" value={true}   />

        </section>
    )
}

export default ToggleComponent
