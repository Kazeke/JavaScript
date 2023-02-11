// let test = document.querySelector('#joker');

// test.addEventListener('click', function(lovimID){
//     console.log(lovimID);
// });


// let koor = document.getElementById('koordinata');

// document.addEventListener('mousemove', function(batman){
//     koor.innerHTML = batman.clientX + ' : ' + batman.clientY;
//     if (batman.clientX > 500){
//         alert('Privet')
//     }       
// });

// let koor = document.getElementById('koordinata');

// document.addEventListener('mousemove', function(batman){
//     koor.innerHTML = batman.clientX + ' : ' + batman.clientY;
// });

// let koshka = document.querySelector('#klik');

// koshka.addEventListener('click', superman);

// function superman(){
//     alert('hello world');
// }

// koshka.addEventListener('dblclick', hulk);

// function hulk(){
//     alert('zdes dvoinoi cklick')
// }

// let text = document.querySelector('#dom');
// let text2 = document.querySelector('#kot');

// text.addEventListener('click',function(sobaka){
//     // console.log(this); // Teg P
//     // console.log(sobaka.target); // ZNACHENIE
//     text2.innerHTML = sobaka.target + ' ' + text2;
// });

let pole = document.querySelector('body');

pole.addEventListener('keypress', lopata);

function lopata(zvezda){
    if(zvezda.key == 'b'){
        alert(123);
    }
}