import React from 'react';
import Logo from '../../../../sources/common/Logo'
import ButtonCallMe from "../../../../sources/common/callMeDecor/buttonCallMe";
//styles
import st from './header.module.scss'

const Header: React.FC = () => {
    return (
        <div className={st.header}>
            <Logo/>
            <ul className={st.menu}>
                <li className={st.menuItem}>Home</li>
                <li className={st.menuItem}>Luxury packages</li>
                <li className={st.menuItem}>Book with us</li>
                <li className={st.menuItem}>Why Lux Trips</li>
                <li className={st.menuItem}>Contact</li>
                <li className={st.menuItem}>Client Area</li>
            </ul>
            <ButtonCallMe/>
        </div>
    );
};

export default Header;