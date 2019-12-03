function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let foodPoints = getRandomInt(50, 70);
let cleanPoints = getRandomInt(50, 70);
let happinessPoints = getRandomInt(50, 70);
let initialIteration = true;
let overallRate = foodPoints + cleanPoints + happinessPoints;

function percentageFormatter(value) {
    return value + "%";
}

function renewal(reduceByPoint = 5) {
    function isTamagochiDied() {
        return (foodPoints <= 0 || cleanPoints <= 0 || happinessPoints <= 0)
    }
    if (isTamagochiDied()) {
        document.getElementById("pet").src = "img/verybad.png";
        document.getElementById('massage').innerHTML = 'Your pet is dead. You can restart the game and start over.' ;

        if (initialIteration){
            let restartContainerElem = document.getElementById('restart');
            let buttonElem = document.createElement ('button');   //новый эл button
            buttonElem.innerHTML = 'restart';     //содержание кнопки
            restartContainerElem.appendChild(buttonElem); //вставить в конец элемента переданный элемент
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

    foodPoints = foodPoints - parseInt(reduceByPoint);
    cleanPoints = cleanPoints - parseInt(reduceByPoint);
    happinessPoints = happinessPoints - parseInt(reduceByPoint);


    document.getElementById('stats__food--percent').innerHTML = percentageFormatter(foodPoints);
    document.getElementById('stats__clean--percent').innerHTML = percentageFormatter(cleanPoints);
    document.getElementById('stats__happiness--percent').innerHTML = percentageFormatter(happinessPoints);
}

function isRunOutOfMaxStatPoints(result) {
    return result <= 70;
}
function feed(){
    result = foodPoints + 30;
    if ( isRunOutOfMaxStatPoints(result)){
        return [foodPoints += 30, cleanPoints -= 20];
    }
    document.getElementById('stats__food--percent').innerHTML = percentageFormatter(foodPoints);
}
function bath(){
    result = cleanPoints + 40;
    if ( isRunOutOfMaxStatPoints(result)){
        return [ cleanPoints += 40, happinessPoints -= 20];
    }
    document.getElementById('stats__clean--percent').innerHTML = percentageFormatter(cleanPoints);
}
function run(){
    result = happinessPoints+15;
    if ( isRunOutOfMaxStatPoints(result)){
        return [happinessPoints+=15, foodPoints-=10];
    }
    document.getElementById('stats__happiness--percent').innerHTML = percentageFormatter(happinessPoints);
}

function start(){
    setInterval(renewal, 5000);
}
start();
