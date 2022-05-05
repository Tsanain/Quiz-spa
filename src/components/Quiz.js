import {useContext} from "react";
import { QuizContext } from "../context/quiz";
import Question from "./Question";

const Quiz = () =>{
    const [quizState, dispatch] = useContext(QuizContext);
    return(
        <div className="quiz">
            {!quizState.showResult && (
            <div>
                
                <div className="score">
                Question {quizState.currentQuestionIndex  + 1} / {quizState.questions.length}
                </div>
            
                <Question/>
                
                <button className="Next-btn" onClick={()=>dispatch({type:'nextQuestion'})}>Next question</button>
            
            </div>
            )}
        
            {quizState.showResult && (
                <div className="result">
                    Result {quizState.correctAnswerCount} / {quizState.questions.length}
                    <br></br>
                    <button className="Restart" onClick={()=> dispatch({type:"retakeQuiz"})}>Retake Quiz</button>
                </div>
              
            )}
        </div>
    );
};

export default Quiz;