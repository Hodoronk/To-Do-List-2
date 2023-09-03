const btnMaker = (text) => {
    const button = document.createElement('button');
    button.textContent = text;
    return button;
}

const divMaker = () => {
    return document.createElement('div');
}


const paraMaker = (text) => {
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

const inputMaker = (type) => {
    const input = document.createElement('input');
    input.type = type;
    return input;
}

const taskArray = [];



export {
    btnMaker,
    divMaker,
    paraMaker,
    inputMaker,
    taskArray,
}
