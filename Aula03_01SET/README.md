<img src="/assets/teste.svg" width="100%">

# Aula 3 - 01/09/2025

# Transformações Geométricas


### Rotação

### Explicação dos Conceitos Utilizados

- **Ângulo negativo**:  
  No sistema de coordenadas de imagem (onde o eixo *y* cresce para baixo), uma **rotação horária** corresponde a um **ângulo negativo**.

- **Centro da rotação**:  
  A rotação é realizada em torno do **centro da imagem**, garantindo que ela gire ao redor do seu ponto central.

- **Rotação inversa**:  
  Ao percorrer a imagem de destino (`Image2`), aplicamos a **rotação inversa** para determinar de onde cada pixel deve ser copiado na imagem original.

- **Interpolação**:  
  O **arredondamento (`Math.floor`)** simplifica a cópia dos pixels.

~~~js
function rotateImage(Image1, Image2) {
    const width = imageLab.image1.;
    const height = imageLab.image1.;
    const _angle = 20

    // Ângulo em radianos (angulo sentido horário → negativo no sistema usual de coordenadas)
    const angle = -_angle * Math.PI / 180;

    // Centro da imagem
    const cx = width / 2;
    const cy = height / 2;

    // Percorre cada pixel da imagem de destino (Image2)
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {

            // Converte coordenadas para o sistema centralizado
            const dx = x - cx;
            const dy = y - cy;

            // Aplica a rotação inversa para buscar o pixel correspondente da imagem original
            const srcX = Math.cos(angle) * dx - Math.sin(angle) * dy + cx;
            const srcY = Math.sin(angle) * dx + Math.cos(angle) * dy + cy;

            // Verifica se o pixel está dentro dos limites da imagem original
            if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
                const pixel = imageLab.image1.getPixel(Math.floor(srcX), Math.floor(srcY));
                imageLab.image2.setPixel(pixel, x, y);
            } else {
                // Caso a rotação deixe áreas "vazias", pode-se definir como transparente ou preto
                imageLab.image2.setPixel({r:0, g:0, b:0, a:0}, x, y);
            }
        }
    }
}
~~~


### Como Funciona a Fórmula da Rotação

A rotação de um ponto em um plano utiliza **cosseno** e **seno** para calcular as novas coordenadas após um giro por um ângulo $\theta$.

---

#### 1. Fórmula de Rotação

A fórmula geral para rotacionar um ponto $(x, y)$ em torno da origem $(0, 0)$ é:


$$
x' = x \cdot \cos\theta - y \cdot \sin\theta
$$

$$
y' = x \cdot \sin\theta + y \cdot \cos\theta
$$

---

#### 2. Interpretação

- **$\cos\theta$**: Representa a projeção do ponto no mesmo eixo após a rotação.  
- **$\sin\theta$**: Representa o quanto o ponto se desloca para o eixo perpendicular.  
- O sinal negativo em **$-\sin\theta$** ocorre porque a rotação padrão (positiva) é **anti-horária**.

---

#### 3. Adaptação para Imagens

No sistema de coordenadas de imagens:
- O eixo **y cresce para baixo**.
- Uma rotação **horária** corresponde a usar um ângulo **negativo** ($-\theta$).

---

#### 4. Rotação em torno de um ponto específico

Se o centro da rotação não for a origem, mas sim $(c_x, c_y)$, aplicamos:

$$
x' = (x - c_x)\cos\theta - (y - c_y)\sin\theta + c_x
$$

$$
y' = (x - c_x)\sin\theta + (y - c_y)\cos\theta + c_y
$$

Esse procedimento desloca o ponto para a origem, aplica a rotação e retorna o ponto para sua posição original.

---

#### 5. Aplicação na Imagem

Na prática, ao gerar a imagem rotacionada:
- Percorremos cada pixel da **imagem de destino**.
- Calculamos de onde ele **veio na imagem original** (rotação inversa).
- Assim, evitamos lacunas (*gaps*) e preservamos os pixels corretamente.

---

### Transformação (Escala)

A transformação de **escala** (aumentar ou diminuir uma imagem) utiliza um fator de multiplicação aplicado às coordenadas para alterar seu tamanho.

---

#### 1. Fórmula de Escala

$$
x' = x \cdot s_x
$$

$$
y' = y \cdot s_y
$$

- $s_x$: fator de escala no eixo horizontal (largura)  
- $s_y$: fator de escala no eixo vertical (altura)  

---

#### 2. Interpretação

- Se $s_x = s_y > 1$, a imagem aumenta proporcionalmente (zoom in).  
- Se $0 < s_x = s_y < 1$, a imagem diminui proporcionalmente (zoom out).  
- Se $s_x \neq s_y$, ocorre **distorção** (a imagem é esticada ou achatada).

---

#### 3. Escala em torno de um ponto específico

Por padrão, a escala é feita em relação à origem $(0, 0)$.  
Para escalar em torno de um ponto $(c_x, c_y)$, aplicamos:

$$
x' = (x - c_x) \cdot s_x + c_x
$$

$$
y' = (y - c_y) \cdot s_y + c_y
$$

Isso desloca o ponto para a origem, aplica a escala e retorna para a posição original.

---

#### 4. Aplicação em Imagens

- Ao **percorrer a imagem de destino**, para cada pixel $(x', y')$, calculamos de onde ele **veio na imagem original**:
  
$$
x = \frac{x' - c_x}{s_x} + c_x
$$

$$
y = \frac{y' - c_y}{s_y} + c_y
$$


~~~js
function scale(imageLab) {
    const width = imageLab.image2.width;  // tamanho da imagem de destino
    const height = imageLab.image2.height;
    const origWidth = imageLab.image1.width;
    const origHeight = imageLab.image1.height;

    // Centro da escala (pode ser ajustado)
    const cx = origWidth / 2;
    const cy = origHeight / 2;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {

            // Mapeamento inverso: de destino para origem
            const srcX = (x - cx) / scaleX + cx;
            const srcY = (y - cy) / scaleY + cy;

            // Verifica se está dentro dos limites da imagem original
            if (srcX >= 0 && srcX < origWidth && srcY >= 0 && srcY < origHeight) {
                const pixel = imageLab.image1.getPixel(Math.floor(srcX), Math.floor(srcY));
                imageLab.image2.setPixel(pixel, x, y);
            } else {
                // Pixels fora da área original podem ser transparentes ou pretos
                imageLab.image2.setPixel({r: 0, g: 0, b: 0, a: 0}, x, y);
            }
        }
    }
}
~~~

---
