
let Qtitle = document.getElementById("Qtitle")
let OPP = document.getElementById("OPP")
let OPP1 = document.getElementById("OPP1")
let OPP2 = document.getElementById("OPP2")
let OPP3 = document.getElementById("OPP3")
let options = document.getElementById("options")
let btns = document.getElementById("btns")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let finsh = document.querySelector(".finish")
let containerQuiz = document.getElementById("containerQuiz")
let btnstart = document.getElementById("btnstart")
let yourChoose = []



const questions = [
    {
      question: "What is the plural form of 'child'?",
      options: ["childs", "children", "childes", "childed"],
      answer: 1,
    },
    {
      question: "Which word is a synonym for 'happy'?",
      options: ["sad", "joyful", "angry", "happy"],
      answer: 1,
    },
    {
      question: "What is the past tense of 'run'?",
      options: ["running", "runned", "ran", "raned"],
      answer: 2,
    },
    {
      question: "What is the opposite of 'big'?",
      options: ["small", "large", "huge", "smale"],
      answer: 0,
    },
    {
      question: "Which word is a verb?",
      options: ["car", "jump", "book", "van"],
      answer: 1,
    },
    {
      question: "What is the comparative form of 'good'?",
      options: ["better", "gooder", "goodest", "good"],
      answer: 0,
    },
    {
      question: "What is the present participle of 'eat'?",
      options: ["eating", "eated", "ate","eat"],
      answer: 0,
    },
    {
      question: "What is the opposite of 'hot'?",
      options: ["warm", "cold", "cool","unhot"],
      answer: 1,
    },
    {
      question: "What is the plural form of 'mouse'?",
      options: ["mouses", "mice", "micees" , "hade"],
      answer: 1,
    },
    {
      question: "What is the superlative form of 'tall'?",
      options: ["taller", "tallest", "tallist", "tall"],
      answer: 1,
    },
    {
        question: "Which of the following is a synonym for 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        answer: 1
      },
      {
        question: "What is the plural form of 'child'?",
        options: ["Children", "Childs", "Childes", "Childen"],
        answer: 0
      },
      {
        question: "Choose the correct spelling: ",
        options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
        answer: 2
      },
      {
        question: "Which word is a verb?",
        options: ["Happiness", "Happy", "Happily", "Happen"],
        answer: 3
      },
      {
        question: "What is the opposite of 'dark'?",
        options: ["Bright", "Sad", "Cold", "play"],
        answer: 0
      },
  ];

let newQuestion = [];
let x = [];
for (let i = 0; ;i++){

    let z = Math.floor(Math.random() * 10); 
    if(x.includes(z)){
        continue;
    }else{
        x.push(z);
        newQuestion.push(questions[z])
    }
    
    if(x.length == 10){
        break;
    }
}

let i = 0 ;
Quiz()


next.addEventListener("click", function(ev){
    i++;
    ev.preventDefault();
        Quiz(); 
        
    }
)
prev.addEventListener("click", function(ev){
    i--;
    ev.preventDefault();

    Quiz();
})

let scorE = 0;

next.addEventListener("mousedown", () => {
    if (document.querySelector('input[name="radio"]:checked').value === newQuestion[i].options[newQuestion[i].answer]) {
        scorE++;
        localStorage.setItem("scorE",scorE)
        console.log(scorE);
    }else{}
    yourChoose[i]=document.querySelector('input[name="radio"]:checked').value
    // yourChoose.push(document.querySelector('input[name="radio"]:checked').value)
    localStorage.setItem("selectedOptionE" , JSON.stringify(yourChoose))
   


});





function Quiz(){

  if(localStorage.getItem("userFinish")!= null){
    // containerQuiz.innerHTML=""
  
    resultPage() 
  }else{

  
    Qtitle.innerHTML = `${newQuestion[i].question} `;

    options.innerHTML = `<div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
    <form>
    <label class="options" id="OPP">${newQuestion[i].options[0]}
        <input type="radio" name="radio" value= "${newQuestion[i].options[0]}" class="option" >
        <span class="checkmark"></span>
    </label>

    <label class="options" id="OPP1">${newQuestion[i].options[1]} 
    <input type="radio" name="radio" value= "${newQuestion[i].options[1]}" class="option"  >
        <span class="checkmark"></span>
    </label>

    <label class="options" id="OPP2">${newQuestion[i].options[2]}
    <input type="radio" name="radio" value= "${newQuestion[i].options[2]}" class="option" >
        <span class="checkmark"></span>
    </label>

    <label class="options" id="OPP3">${newQuestion[i].options[3]}
        <input type="radio" name="radio" value= "${newQuestion[i].options[3]}" class="option">
        <span class="checkmark"></span>
    </label>
    </form>
    </div>

  `

  if(i==9){
      next.addEventListener("mousedown", () => {
          finsh.style.display = "inline-block" 
          // finsh()
      });
  }

  let result = JSON.parse(localStorage.getItem("selectedOptionE"));
  let chosenOption = document.querySelectorAll(".option");

  try{
    for(let j of chosenOption){
      if (result[i]==j.value){
        j.checked=true;
      }
    }
  }
  catch(ex){
    console.log(ex.message);
  }

  
  // let b;
  // console.log(b?.name);
  // console.log(b?.name);


}}



finsh.addEventListener("click", function finshh(ev){
  ev.preventDefault();
  
  resultPage()
  
})

function resultPage (){
 
  if (localStorage.getItem("scorE") == null) {
    localStorage.setItem("scorE",0);
    
  }
 
  document.write(`<b style="color:green; font-size: 30px " >Your scor is: ${localStorage.getItem("scorE")}</b> `+ "<br> <br> <br> <br>");
  // ev.preventDefault();
  
  localStorage.setItem("userFinish", false)

  
  for (let i of newQuestion ) {
    
          document.write("Question : " + i.question + "<br> <br> <br>") ;
          document.write(`The correct answer is` +":  "+i.options[i.answer] + "<br> <br>") 
          // document.write(`Youe answer is` +":  "+ result + "<br> <br>") 
          // document.write(JSON.parse(localStorage.getItem("selectedOptionE"))[i])
          
          document.write("<br> <br> <br> <br>")
          
        } 
            // localStorage.removeItem("selectedOptionE")
            document.write(
              '<button class=""  style="color: #ffffff;" onclick="zz()"> <a href="card.html">Go Back</a></button>'
            );

            var ele = document.getElementById('timer');
              ele.style.display="none"
              var container = document.querySelector(".container")
              container.style.display = "none"
              document.body.style.backgroundColor="white"
              document.btnstart.innertext="shosw"
              

    }




    var timer;
    var ele = document.getElementById('timer');
    
    var sec = 59;
    let min = 2;
    (function (){
      timer = setInterval(()=>{
        ele.innerHTML = min + ":"+ sec;
        sec --;
      
       if(min == 0 && sec == 0){
                xx()
                
                
            }else if(sec == 0){
                min--;
                sec =59
            }
        
      }, 1000) // each 1 second
    })() 

