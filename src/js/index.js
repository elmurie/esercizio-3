import '@scssFolder/'
import Filter from './Filter.js';
import Like from './Like.js';

const filters = document.querySelectorAll(['[data-component="filter"]']);
filters.forEach( filter => {
    return new Filter(filter);
})

const likes = document.querySelectorAll(['[data-component="like"]']);
likes.forEach( like => {
    return new Like(like);
})

const stars = document.querySelectorAll(['[data-component="rate"]']);
stars.forEach( star => {
    console.log(star);
    return new Stars(star);
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

