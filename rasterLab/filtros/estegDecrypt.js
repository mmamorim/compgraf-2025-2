
function estegDecrypt(imageLab) {
    let qtdeBits = 0
    let byteValue = ""
    let texto = ""
    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            let pixel = imageLab.image2.getPixel(x, y)

            let bitValue = 0
            if(pixel.r % 2 == 1) {
                bitValue = 1
            }
            byteValue = byteValue + bitValue
            qtdeBits++
            if(qtdeBits == 8) {
                qtdeBits = 0
                let caractere = String.fromCharCode(parseInt(byteValue,2))
                texto = texto + caractere
                if(caractere == ".") {
                    console.log("Texto original: ",texto);
                    return
                }
                byteValue = ""
            }
        }
    }
}

export default estegDecrypt