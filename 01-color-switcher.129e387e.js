const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;new Date;t.addEventListener("click",(()=>{o=setInterval((()=>{console.log("I love async JS!  "+Date.now()/1e3),document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(()=>{clearInterval(o),console.log(`Interval with id ${o} has stopped!`),t.removeAttribute("disabled"),e.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.129e387e.js.map
