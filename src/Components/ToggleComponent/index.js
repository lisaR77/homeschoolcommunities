import React, {useState} from 'react'
import './style.scss'
import { Switch, Space } from 'antd';
const ToggleComponent = ({detail}) => {
    const [vote, setVote] = useState(0);

    const handleVote = () => {
        if(vote === 1){
            setVote(0);
        }else{
            setVote(1);
        }

    }
    return(
        <section className='toggleWrapperStyle'>
           <span className='spanToggleNumberStyle'>
              {vote}
           </span>
            <p className='paraToggleStyle'>
                {detail}
            </p>

            <Switch checkedChildren="Yes" unCheckedChildren="" onClick={handleVote}  />

        </section>
    )
}

export default ToggleComponent
