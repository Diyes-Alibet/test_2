function extractNumbers(str) {
    return str.match(/\d/g).map(Number);
}
console.log(extractNumbers("a1fg5hj6"));


function fibonacci(a = 0, b = 1) {
    if (a > 144) return;
    console.log(a);
    setTimeout(() => fibonacci(b, a + b), 1000);
}

fibonacci();
async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`error: ${response.status}`);
        }

        const products = await response.json();
        products.forEach(product => console.log(product.title));

    } catch (error) {
        console.error('request error:', error);
    }
}
fetchProductTitles();
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.onclick = () => {
        if (button.id === 'red') {
            document.body.style.background = 'red';
        }
        if(button.id === 'blue') {
            document.body.style.background = 'blue';
        }
        if(button.id === 'green') {
            document.body.style.background = 'green';
        }
        if(button.id === 'yellow') {
            document.body.style.background = 'yellow';
        }
        if(button.id === 'purple') {
            document.body.style.background = 'purple';
        }
    };
});
const hideButton = document.getElementById('hide')
const hideDiv = document.getElementById('hideDiv');

hideButton.onclick = () => {
    if(hideDiv.style.display === 'none') {
        hideDiv.style.display = 'block';
    }
    else {
        hideDiv.style.display = 'none';
    }
}

const timer = document.getElementById('timer');

let interval
let time = 0
let endTime = 100
  interval = setInterval(() => {
     time++
     timer.innerHTML = time
      if(time === endTime) {
          clearInterval(interval)
      }
  },100)

const button = document.getElementById('show');

button.onclick = async () =>{
    const response = await fetch('main.json');
    const data = await response.json();
    console.log(data);
}





