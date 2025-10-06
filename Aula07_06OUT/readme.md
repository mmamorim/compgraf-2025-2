<img src="/assets/teste.svg" width="100%">

# Aula 7 - 06/10/2025

## Imagens Vetoriais

####  O que é uma imagem vetorial?
Imagens vetoriais são formadas por fórmulas matemáticas que descrevem formas geométricas — pontos, linhas, curvas e polígonos.  
Ao contrário das imagens raster (bitmap), não dependem de pixels.

- **Escalabilidade infinita** sem perda de qualidade.  
- **Tamanho geralmente menor** para formas simples.  
- Baseadas em vetores matemáticos, não pixels.  
- Editáveis facilmente em softwares vetoriais.

#### Formatos comuns
- SVG (.svg)  
- AI (.ai)  
- EPS (.eps)  
- PDF (.pdf)  
- CDR (.cdr)

#### Vantagens e limitações

| Vantagens                      | Limitações                               |
|---------------------------------|-------------------------------------------|
| Escalabilidade sem perda       | Não adequado para fotos                  |
| Arquivos leves para gráficos simples | Complexidade para formas muito detalhadas |
| Fácil edição                    | Requer softwares específicos             |


---

# SVG: Histórico e Contextualização

## O que é SVG
SVG (*Scalable Vector Graphics*) é um formato de imagem vetorial baseado em XML, usado para representar gráficos bidimensionais.  
Por ser baseado em texto, SVG é escalável, editável e pode ser manipulado diretamente via código.

## Breve histórico
- **1998**: A W3C (*World Wide Web Consortium*) inicia o desenvolvimento do padrão SVG.  
- **2001**: Lançamento oficial do SVG 1.0 como padrão web.  
- **2003-2011**: Melhorias no padrão, incluindo SVG 1.1 e suporte crescente nos navegadores.  
- **2011 em diante**: SVG se torna amplamente suportado por navegadores modernos e integrado em design web responsivo.  
- **Atualidade**: SVG é um formato essencial em design web, interfaces gráficas, ícones, animações e gráficos interativos.

--- 

## Inserindo SVG em HTML

### SVG inline (direto no HTML)
Permite manipulação direta via CSS e JavaScript.

~~~html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
~~~

Esse código cria um círculo vermelho com contorno preto.

### SVG como arquivo externo
Você pode armazenar o SVG em um arquivo `.svg` e inserir no HTML:

~~~html
<img src="imagem.svg" alt="Exemplo de SVG">
~~~


## Manipulação de SVG

- **CSS**: alterar cores, tamanhos e animações.  
- **JavaScript**: alterar propriedades e criar animações dinâmicas.

Exemplo com CSS:

~~~html
<style>
  circle { fill: blue; }
</style>
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
~~~

Exemplo com JavaScript:

~~~html
<svg id="meuSVG" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

<script>
  const circle = document.querySelector("circle");
  circle.addEventListener("click", () => {
    circle.setAttribute("fill", "green");
  });
</script>
~~~

## SVG como arquivo (.svg)

Um arquivo SVG é essencialmente um arquivo de texto com código XML que descreve formas vetoriais.  
Abaixo está um template básico de um arquivo `.svg`:

~~~html
<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Círculo -->
  <circle cx="100" cy="100" r="80" stroke="black" stroke-width="3" fill="red" />

  <!-- Texto -->
  <text x="100" y="105" font-size="20" text-anchor="middle" fill="white">
    SVG
  </text>
</svg>
~~~

### Explicação do template:
- `<?xml version="1.0" encoding="UTF-8"?>` → declara o arquivo como XML.  
- `<svg>` → elemento raiz que define o espaço do desenho.  
  - `width` e `height` definem as dimensões.  
  - `xmlns` define o namespace SVG obrigatório.  
- `<circle>` → elemento SVG para desenhar um círculo.  
- `<text>` → elemento SVG para inserir texto.  
- Comentários são adicionados com `<!-- comentário -->`.

Veja o exemplo [exemplo](./exemplo.svg)

---

# Tags Gráficas Comuns em SVG

SVG possui várias tags para desenhar formas básicas e avançadas. A seguir, um resumo das mais usadas:

## 1. `<rect>` — Retângulo
Desenha um retângulo.
~~~html
<rect x="10" y="10" width="100" height="50" fill="blue" stroke="black" stroke-width="2" />
~~~
- `x`, `y`: posição inicial.  
- `width`, `height`: dimensões.  
- `fill`: cor interna.  
- `stroke`: cor da borda.  
- `stroke-width`: espessura da borda.

---

## 2. `<circle>` — Círculo
Desenha um círculo.
~~~html
<circle cx="50" cy="50" r="40" fill="red" />
~~~
- `cx`, `cy`: posição do centro.  
- `r`: raio.  
- `fill`: cor interna.

---

## 3. `<ellipse>` — Elipse
Desenha uma elipse.
~~~html
<ellipse cx="75" cy="50" rx="50" ry="25" fill="green" />
~~~
- `rx`, `ry`: raios horizontal e vertical.

---

## 4. `<line>` — Linha
Desenha uma linha reta.
~~~html
<line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="2" />
~~~
- `x1`, `y1`: ponto inicial.  
- `x2`, `y2`: ponto final.

---

## 5. `<polygon>` — Polígono
Desenha uma forma fechada a partir de pontos.
~~~html
<polygon points="50,10 90,90 10,90" fill="purple" />
~~~
- `points`: coordenadas dos vértices.

---

## 6. `<polyline>` — Linha múltipla
Desenha uma série de linhas conectadas.
~~~html
<polyline points="10,10 50,50 90,10" fill="none" stroke="blue" stroke-width="2" />
~~~

---

## 7. `<path>` — Caminho complexo
Permite desenhar formas complexas usando comandos de path.
~~~html
<path d="M10 10 H 90 V 90 H 10 Z" fill="orange" />
~~~
- `d`: define os comandos para desenhar.  
- Comandos comuns:  
  - `M` = move to  
  - `L` = line to  
  - `H`/`V` = horizontal/vertical line  
  - `Z` = fecha o caminho.

---

# Entendendo o `viewBox` no SVG

O atributo `viewBox` é um dos conceitos mais importantes para trabalhar com SVG. Ele define **a área interna de coordenadas** que o SVG utiliza para exibir seu conteúdo, permitindo escalabilidade e controle preciso do desenho.

---

## Estrutura do `viewBox`

O valor do `viewBox` é uma lista de quatro números separados por espaço ou vírgula:

~~~html
<svg viewBox="minX minY width height" ...>
~~~

Onde:

> minX → coordenada X inicial.
> minY → coordenada Y inicial.
> width → largura da área de visualização.
> height → altura da área de visualização.

**Explicação:**

O viewBox="0 0 100 100" define que o SVG considera um espaço interno de 100x100 unidades.

Mesmo que o elemento SVG tenha width="200" height="200", o conteúdo será escalado para caber nesse espaço, mantendo proporção.