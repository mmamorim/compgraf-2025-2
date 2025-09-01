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
function rotateImage20Clockwise(Image1, Image2) {
    const width = Image1.width;
    const height = Image1.height;

    // Ângulo em radianos (20° sentido horário → negativo no sistema usual de coordenadas)
    const angle = -20 * Math.PI / 180;

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
                const pixel = Image1.getPixel(Math.floor(srcX), Math.floor(srcY));
                Image2.setPixel(pixel, x, y);
            } else {
                // Caso a rotação deixe áreas "vazias", pode-se definir como transparente ou preto
                Image2.setPixel({r:0, g:0, b:0, a:0}, x, y);
            }
        }
    }
}
~~~


### Como Funciona a Fórmula da Rotação

A rotação de um ponto em um plano utiliza **cosseno** e **seno** para calcular as novas coordenadas após um giro por um ângulo $\theta$.

---

#### 1. Matriz de Rotação

A fórmula geral para rotacionar um ponto $(x, y)$ em torno da origem $(0, 0)$ é:

$$
\begin{bmatrix}
x' \\
y'
\end{bmatrix}
=
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
\cdot
\begin{bmatrix}
x \\
y
\end{bmatrix}
$$

Que se traduz em:

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
