const content = document.getElementById('content');
const header = document.createElement('header');

const gallery = document.createElement('section');
const menuHeader = document.createElement('section');
const mainSection = document.createElement('section');
const bookSection = document.createElement('section');
const infoSection = document.createElement('section');
const footer = document.createElement('footer');

  gallery.id = "gallery";
  menuHeader.id = 'menu-header';
  mainSection.id = 'main-section';
  bookSection.id = 'book-section';
  infoSection.id = 'info-section';
  
  header.innerHTML = `
  <div>
  <a href="#" class="photos">PHOTOS</a>
  <a href="#" class="menu">MENU</a>
  </div>
  <a href="#" class="main">BISTROT ZAN</a>
  <div>
  <a href="#contact-section" class="information">INFORMATION
    <i class="fas fa-info-circle"></i>
  </a>
  </div>
  `;
  
  gallery.innerHTML = `
    <img src="https://images.unsplash.com/photo-1579712267685-42da80f60aa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="">
    <img src="https://images.unsplash.com/photo-1579631542761-d7c4e913f8d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="">
    <img src="https://images.unsplash.com/photo-1605138693921-e54a794acfdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">
    <a href="#" class="utensils">BOOK A TABLE <i class="fas fa-utensils"></i></a>
  `;
  
  mainSection.innerHTML = `
  <div class="menu-text">
  <h1>MENU</h1>
  </div>
  <div class="sub-menu">
  <a href="#"><h1>MENU DU DÉJEUNER</h1></a>
  <a href="#"><h1>STARTER</h1></a>
  <a href="#"><h1>MAIN COURSE</h1></a>
  <a href="#"><h1>DESSERT</h1></a>
  </div>
  `;
  
  bookSection.innerHTML = `
    <div class="menu-text">
    <h1>BOOK A TABLE</h1>
    </div>
    <div class="book-sub-section">
    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
    <h1>Bistrot Zan</h1>
    <p>19 Rue de Picardie, 75003 Paris</p>
  
    <h2><i class="fas fa-user-friends"></i>Number of people</h2>
    <p>Sorry. It’s not possible to book online at the moment.</p>
    </div>
  `;
  
  infoSection.innerHTML = `
    <div class="menu-text" id="contact-section">
      <h1>INFORMATION</h1>
      </div>
      <div class="contact-section">
      <h1 class="contact-text">CONTACT</h1>
      <h3>Bistrot Zan</h3>
      <h3><i class="fas fa-book-open"></i>&nbsp;&nbsp;19 Rue de Picardie, 75003, Paris</h3>
      <h3>Metro Temple, Metro Fille du Calvaire, Metro République</h3>
      <h3><i class="fas fa-phone-alt"></i>&nbsp;&nbsp;+33142789306</h3>
  
      <h1 class="services-text">SERVICES</h1>
      <h3>Credit Card, Mastercard, Visa Cellar, Cocktail Bar</h3>
  
      <div class="locationBtn-section">
      <a href="https://www.google.com/maps/dir//48.8637269,2.3625233" target="_blank"><button class="location-button">SEE LOCATION ON MAP</button></a>
      </div>
    </div>
  `;
  
  footer.innerHTML = `
    <h2>
    This Site is assignment for <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page" class="link" target="_blank">The Odin Project.</a> <br><br>I am not web designer.<br>So, I referenced the design by Bistrot Instinct Site. <a href="http://bistrot-instinct.lafourchette.rest/en_GB/#" class="link" target="_blank">Link Here.</a> <br><br>I've never intend to make a profit for this clone site.<br>
    My only purpose is just to improving my programming skills. <br>If I recive a complaint, I will delete this site immediately. <a href="https://twitter.com/zanhiro16" target="_blank" class="link">My Twitter</a><br><br>Finally,Bistrot Instinct Site is managed by TheFork © 2021. Thank you.
    </h2>
  `;

  function createHeader() {
    content.appendChild(header);
  }

  function createGallery() {
    content.appendChild(gallery);
  }

  function createMenuHeader() { 
    content.appendChild(menuHeader);
  }

  function createMainSection() {
    content.appendChild(mainSection);
  }

  function createBookSection() {
    content.appendChild(bookSection);
  }

  function createInfoSection() {
    content.appendChild(infoSection);
  }

  function createFooter() {
    content.appendChild(footer);
  }

  const createHome = () => {
  createHeader();
  createGallery();
  createMenuHeader();
  createMainSection();
  createBookSection();
  createInfoSection();
  createFooter();
  }



export  { content, createHeader, createFooter, createHome };