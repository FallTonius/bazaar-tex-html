import svg4everybody from 'svg4everybody';
import jquery from './modules/jquery';
import 'focus-visible';
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';
import code from './modules/code';

documentReady(() => {
    svg4everybody();
    lazyImages();
    jquery();
    code();
});
