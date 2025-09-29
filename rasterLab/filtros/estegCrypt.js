
function TextToBinary(text) {
    let codigoBin = ""
    for (let pos in text) {
        codigoBin = codigoBin + text[pos].charCodeAt(0).toString(2).padStart(8, "0")
    }
    return codigoBin
}

function estegCrypt(imageLab) {

    console.log("passei aqui");
    let codeBin = TextToBinary("Vamos roubar um banco amanha as 23h00.")
    console.log("codeBin", codeBin);
    let pos = 0
    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image1.getPixel(x, y)
            if (pos < codeBin.length) {
                if (codeBin[pos] == "0") {
                    if (pixel.r % 2 == 1) {
                        pixel.r = pixel.r - 1
                    }
                }
                if (codeBin[pos] == "1") {
                    if (pixel.r % 2 == 0) {
                        pixel.r = pixel.r + 1
                    }
                }
                pos++
            }
            imageLab.image2.setPixel(x, y, pixel)
        }
    }
    imageLab.image2.refresh()
    //imageLab.image2.saveToFile("teste.png")
}

export default estegCrypt