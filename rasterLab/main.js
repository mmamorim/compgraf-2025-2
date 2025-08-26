import imageLab from "./imageLab/imageLab.js"
import createFilters from './imageLab/createFilters.js'

import brilho from "./filtros/brilho.js";
import colorizar from "./filtros/colorizar.js";
import monocromatico from "./filtros/monocromatico.js";
import sepia from "./filtros/sepia.js";

console.log('imageLab', imageLab);
imageLab.setLoadButtonID('btnLoad')

createFilters(imageLab, [
    { label: 'Brilho', method: brilho },
    { label: 'Colorizar', method: colorizar },
    { label: 'Monocromatico', method: monocromatico },
    { label: 'Sépia', method: sepia },
])

