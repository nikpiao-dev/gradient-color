
// Selectors
const h2 = document.querySelector('h2');

const colorOne = document.querySelector('.color1');
const colorTwo = document.querySelector('.color2');

const body = document.querySelector('#gradient');

// function for gradient

function setGradient() {
        body.style.background =
        "linear-gradient(to right, "
        + colorOne.value
        + ", "
        + colorTwo.value
        + ")";
        h2.textContent = body.style.background + ";";
}

// add an event listener to the input for colorOne and colorTwo:

colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);

