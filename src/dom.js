export const buttons = {
    addTask: document.querySelector('#add-task'),
    addProj: document.querySelector('#add-project'),
    today: document.querySelector('#today'),
    week: document.querySelector('#week'),
    month: document.querySelector('#month'),
    year: document.querySelector('#year'),
    allTime: document.querySelector('#all-time'),
}

export const mainDivs = {
    mainScreen: document.querySelector('#main-screen'),
    taskDisplay: document.querySelector('#task-display'),
    taskInputArea: document.querySelector('#taskinput-area'),
    sidebar: document.querySelector('#sidebar')
}


export const images = {
    checkMark: (() => {
        const img = document.createElement('img');
        img.src = 'src/assets/Check.svg'
        return img;
    })(),

    xMark: (() => {
        const img = document.createElement('img');
        img.src = 'src/assets/XMark.svg';
        return img;
    })(),
};

export const formDiv = document.querySelector('#form-div');