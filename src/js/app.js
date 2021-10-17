import svg4everybody from 'svg4everybody';
import 'focus-visible';
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

documentReady(() => {
    svg4everybody();
    lazyImages();
});
