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
        document.querySelector('.checked_btn1').classList.remove('checked_btn1')
        e.target.classList.add('checked_btn1')
        if (firstImpt.value) {
            // secondimpt.value=
            apiFunc().then(res => {
                //secondimpt.value=res.rates[btn_checked_btn_for_value_change];
                console.log(firstImpt.value*res.rates[`${btn_checked_btn_for_value_change}`])
            })
        }
    })
})

second_side_btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.checked_btn2').classList.remove('checked_btn2')
        e.target.classList.add('checked_btn2')
        if (secondimpt.value) {
            // firstImpt.value=

        }
    })
})