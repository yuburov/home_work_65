function riddle() {
    answer = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?");
    if (answer == "5" || answer == "пять") {
        alert('Ответ верный')
    }
    else {
        alert('Ответ неверный');
    }
}

riddle()