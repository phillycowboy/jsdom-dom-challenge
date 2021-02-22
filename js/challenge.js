const commentForm = document.getElementById("comment-form");
const counter = () => document.getElementById("counter");
const pause = () => document.getElementById("pause");
const resume = () => document.getElementById("pause");
const heart = () => document.getElementById("heart");
const likesList = () => document.getElementById("likes");
let toggle = 1 
let interval =  setInterval(() => {
    let currentString = counter().innerText
    let currentNumber = parseInt(currentString)
    currentNumber += 1
    counter().innerText = currentNumber
}, 1000);
let likes = {}; 

document.addEventListener("DOMContentLoaded", () => {

    pause().addEventListener("click", () => {
        toggle += 1 
            if (toggle % 2 === 0){
                clearInterval(interval)
                pause().innerText = "resume"
            } else {
                interval = setInterval(() => {
                    let currentString = counter().innerText
                    let currentNumber = parseInt(currentString)
                    currentNumber += 1
                    counter().innerText = currentNumber
                }, 1000); 
                pause().innerText = "pause"
            }
        });
        
        heart().addEventListener("click", () =>{
            let currentString = counter().innerText
            let currentNumber = parseInt(currentString)
                if (likes[currentString]){
                    currentNumber += 1;
                    likes[currentString] = currentNumber;
                } else {
                    likes[currentString] = 1;
                    let li = document.createElement("li")
                    li.id = currentString
                    li.innerText = `${currentString} has ${likes[currentString]} like(s)`
                    likesList().appendChild(li)
                }
    });
    
        
        commentForm.addEventListener("submit", handleSubmitEvent);
        
        
});



function handleSubmitEvent(e) {
    e.preventDefault()
    let commentValue = e.target[0].value
    commentForm.innerHTML += `
    <li class="comment">${commentValue}</li>
  `
}
// step 1 to store the number of likes number has in an object as a key
//do you create a new li or update an li 