function showpop(t,e){var i=document.getElementById("popup");if(0==stick){i.style.left=t.clientX+"px",i.style.top=t.clientY+"px";var n=nodeListPlants[e-1].innerHTML;document.getElementById("popuptitle").innerHTML=void 0!==n?n:"nog opzoeken",document.getElementById("plant_image").src="/ebroerse.nl/assets/img/tuin/"+e+".jpg",i.style.visibility="visible"}return!0}function hidepop(){var t=document.getElementById("popup");return 0==stick&&(t.style.visibility="hidden"),!0}function togglepop(t,e){showpop(t,e);var i=document.getElementById("popup");return 1==stick&&("visible"==i.style.visibility&&(i.style.visibility="hidden"),stick=!1),"visible"==i.style.visibility&&(stick=!0),!0}var nodeplantlist,stick=!1;