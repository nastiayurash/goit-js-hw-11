import{i as s,S as w}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const $="47411339-89ac2619070d550af30415c00";async function f(a,r=1,o=9){const e=`https://pixabay.com/api/?key=${$}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`;try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch images.");return await t.json()}catch(t){throw console.error("Error fetching images:",t),s.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"top-center"}),t}}function g(a,r){const o=a.map(({webformatURL:e,largeImageURL:t,tags:n,likes:h,views:b,comments:E,downloads:L})=>`
        <li class="gallery-item">
          <a href="${t}">
            <img src="${e}" alt="${n}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes:</b> ${h}
            </p>
            <p class="info-item">
              <b>Views:</b> ${b}
            </p>
            <p class="info-item">
              <b>Comments:</b> ${E}
            </p>
            <p class="info-item">
              <b>Downloads:</b> ${L}
            </p>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",o),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const m=document.getElementById("search-form"),u=document.querySelector(".gallery"),l=document.getElementById("load-more"),p=document.getElementById("loading-indicator");let i=1;function y(){p.style.display="block"}function d(){p.style.display="none"}m.addEventListener("submit",async a=>{a.preventDefault();const r=m.querySelector("input").value.trim();if(!r){s.error({message:"Please enter a search term."});return}i=1,u.innerHTML="",y();try{const o=await f(r,i);d(),o.hits.length===0?(s.error({message:"Sorry, no images found. Please try again!"}),l.style.display="none"):(g(o.hits,u,!0),i+=1,l.style.display="block")}catch{d(),s.error({message:"Error fetching images. Please try again!"})}});l.addEventListener("click",async()=>{const a=m.querySelector("input").value.trim();y();try{const r=await f(a,i);d(),r&&r.hits.length>0?(g(r.hits,u),i+=1):(s.info({message:"No more images available."}),l.style.display="none")}catch{d(),s.error({message:"Error loading more images. Please try again!"})}});
//# sourceMappingURL=index.js.map
