const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(){n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0}));let n=null;t.addEventListener("click",(function(){o.style.backgroundColor=clearInterval(n),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.72561a99.js.map
