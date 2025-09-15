let fator = 0.5

function mediaMatriz(imageLab, x, y) {
    let soma = 0
    let w = imageLab.image1.width
    let h = imageLab.image1.height
    let imageSrc = imageLab.image2

    if (x - 1 > 0 && y - 1 > 0) {
        let pixel = imageSrc.getPixel(x - 1, y - 1)
        soma = soma + pixel.r
    }
    if (y - 1 > 0) {
        let pixel = imageSrc.getPixel(x, y - 1)
        soma = soma + 2 * pixel.r
    }
    if (x + 1 <= w && y - 1 > 0) {
        let pixel = imageSrc.getPixel(x + 1, y - 1)
        soma = soma + pixel.r
    }
    if (x - 1 > 0) {
        let pixel = imageSrc.getPixel(x - 1, y)
        soma = soma + 2 * pixel.r
    }
    let pixel = imageSrc.getPixel(x, y)
    soma = soma + 4 * pixel.r
    if (x + 1 <= w) {
        let pixel = imageSrc.getPixel(x + 1, y)
        soma = soma + 2 * pixel.r
    }
    if (x - 1 > 0 && y + 1 <= h) {
        let pixel = imageSrc.getPixel(x - 1, y + 1)
        soma = soma + pixel.r
    }
    if (y + 1 <= h) {
        let pixel = imageSrc.getPixel(x, y + 1)
        soma = soma + 2 * pixel.r
    }
    if (x + 1 <= w && y + 1 <= h) {
        let pixel = imageSrc.getPixel(x + 1, y + 1)
        soma = soma + pixel.r
    }
    return parseInt(soma / 16)
}


function blur(imageLab) {

//    for (let y = 1; y <= imageLab.image1.height; y++) {
//        for (let x = 1; x <= imageLab.image1.width; x++) {
//            let pixel = imageLab.image1.getPixel(x, y)
//
//            let { r, g, b } = pixel
//            let media = (r + g + b) / 3
//            let pixel2 = {
//                r: media,
//                g: media,
//                b: media,
//                a: 255
//            }
//            imageLab.image2.setPixel(x, y, pixel2)
//        }
//    }
//    imageLab.image2.refresh()

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image2.getPixel(x, y)
            let media = mediaMatriz(imageLab,x,y)
            let pixel2 = {
                r: media,
                g: media,
                b: media,
                a: 255
            }
            imageLab.image1.setPixel(x, y, pixel2)
        }
    }
    imageLab.image1.refresh()
}

export default blur