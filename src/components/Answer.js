const Answer = ({answerText, index, selectedOption, correctAnswer, onSelectOption}) =>{
    const optionNumber = ["a", "b", "c", "d"];
    const isCorrect = selectedOption && answerText === correctAnswer;
    const isWrong = selectedOption === answerText && selectedOption !== correctAnswer;
    const correctOptionClass = isCorrect ? "correct-answer": "";
    const wrongOptionClass = isWrong ? "wrong-answer": "";
    const disableOption = selectedOption ? "disable-option" : "";
    return (
        <div className="Option" onClick={() => onSelectOption(answerText) }>
        <button className={` ${correctOptionClass} ${wrongOptionClass} ${disableOption}`}>{optionNumber[index]}. {answerText}</button>
        </div>
    );
}

export default Answer;
