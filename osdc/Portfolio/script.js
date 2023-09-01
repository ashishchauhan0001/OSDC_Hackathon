console.log('hello')

let words = document.querySelectorAll(".word");
console.log(words);
words.forEach((word) => {
    let letters = word.textContent.split("");
    
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter"; 
        console.log(span);
        word.append(span);
    });
});

let currentWordIndex=0;
let maxWordIndex=words.length-1;
words[3].style.opacity="1";