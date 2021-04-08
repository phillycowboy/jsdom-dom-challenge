const counter = document.querySelector('#counter');
const minBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const heartBtn = document.querySelector('#heart');
const pauseBtn = document.querySelector('#pause');
const submitBtn = document.querySelector('#submit');
const commentsList = document.querySelector('#list');
const form = document.querySelector('#comment-form');
const likesUL = document.querySelector('#likes');
const refreshButton = document.createElement('button');
const h1 = document.querySelector('h1')
const ul = document.createElement('ul');

refreshButton.innerText = "REFRESH";
document.body.append(refreshButton);
commentsList.append(ul);

h1.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'red';
})
h1.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
})

refreshButton.addEventListener('click', () => {
    document.location.reload();
})



function incrementCounter() {
    let num = parseInt(counter.innerText, 10);
    num ++;
    counter.innerText = num;
    // converting it to a number
 
}

function decrementCounter() {
    let num = parseInt(counter.innerText, 10);
    if(num > 0){
        num --;
        counter.innerText = num;
    }
    // }else if (num === 0){
    //     minBtn.disabled = true;
    // }else if (num > 1){
    //     minBtn.disabled = false;
    // }
}


plusBtn.addEventListener('click', () => {
    incrementCounter();
})


minBtn.addEventListener('click', () => {
    decrementCounter();
})

let isPaused = false;
let timer = setInterval( incrementCounter, 1000);
pauseBtn.addEventListener('click', () => {
    if (isPaused === false) {
        clearInterval(timer);
        pauseBtn.innerText = 'resume';
        isPaused = true;
    } else if(isPaused === true){
        timer = setInterval(incrementCounter, 1000);
        pauseBtn.innerText = 'pause';
        isPaused = false;
    }
    minBtn.disabled = !minBtn.disabled
    plusBtn.disabled = !plusBtn.disabled
    heartBtn.disabled = !heartBtn.disabled
    submitBtn.disabled = !submitBtn.disabled
})

let likes = {};
heartBtn.addEventListener('click', () => {
     let num = counter.innerText;
     let li = document.createElement('li')
     li.id = num;
     let updatedLike = document.getElementById(num);
     if(likes[num]){
        likes[num] = likes[num] + 1;
        updatedLike.innerText = `${num} has been liked ${likes[num]} times`;
    }else {
        likes[num] = 1;
        li.innerText = `${num} has been liked ${likes[num]} times`;
        likesUL.append(li)
    }

})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let comments = e.target[0].value;
    let li = document.createElement('li');
    li.innerText = comments;
    ul.append(li);
    form.reset();
})