/* make an array object containing your questions,
        options and answers */

const quiz_Data=[
    {
        question:"What kind of novel do I like most?",
        options:["Light Novel","Thriller","Suspense","Fantasy"],
        answer:"Light Novel",
    },
    {
        question:"What kind of things do I like most?",
        options:["Playing","Tech","Cars","Nothing"],
        answer:"Nothing",
    }
]
/* creat a quiz question counter to read ques
            and to read score */

let current_Question=0
let score=0

// Create a function to load questions
function load_Questions(){
    const ques=document.getElementById('question-container')
    const options=document.getElementById('options-container')
    
    // before loading another ques first clear the que and optoins
    ques.innerHTML=''
    options.innerHTML=''

    ques.innerText=quiz_Data[current_Question].question

    // as for options

    for(let i=0;i<quiz_Data[current_Question].options.length;i++){
        const options_Button=document.createElement('button')
        options_Button.innerText=quiz_Data[current_Question].options[i]
        options.appendChild(options_Button);
    }
}

load_Questions();

console.log('hello')
console.log()