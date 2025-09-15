let fator = 20

function bordaColor(imageLab) {

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image1.getPixel(x, y)
            let pixelB = imageLab.image1.getPixel(x, y+1)
            let pixelR = imageLab.image1.getPixel(x+1, y)

            
            let deltaB = Math.abs(pixel.r - pixelB.r)
            if(Math.abs(pixel.g - pixelB.g) > deltaB) {
                deltaB = Math.abs(pixel.g - pixelB.g)
            }
            if(Math.abs(pixel.b - pixelB.b) > deltaB) {
                deltaB = Math.abs(pixel.b - pixelB.b)
            }

            let deltaR = Math.abs(pixel.r - pixelR.r)
            if(Math.abs(pixel.g - pixelR.g) > deltaR) {
                deltaR = Math.abs(pixel.g - pixelR.g)
            }
            if(Math.abs(pixel.b - pixelR.b) > deltaR) {
                deltaR = Math.abs(pixel.b - pixelR.b)
            }

            if(deltaB > fator || deltaR > fator) {
                imageLab.image2.setPixel(x, y, {
                    r: 255, g: 255, b: 255, a: 255 
                })
            } else {
                imageLab.image2.setPixel(x, y, {
                    r: 0, g: 0, b: 0, a: 255 
                })
            }
        }
    }
    imageLab.image2.refresh()

}

export default bordaColor