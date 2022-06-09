//Functions
function buildQuiz(){
    const output= [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for(letter in currentQuestion.answers){

                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question}</div>
                <div class="answers"> ${answers.join("")} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join("");
}

function showResults(){}

//variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
//Available questions and answers
const myQuestions = [
    {
        question: "Insert question here",
        answers: {
            a: "first answer",
            b: "second answer",
            c: "third answer"
        },
        correctAnswer: "c"
    },
    {
        question: "Insert question here",
        answers: {
            a: "first answer",
            b: "second answer",
            c: "third answer"
        },
        correctAnswer: "c" 
    },
    {
        question: "Insert question here",
        answers: {
            a: "first answer",
            b: "second answer",
            c: "third answer"
        },
        correctAnswer: "c"
    }
];


//Builds quiz right away
buildQuiz();

//on submit, shows results
submitButton.addEventListener("click", showResults);

