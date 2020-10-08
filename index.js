const setUp = document.getElementById('setup')
const punchBtn = document.getElementById('punch-btn')
const newBtn = document.getElementById('new-btn')
const punchLine = document.getElementById('punchline')
let punchlineVar

punchBtn.addEventListener('click', getPuchLine);
newBtn.addEventListener('click', jokeGenerator);

function getPuchLine(){
    punchLine.innerHTML = punchLineVar;
    punchLine.classList.add('bubble')
    punchBtn.classList.toggle('hidden')
    newBtn.classList.toggle('hidden')
}


async function jokeGenerator(){
    const jokeGenerator = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const jokes = await jokeGenerator.json();

    setUp.innerHTML = jokes[0].setup;

    punchLineVar = jokes[0].punchline;

    punchLine.innerHTML = "";
    punchLine.classList.remove('bubble');

    punchBtn.classList.toggle('hidden');
    newBtn.classList.toggle('hidden');
}

jokeGenerator();

