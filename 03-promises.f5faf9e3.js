!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("6JpON");function u(e,t){return new Promise((function(n,o){setTimeout((function(){var i=Math.random()>.3;console.log("shouldResolve",i);var r={position:e,delay:t};i?n(r):o(r)}),t)}))}e(r).Notify.init({width:"280px",position:"center-center",distance:"100px",opacity:1,borderRadius:"3px",clickToClose:!0});var l=document.querySelector(".form"),a=l.elements.delay,s=l.elements.step,c=l.elements.amount;a.setAttribute("min",0),s.setAttribute("min",0),c.setAttribute("min",0),l.addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(a.value),o=Number(s.value),i=Number(c.value),l=1;l<=i;l++){u(l,n+(l-1)*o).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.f5faf9e3.js.map
