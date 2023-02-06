let value = document.getElementById('contador');
let btn = document.getElementsByClassName('btn');
let counter = new Number ();

btn[0].addEventListener('click', ()=>{
    counter = JSON.parse(localStorage.getItem('contador')) + 1;
    localStorage.setItem('contador', JSON.stringify(counter));
    value.textContent = counter
});
btn[1].addEventListener('click', ()=>{
    counter = JSON.parse(localStorage.getItem('contador')) - 1;
    localStorage.setItem('contador', JSON.stringify(counter));
    value.textContent = counter;
});
btn[2].addEventListener('click', ()=>{
    counter = JSON.parse(localStorage.getItem('contador')) * 2;
    localStorage.setItem('contador', JSON.stringify(counter));
    value.textContent = counter;
})
btn[3].addEventListener('click', ()=>{
    counter = JSON.parse(localStorage.getItem('contador')) / 2;
    localStorage.setItem('contador', JSON.stringify(counter));
    value.textContent = counter;
})
btn[4].addEventListener('click', ()=>{
    counter = 0;
    localStorage.setItem('contador', JSON.stringify(counter));
    value.textContent = counter;
})
value.textContent = localStorage.getItem('contador');