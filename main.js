



const gridElement = document.getElementById('easy-grid');

const createGridElement = () => {
    const node = document.createElement('div');
    node.classList.add('square');
    return node;
}

let number = document.getElementsByClassName('square').innerHTML





for (let i = 1; i<=100; i++) {

    const node = createGridElement();

    number += '<p>'+ i +'</p>';
    
    
   
    node.addEventListener('click', function() {
        console.log(this);
        this.classList.add('clicked');

    });

    gridElement.appendChild(node);

}





