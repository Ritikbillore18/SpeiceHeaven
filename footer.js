const footerHTML = `
<footer class="section-footer">
<div class="footer-container container">
  <div class="content_1">
    <img src="./image/image_logo_2.png" alt="logo" />
    <p>
      Welcome to Nagraj Spices Store ,<br />
      The genuine taste for the genuine people !
      Providing a natural twist <br />
      Premium quality and well-packaged.
    </p>
  </div>
  <div class="content_2">
    <h4>SHOPPING</h4>
    <a href="products.html">Herber Spices</a>
    <a href="products.html">Natural Products</a>
    <a href="profile.html">Services</a>
    <a href="products.html">All products</a>
</div>  
<div class="content_3">
  <h4>Exprinence</h4>
  <a href="./contact.html">Contact us</a>
  <a href="./contact.html">Payment Method</a>
  <a href="./contact.html">Delivery</a>
  <a href="./contact.html">Return and Exchange</a>
</div>
<div class="content_4">
<form action="https://formspree.io/f/mwkgzrbl"
            method="POST">
  <h4>NEWSLETTER</h4>
  <p> Be the first  to know about new<br /> arrivals, sales & promos!</p>
  <div class="f-mail">
    <input type="email" placeholder="Your Email" />
    <i class="bx bx-envelope"></i>
  </div>
  <hr />
</div>
</div>
<div class="f-design">
  <div class="f-desgin-txt">
    <p>Nagraj Spices </p>
  </div>
</div>
</footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin",footerHTML);