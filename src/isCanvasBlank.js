const isCanvasBlank = (canvas) => {
    let blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() == blank.toDataURL();
}

module.exports = isCanvasBlank;