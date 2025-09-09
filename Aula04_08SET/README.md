<img src="/assets/teste.svg" width="100%">

# Aula 4 - 08/09/2025

# Histograma e Afins

## o que é segmentação em visão computacional?

Em visão computacional, a segmentação é a tarefa de dividir uma imagem digital em grupos discretos de pixels (ou segmentos) para simplificar a imagem e permitir a análise de objetos e formas nela contidos. O objetivo é atribuir uma etiqueta a cada pixel para criar um mapa da cena. Ao contrário da detecção de objetos, que usa caixas ao redor dos itens, a segmentação delinea a forma exata de cada objeto, oferecendo um nível de detalhe muito maior para a compreensão da cena.

~~~js
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
~~~


## o que é histograma de uma imagem em visão computacional?

Em visão computacional, um histograma de imagem é uma representação gráfica da distribuição da frequência de valores de pixels em uma imagem digital. Ele é um gráfico de barras onde o eixo horizontal representa a intensidade dos pixels (do mais escuro ao mais claro) e o eixo vertical mostra quantos pixels em uma imagem possuem aquele nível de intensidade. 

~~~js
function histograma(imageLab) {
    let vetHistograma = []
    let vetLabels = []
    for (let i = 0; i <= 255; i++) {
        vetHistograma[i] = 0;
        vetLabels[i] = i;
    }

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x,y)
            let media = Math.round((pixel.r+pixel.g+pixel.b)/3)
            pixel.r = media
            pixel.g = media
            pixel.b = media
            imageLab.image2.setPixel(x,y,pixel)
            vetHistograma[media]++
        }
    }
    imageLab.image2.refresh()
    console.log("vetHistograma", vetHistograma);
}
~~~


## o que é histograma normalizado?

O histograma normalizado representa a distribuição de probabilidade dos valores dos pixels. A normalização acontece dividindo cada número de ocorrência de um nível de cinza entre o número total de pixels.


## o que é histograma normalizado acumulado?

Um histograma acumulado é uma variação do histograma tradicional que mostra a frequência acumulada dos dados. Em vez de exibir apenas a frequência de cada intervalo, ele apresenta a soma cumulativa das frequências, permitindo uma visualização mais clara da distribuição dos dados ao longo do intervalo.

~~~js
function histogramaNorm(imageLab) {
    let vetHistograma = []
    let vetHistogramaOriginal = []
    let vetLabels = []
    for (let i = 0; i <= 255; i++) {
        vetHistograma[i] = 0;
        vetHistogramaOriginal[i] = 0
        vetLabels[i] = i;
    }

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x, y)
            let media = Math.round((pixel.r + pixel.g + pixel.b) / 3)
            pixel.r = media
            pixel.g = media
            pixel.b = media
            imageLab.image2.setPixel(x, y, pixel)
            vetHistograma[media]++
            vetHistogramaOriginal[media]++
        }
    }
    let qtdePixels = imageLab.image1.height * imageLab.image1.width
    for (let i = 0; i <= 255; i++) {
        vetHistograma[i] = vetHistograma[i] / qtdePixels;
    }
    for (let i = 1; i <= 255; i++) {
        vetHistograma[i] = vetHistograma[i] + vetHistograma[i - 1];
    }
    console.log("vetHistograma", vetHistograma);

    for (let y = 1; y <= imageLab.image1.height; y++) {
        for (let x = 1; x <= imageLab.image1.width; x++) {
            // processamento de cada pixel da imagem
            let pixel = imageLab.image1.getPixel(x, y)
            let media = Math.round((pixel.r + pixel.g + pixel.b) / 3)
            let value = Math.round(vetHistograma[media] * 255)
            pixel.r = value
            pixel.g = value
            pixel.b = value
            imageLab.image2.setPixel(x, y, pixel)
        }
    }
    imageLab.image2.refresh()
}
~~~
