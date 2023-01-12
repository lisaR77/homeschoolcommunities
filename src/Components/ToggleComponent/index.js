import React from 'react'
import './style.scss'
import { Switch } from 'antd';

const ToggleComponent = ({name,detail, statusData,handleVote}) => {
   

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
