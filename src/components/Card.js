import React from 'react'

export default function Card(props) {
  return (
    <div>
         <img src={props.img} alt='Boy'/> 
           <span className='font-medium'>{props.subtitle1}</span>
           <span className='font-light'>{props.subtitle2}</span>
           <span className='font-light'>{props.subtitle3}</span>
           <p>
           {props.title}
           </p>
           <p>
           <span className='font-bold'>{props.subtitle4} </span>
           {props.title2}
           </p>
    </div>
  )
}
