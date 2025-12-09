function checkAnswer () {
    const correctAnswer="4";

    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    const feedback=document.getElementById('feedback');

    const userAnswerValue = userAnswer.Value
if(userAnswer === correctAnswer){
    
}

    if(!userAnswer){
        feedback.textContent="Please select an answer before submitting!";
        return;  

    } if(userAnswer.value === correctAnswer){
        feedback.textContent="Correct! Well done.";
    } else{
        feedback.textContent="That's incorrect. Try again!";
    }
}
document.getElementById('submit-answer') .addEventListener("click", checkAnswer);