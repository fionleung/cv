import React from 'react';
import Card from '../card/Card.js';
import './contentSection.styles.scss'

export default function ContentSection (props) {
    const len=props.projects.length;
    return (
        <div className='sectionBox' id={props.name}>
        <h3>{props.name}</h3>
        {props.projects.map(( {id, ...otherSectionProps })=>(
            <Card key={props.sectionid+'.'+id} lastitem={id!==len} {...otherSectionProps}/>
        ))}
    </div>
    )
   
};