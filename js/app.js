


function calculateLove() {
    // Get names from input fields
      let name1 = document.getElementById("name1").value.trim();
     let name2 = document.getElementById("name2").value.trim();
     
      
     // validation
        validateInput();

     // random number generator 0 to 100
     let loveScore = Math.floor(Math.random() * 101)

     document.getElementById('scoreBox').innerText = `${loveScore } %`;


     // Display message base on percentage

     if (loveScore > 80 ) {
          document.getElementById('messageBox').innerText = ` ${name1} and ${name2} 💘 Perfect match 💘! 🌹 True love forever!, and you both can kill to see each other. `

      
     } else if (loveScore > 50 ) {
               document.getElementById('messageBox').innerText = "You guys have better chances of staying together, and all you need is time with each other. "

     }
     
     else if (loveScore > 30) {
              document.getElementById('messageBox').innerText = `Your relationship with ${name2} Could work out with some effort 🙂 and you have to act now!". `

     } else {
            document.getElementById('messageBox').innerText = `Maybe just friends 😅, you have to quit! `
     }

          
    }



function validateInput() {

     let transformName1 = document.getElementById("name1").value.toLowerCase();
     let transformName2 = document.getElementById("name2").value.toLowerCase();

     // check if input is provide 
     if (this.name1 === '' || this.name2 === '') {
          alert('Please enter both names')
     }
     //  Check if user input match by transforming all to lower and then check
     else if (transformName1 === transformName2) {
     
          alert('Both names are the same please check you input')
          document.getElementById("messageBox").innerText = "";
     }
         
          // Check if user enter number
     else if (typeOf(name1) == typeOf(3) && typeOf(name2) == typeOf(3) ) {
                
                   alert('You have enter figures in the input field')   
     }
     
          return;

     }


