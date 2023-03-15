// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

let result = questions.map(a => a.answer)

const btns = document.querySelectorAll('.myButton')
for (let i=0; i< btns.length; i ++) {
  btns[i].addEventListener("click", function (){
    console.log(result[i])
    document.querySelector('.msg').innerHTML = result[i]
  })
}


