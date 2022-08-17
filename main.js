function progressBarHealth() {
    let barHealth = document.querySelector('.progress_down_health');
    let width = 490;
    let step = setInterval(progressStatus, 1000);
    function progressStatus() {
        if (width < 0) {
            clearInterval(step);
        } else {
            width--;
            barHealth.style.width = `${width}px`;
            if (width == 350) {
                changeImgHealth();
            }

        }
    }
    return;
}

function progressBarHunger() {
    let barHunger = document.querySelector('.progress_down_hunger');
    let width = 510;
    let step = setInterval(progressStatus, 200);
    function progressStatus() {
        if (width < 0) {
            clearInterval(step);
        } else {
            width--;
            barHunger.style.width = `${width}px`;
            if (width == 400) {
                changeImgHungry();;
            }

        }
    }
    return;
}

function progressBarMood() {
    let barMood = document.querySelector('.progress_down_mood');
    let width = 530;
    let step = setInterval(progressStatus, 50);
    function progressStatus() {
        if (width < 0) {
            clearInterval(step);
        } else {
            width--;
            barMood.style.width = `${width}px`;
            if (width == 300) {
                changeImgMood();
            }

        }
    }
    return;
}

function changeImgHealth() {
    document.querySelector('.cat').src = `src/img/cat/sick_cat.gif`;
    return;
}

function changeImgHungry() {
    document.querySelector('.cat').src = `src/img/cat/hungry_cat.gif`;
    return;
}

function changeImgMood() {
    document.querySelector('.cat').src = `src/img/cat/angry_cat.gif`;
    return;
}


progressBarHealth();
progressBarHunger();
progressBarMood();