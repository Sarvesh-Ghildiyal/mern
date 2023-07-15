
// element by refrence to change value in html


const countEl=document.getElementById('counter')

let counter=0

const ulEl=document.getElementById('list')

function increment(){
    counter+=1

    countEl.innerHTML=counter;
    
    // Create element you want to add usin js
    const li=document.createElement('li')
    li.setAttribute('data-counter',counter)
    console.log(li)
    // Creating textnode for adding something in the element
    const textnode=document.createTextNode('Sentence ' +counter)

   
    // Appending element 
    li.appendChild(textnode)

    ulEl.appendChild(li)


    // manipulating style of newly created element
    li.style.backgroundColor='grey'
    li.style.color='white'
    li.style.border='1px solid black'
    li.style.margin='1px'
    li.style.textAlign='center'
}

function decrement(){
   
    const li=ulEl.querySelector('[data-counter="'+counter+'"]')
     
    const number= parseInt(li.getAttribute('data-counter'),10)
    console.log(number)
    counter--;

   

    countEl.innerText=counter;
    
  
    li.remove()
}

const btn=document.getElementById('third')

btn.addEventListener('click',() =>
        console.log('hi'));

// function hello(){
//     console.log('hi')
// }

// ARRAY FUNCTIONS

const friends= [
    {
        name:'x',
        age:20,
    },
    {
        name:'y',
        age:21,
    },
    {
        name:'z',
        age:22,
    }
]

const filtered_friends=friends.filter(element =>element.age>20)
console.log(filtered_friends)
console.log('hello')

// as for array functions we have  MAP, FILTER, FIND foreach as well

const Me = {
    name: 'Sarvesh',
    age: 20,
};

const aboutMe = `hello i am ${Me.name} 
and i am ${Me.age} years old`

console.log(aboutMe)


// Lets start Promises in Javascript

// FEtch api
// const promise_Object=fetch('../data.json')

// promise_Object.then(data =>{
//     // console.log(data)
//     const promise_Object2= data.json()

//     promise_Object2.then(data=>{
//         console.log(data)
//     })
// })
  
fetch('../data.json')  /*this returns an promise object*/
    .then(fetch_response=>fetch_response.json())  
    .then(json_data=>{
        console.log(json_data)
    })
 
    /*when all of the data is being fetched then, another requ is being made for
     
                json thing of the fetch response, thus another promise object is created*/


    // on the second promise object when we got all data, it is then console logged
    // then is an method which takes one argument as the response data
    
    // commenting is bit off the shore, readers may get
                // confused me included
