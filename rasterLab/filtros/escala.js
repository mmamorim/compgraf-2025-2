const fator = 0.1

function escala(imageLab) {
    let width = parseInt(imageLab.image1.width * fator)
    let height = parseInt(imageLab.image1.height * fator)

    for (let y = 1; y <= imageLab.image2.height; y++) {
        for (let x = 1; x <= imageLab.image2.width; x++) {
            imageLab.image2.setPixel(x, y, { r: 255, g: 255, b: 255, a: 255 })
        }
    }

    let offsetX = parseInt((imageLab.image1.width - width) / 2)
    let offsetY = parseInt((imageLab.image1.height - height) / 2)

    for (let y = 1; y <= height; y++) {
        for (let x = 1; x <= width; x++) {
            let x1 = parseInt(x / fator)
            let y1 = parseInt(y / fator)
            let pixel = imageLab.image1.getPixel(x1, y1)
            if (x + offsetX <= imageLab.image1.width) {
                if (y + offsetY <= imageLab.image1.height) {
                    imageLab.image2.setPixel(x + offsetX, y + offsetY, pixel)
                }
            }
        }
    }
    imageLab.image2.refresh()
}

export default escala