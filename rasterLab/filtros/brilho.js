let fator = 0.5

function brilho(imageLab) {
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image1.getPixel(x,y)
            pixel.r = pixel.r * fator 
            if(pixel.r>255) pixel.r = 255
            pixel.g = pixel.g * fator 
            if(pixel.g>255) pixel.g = 255
            pixel.b = pixel.b * fator 
            if(pixel.b>255) pixel.b = 255
            imageLab.image2.setPixel(x,y,pixel)
        }
    }
    imageLab.image2.refresh()
}

export default brilho