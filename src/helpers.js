export const shuffleAnwser = (question) =>{
    const rawAnswer = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ];

    return rawAnswer.map(answer => ({sort: Math.random(), 
        value: answer})).sort((a, b) => a.sort -b.sort).map((obj)=> obj.value);

};