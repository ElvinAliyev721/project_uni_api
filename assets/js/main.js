let firstImpt = document.querySelector('#first_impt');
let secondimpt = document.querySelector('#second_impt');
let first_side_btns = document.querySelectorAll('.first_side_btns')
let second_side_btns = document.querySelectorAll('.second_side_btns')
const usd_value = 1;
var obj;



async function apiFunc() {
    const response = await fetch('https://api.exchangerate.host/latest?base=USD&symbols');
    const rates = await response.json();
    return rates;
}

// apiFunc().then(res => {
//     console.log(res.rates);
// })

first_side_btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let btn_checked_btn_for_value_change=e.target.innerText
        let second_side_checked_btn=document.querySelector('.checked_btn2').innerText
        document.querySelector('.checked_btn1').classList.remove('checked_btn1')
        e.target.classList.add('checked_btn1')
        if (firstImpt.value) {
            apiFunc().then(res => {
                secondimpt.value=res.rates[`${second_side_checked_btn}`]
                /
                res.rates[`${btn_checked_btn_for_value_change}`]*firstImpt.value
            })
        }
    })
})
second_side_btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let btn_checked_btn_for_value_change=e.target.innerText
        let first_side_checked_btn=document.querySelector('.checked_btn1').innerText
        document.querySelector('.checked_btn2').classList.remove('checked_btn2')
        e.target.classList.add('checked_btn2')
        if (secondimpt.value) {
            apiFunc().then(res => {
                firstImpt.value=res.rates[`${first_side_checked_btn}`]
                /
                res.rates[`${btn_checked_btn_for_value_change}`]*secondimpt.value
            })
        }
    })
})


firstImpt.addEventListener('input',(e)=>{
    let first_side_checked_btn = document.querySelector('.checked_btn1').innerText
    let second_side_checked_btn = document.querySelector('.checked_btn2').innerText

    apiFunc().then((res)=>{
        secondimpt.value=res.rates[`${second_side_checked_btn}`]/res.rates[`${first_side_checked_btn}`]*e.target.value;
        
    })
})

secondimpt.addEventListener('input',(e)=>{
    let first_side_checked_btn = document.querySelector('.checked_btn1').innerText
    let second_side_checked_btn = document.querySelector('.checked_btn2').innerText

    apiFunc().then((res)=>{
        firstImpt.value=res.rates[`${first_side_checked_btn}`]/res.rates[`${second_side_checked_btn}`]*e.target.value;
    })
})