function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let food = getRandomInt(50, 70);
let clean = getRandomInt(50, 70);
let happiness = getRandomInt(50, 70);
let initialIteration = true;

function renewal(time = 5) {
    let overallRate = food + clean + happiness;

    if (food <= 0 || clean <= 0 || happiness <= 0) {

        document.getElementById("pet").src = "img/verybad.png";
        document.getElementById('massage').innerHTML = 'Your pet is dead. You can restart the game and start over.' ;

        if (initialIteration){
            let btn = document.getElementById('restart');
            let createButton = document.createElement ('button');      //новый эл button
            createButton.innerHTML = 'restart';     //содержание кнопки
            btn.appendChild(createButton); //вставить в конец элемента переданный элемент
        }

     initialIteration = false;

    } else if (overallRate > 170) {
        document.getElementById("pet").src = "img/happy.jpg";
    } else if (overallRate > 140) {
        document.getElementById("pet").src = "img/good.jpg";
    } else if (overallRate > 100) {
        document.getElementById("pet").src = "img/sad.jpg";
    } else if (overallRate > 60) {
        document.getElementById("pet").src = "img/bad.jpg";
    }

    food = food - parseInt(time);
    clean = clean - parseInt(time);
    happiness = happiness - parseInt(time);

    document.getElementById('stats__food--percent').innerHTML = food + '%';
    document.getElementById('stats__clean--percent').innerHTML = clean + '%';
    document.getElementById('stats__happiness--percent').innerHTML = happiness + '%';
}
    function feed() {
        if ( food + 30 <= 70) {
            return [food+=30, clean -= 20];
        }
        document.getElementById('stats__food--percent').innerHTML = food + '%';
    }
    function bath(){
        if ( clean+40<= 70) {
            return [clean+= 40, happiness-=20] ;
        }

        document.getElementById('stats__clean--percent').innerHTML = clean + '%';
    }
    function run(){
        if ( happiness+15<= 70) {
            return [happiness += 15, food-=10];
        }
        document.getElementById('stats__happiness--percent').innerHTML = happiness + '%';
    }

function start(){
    setInterval(renewal, 5000);
}
start();
