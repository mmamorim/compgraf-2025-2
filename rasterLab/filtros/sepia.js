
function sepia(imageLab) {
    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image1.getPixel(x, y)
            let { r, g, b } = pixel
            let pixel2 = {
                r: r*0.393 + g*0.769 + b*0.168,
                g: r*0.349 + g*0.686 + b*0.168,
                b: r*0.272 + g*0.534 + b*0.131,
                a: 255
            }
            imageLab.image2.setPixel(x, y, pixel2)
        }
    }
    imageLab.image2.refresh()
}

export default sepia