import React from 'react';
import Img from '../../../../sources/subscribe/img.png'
import Shadow from '../../../../sources/subscribe/shadow.png'
import st from './subscribe.module.scss'

const Subscribe = () => {
    return (
        <div className={st.wrapper}>
            <img src={Img} alt=''/>
            <div className={st.shadow}>
                <img src={Shadow} alt=''/>
            </div>

        </div>
    );
};

export default Subscribe;