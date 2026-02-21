import{a as n,S as h,i as u}from"./assets/vendor-B5nsgUv9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();n.defaults.baseURL="https://pixabay.com/api/";n.defaults.params={key:"54666268-2618e7de02917d56fb8a894d5",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function p(o){return n.get("",{params:{...n.defaults.params,q:o}}).then(a=>a.data)}const m=document.querySelector(".gallery"),l=document.querySelector(".loader-hidden");let d;function y(o){let a=o.map(r=>`<li class="item-gallery">
        <a href="${r.largeImageURL}"><img src="${r.webformatURL}" alt="${r.tags}" width="360px" height="152px"> </a>
        <ul class="card-info">
          <li>
            <h4>Likes</h4>
            <p>${r.likes}</p>
          </li>

          <li>
            <h4>Views</h4>
            <p>${r.views}</p>
          </li>
          <li>
            <h4>Comments</h4>
            <p>${r.comments}</p>
          </li>
          <li>
            <h4>Downloads</h4>
            <p>${r.downloads}</p>
          </li>
        </ul>
      </li>`).join("");m.insertAdjacentHTML("afterbegin",a),d?d.refresh():d=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function i(){m.innerHTML=""}function g(){l&&l.classList.add("is-active")}function L(){l&&l.classList.remove("is-active")}const f=document.querySelector(".form"),q=document.querySelector('[name="search-text"]');document.querySelector(".gallery");f.addEventListener("submit",o=>{o.preventDefault();const a=q.value.trim();if(!a){u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i();return}i(),g(),p(a).then(r=>{const s=r.hits;if(s.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i();return}i(),y(s)}).catch(r=>{u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i()}).finally(()=>{L()}),f.reset()});
//# sourceMappingURL=index.js.map
