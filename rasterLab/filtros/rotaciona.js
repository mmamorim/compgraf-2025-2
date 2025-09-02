const _angle = 45

function rotaciona(imageLab) {
    let width = imageLab.image1.width
    let height = imageLab.image1.height

    for (let y = 1; y <= imageLab.image2.height; y++) {
        for (let x = 1; x <= imageLab.image2.width; x++) {
            imageLab.image2.setPixel(x, y, { r: 255, g: 255, b: 255, a: 255 })
        }
    }

    // Ângulo em radianos (angulo sentido horário → negativo no sistema usual de coordenadas)
    const angle = -_angle * Math.PI / 180;

    // Centro da imagem
    const cx = width / 2;
    const cy = height / 2;

    for (let y = 1; y <= height; y++) {
        for (let x = 1; x <= width; x++) {

            // Converte coordenadas para o sistema centralizado
            const dx = x - cx;
            const dy = y - cy;

            // Aplica a rotação inversa para buscar o pixel correspondente da imagem original
            const x1 = Math.floor(Math.cos(angle) * dx - Math.sin(angle) * dy + cx);
            const y1 = Math.floor(Math.sin(angle) * dx + Math.cos(angle) * dy + cy);
            //const x1 = Math.floor(Math.cos(angle) * x - Math.sin(angle) * y);
            //const y1 = Math.floor(Math.sin(angle) * x + Math.cos(angle) * y);
            
            // Verifica se o pixel está dentro dos limites da imagem original
            if (x1 >= 0 && x1 < width && y1 >= 0 && y1 < height) {
                let pixel = imageLab.image1.getPixel(x1, y1);
                imageLab.image2.setPixel(x, y,pixel);
                //console.log({x,y,pixel});                
            } //else {
                // Caso a rotação deixe áreas "vazias", pode-se definir como pixel branco
                //imageLab.image2.setPixel({r:255, g:255, b:255, a:255}, x, y);
            //}
        }
    }
    imageLab.image2.refresh()
}

export default rotaciona