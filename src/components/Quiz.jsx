import { useCallback, useState } from "react";
import quizData from "../Data/quizData";

function Quiz() {
    const [q_no,setQ_no]=useState(0);
    const [score,setScore]=useState(0);
    const [clickedOption,setClickOption]=useState(-1);
    const changeQues=useCallback(()=>{
        updateScore();
        if(q_no===quizData.length-1){
            setQ_no(0);
            setScore(0)
        }
        else{
            setQ_no(q_no+1);
        }
        function updateScore(){
            
            if(clickedOption===quizData[q_no].answer)setScore(score+1);
        }
        setClickOption(-1);
    },[q_no,clickedOption])
    return (
        <div className="bg-purple-400 h-screen">
            <div className="flex items-center pt-40 flex-col ">
                <div className="text-white text-4xl font-bold">QUIZ APP</div>
                <div className="bg-white h-1/2 w-96 mt-8 flex items-center flex-col rounded-md ">
                    <div className="shadow mt-6 mb-3 p-4">
                        <span>{q_no===6?"":q_no+1}. </span>
                        <span>{quizData[q_no].question}</span>
                    </div>
                    <div className="flex flex-col">
                        {quizData[q_no].options.map((option,i)=>{
                            return <button className="border m-1 p-1" style={{backgroundColor:clickedOption===i+1&&"lightgreen"}} onClick={()=>{setClickOption(i+1)}}>{option}</button>
                        })}
                    </div>
                    <button className="border-2 border-blue-300 text-2xl font-semibold bg-blue-300 m-2 p-2" onClick={changeQues}>{q_no==6?"Start Again":"Next"}</button>
                    <div className="text-xl p-1">your score: {score}</div>
                    
                </div>
            </div>
        </div>
    )
}

export default Quiz;