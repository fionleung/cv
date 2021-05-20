import React from 'react';
import "./card.styles.scss"
import ReactPlayer from 'react-player/lazy';

export default function Card({lastitem,title,content,imgurl,videourl,link,button}){
   
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
        {videourl && <ReactPlayer width='480px' height='270px' url={videourl} />}
            </div>    
    </div>
    <div >
        {lastitem && <hr className='line'/>}
        </div>
     
        </div>
        
    )
  
}

