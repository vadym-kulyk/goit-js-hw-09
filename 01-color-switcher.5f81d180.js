const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;t.stop.setAttribute("disabled",""),t.start.addEventListener("click",(function(){t.start.setAttribute("disabled",""),t.stop.removeAttribute("disabled"),e=setInterval((()=>{var t;t=`#${Math.floor(16777215*Math.random()).toString(16)}`,document.body.style.backgroundColor=`${t}`}),1e3),console.log("START")})),t.stop.addEventListener("click",(function(){t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",""),clearInterval(e),console.log("STOP")}));
//# sourceMappingURL=01-color-switcher.5f81d180.js.map
