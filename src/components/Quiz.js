import {useContext} from "react";
import { QuizContext } from "../context/quiz";
import Question from "./Question";

const Quiz = () =>{
    const [quizState, dispatch] = useContext(QuizContext);
    return(
        <div className="quiz">
            {!quizState.showResult && (
            <div>
                
                <div className="score p-2 mx-auto text-light ">
                Question {quizState.currentQuestionIndex  + 1} / {quizState.questions.length}
                </div>
            
                <Question/>
                
                <button className="m-2 Next-btn btn btn-primary btn-group btn-block p-2 " onClick={()=>dispatch({type:'nextQuestion'})}>Next question</button>
            
            </div>
            )}
        
            {quizState.showResult && (
                
                <div className="result m-4 p-2 mx-auto text-light ">
                    
                    Result: {quizState.correctAnswerCount} / {quizState.questions.length}
                    <br></br>
                    {quizState.correctAnswerCount < 4 && (
                        <div>Try harder</div>
                    )}
                    {quizState.correctAnswerCount >= 4 && (
                        <div>Good enough</div>
                    )}
                    <button className="Restart m-4 btn btn-primary btn-group btn-block p-2 " onClick={()=> dispatch({type:"retakeQuiz"})}>Retake Quiz</button>
                </div>
              
            )}
        </div>
    );
};

export default Quiz;