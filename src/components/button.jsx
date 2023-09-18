import React from 'react'

const button = ({ButtonText}) => {
  return (
    <div>
         <button className=' bg-title_color text-white rounded-lg   px-9 py-3 border-yelow fancy-button  hover:duration-300 hover:shadow-sm  hover:transform hover:-translate-y-1  transition-transform duration-300 '>
        {ButtonText}
      </button>
    </div>
  )
}

export default button