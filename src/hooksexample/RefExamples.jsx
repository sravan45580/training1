import React, {useEffect,useRef,useState} from 'react'
import VIDEO from "./VIDEO.mp4";
const RefExamples = () => {

    const [ play , setplay ]  =useState(true);
    const eleRef=useRef();
    const videoRef =useRef();
    console.log(videoRef);
    useEffect(()=>{
        eleRef.current.style.colour="teal";
        eleRef.current.innertext="React Ref"
    });
    let playORpause=()=>{
        if(play == true){
            videoRef.current.play();
            console.log(play);
            setplay(false);   
        }else{
            videoRef.current.play();
            console.log(play);
            setplay(true);  

        }
    }
  return (
    <div>
        <h1 ref={eleRef}>RefExamples</h1>
        <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
    </div>
  )
}
export default RefExamples
