let box = document.getElementsByClassName("box-phase-cookie");

let buttonAfterBreak = document.getElementsByClassName('button-after-break');

let cookie = document.getElementsByClassName('cookie');

let cookieBreak = document.getElementsByClassName('cookie-breack');

let textPresentation = document.getElementsByClassName('text-presentation');

let textAfterBreak = document.getElementsByClassName('text-after-break');

let title = document.getElementsByClassName("title");

let modal = document.getElementsByClassName('modal');

let phaseFortuneCookie = document.getElementsByClassName('phase-fortune-cookie');

function openCookie() {
    let phases = ["Life brings good things if you have patience.",
    "Show love and joy at every opportunity and see that peace is born within you.",
    "Do not make up in anger what you lack in reason.",
    "Flaws and virtues are just two sides of the same coin.",
    "The greatest of all towers begins on the ground.",
    "You don't have to be strong. You have to be flexible.",
    "Every day you organize your hair, why don't you do the same with your heart?",
    "There are three things that never return; the arrow shot, the word spoken and the opportunity lost.",
    "Youth is not a time of life, it is a state of mind.",
    "We can choose what we sow, but we are obliged to reap what we sow.",
    "Give your full attention to the training of your children, especially with good examples from your own life.",
    "Follow the good ones and learn from them.",
    "No matter the size of the mountain, it cannot block the sun.",
    "Common sense is worth more than a lot of knowledge.",
    "Whoever wants to pick roses has to be prepared to bear the thorns.",
    "It is our friends who teach us the most valuable lessons.",
    "He who cares about the feelings of others is not a fool.",
    "Adversity is a mirror that reflects the true self.",
    "To regret what we don't have is to lose what we already have.",
    "A beautiful flower is incomplete without its leaves."];

    let i = Math.floor(20 * Math.random());
    
    let current = "";

    let phase = phases[i];
 
    modal[0].style.height = "564px";

    modal[0].style.margin = "169px auto";

    cookie[0].style.display = "none";

    title[0].style.display = "none";
    
    textPresentation[0].style.display = "none";

    buttonAfterBreak[0].style.display = "flex";

    textAfterBreak[0].style.display = "flex";

    phaseFortuneCookie[0].innerHTML = phase;

    phaseFortuneCookie[0].style.animation = "phaseFortuneCookie";

    cookieBreak[0].style.display = "flex";

    box[0].style.display = "flex";

    if(current === phase){
        i = Math.floor(20 * Math.random());
    } else{
        current = phase;
    }
}

