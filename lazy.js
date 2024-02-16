
let appendedImg = 0;
let loadedImg = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting // true into screen
}

export const resetCount = () => {
    appendedImg = 0;
    loadedImg = 0;
}

const loadImage = (entry) => {
    const node = entry.target;

    node.src = node.dataset.src;
    loadedImg++;
    printLog();
    observer.unobserve(entry.target) // unless imge
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

export const registerImage = (image) => {
    appendedImg++
    printLog();
    observer.observe(image);
}

const printLog = () => {
    console.log(`⚪ Se han agregado ${appendedImg} imágenes`);
    console.log(`🟣 Se han cargado ${loadedImg} imágenes`);
    console.log("---------------------------------------");
}