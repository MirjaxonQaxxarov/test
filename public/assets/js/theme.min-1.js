!function(){document.querySelectorAll(".dropdown-menu a.dropdown-toggle").forEach((function(e){e.addEventListener("click",(function(e){if(!this.nextElementSibling.classList.contains("show")){this.closest(".dropdown-menu").querySelectorAll(".show").forEach((function(e){e.classList.remove("show")}))}this.nextElementSibling.classList.toggle("show");const t=this.closest("li.nav-item.dropdown.show");t&&t.addEventListener("hidden.bs.dropdown",(function(e){document.querySelectorAll(".dropdown-submenu .show").forEach((function(e){e.classList.remove("show")}))})),e.stopPropagation()}))}));document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((function(e){new bootstrap.Tooltip(e)}));document.querySelectorAll('[data-bs-toggle="popover"]').forEach((function(e){new bootstrap.Popover(e)}));const e=document.querySelector("#cardRadioone"),t=document.querySelector("#cardRadioTwo"),n=document.querySelector("#internetpayment"),o=document.querySelector("#cardpayment");e&&t&&(n.style.display="none",e.addEventListener("change",(function(){this.checked&&(o.style.display="",n.style.display="none")})),t.addEventListener("change",(function(){this.checked&&(n.style.display="",o.style.display="none")})));document.querySelectorAll(".password-field input").forEach((function(e){e.addEventListener("keyup",(function(){var e=function(e){var t=0;e.length>=6&&(t+=1);e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(t+=1);e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)&&(t+=1);return t}(this.value),t=this.parentElement;t.classList.remove(...t.classList),t.classList.add("password-field","level"+e)}))}));const c=document.getElementById("nav-toggle"),l=document.getElementById("db-wrapper");c&&l&&c.addEventListener("click",(function(e){e.preventDefault(),l.classList.toggle("toggled")}));const i=document.getElementById("invoice");if(i){i.querySelector(".print-link").addEventListener("click",(function(){window.print()}))}const a=document.querySelectorAll(".sidebar-nav-fixed a");a.forEach((function(e){e.addEventListener("click",(function(e){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=document.querySelector(this.hash);(t=t||document.querySelector("[name="+this.hash.slice(1)+"]"))&&(e.preventDefault(),window.scrollTo({top:t.offsetTop-90,behavior:"smooth"}),t.focus(),t!==document.activeElement&&(t.setAttribute("tabindex","-1"),t.focus()))}a.forEach((function(e){e.classList.remove("active")})),this.classList.add("active")}))}));const s=document.querySelector("#checkAll");s&&s.addEventListener("click",(function(){document.querySelectorAll('input[type="checkbox"]').forEach((function(e){e!==s&&(e.checked=s.checked)}))}));const r=document.querySelectorAll("#btn-icon .btn-icon");r&&r.forEach((function(e){e.addEventListener("click",(function(){e.parentElement.classList.add("active");(function(e){const t=[];let n=e.parentNode.firstChild;for(;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t})(e.parentElement).forEach((function(e){e.classList.remove("active")}))}))}));document.querySelectorAll(".stopevent").forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation()}))}));const d=document.querySelector("input[name=tags]");d&&new Tagify(d);document.querySelectorAll(".needs-validation").forEach((function(e){e.addEventListener("submit",(function(t){e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")}),!1)}));document.querySelectorAll(".toast").forEach((function(e){new bootstrap.Toast(e)}));document.querySelectorAll(".offcanvas").forEach((function(e){new bootstrap.Offcanvas(e)}));document.querySelectorAll(".dropdown-toggle").forEach((function(e){new bootstrap.Dropdown(e)}));const u=document.getElementById("liveAlertPlaceholder"),m=document.getElementById("liveAlertBtn");u&&m&&m.addEventListener("click",(function(){!function(e,t){const n=document.createElement("div");n.innerHTML='<div class="alert alert-'+t+' alert-dismissible" role="alert">'+e+'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>',u.appendChild(n)}("Nice, you triggered this alert message!","success")}));const f=document.getElementById("slider");f&&noUiSlider.create(f,{start:[32],connect:[!0,!1],range:{min:0,max:60},tooltips:[wNumb({decimals:0})]});var p=document.querySelector(".btn-scroll-top");if(null!=p){var h=document.querySelector(".btn-scroll-top path"),g=h.getTotalLength();h.style.transition=h.style.WebkitTransition="none",h.style.strokeDasharray=g+" "+g,h.style.strokeDashoffset=g,h.getBoundingClientRect(),h.style.transition=h.style.WebkitTransition="stroke-dashoffset 10ms linear",window.addEventListener("scroll",(function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=g-t*g/n;h.style.strokeDashoffset=o,(document.body.scrollTop||document.documentElement.scrollTop)>=50?p.classList.add("active-progress"):p.classList.remove("active-progress")})),p.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}))}var v=document.getElementById("priceRange");if(v){noUiSlider.create(v,{connect:!0,behaviour:"tap",start:[0,1500],step:200,range:{min:[0],max:[1500]},format:wNumb({prefix:"$"})});var y=document.getElementById("priceRange-value");v.noUiSlider.on("update",(function(e){y.innerHTML=e.join(" - ")}))}var E=document.getElementById("expRange");if(E){noUiSlider.create(E,{connect:!0,behaviour:"tap",start:[0,15],step:1,range:{min:0,max:15},format:wNumb({})});var b=document.getElementById("expRange-value");E.noUiSlider.on("update",(function(e){b.innerHTML=e.join(" - ")}))}}();const changelogElement=document.getElementById("changelog");if(changelogElement){function changeLog(){changelogElement.innerHTML="v3.3.0"}changeLog()}