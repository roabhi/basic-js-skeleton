/*
=============================
IMPORT NEEDED RUNTIME
============================
*/

import 'regenerator-runtime/runtime';

/*
=============================
IMPORT STYLES
============================
*/

import '../scss/styles.scss';


const init = e => {
    document.removeEventListener('DOMContentLoaded', init, false);

    document.getElementById('msg').innerHTML = '     Hello World'.trimStart();

 
}



document.addEventListener('DOMContentLoaded', init, false);