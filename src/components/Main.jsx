import React, { useContext } from 'react';
import { gallery_icon, gemini_icon, mic_icon, send_icon, user_icon } from '../assets/icons';
import { cards } from '../constants';
import Card from './Card';
import { Context } from '../context/context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className='
      flex flex-col relative min-h-screen flex-1
      bg-gray-950 pb-[15vh]
    '>
      <div className='
        flex bg-gray-950 h-[70px] justify-between 
        items-center w-full p-5 text-[22px] border-c3
      '>
        <p className='font-bold text-c4'>Helix</p>
        <img src={user_icon} alt='user-icon' className='object-contain rounded-full' height={40} width={40} />
      </div>
      <div className='max-w-[900px] m-auto pb-6 w-full'>
        {!showResult ? (
          <>
            <div className='
              my-[50px] mx-0 font-palanquin text-[56px]
              font-bold p-3 leading-tight text-center text-start
            '>
              <p className='text-c3'>
                Hello,&nbsp;
                <span className='text-c4'>Dev</span>
              </p>
              <p className='text-c3'>How can I help you today?</p>
            </div>
            <div className='
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
              gap-4 p-4
            '>
              {cards.map((card) => (
                <Card key={card.text} {...card} />
              ))}
            </div>
          </>
        ) : (
          <div className='
            w-full max-w-[900px]
            py-0 px-[5%] max-h-[70vh] overflow-y-scroll mb-6
            scrollbar-hide rounded-2xl bg-gradient-to-r from-c2 via-c3 to-c4
          '>
            <div className='
              my-[40px] mx-0 flex items-center gap-5
            '>
              <img src={user_icon} alt='user-icon' className='w-10 rounded-full' />
              <p className='text-c1 font-bold text-[18px]'>{recentPrompt}</p>
            </div>
            <div className='flex items-start gap-5'>
              <img src={gemini_icon} alt='ai-icon' className='w-10 h-10' />
              {loading ? (
                <div className='w-full flex flex-col gap-3 pb-10'>
                  <hr className='rounded-[4px] border-none bg-gradient-to-r from-c4 via-c3 to-c2 h-5 animate-pulse-1' />
                  <hr className='rounded-[4px] border-none bg-gradient-to-r from-c4 via-c3 to-c2 h-5 animate-pulse-2' />
                  <hr className='rounded-[4px] border-none bg-gradient-to-r from-c4 via-c3 to-c2 h-5 animate-pulse-3' />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className='font-medium text-c1 mb-7 text-[17px] leading-7'
                ></p>
              )}
            </div>
          </div>
        )}

        <div className='
          absolute bottom-0 w-full max-w-[900px]
          py-1 px-5 m-auto
        '>
          <div className='
            bg-gradient-to-r from-c2 via-c3 to-c4
            flex gap-3 sm:gap-5 items-center justify-between py-3 px-5
            rounded-full shadow-inner shadow-black
          '>
            <input
              type='text'
              placeholder='Enter Prompt'
              className='
                bg-transparent
                placeholder-c1 text-[16px] sm:text-[18px]
                font-palanquin outline-none flex-1
              '
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div className='flex gap-1 sm:gap-3 items-center'>
              <img src={gallery_icon} width={20} height={20} className='sm:w-[25px] sm:h-[25px]' />
              <img src={mic_icon} width={20} height={20} className='sm:w-[25px] sm:h-[25px]' />
              {input && 
                <img src={send_icon} width={20} height={20} className='sm:w-[25px] sm:h-[25px]' onClick={() => onSent()} />
              }
            </div>
          </div>
          <p className='text-c4 pb-2 pt-1 text-[10px] sm:text-[12px] text-center'>
            Gemini may display inaccurate info, including about people, 
            so double-check its responses.&nbsp;
            <a className='underline' href='#'>
              Your privacy and Gemini Apps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
