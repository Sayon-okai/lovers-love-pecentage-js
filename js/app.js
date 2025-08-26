// // Selectors
let submitBtn = document.getElementsByTagName('button');
let resultScore  = document.querySelector('.score');
let messageResult = document.querySelector('.message');
let checkerName = document.getElementById("checker-name");

// let allMessages = {
//     'Your love for each other is like kanye love kanye',
//     'Your love for each other is like diamond in dirt',
    
// }



// submitBtn.addEventListener(click, () => {
//     resultScore = resultScore * 100;
// console.log(yourName,  "and",  loverName, "are great name for a great couple, your love score is:", + " " + Math.floor(loveScore) + "%")
//     console.log('you have click the button')
// } )


messageResult.textContent = checkerName.innerText;


function updateScore() {
    resultScore = Math.random(resultScore) * 100;
    document.querySelector('.score').textContent = Math.floor(resultScore);

    document.querySelector('.message').innerHTML = document.getElementById('checker-name').textContent;


    

};







