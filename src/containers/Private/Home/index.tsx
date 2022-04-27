import React, {FC} from 'react';
import Header from "./Header";
import Card from "./Card";
import Subscribe from "./Subscribe";
import Img1 from '../../../sources/cargImgs/card1.png';
import Img2 from '../../../sources/cargImgs/card2.png';
import Img3 from '../../../sources/cargImgs/card3.png';
import Img4 from '../../../sources/cargImgs/card4.png';
import Img5 from '../../../sources/cargImgs/card5.png';
import Img6 from '../../../sources/cargImgs/card6.png';

import st from './home.module.scss'

const Home: FC = () => {
    const data = [
        {
            id: '0',
            title: 'Supercars',
            img: Img1,
            text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.'
        },
        {
            id: '1',
            title: 'Hotels',
            img: Img2,
            text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.'
        },
        {
            id: '2',
            title: 'Villas/Chalets',
            img: Img3,
            text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.'
        },
        {
            id: '3',
            title: 'Yachts/Boats',
            img: Img4,
            text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.'
        },
        {
            id: '4',
            title: 'Private Helicopter',
            img: Img5,
            text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.'
        },
        {
            id: '5',
            title: 'Private Jet',
            img: Img6,
            text: 'Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.'
        },
    ]
    return (
        <div>
            <Header/>
            <h1 className={st.title}>Book with us</h1>
            <div className={st.container}>
                <div className={st.cards}>
                    {data.map(({id, img, title, text}) =>
                        <Card key={id} src={img} title={title} text={text}/>
                    )}
                </div>
                <Subscribe/>
            </div>
        </div>
    );
};

export default Home;