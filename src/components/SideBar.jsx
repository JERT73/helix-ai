import React, { useContext, useState } from 'react'
import { history_icon, menu_icon, message_icon, question_icon, setting_icon } from '../assets/icons'
import { plus_icon } from '../assets/icons'
import { Context } from '../context/context';

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context);

  // function toggleExtended(){
  //   if (extended){
  //     setExtended(e => !e)
  //   } else {
  //     setExtended(e => !e)
  //   }
  // }
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt)
  }


  return (
    <header className={`
      side-bar
      min-h-screen inline-flex flex-col
      justify-between px-[15px] py-[25px]
      font-palanquin bg-gray-950 border-solid
      ${extended ? 'w-70': 'w-20'} border-r-2 border-c3
    `}>
        <div className='
        
        '>
          <img src={menu_icon} alt='hamburger-icon' 
          style={{
            filter: 'invert(40%) sepia(100%) saturate(2000%) hue-rotate(200deg)',
          }}
          className={`
            side-bar-img block ${extended ? 'ml-[10px]' : 'ml-[15px]'} cursor-pointer mb-1
          `} onClick={() => setExtended(prev => !prev)}/>
          <div className='
            bg-gradient-to-r from-c2 via-c3 to-c4
            mt-[10px] inline-flex items-center gap-2 py-[10px] px-[15px]
            rounded-full cursor-pointer text-black
            cursor-pointer text-sm bg-gray-300 border-solid
            transition-all duration-500 ease-in-out
            shadow-inner shadow-black
            hover:bg-gradient-to-l hover:from-c2 
            hover:via-c3 hover:to-c4
          ' onClick={() => newChat()}>
            <img src={plus_icon} alt='plus-icon' className='
              side-bar-img
            '
            style={{
              filter: 'invert(1) grayscale(1) brightness(0)',
            }}
            />
            {extended && <p className='
              font-md
            '>
              New Chat
            </p>}
            
          </div>
          { extended &&
          <div className='
            flex flex-col
          '>
            <p className='
              mt-7 mb-5 font-bold font-montserrat text-c3
            '>
              Recent
            </p>
            <div className='
              flex flex-col gap-1 h-[280px] overflow-y-scroll
              scrollbar-hide py-1
            '>
              {prevPrompt.map((prompt, index) => {
                return (
                  <div className='
                    shadow-inner shadow-black
                    hover:bg-gradient-to-l hover:from-c2 
                    hover:via-c3 hover:to-c4
                    flex items-center gap-3 p-3 pr-10 rounded-full
                    text-black bg-gradient-to-r from-c2 via-c3 to-c4
                    fade-in
                  ' onClick={() => loadPrompt(prompt)}>
                    <img src={message_icon} alt='message-icon' className='
                      side-bar-img
                    ' style={{
                      filter: 'invert(1) grayscale(1) brightness(0)',
                    }}/>
                    <p>{prompt.slice(0, 18)}...</p>
                  </div>
                )
              })}            
            </div>
          </div>}
        </div>
        <div className='
          flex flex-col gap-2 
          text-gray-500
        '>
          <div className={`
            bottom-div-options ${extended ? 'gap-2' : null}
          `}>
            <img src={question_icon} alt='question-icon' className='
              side-bar-img
            '
            style={{
              filter: 'invert(31%) sepia(93%) saturate(736%) hue-rotate(202deg) brightness(90%) contrast(90%)',
            }}
            />
            {extended && <p className='
              text-c2
            '>Help</p>}
          </div>
          <div className={`
            bottom-div-options ${extended ? 'gap-2' : null}
          `}>
            <img src={history_icon} alt='question-icon' className='
              side-bar-img
            ' style={{
              filter: 'invert(37%) sepia(39%) saturate(487%) hue-rotate(188deg) brightness(95%) contrast(90%)',
            }}
            />
            {extended && <p className='
              text-c3
            '>Activity</p>}
          </div>
          <div className={`
            bottom-div-options ${extended ? 'gap-2' : null}
          `}>
            <img src={setting_icon} alt='question-icon' className='
              side-bar-img
              ' style={{
                filter: 'invert(81%) sepia(10%) saturate(128%) hue-rotate(77deg) brightness(95%) contrast(105%)',
              }}
              />
            {extended && <p className='
              text-c4
            '>Settings</p>}
          </div>
        </div>
    </header>
  )
}

export default SideBar