import React from 'react'
import "./Menu.css"

export const Menu:React.FC = () => {
  return (
    <>
        <div className='menu-parents'>
         
            <div style={{marginTop:"2cm"}}>

                <div className='menu-list' >
                    <b>Join Room</b>
                </div>

                <div className='menu-list' >
                    <b>Create Room</b> 
                </div>
                
            </div>

        </div>
    </>
  )
}
