import{a as c,S as P,i as o}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();c.defaults.baseURL="https://pixabay.com/api/";c.defaults.params={key:"54666268-2618e7de02917d56fb8a894d5",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};async function y(a,r=1){return(await c.get("",{params:{...c.defaults.params,q:a,page:r}})).data}const L=document.querySelector(".gallery"),d=document.querySelector(".loader"),u=document.querySelector(".js-load-btn");let p;function b(a){const r=a.map(e=>`
    <li class="item-gallery">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" width="360px" height="152px">
      </a>
      <ul class="card-info">
        <li>
          <h4>Likes</h4>
          <p>${e.likes}</p>
        </li>
        <li>
          <h4>Views</h4>
          <p>${e.views}</p>
        </li>
        <li>
          <h4>Comments</h4>
          <p>${e.comments}</p>
        </li>
        <li>
          <h4>Downloads</h4>
          <p>${e.downloads}</p>
        </li>
      </ul>
    </li>
  `).join("");L.insertAdjacentHTML("beforeend",r),p?p.refresh():p=new P(".gallery a",{captionsData:"alt",captionDelay:250})}function $(){L.innerHTML=""}function w(){d&&d.classList.add("is-active")}function v(){d&&d.classList.remove("is-active")}function q(){u.disabled=!1,u.classList.remove("hidden")}function f(){u.disabled=!0,u.classList.add("hidden")}const g=document.querySelector(".form"),x=document.querySelector('[name="search-text"]'),B=document.querySelector(".js-load-btn");let l="",i=1,h=0;const S=15;g.addEventListener("submit",async a=>{if(a.preventDefault(),l=x.value.trim(),i=1,!l){o.error({message:"Please enter a search query!"});return}$(),f(),w();try{const r=await y(l,i),e=r.hits;if(e.length===0){o.error({message:"No images found for your query."});return}b(e),h=Math.ceil(r.totalHits/S),i<h?q():(f(),o.info({message:"You've reached the end of search results."}))}catch{o.error({message:"Error fetching images. Please try again."})}finally{v()}g.reset()});B.addEventListener("click",async()=>{i+=1,f(),w();try{const a=await y(l,i),r=a.hits;if(r.length===0)return;b(r);const e=document.querySelector(".gallery .item-gallery");if(e){const n=e.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}h=Math.ceil(a.totalHits/S)}catch{o.error({message:"Error fetching images. Please try again."})}finally{v(),i<h?q():(f(),o.info({message:"You've reached the end of search results."}))}});
//# sourceMappingURL=index.js.map
