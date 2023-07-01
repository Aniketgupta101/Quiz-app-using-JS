const questions = [
  {
    'que': "which of the following is markup language",
    'a': "HTML",
    'b': "CSS",
    'c': "JAVASCRIPT",
    'd': "PHP",
    'correct': "a",
  },
  {
    'que': "which of the following is style language",
    'a': "HTML",
    'b': "CSS",
    'c': "JAVASCRIPT",
    'd': "PHP",
    'correct': "b",
  },
  {
    'que': "which of the following is backend language",
    'a': "HTML",
    'b': "CSS",
    'c': "JAVASCRIPT",
    'd': "PHP",
    'correct': "d",
  },
  {
    'que': "which of the following is markup language",
    'a': "HTML",
    'b': "CSS",
    'c': "JAVASCRIPT",
    'd': "PHP",
    'correct': "a",
  },
  {
    'que': "which of the following is markup language",
    'a': "HTML",
    'b': "CSS",
    'c': "JAVASCRIPT",
    'd': "PHP",
    'correct': "a",
  }
]

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll(".option")
const LoadQuestion = () => {
  if(index ===total){
    return endQuiz()
  }
  resetoptions();
  const data = questions[index]
  console.log(data)
  quesbox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer()
  if (ans === data.correct) {
      right++;
    } else {
      wrong++;
    }
    index++;
    LoadQuestion();
    return;
}

const getAnswer = () => {
  let answer;
  optionInputs.forEach(
    (input) => {
      if (input.checked) {
        answer = input.value;
      }
    }
  )
  return answer;
}

const resetoptions = () => {
  optionInputs.forEach(
    (input) => {
input.checked = false
    }
  )
}

const endQuiz = () => {
  document.getElementById("box").innerHTML =`
  <h3> Thank you for playing the Quiz</h3>
  <h2>${right} / ${total} are correct </h2>
  `
}

//initial call
LoadQuestion();