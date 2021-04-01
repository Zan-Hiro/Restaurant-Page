(()=>{"use strict";const n=document.getElementById("content"),a=document.createElement("header"),i=document.createElement("section"),s=document.createElement("section"),e=document.createElement("section"),t=document.createElement("section"),o=document.createElement("section"),d=document.createElement("footer");function r(){n.appendChild(a)}i.id="gallery",s.id="menu-header",e.id="main-section",t.id="book-section",o.id="info-section",a.innerHTML='\n  <div>\n  <a href="#" class="photos">PHOTOS</a>\n  <a href="#" class="menu">MENU</a>\n  </div>\n  <a href="#" class="main">BISTROT ZAN</a>\n  <div>\n  <a href="#contact-section" class="information">INFORMATION\n    <i class="fas fa-info-circle"></i>\n  </a>\n  </div>\n  ',i.innerHTML='\n    <img src="https://images.unsplash.com/photo-1579712267685-42da80f60aa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="">\n    <img src="https://images.unsplash.com/photo-1579631542761-d7c4e913f8d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="">\n    <img src="https://images.unsplash.com/photo-1605138693921-e54a794acfdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">\n    <a href="#" class="utensils">BOOK A TABLE <i class="fas fa-utensils"></i></a>\n  ',e.innerHTML='\n  <div class="menu-text">\n  <h1>MENU</h1>\n  </div>\n  <div class="sub-menu">\n  <a href="#"><h1>MENU DU DÉJEUNER</h1></a>\n  <a href="#"><h1>STARTER</h1></a>\n  <a href="#"><h1>MAIN COURSE</h1></a>\n  <a href="#"><h1>DESSERT</h1></a>\n  </div>\n  ',t.innerHTML='\n    <div class="menu-text">\n    <h1>BOOK A TABLE</h1>\n    </div>\n    <div class="book-sub-section">\n    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">\n    <h1>Bistrot Zan</h1>\n    <p>19 Rue de Picardie, 75003 Paris</p>\n  \n    <h2><i class="fas fa-user-friends"></i>Number of people</h2>\n    <p>Sorry. It’s not possible to book online at the moment.</p>\n    </div>\n  ',o.innerHTML='\n    <div class="menu-text" id="contact-section">\n      <h1>INFORMATION</h1>\n      </div>\n      <div class="contact-section">\n      <h1 class="contact-text">CONTACT</h1>\n      <h3>Bistrot Zan</h3>\n      <h3><i class="fas fa-book-open"></i>&nbsp;&nbsp;19 Rue de Picardie, 75003, Paris</h3>\n      <h3>Metro Temple, Metro Fille du Calvaire, Metro République</h3>\n      <h3><i class="fas fa-phone-alt"></i>&nbsp;&nbsp;+33142789306</h3>\n  \n      <h1 class="services-text">SERVICES</h1>\n      <h3>Credit Card, Mastercard, Visa Cellar, Cocktail Bar</h3>\n  \n      <div class="locationBtn-section">\n      <a href="https://www.google.com/maps/dir//48.8637269,2.3625233" target="_blank"><button class="location-button">SEE LOCATION ON MAP</button></a>\n      </div>\n    </div>\n  ',d.innerHTML='\n    <h2>\n    This Site is assignment for <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page" class="link" target="_blank">The Odin Project.</a> <br><br>I am not web designer.<br>So, I referenced the design by Bistrot Instinct Site. <a href="http://bistrot-instinct.lafourchette.rest/en_GB/#" class="link" target="_blank">Link Here.</a> <br><br>I\'ve never intend to make a profit for this clone site.<br>\n    My only purpose is just to improving my programming skills. <br>If I recive a complaint, I will delete this site immediately. <a href="https://twitter.com/zanhiro16" target="_blank" class="link">My Twitter</a><br><br>Finally,Bistrot Instinct Site is managed by TheFork © 2021. Thank you.\n    </h2>\n  ';const c=()=>{r(),n.appendChild(i),n.appendChild(s),n.appendChild(e),n.appendChild(t),n.appendChild(o),n.appendChild(d)},l=document.createElement("section");l.id="photos-section",l.innerHTML='\n  <img src="https://images.unsplash.com/photo-1603570416072-84068a0f1358?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">\n  <img src="https://images.unsplash.com/photo-1580376259349-5f4b7db4c39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">\n  <img src="https://images.unsplash.com/photo-1603664113651-2f4fde639823?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80" alt="">\n  <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">\n  <img src="https://images.unsplash.com/photo-1576169884631-382813d0090e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="">\n  <img src="https://images.unsplash.com/photo-1563223771-375783ee91ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">\n  <img src="https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="">\n  <img src="https://images.unsplash.com/photo-1579711220373-155ffc441b36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="">\n  <img src="https://images.unsplash.com/photo-1577004686904-1a4f118acf61?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80" alt="">\n';const p=document.createElement("section");p.id="main-section",p.innerHTML='\n<div class="menu-text">\n  <h1>MENU</h1>\n</div>\n  <div class="sub-menu">\n    <a href="#"><h1>MENU DU DÉJEUNER</h1></a>\n    <div><span>Trois Entrées au choix</span><span>4 €</span></div>\n    <div>4-8€</div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Trois Plats au choix</span><span>11 €</span></div>\n    <div>4-8€</div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Côte de Veau</span><span>26 €</span></div>\n    <div>280gr</div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Côte de Veau</span><span>26 €</span></div>\n    <div>280gr</div>\n  </div>\n\n  <div class="sub-menu">\n    <a href="#"><h1>STARTER</h1></a>\n    <div><span>Radis et Beurre au Sel Fumé</span><span>6 €\n    </span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Houmous à la Betterave, Radis, Betterave Chioggia, Pignons de Pin</span><span>9 €\n    </span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Oeuf Parfait, Poêlée de Champignons, Pousses d\'Epinards, Crème d\'Ail</span><span>10 €\n    </span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Terrine de Lapin à l\'Armagnac, Châtaigne, Chutney de Raisin, Pickles</span><span>11 €\n    </span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Velouté de Potiron, Feta Fumé, Haddock Fumé, Pickles, Croûtons</span><span>10 €\n    </span></div>\n  </div>\n\n  <div class="sub-menu">\n    <a href="#"><h1>MAIN COURSE</h1></a>\n    <div><span>Pêche du Jour, Purée de Butternut, Carottes et Brocolis Rôties, Sauce Vierge, Pignons de Pin</span><span>22 €</span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Blanc de Volaille Laqué au Curry Noir, Poireaux Farcie au Riz Noir Vénéré, Feta, Noisettes Torréfié</span><span>19 €</span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Plat Végétarien</span><span>16 €</span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Côte de Veau, Pommes de Terre Grenaille, Chou Pak Choi Braisé, Butternut Rôti, Jus de Viande</span><span>26 €</span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Entrecôte de Race Française Maturée 600gr, à partager ou pas</span><span>60 €</span></div>\n  </div>\n\n  <div class="sub-menu">\n    <a href="#"><h1>DESSERT</h1></a>\n    <div><span>Profiteroles, Glace Artisanale à la Noisette IGP du Piémont, Chocolat Chaud</span><span>9 €\n    </span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Poire Pochée, Ganache Chocolat, Crème Montée Tonka, Streusel Cacao</span><span>9 €\n    </span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Pommes Déglacées au Rhum, Émulsion Fromage Blanc, Sablé Breton</span><span>9 €</span></div>\n  </div>\n  <div class="sub-menu">\n    <div><span>Crème à la Noix de Coco, Ananas Caramélisé</span><span>9 €</span></div>\n  </div>       \n',c();const u=document.querySelector(".main"),f=document.querySelector(".photos"),h=document.querySelector(".menu");u.addEventListener("click",(()=>{n.innerHTML="",c()})),f.addEventListener("click",(function(){n.innerHTML="",r(),n.appendChild(l)})),h.addEventListener("click",(function(){n.innerHTML="",r(),n.appendChild(p)}))})();