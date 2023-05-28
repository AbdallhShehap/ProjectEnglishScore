
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
let yourChoose = []





const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
      answer: 0
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      answer: 1
    },
    {
      question: "What is JavaScript primarily used for?",
      options: ["Styling web pages", "Creating dynamic web pages", "Managing databases", "Performing server-side operations"],
      answer: 1
    },
    {
      question: "Which of the following is not a programming language?",
      options: ["Java", "Python", "HTML", "C++"],
      answer: 2
    },
    {
      question: "What is the result of 2 + '2' in JavaScript?",
      options: ["4", "'22'", "22", "NaN"],
      answer: 1
    },

    {
      question: "What is the purpose of the 'git push' command?",
      options: ["To upload changes to a remote repository", "To create a new branch", "To undo the last commit", "To merge two branches"],
      answer: 0
    },
    {
      question: "What is the output of the following code snippet?\n\nconsole.log(2 + 2 * 3);",
      options: ["6", "8", "10", "14"],
      answer: 2
    },

    {
      question: "What is the correct syntax for a function declaration in JavaScript?",
      options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
      answer: 0
    },
    {
      question: "What is the purpose of the 'fetch' function in JavaScript?",
      options: ["To retrieve data from a server", "To perform mathematical calculations", "To add event listeners to elements", "To style web pages"],
      answer: 0
    },
    {
      question: "What is the result of the following code snippet?\n\nconsole.log(typeof 42);",
      options: ["number", "string", "boolean", "undefined"],
      answer: 0
    },
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        options: ["To check the type of a value", "To perform arithmetic operations", "To create a new variable", "To compare two values"],
        answer: 0
      },
      {
        question: "What is the correct way to write a comment in HTML?",
        options: ["<!-- This is a comment -->", "// This is a comment", "# This is a comment", "/* This is a comment */"],
        answer: 0
      },
      {
        question: "What is the output of the following code snippet?\n\nconsole.log('5' - 3);",
        options: ["2", "8", "NaN", "53"],
        answer: 0
      },
      {
        question: "What is the purpose of the 'for' loop in programming?",
        options: ["To repeat a block of code a specific number of times", "To define a function", "To conditionally execute a block of code", "To declare variables"],
        answer: 0
      },
      {
        question: "Which of the following is not a valid CSS selector?",
        options: [".my-class", "#my-id", "!important", "body"],
        answer: 2
      },
      {
        question: "What does the acronym 'API' stand for?",
        options: ["Application Programming Interface", "Automated Programming Interface", "Application Process Integration", "Automated Process Integration"],
        answer: 0
      },
      {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        options: ["To modify the style of an element", "To retrieve data from a server", "To add event handlers to elements", "To perform mathematical calculations"],
        answer: 2
      },
      {
        question: "What is the result of the following code snippet?\n\nconsole.log(10 % 3);",
        options: ["1", "3", "7", "10"],
        answer: 0
      },
      {
        question: "Which of the following is an example of a relational operator in JavaScript?",
        options: ["+", "-", "*", ">="],
        answer: 3
      },
      {
        question: "What is the purpose of the 'return' statement in a function?",
        options: ["To declare a variable", "To exit the function and specify a value to be returned", "To perform a conditional check", "To add comments to the code"],
        answer: 1
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

let scor = 0;

next.addEventListener("mousedown", () => {
    if (document.querySelector('input[name="radio"]:checked').value === newQuestion[i].options[newQuestion[i].answer]) {
        scor++;
        localStorage.setItem("scor",scor)
        console.log(scor);
    }else{}
    yourChoose[i]=document.querySelector('input[name="radio"]:checked').value
    // yourChoose.push(document.querySelector('input[name="radio"]:checked').value)
    localStorage.setItem("selectedOption" , JSON.stringify(yourChoose))
   


});





function Quiz(){

  if(localStorage.getItem("userFinishTech")!= null){
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

  let result = JSON.parse(localStorage.getItem("selectedOption"));
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
 
  if (localStorage.getItem("scor") == null) {
    localStorage.setItem("scor",0);
    
  }
 
  document.write(`<b style="color:green; font-size: 30px " >Your scor is: ${localStorage.getItem("scor")}</b> `+ "<br> <br> <br> <br>");
  // ev.preventDefault();
  
  localStorage.setItem("userFinishTech", false)

  
  for (let i of newQuestion ) {
    
          document.write("Question : " + i.question + "<br> <br> <br>") ;
          document.write(`The correct answer is` +":  "+i.options[i.answer] + "<br> <br>") 
          // document.write(`Youe answer is` +":  "+ result + "<br> <br>") 
          // document.write(JSON.parse(localStorage.getItem("selectedOption"))[i])
          
          document.write("<br> <br> <br> <br>")
          
        } 
            // localStorage.removeItem("selectedOption")
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

