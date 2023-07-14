
// document.write('helo')
document.getElementById('first').innerHTML='he~ he~ he~';

console.log('My first code in js');

var a=5; 
const b=6
let c=9
console.log(a,b,c)

let sum=0
for(let i=1;i<=10;i++){
    console.log(i)
    sum=i+sum;
}
console.log(sum)

function al(){
    alert('he he he hehe');
}

let text1="20"
let text2="5"
let result=text1<text2;

document.getElementById('string_comp').innerHTML=

"is it true?<br>&nbsp"+"yes it is "+result+"..."

// for loop trying out
console.log('from here it is avg age program')
let friendsage=[20,21,5,22,23]

console.log(friendsage.length)
let avg_age=0

for (let i=0;i<(friendsage.length);i++){
    avg_age=friendsage[i]+avg_age
}
const len=friendsage.length
console.log(avg_age)
console.log(avg_age/len)
console.log(typeof(avg_age))

// objects in Java script
console.log('object seekh rha hun')
const obj1={
    1:'hello',

    2:'hi',

    key:'value ka dabba',

    obj2:{
        key2:{
            'key3':'what are you doin?',
        },

        '2.2':'hello buddy!',
    }
}
console.log(obj1[1],obj1[2],"\t",obj1.key)

console.log(obj1['obj2']['key2']['key3'])
console.log(obj1['1'])
console.log('\tdone with refernsing objects')


