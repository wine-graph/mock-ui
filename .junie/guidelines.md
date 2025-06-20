# Project Guidelines

React & Bootstrap only for now
Mock data vs using Apollo
Purpose is to mock the UI/UX for now based on the backend I'm building
Wine platform connecting producers, retailers, and consumers
Integration from Shopify for producers and Square for retailers
HTML concept for the top and side nav

<!-- Top Nav -->
<nav class="navbar navbar-light bg-light px-3">
  <span class="navbar-brand mb-0 h1">🍇 Wine Platform 🍇</span>
  <input class="form-control me-2 w-25" type="search" placeholder="Search wines, producers, regions" aria-label="Search" id="search-bar">
  <button class="btn btn-outline-primary" id="login-btn">Login / Sign Up</button>
</nav>

<!-- Main Layout -->
<div class="container-fluid">
  <div class="row">
    <!-- Left Nav -->
    <div class="col-md-2 p-0" id="left-nav">
      <div class="nav flex-column p-3">
        <div class="nav-item active" data-view="home"><i class="bi bi-house"></i> Home</div>
        <div class="nav-item" data-view="explore"><i class="bi bi-globe"></i> Explore</div>
        <div class="nav-item" data-view="cellar"><i class="bi bi-box"></i> Cellar</div>
        <div class="nav-item" data-view="marketplace"><i class="bi bi-cart"></i> Marketplace</div>
        <div class="nav-item" data-view="profile"><i class="bi bi-person"></i> Profile</div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="col-md-10 p-4" id="content">
      <h4>Welcome to the Wine Platform</h4>
      <p>Discover wines, learn about producers and regions — no login required.</p>
    </div>
  </div>
</div>