<template>
  <header class="header">
    <!-- Left side: Hamburger + Logo (mobile only) -->
    <div class="header-left">
      <button class="hamburger" @click="$emit('toggleSidebar')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28"
          height="28">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <h1 class="header-logo">Dashboard</h1>
    </div>

    <!-- Center: Search -->
    <div class="header-search">
      <button>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
            fill="#5D5FEF" />
        </svg>

      </button>
      <input type="text" placeholder="Search here..." />

    </div>

    <!-- Right: Icons + Profile -->
    
    <div class="header-right">
      <CountryDropdown/>
      <button class="icon-btn">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#FFFAF1" />
          <path
            d="M33.6732 30.5534C33.0303 29.9802 32.4675 29.3232 31.9999 28.6C31.4894 27.6017 31.1834 26.5115 31.0999 25.3934V22.1C31.1043 20.3438 30.4672 18.6463 29.3084 17.3267C28.1495 16.007 26.5486 15.1559 24.8065 14.9333V14.0733C24.8065 13.8373 24.7128 13.6109 24.5459 13.444C24.379 13.2771 24.1526 13.1833 23.9165 13.1833C23.6805 13.1833 23.4541 13.2771 23.2872 13.444C23.1203 13.6109 23.0265 13.8373 23.0265 14.0733V14.9467C21.3 15.1853 19.7185 16.0415 18.5749 17.3568C17.4313 18.672 16.803 20.3571 16.8065 22.1V25.3934C16.723 26.5115 16.4171 27.6017 15.9065 28.6C15.4471 29.3216 14.8933 29.9785 14.2599 30.5534C14.1888 30.6158 14.1318 30.6927 14.0927 30.7789C14.0536 30.8651 14.0333 30.9587 14.0332 31.0534V31.96C14.0332 32.1368 14.1034 32.3064 14.2285 32.4314C14.3535 32.5564 14.5231 32.6267 14.6999 32.6267H33.2332C33.41 32.6267 33.5796 32.5564 33.7046 32.4314C33.8296 32.3064 33.8999 32.1368 33.8999 31.96V31.0534C33.8997 30.9587 33.8795 30.8651 33.8404 30.7789C33.8013 30.6927 33.7443 30.6158 33.6732 30.5534ZM15.4199 31.2934C16.0401 30.6942 16.5863 30.0227 17.0465 29.2934C17.6896 28.0877 18.0648 26.7574 18.1465 25.3934V22.1C18.1201 21.3187 18.2512 20.5401 18.5319 19.8105C18.8126 19.0809 19.2373 18.4152 19.7807 17.8532C20.3241 17.2911 20.975 16.8441 21.6947 16.5389C22.4144 16.2336 23.1881 16.0763 23.9699 16.0763C24.7516 16.0763 25.5254 16.2336 26.2451 16.5389C26.9648 16.8441 27.6157 17.2911 28.159 17.8532C28.7024 18.4152 29.1271 19.0809 29.4078 19.8105C29.6886 20.5401 29.8196 21.3187 29.7932 22.1V25.3934C29.8749 26.7574 30.2501 28.0877 30.8932 29.2934C31.3535 30.0227 31.8996 30.6942 32.5199 31.2934H15.4199Z"
            fill="#FFA412" />
          <path
            d="M23.9996 34.8533C24.4195 34.8436 24.8225 34.6857 25.1373 34.4075C25.4521 34.1294 25.6583 33.7488 25.7196 33.3333H22.2129C22.2759 33.7601 22.4918 34.1496 22.8204 34.4292C23.1491 34.7088 23.5681 34.8595 23.9996 34.8533Z"
            fill="#FFA412" />
          <path
            d="M38.3333 12.6667C40.1743 12.6667 41.6667 11.1743 41.6667 9.33333C41.6667 7.49238 40.1743 6 38.3333 6C36.4924 6 35 7.49238 35 9.33333C35 11.1743 36.4924 12.6667 38.3333 12.6667Z"
            fill="#EB5757" />
        </svg>

      </button>

      <div class="header-profile">
        <img src="https://i.pravatar.cc/40" alt="User" />
        <span class="username">Sohaib</span>
      </div>
    </div>
    </header>
</template>

<script setup>
import CountryDropdown from './CountryDropdown.vue';
defineEmits(["toggleSidebar"]);
</script>

<style scoped>
.header {
  height: 80px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-left: 250px;
  z-index: 1000;
  transition: left 0.3s ease;
  /* smooth when sidebar toggles */
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-logo {
  font-size: 28px;
  font-weight: 600;
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: none;
}

/* Search bar */
.header-search {
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  background: #F9FAFB;
  border-radius: 16px;
  padding: 0 10px;
}

.header-search input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 8px;
  font-size: 14px;
}

.header-search button {
  border: none;
  background: none;
  cursor: pointer;
}

/* Right section */
.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
}

.header-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-profile img {
  border-radius: 16px;
}

.username {
  font-size: 14px;
  font-weight: 500;
}

/* Mobile responsiveness */
@media (max-width: 992px) {
  .header {
    margin-left: 0;
    /* ✅ full width when sidebar is collapsed/overlay */
  }

  .hamburger {
    display: block;
  }

  .header-logo {
    display: none;
  }

  .header-search {
    max-width: 150px;
  }
}
/* Mobile responsiveness for tablets and small phones */
@media (max-width: 600px) {
  .header {
    flex-wrap: wrap; /* allow items to wrap */
    height: auto; /* adapt height */
    padding: 10px;
  }

  .header-left {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .header-search {
    width: 100%;
    max-width: 100%;
    margin-bottom: 10px;
    order: 2; /* move search below header-left */
  }

  .header-search input {
    font-size: 12px;
    padding: 6px;
  }

  .header-right {
    width: 100%;
    justify-content: flex-end;
    gap: 10px;
    order: 3; /* move right section below search */
  }

  .header-profile .username {
    display: none; /* optional: hide username for very small screens */
  }

  .hamburger {
    display: block;
  }

  .header-logo {
    display: block;
    font-size: 22px;
  }
}

</style>
