function generator() {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];


    whoRandom = Math.floor(Math.random() * who.length);
    actionRandom = Math.floor(Math.random() * action.length);
    whatRandom = Math.floor(Math.random() * what.length);
    whenRandom = Math.floor(Math.random() * when.length);


    let aleat = who[whoRandom] + " " + action[actionRandom] + " " + what[whatRandom] + " " + when[whenRandom];
    document.querySelector("#excuse").innerHTML = aleat;

}