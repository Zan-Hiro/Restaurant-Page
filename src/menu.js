import  { content, createHeader } from "./home";

const createMenuSection = document.createElement('section');
createMenuSection.id = "main-section";

createMenuSection.innerHTML = `
<div class="menu-text">
  <h1>MENU</h1>
</div>
  <div class="sub-menu">
    <a href="#"><h1>MENU DU DÉJEUNER</h1></a>
    <div><span>Trois Entrées au choix</span><span>4 €</span></div>
    <div>4-8€</div>
  </div>
  <div class="sub-menu">
    <div><span>Trois Plats au choix</span><span>11 €</span></div>
    <div>4-8€</div>
  </div>
  <div class="sub-menu">
    <div><span>Côte de Veau</span><span>26 €</span></div>
    <div>280gr</div>
  </div>
  <div class="sub-menu">
    <div><span>Côte de Veau</span><span>26 €</span></div>
    <div>280gr</div>
  </div>

  <div class="sub-menu">
    <a href="#"><h1>STARTER</h1></a>
    <div><span>Radis et Beurre au Sel Fumé</span><span>6 €
    </span></div>
  </div>
  <div class="sub-menu">
    <div><span>Houmous à la Betterave, Radis, Betterave Chioggia, Pignons de Pin</span><span>9 €
    </span></div>
  </div>
  <div class="sub-menu">
    <div><span>Oeuf Parfait, Poêlée de Champignons, Pousses d'Epinards, Crème d'Ail</span><span>10 €
    </span></div>
  </div>
  <div class="sub-menu">
    <div><span>Terrine de Lapin à l'Armagnac, Châtaigne, Chutney de Raisin, Pickles</span><span>11 €
    </span></div>
  </div>
  <div class="sub-menu">
    <div><span>Velouté de Potiron, Feta Fumé, Haddock Fumé, Pickles, Croûtons</span><span>10 €
    </span></div>
  </div>

  <div class="sub-menu">
    <a href="#"><h1>MAIN COURSE</h1></a>
    <div><span>Pêche du Jour, Purée de Butternut, Carottes et Brocolis Rôties, Sauce Vierge, Pignons de Pin</span><span>22 €</span></div>
  </div>
  <div class="sub-menu">
    <div><span>Blanc de Volaille Laqué au Curry Noir, Poireaux Farcie au Riz Noir Vénéré, Feta, Noisettes Torréfié</span><span>19 €</span></div>
  </div>
  <div class="sub-menu">
    <div><span>Plat Végétarien</span><span>16 €</span></div>
  </div>
  <div class="sub-menu">
    <div><span>Côte de Veau, Pommes de Terre Grenaille, Chou Pak Choi Braisé, Butternut Rôti, Jus de Viande</span><span>26 €</span></div>
  </div>
  <div class="sub-menu">
    <div><span>Entrecôte de Race Française Maturée 600gr, à partager ou pas</span><span>60 €</span></div>
  </div>

  <div class="sub-menu">
    <a href="#"><h1>DESSERT</h1></a>
    <div><span>Profiteroles, Glace Artisanale à la Noisette IGP du Piémont, Chocolat Chaud</span><span>9 €
    </span></div>
  </div>
  <div class="sub-menu">
    <div><span>Poire Pochée, Ganache Chocolat, Crème Montée Tonka, Streusel Cacao</span><span>9 €
    </span></div>
  </div>
  <div class="sub-menu">
    <div><span>Pommes Déglacées au Rhum, Émulsion Fromage Blanc, Sablé Breton</span><span>9 €</span></div>
  </div>
  <div class="sub-menu">
    <div><span>Crème à la Noix de Coco, Ananas Caramélisé</span><span>9 €</span></div>
  </div>       
`;

function createMenuPage() {
  content.innerHTML = "";
  createHeader();
  content.appendChild(createMenuSection);
}

export  { createMenuPage };