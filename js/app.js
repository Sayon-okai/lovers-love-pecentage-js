


function calculateLove() {
     // Get names from input fields
    
     let name1 = document.getElementById("name1").value.trim();
     let name2 = document.getElementById("name2").value.trim();

      
     // validation
 
     if (name1 === '' || name2 === '' ) {
             alert('Please enter both names');
          
          return false;

          
         }
         else if (name1 === name2 || name2 === name1) {
              alert('Please check your input correctly')

              return false;
         } else if (!isValidName(name1) || !isValidName(name2)) {
          alert("Wrong input")
          
          return false;
         }
          
     
     

     // random number generator 0 to 100
     let loveScore = Math.floor(Math.random() * 101)

     document.getElementById('scoreBox').innerText = `${loveScore} %`;

       
     // Display message base on percentage

     if (loveScore > 80) {
          document.getElementById('messageBox').innerText = ` ${name1} and ${name2} 💘 Perfect match 💘! 🌹 True love forever!, and you both can kill to see each other. `

      
     } else if (loveScore > 50) {
          document.getElementById('messageBox').innerText = "You guys have better chances of staying together, and all you need is time with each other. "

     }
     
     else if (loveScore > 30 ) {
          document.getElementById('messageBox').innerText = `Your relationship with ${name2} Could work out with some effort 🙂 and you have to act now!". `

     } else {
          document.getElementById('messageBox').innerText = `Maybe just friends 😅, you have to quit! `
     } 


}
 

// Checking if name is valid

function isValidName(value) {
     if (!(typeof value === "string" || value instanceof string)) {
          
          return false;
     }

     // 2. Trim spaces
     value = value.trim();

     // 3. Check if it contains only letters (no numbers, no symbols)
     
     return /^[a-zA-Z]+$/.test(value)
}



    

    

    
     
          

     


