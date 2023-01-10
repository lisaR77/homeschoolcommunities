import React from 'react'
import  './style.scss'

const LivingComponent  = ({detail, image}) => {
    return(
        <section className='livingComponentWrapper'>

            <div className='livingImageWrapper'>
                <img src={image} alt=""/>

            </div>
            <p className='paraLiving'>
                {detail}
            </p>

        </section>
    )

}

export default LivingComponent
