import React, {FC} from 'react';
import Logo from "../../../../sources/common/Logo";
import ButtonCallMe from "../../../../sources/common/callMeDecor/buttonCallMe";
import st from './footer.module.scss'

const Footer: FC = () => {
    return (
        <div className={st.footer}>
            <Logo style={st.logoSizes}/>

            <div className={st.footerMenu}>
                <div className={st.blockMenu}>
                    <p>Luxury packages</p>
                    <p>Book with us</p>
                </div>
                <ButtonCallMe/>
                {/*<button type='button' className={st.footerBtn}>Call Me Back</button>*/}
                <div className={st.blockMenu}>
                    <p>Why Lux Trips</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className={st.footerBottom}>
                <p>© 2021 All Rights Reserved | Luxtrips</p>
                <p>Company Site   |   Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;