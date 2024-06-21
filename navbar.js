const navbarHTML = `
<header class="section-navbar"> 
<section class="top_txt">
  <div class="head container">
    <div class="head_txt">
      <p>Spice up your life with flavor-packed delights</p>
    </div>
    <div id="google_translate_element"></div>
  </div>
</section>
<div class="container">
 <div class="navbar-brand">
  <a href="index.html">
    <img
      src="./image/image_logo.png"
      alt="Ritik eCommerce logo"
      class="logo"
      width="80%"
      height="auto"
      />
  </a>
  </div>
  <nav class="navbar">
    <ul>
      <li class="nav-item">
        <a href="/" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="products.html" class="nav-link">Product</a>
      </li>
      <li class="nav-item">
        <a href="profile.html" class="nav-link">profile</a>
      </li>
      <li class="nav-item">
        <a href="contact.html" class="nav-link">Contact </a>
      </li>
      <li class="nav-item">
      <a href="addToCart.html" 
      class="nav-link add-to-cart-button"
      id="cartValue"  
      >
          <i class="fa-solid fa-cart-shopping"> 0 </i>
        </a>
      </li>
    </ul>
  </nav>
</div>
</header>`;

const navbarElem = document.querySelector(".section-navbar");
navbarElem.insertAdjacentHTML("afterbegin",navbarHTML);