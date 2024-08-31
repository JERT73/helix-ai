import React from 'react'

const Card = ({text, image}) => {
  return (
    <div className='
        p-3 rounded-lg min-w-[180px]
        h-[200px] relative cursor-pointer
        hover:shadow-inner shadow-black
        transition-all duration-150 ease-in-out
        bg-gradient-to-r from-c2 via-c3 to-c4
        hover:bg-gradient-to-l hover:from-c2 hover:via-c3 hover:to-c4
    '>
        <p className='
            text-[19px] text-c1 font-medium
        '>
            {text}
        </p>
        <img src={image} className='
            w-[35px] p-2 absolute rounded-xl 
            bottom-[10px] right-[10px]
        '/>
    </div>
  )
}

export default Card