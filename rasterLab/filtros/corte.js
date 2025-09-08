const fatorCorte = 180

function corte(imageLab) {
    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image1.getPixel(x, y)
            let { r, g, b } = pixel
            let media = (r + g + b) / 3
            let pixel2 = { r: 255, g: 255, b: 255, a: 255 }
            if (media < fatorCorte) {
                pixel2 = { r: 0, g: 0, b: 0, a: 255 }
            }
            imageLab.image2.setPixel(x, y, pixel2)
        }
    }
    imageLab.image2.refresh()
}

export default corte