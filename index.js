// grabbing the id of the button
const searchBtn = document.getElementById('advice-btn')
// putting the api data into this new const and area in html called .advicebox
const adviceArea =document.querySelector('.advicebox');


// adding event listener
searchBtn.addEventListener('click', getAdvice);

// function to get the data onto the html
async function getAdvice() {
fetch('https://api.adviceslip.com/advice')    //check docs
      .then((res) => res.json())
      .then((data) => (adviceArea.innerHTML = `<span class="id"${data.slip.id}.</span><h2 class="advice">${data.slip.advice}</h2>`)
      );
}