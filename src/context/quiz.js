import {createContext, useReducer} from "react"; 
import questions from "../data.js";
import { shuffleAnwser } from "../helpers.js";

const initialState = {
    questions,
    currentQuestionIndex: 0,
    showResult: false,
    correctAnswerCount: 0,
    answers: shuffleAnwser(questions[0]),
    selectedOption: "",

};

const reducer = (state, action) => {
    switch(action.type){
        case "nextQuestion": {
           const showResult = state.currentQuestionIndex+1 === state.questions.length;
           const currentQuestionIndex = showResult ? state.currentQuestionIndex : state.currentQuestionIndex+1;  
           const answers = showResult ? [] : shuffleAnwser(state.questions[currentQuestionIndex]);
           return{
                ...state,
                currentQuestionIndex,
                showResult,
                answers,
                selectedOption: ""
            }
        }
        case "retakeQuiz": {
            return initialState;
        }

        case "checkAnswer":{
            const correctAnswerCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ? state.correctAnswerCount + 1 : state.correctAnswerCount;
            return{
                ...state,
                selectedOption: action.payload,
                correctAnswerCount
            }
        }
        default:
            return state;
    }

};

export const QuizContext = createContext();

export const QuizProvider = ({children}) =>{
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value = {value}> {children} </QuizContext.Provider>;
};