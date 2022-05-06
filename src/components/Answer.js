const Answer = ({answerText, index, selectedOption, correctAnswer, onSelectOption}) =>{
    const optionNumber = ["a", "b", "c", "d"];
    const isCorrect = selectedOption && answerText === correctAnswer;
    const isWrong = selectedOption === answerText && selectedOption !== correctAnswer;
    const correctOptionClass = isCorrect ? "correct-answer bg-success": "";
    const wrongOptionClass = isWrong ? "wrong-answer bg-danger": "";
    const disableOption = selectedOption ? "disable-option " : "";
    return (
        <div className="m-2  Option  " onClick={() => onSelectOption(answerText) }>
        <button className={`ans w-50 btn-group-lg btn-block btn lightgrey ml-0 p-auto text-right shadow p-4 mb-4 ${correctOptionClass} ${wrongOptionClass} ${disableOption}`} >{answerText}</button>
        </div>
    );
}

export default Answer;
