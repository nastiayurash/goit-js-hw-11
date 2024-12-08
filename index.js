import{i as s,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const b="47411339-89ac2619070d550af30415c00";async function L(n,r=1,o=9){const e=`https://pixabay.com/api/?key=${b}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`;try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch images.");return await t.json()}catch(t){throw console.error("Error fetching images:",t),s.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"top-center"}),t}}function E(n,r){const o=n.map(({webformatURL:e,largeImageURL:t,tags:i,likes:u,views:p,comments:g,downloads:y})=>`
        <li class="gallery-item">
          <a href="${t}">
            <img src="${e}" alt="${i}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes:</b> ${u}
            </p>
            <p class="info-item">
              <b>Views:</b> ${p}
            </p>
            <p class="info-item">
              <b>Comments:</b> ${g}
            </p>
            <p class="info-item">
              <b>Downloads:</b> ${y}
            </p>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",o),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const l=document.getElementById("search-form"),d=document.querySelector(".gallery");document.getElementById("load-more");const m=document.getElementById("loading-indicator");let c=1;function w(){m.style.display="block"}function f(){m.style.display="none"}l.addEventListener("submit",async n=>{n.preventDefault();const r=l.querySelector("input").value.trim();if(!r){s.error({message:"Please enter a search term."});return}c=1,d.innerHTML="",w();try{const o=await L(r,c);f(),o.hits.length===0?s.error({message:"Sorry, no images found. Please try again!"}):(E(o.hits,d,!0),c+=1)}catch{f(),s.error({message:"Error fetching images. Please try again!"})}});
//# sourceMappingURL=index.js.map
