


function calculateLove() {
    // Get names from input fields
      let name1 = document.getElementById("name1").value.trim();
     let name2 = document.getElementById("name2").value.trim();
     
     // check if input is provide 
     if (name1 === '' || name2 === '') {
          alert('Please enter both names')
     }

     // random number generator 0 to 100
     let loveScore = Math.floor(Math.random() * 101)

     document.getElementById('scoreBox').innerText = `${loveScore } %`;


     // Display message base on percentage

     if (loveScore >= 75) {
          document.getElementById('messageBox').innerText = "Your love for each is like river that never runs dry"

      

     } else if (loveScore > 50 && loveScore < 74) {
               document.getElementById('messageBox').innerText = "You guys have better chances of staying together"

     }
     
     else if (loveScore < 50 && loveScore > 20) {
              document.getElementById('messageBox').innerText = `Your relationship with ${name2} might not work `

     } else {
            document.getElementById('messageBox').innerText = `Your relationship with ${name2} won't work, you have to quit `
     }

      
    }


