import React from 'react';
import Rectangle from '../../../../sources/subscribe/Rectangle'
import WhiteDecorBtn from "../../../../sources/common/whiteDecorBtn";
import st from './subscribe.module.scss'


const Subscribe = () => {
    return (
        <div className={st.wrapper}>
            <span className={st.frame}>
                <Rectangle/>
            </span>
            <p className={st.title}>Get weekly inspiration and expert advice
                <span>Sign up for our Weekly Newsletter</span>
            </p>
            <form className={st.subsForm}>
                <input type="email" placeholder='Email address' className={st.subsFormInput}/>
                <button className={st.subsFormBtn}>Subscribe
                    <WhiteDecorBtn/>
                </button>

            </form>
            <div className={st.shadow}></div>
        </div>
    );
};

export default Subscribe;