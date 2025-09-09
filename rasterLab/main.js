import imageLab from "./imageLab/imageLab.js"
import createFilters from './imageLab/createFilters.js'

import brilho from "./filtros/brilho.js";
import colorizar from "./filtros/colorizar.js";
import monocromatico from "./filtros/monocromatico.js";
import sepia from "./filtros/sepia.js";
import flipH from "./filtros/flipH.js";
import flipV from "./filtros/flipV.js";
import escala from "./filtros/escala.js";
import rotaciona from "./filtros/rotaciona.js";
import corte from "./filtros/corte.js";
import histograma from "./filtros/histograma.js";
import histogramaNorm from "./filtros/histogramaNorm.js"
import estenografia from "./filtros/estenografia.js";

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

createFilters(imageLab, [
    { label: 'Brilho', method: brilho },
    { label: 'Colorizar', method: colorizar },
    { label: 'Monocromatico', method: monocromatico },
    { label: 'Sépia', method: sepia },
    { label: 'FlipH', method: flipH },
    { label: 'FlipV', method: flipV },
    { label: 'Escala', method: escala },
    { label: 'Rotaciona', method: rotaciona },
    { label: 'Corte', method: corte },
    { label: 'Histograma', method: histograma },
    { label: 'histogramaNorm', method: histogramaNorm },
    { label: 'estenografia', method: estenografia },
])

