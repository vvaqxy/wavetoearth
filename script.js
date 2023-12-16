function changeLoveTitle(element, info) {

    const titleContainer = element;
    
    if (titleContainer.textContent === info) {
        titleContainer.textContent = '♪ ' + 'love.';
        titleContainer.style.fontSize = '26px';
    } else {
        titleContainer.textContent = info;
        titleContainer.style.fontSize = '28px';
    }
}

function changeSeasonsTitle(element, info) {

    const titleContainer = element;
    
    if (titleContainer.textContent === info) {
        console.log('❄️ seasons -> "♪ seasons"');
        titleContainer.textContent = '♪ ' + 'seasons';
        titleContainer.style.fontSize = '26px';
    } else {
        titleContainer.textContent = info;
        titleContainer.style.fontSize = '28px';
    }
}

function changeDaisyTitle(element, info) {

    const titleContainer = element;
    
    if (titleContainer.textContent === info) {
        titleContainer.textContent = '♪ ' + 'daisy.';
        titleContainer.style.fontSize = '26px';
    } else {
        titleContainer.textContent = info;
        titleContainer.style.fontSize = '28px';
    }
}

function changeLightTitle(element, info) {

    const titleContainer = element;
    
    if (titleContainer.textContent === info) {
        titleContainer.textContent = '♪ ' + 'bonfire';
        titleContainer.style.fontSize = '26px';
    } else {
        titleContainer.textContent = info;
        titleContainer.style.fontSize = '28px';
    }
}



