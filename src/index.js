import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stars from './Stars'
import Banner from './Banner'
import axios from 'axios';

//Config 
axios.defaults.baseURL = 'https://api.zevioo.com/main.svc';
axios.defaults.headers.post['Content-Type'] = 'application/json';




// Append Style 
var style_tag = document.createElement('link');
style_tag.setAttribute("rel","stylesheet");
style_tag.setAttribute("href","https://zevioo.com/widgets/css/zeviooRatingWidget.css");
(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(style_tag);

const zeviooRating = document.querySelectorAll('.zevioo-rating')
const zeviooReviews = document.getElementById('zevioo-reviews')
const zeviooBanner = document.getElementById('zevioo-banner')

// Append eShopColor
if(zeviooReviews) {

let eshopColor = zeviooReviews.getAttribute('data-color');
if( eshopColor === null ) {
    eshopColor = 'rgb(255, 13, 97)';
}

var css = `
:root {
    --zeviooColor: ${eshopColor} !important;
}

.zevioo-filter__review {
    color: ${eshopColor} !important;
}
.zevioo-questions__btn-active, .zevioo-reviews__btn-active {
    border-color: ${eshopColor} !important;
}

.quality-choosen svg, .star-choosen svg, .value-choosen svg {
    fill: ${eshopColor} !important;
    stroke: ${eshopColor} !important;
}
`,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

}


if(zeviooRating) {
    // zeviooRating.forEach(function (element, index) {
    //     ReactDOM.render(<Stars key={index} ean={element.getAttribute('data-ean')} />, element);
    // });
    for(var i = 0; i < zeviooRating.length; i++)
    {
    ReactDOM.render(<Stars key={i} ean={zeviooRating[i].getAttribute('data-ean')} />, zeviooRating[i]);
    }
}

if(zeviooReviews) {
    ReactDOM.render(<App />, zeviooReviews);
}
if(zeviooBanner) {
    ReactDOM.render(<Banner />, zeviooBanner);
}

