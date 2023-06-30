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
const optioninputs = document.queryselector.All('.option')
const loadQuestion = () => {
  if (index === total) {
    return endquiz()
  }
  reset();
  const data = questions[index]
  console.log(data)
  quesbox.innertext = `${index+1}) ${data.que}`;
  optioninputs[0].getElementSibling.innertext = data.a;
  optioninputs[1].getElementSibling.innertext = data.b;
  optioninputs[2].getElementSibling.innertext = data.c;
  optioninputs[3].getElementSibling.innertext = data.d;
}

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer()
  if (answer === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}

const getAnswer = () => {
  optioninputs.forEach(
    (input) => {
      if (input.checked) {
        return input.value;
      }
    }
  )
}

const reset = () => {
  optioninputs.forEach(
    (input) => {
      input.checked = false;
    }
  )
}

//inital call 
loadQuestion();