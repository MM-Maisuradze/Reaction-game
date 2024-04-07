const buttons = document.querySelectorAll('button');
const images = document.querySelectorAll('img');

let score = 0, points;
document.getElementById('p').textContent = `Score: ${score}`;

function choose(){
    const randomNum = Math.floor(Math.random() * 3 + 1); //randomNum = 1;2;3

    if(randomNum == 1){
        images[0].src = 'SMILEE.jpg';
        buttons[0].id = 'smile'

        images[1].src = 'angy.png';
        buttons[1].id = 'angry'

        images[2].src = 'angy.png';
        buttons[2].id = 'angry'

    }
    else if(randomNum == 2){
        images[0].src = 'angy.png';
        buttons[0].id = 'angry'

        images[1].src = 'SMILEE.jpg';
        buttons[1].id = 'smile';
        
        images[2].src = 'angy.png';
        buttons[2].id = 'angry'
    }
    else{
        images[0].src = 'angy.png';
        buttons[0].id = 'angry';

        images[1].src = 'angy.png';
        buttons[1].id = 'angry';

        images[2].src = 'SMILEE.jpg';
        buttons[2].id = 'smile'
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if(button.id == 'smile'){
            points = 1
        } 
        else points = -3;
        score += points;

        document.getElementById('p').textContent = `Score: ${score}`;
    })
})

setInterval(choose, 800);