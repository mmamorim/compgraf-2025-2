
function flipV(imageLab) {
    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image1.getPixel(x, y)
            let y1 = imageLab.image1.height - y + 1
            let x1 = x
            imageLab.image2.setPixel(x1, y1, pixel)
        }
    }
    imageLab.image2.refresh()
}

export default flipV