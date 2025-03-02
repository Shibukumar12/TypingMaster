import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import Input from './Input'
import speakerOn from '../assets/speakerOn.png'
import speakerOof from '../assets/speakerOof.jpg'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import{UpdaterrorScore,UpdateScore,UpdateAccuracy} from './Store/Slicing'
import typing from '../assets/typing.mp4'
import gameoversound from '../assets/gameoversound.wav'

function TypingTemplete() {

  const lines = [
    "the sun rises, painting the sky with hues of gold through this",
    "birds chirp melodiously announcing the arrival of dawn's",
    "dew-kissed grass glistens reflecting the morning's gentle on",
    "a gentle breeze whispers secrets through the rustling leaves",
    "mountains stand tall guardians of ancient tales untold color",
    "rivers meander lazily carving paths through verdant world i",
    "flowers bloom their vibrant colors dancing in the sunlight",
    "time marches on a relentless force shaping the world your",
    "dreams take flight carried on wings of hope and ambition a",
    "life's symphony plays on each note a story unfolding on ear"
  ];
  let randomvalue=useRef( Math.floor(Math.random()*lines.length))
  const [Timer,setTimer]=useState(60)
  const [Minute,setMinute]=useState(1)
  const [index,setindex]=useState(0)
  const [SoundOn,setSoundOn]=useState(true)
  const [hastimerStarted, setHastimerStarted] = useState(false);
  const [userTyping,setUserTyping]=useState('')
  const [Answer,setAnswer]=useState('')
  const [isAciveClass,setsiActiveClass]=useState('Basic')
  const [InputPara,setInputPara]=useState(lines[randomvalue.current])
  const [InputParaArray,setInputParaArray]=useState(lines[randomvalue.current].split(" "))
  const typingVoice=useRef(new Audio(typing))
  const GameOverSound= useRef(new Audio(gameoversound))
  const selector = useSelector(state=>state.Typingmaster)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [colorChanger,setcolorChanger]=useState([])    // to change the color of the word after user type it correctly or not
  
  
  const handleClass=(btnClass)=>{
    setsiActiveClass(btnClass)
  }


//set the process function of the game ...............................................
  const Process=()=>{

        // check the user Answer and update Score and Error in Global State
        if(userTyping === InputParaArray[index]){            
            dispatch(UpdateScore( Minute ))
            colorChanger.push('text-green-500 font-bold')
            setindex(index+1)
            setAnswer(true)
            setUserTyping('')
          
        }
        else{
            dispatch(UpdaterrorScore())
            colorChanger.push('text-red-500 font-bold border-b-2 border-red-500')
            setAnswer(false)
            setindex(index+1)
            setUserTyping('')
        }
        
        
         //  after complete the line by user then show the another new line on the UI
        if( InputParaArray.length-1 === index){         
            randomvalue.current= Math.floor(Math.random()*lines.length)
            setInputPara(lines[randomvalue.current])
            setInputParaArray(lines[randomvalue.current].split(' '))
            setcolorChanger([])
            setindex(0)
          
        }

     dispatch(UpdateAccuracy())
  }

// ********************************************************************************************************************



// Timer function to start the timer and stop the timer after 0 ........................................
const startTimer = () => {
    if (!hastimerStarted) {
       setHastimerStarted(true); 
     let timerRef = setInterval(() => {
        setTimer((prev) => {
          if (prev > 0){
             return prev - 1;
          }
          else{
              clearInterval(timerRef); // Stop timer at 0
              navigate('/Typing-scoreCard')
              
              if(SoundOn){ 
                GameOverSound.current.play()
              }
              return 0;
          }
        });
      }, 1000);
    }
  };

// ********************************************************************************************************************



// if user press any button then start processing and fuctions like score , error ,timer also ......................
  const handleKeyUp=(event )=>{
      if(SoundOn){
          typingVoice.current.play()
      }

      if(event.code==='Space'){
          Process()
      }

      if(event.key) startTimer()
      
  }
// ********************************************************************************************************************



  
  // control the sound on and off ..............................................
  const handleSoundToggle=()=>{
    setSoundOn(!SoundOn)
  }

  if(!SoundOn){
    typingVoice.current.pause()
    GameOverSound.current.pause()
  } 
// *****************************************************************************

  return (
    <>
       <div className=' h-screen bg-black grid grid-rows-12'>

            <div className=' flex justify-center items-center gap-7  row-span-2 '>
                <Button onClick={()=>handleClass('Basic')} children='Basic' className= {`py-2 px-6 rounded-2xl ${isAciveClass ==='Basic' ? 'bg-[#9b50ba]' : <></>} text-white`}/>
                <Button onClick={()=>handleClass('Classic')} children='Classic' className={`py-2 px-5 rounded-2xl ${isAciveClass === 'Classic' ? 'bg-[#9b50ba]' : <></>} text-white`}/>
                <Button onClick={()=>handleClass('Advanced')} children='Advanced' className={`py-2 px-4 rounded-2xl ${isAciveClass === 'Advanced' ? 'bg-[#9b50ba]' : <></>} text-white`}/>
            </div>

            <div className='flex justify-evenly items-center  row-span-4  text-white '>
                <div className=' border-8 text-center rounded-full border-green-400 flex justify-center items-center w-36 h-36'>
                  <h2 className=' text-3xl  font-mono'>{Timer}</h2>
                </div>

                <div className=' border py-6 px-10 rounded-2xl'>
                  <h3 className=' font-bold text-xl'>Accuracy</h3>
                  <p className=' text-center text-2xl'>{selector.accuracy} %</p>
                </div>

                <div className=' border py-6 px-10 rounded-2xl'>
                  <h3 className=' font-bold text-xl'>words-mins</h3>
                  <p className=' text-center text-2xl'>{selector.wpm} WPM</p>
                </div>

                <div className=' border py-6 px-14 rounded-2xl'>
                  <h3 className=' font-bold text-xl'>Errors</h3>
                  <p className=' text-center text-2xl'>{selector.error}</p>
                </div>
            </div>

            <div className=' flex items-center justify-around row-span-1 text-white'>
                <div className=' flex items-center gap-5'>
                    <h4>Complexity</h4>
                    <Button children='Easy' className='bg-[#9b50ba] rounded-xl py-1 px-4'/>
                    <Button children='Medium' className='bg-[#9b50ba] rounded-xl py-1 px-4'/>
                    <Button children='Hard' className='bg-[#9b50ba] rounded-xl py-1 px-4'/>
                </div>
                <div className=' flex items-center gap-5'>
                    <h4>Mode</h4>
                    <Button onClick={()=>{setTimer(60);
                       setMinute(1) }} children='1 Minute' className={` ${Minute === 1 ? 'bg-[#9b50ba] ' : 'border'}   rounded-xl py-1 px-4`}/>
                    <Button onClick={()=>{setTimer(180); 
                       setMinute(3) }} children='3 Minute' className={` ${Minute === 3 ? 'bg-[#9b50ba] ' : 'border'}   rounded-xl py-1 px-4`}/>
                    <Button onClick={()=>{setTimer(300); 
                       setMinute(5) }} children='5 Minute' className={` ${Minute === 5 ? 'bg-[#9b50ba]' : 'border'}   rounded-xl py-1 px-4`}/>
                </div>
                <div>
                    <img className=' cursor-pointer w-10' onClick={handleSoundToggle}  src={`${SoundOn ? speakerOn : speakerOof}`} alt="" />
                </div>
            </div>

            {/* <div className=' flex justify-center items-center row-span-2 '>
                <Input readOnly ClassName=' w-[55%] text-3xl' value={InputPara}/> 
            </div> */}
            <div className='flex justify-center items-center gap-x-7 row-span-2 rounded-xl '>
                <div className='border-2 w-[59%] py-4 flex justify-center items-center gap-x-2  rounded-2xl bg-white'>
                    {    
                      InputParaArray.map((word,idx)=>{
                        return(
                          <span key={idx}   className={`text-3xl ${colorChanger[idx] || 'text-black font-bold'}`}>{word} </span>
                        )
                      })
                    }
                </div>
            </div>

            <div className=' flex justify-center items-center row-span-3 '>
                 <Input onChange={(e)=>setUserTyping(e.target.value.trim())} value={userTyping} onKeyUp={handleKeyUp}  ClassName=' w-[42%] text-3xl placeholder-green-600 placeholder:text-2xl placeholder:font-bold' placeholder='Start Typing Here ....' /> 
            </div>

       </div>
    </>
  )
}

export default TypingTemplete