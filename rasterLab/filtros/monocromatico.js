
function monocromatico(imageLab) {
    for(let y=1; y <= imageLab.image1.height; y++) {
        for(let x=1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image1.getPixel(x,y)
            let { r,g,b } = pixel
            let media = (r+g+b)/3
            let pixel2 = {
                r: media,
                g: media,
                b: media,
                a: 255
            }
            imageLab.image2.setPixel(x,y,pixel2)
        }
    }
    imageLab.image2.refresh()
}

export default monocromatico