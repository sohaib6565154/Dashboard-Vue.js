<template>
  <div class="country-dropdown" @click="toggleDropdown">
    <div class="selected">
      <img :src="selected.flag" alt="flag" />
      <span>{{ selected.name }}</span>
      <i class="arrow" :class="{ open: isOpen }"></i>
    </div>

    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="country in countries" :key="country.code" @click.stop="selectCountry(country)">
        <img :src="country.flag" alt="flag" />
        <span>{{ country.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CountryDropdown",
  data() {
    return {
      isOpen: false,
      selected: {
        code: "US",
        name: "United States",
        flag: "https://flagcdn.com/w20/us.png"
      },
      countries: [
        { code: "US", name: "United States", flag: "https://flagcdn.com/w20/us.png" },
        { code: "GB", name: "United Kingdom", flag: "https://flagcdn.com/w20/gb.png" },
        { code: "PK", name: "Pakistan", flag: "https://flagcdn.com/w20/pk.png" },
        { code: "IN", name: "India", flag: "https://flagcdn.com/w20/in.png" },
        { code: "DE", name: "Germany", flag: "https://flagcdn.com/w20/de.png" },
      ]
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectCountry(country) {
      this.selected = country;
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
.country-dropdown {
  position: relative;
  width: 180px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
}

.selected {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
}

.selected img {
  width: 20px;
  height: 14px;
  object-fit: cover;
}

.arrow {
  margin-left: auto;
  border: solid #666;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.2s;
}

.arrow.open {
  transform: rotate(-135deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 4px;
  padding: 6px 0;
  z-index: 2000;
}

.dropdown-menu li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background: #f1f1f1;
}

.dropdown-menu img {
  width: 20px;
  height: 14px;
  object-fit: cover;
}
</style>
