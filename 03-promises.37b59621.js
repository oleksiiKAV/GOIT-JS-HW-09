!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON");function l(e,n){return new Promise((function(o,t){setTimeout((function(){var i=Math.random()>.3;console.log("shouldResolve",i);var r={position:e,delay:n};i?o(r):t(r)}),n)}))}e(r).Notify.init({width:"280px",position:"center-center",distance:"100px",opacity:1,borderRadius:"3px",clickToClose:!0});var a=document.querySelector(".form");a.addEventListener("submit",(function(n){n.preventDefault();for(var o=a.elements.delay,t=a.elements.step,i=a.elements.amount,u=Number(o.value),c=Number(t.value),s=Number(i.value),d=1;d<=s;d++){l(d,u+(d-1)*c).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.37b59621.js.map