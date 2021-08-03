import React from 'react';

import './card-list.styles.css';

export const CardList = props => {
    console.log(props)
    return <div className='card-list'>{props.monsters.map(monsters =>
        (<h1 key={monsters.id}>{monsters.name}</h1>))}</div>;
};