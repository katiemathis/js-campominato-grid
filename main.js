
const gridElement = document.getElementById('grid');

const createGridElement = () => {
    const node = document.createElement('div');
    node.classList.add('square');
    return node;
}

document.getElementById('start-play').addEventListener('click', play)

function play() {
    console.log('Lets go');

    const difficoltà = document.getElementById('difficulty').value;
    
    let numeroCelle;
    let cellePerRiga;

    switch (difficoltà) {
        case 'Easy':
            numeroCelle = 100;
            break;
        case 'Hard':
            numeroCelle = 81;
            break;
        case 'Crazy':
            numeroCelle = 49;
            break;
    }

    cellePerRiga = Math.sqrt(numeroCelle);

    const gridElement = document.getElementById('grid');

    grid.innerHTML = '';

    for (let i = 1; i<=numeroCelle; i++) {

        const node = createGridElement();

        const dimensione = `calc(100% /${cellePerRiga})`;
        node.style.width = dimensione;
        node.style.height = dimensione;
    
        let number = document.createTextNode(i);
        node.appendChild(number)
        
        
       
        node.addEventListener('click', function() {
            console.log(this);
            this.classList.add('clicked');
    
        });
    
        gridElement.appendChild(node);
    
    }


}








