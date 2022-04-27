import React from 'react';
import Top from './LayerT';
import Sub from './Subtract';
import Bot from './LayerB';
import st from './whiteDecorBtn.module.scss'

const WhiteDecorBtn = () => {
    return (
        <div className={st.wrapper}>
            <div className={st.top}>
                <Top/>
            </div>
            <div className={st.sub}>
                <Sub/>
            </div>
            <div className={st.bot}>
                <Bot/>
            </div>
        </div>
    );
};

export default WhiteDecorBtn;