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



//  for (let i=0; i< questions.length; i ++) {
//   const para = document.createElement('div')
//   para.textContent = "{Question [i]}"+ ":" + questions[i].statement
//   para.value=questions[i].answer
//   var btn = document.createElement("button")
//   btn.textContent = "Show Answer"
//   btn.addEventListener("click", e => {
//     questions.forEach(element => {
//       const liElement = document.createElement ("ul")
//       liElement.textContent = element
//       document.getElementById("content").appendChild(liElement)
//     });
//    })
//   document.getElementById("content").append(para, btn)
//  }
 


 