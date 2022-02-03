import '@scssFolder/'
import Filter from './Filter.js';

const filters = document.querySelectorAll(['[data-component="filter"]']);
filters.forEach( filter => {
    return new Filter();
})

// import { node } from 'webpack'

// document.querySelector('.async-loader__cta').addEventListener('click', () => {
//     let jsModule = './async/test.js';
//     import( /* webpackChunkName:`jsmodule-[request]` */ /* webpackMode: "lazy" */ `${jsModule}` )
//         .then(({default: layout}) => {
//             console.log(`imported ${jsModule}`);
//         })
//         .catch(error => {
//             console.error('Failed to load async js');
//             console.dir(error, error.stack);
//         });
// });

