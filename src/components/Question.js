import {useContext} from "react";
import { QuizContext } from "../context/quiz";
import Answer from "./Answer";

const Question = () =>{
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    return(
        <div>
            <div className="question mx-auto text-light">{currentQuestion.question}</div>
            <div className="answers btn-block btn-block p-4">
                {quizState.answers.map((answer, index) => (
                    <Answer answerText = {answer} key ={index} index = {index} selectedOption ={quizState.selectedOption} correctAnswer = {currentQuestion.correctAnswer} onSelectOption={
                (answerText) =>
                        dispatch({type: "checkAnswer", payload: answerText})
                    }/>
                ))}
            </div>
        </div>
    );

}

export default Question;