//remove old logo
let logoContainer = document.querySelector(".site-header__logo-link");
let controlLogo = document.querySelector(".lozad");
logoContainer.removeChild(controlLogo);

//add new logo
logoContainer.innerHTML = `<img src="https://iili.io/JAdu9Tb.png" alt="variant-logo" class="variant-logo" />`;

//remove control action icons
let actionIconsContainer = document.querySelector(".ssw-auth-dropdown");
actionIconsContainer.innerHTML = `
 <div class="action-icons-wrap"><a href="/account/login"><img src="https://iili.io/JAdFtne.png" alt="user-icon" /></a>
    <a href="/apps/iwish"><img src="https://iili.io/JAdK3t1.png" alt="wishlist-icon" /></a>
    <a href="/cart"><img src="https://iili.io/JAdK1Hl.png" alt="cart-icon" /></a></div>
`;
