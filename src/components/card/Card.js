import React from 'react';
import {useWindowDimensions} from '../useWindowDimensions';
import "./card.styles.scss"
import ReactPlayer from 'react-player/lazy';

export default function Card({lastitem,title,content,imgurl,videourl,link,button}){
    const {width}=useWindowDimensions()
    const videowidth= width>920?480:Math.floor(width*0.8)
    const videoheight=Math.floor(videowidth*9/16)
   
    return (
        <div>
        <h2>{title}</h2>
        <div className='projectRow'>
            <div className='detailbox'>
            <ul>
            {content.map((point,id) =><li key={title+'.'+id}>{point}</li>)}
           </ul>
           <div className='btnrow'> <a href={link}><button>{button}</button></a></div>
            </div>
        <div className='mediabox'>
        {imgurl && <img src={imgurl} alt='sample' />}
        {videourl && <ReactPlayer width={videowidth+'px'} height={videoheight+'px'} url={videourl} />}
            </div>    
    </div>
    <div >
        {lastitem && <hr className='line'/>}
        </div>
     
        </div>
        
    )
  
}

