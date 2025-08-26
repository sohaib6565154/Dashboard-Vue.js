<template>
  <div class="product-chart">
    <div class="row heading">
      <span>#</span>
      <span>Name</span>
      <span>Popularity</span>
      <span>Sales</span>
    </div>

    <div v-for="(p, i) in products" :key="i" class="row">
      <span>{{ i + 1 }}</span>
      <span class="name">{{ p.name }}</span>
      <div class="bar">
        <div class="fill" :style="{ width: p.popularity + '%', background: p.color }"></div>
      </div>
      <span class="sales">{{ p.sales }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductChart",
  data() {
    return {
      products: [
        { name: "Home Decor Range", popularity: 45, sales: 45, color: "#3B82F6" },
        { name: "Disney Princess Pink Bag 18”", popularity: 29, sales: 29, color: "#10B981" },
        { name: "Bathroom Essentials", popularity: 18, sales: 18, color: "#8B5CF6" },
        { name: "Apple Smartwatches", popularity: 25, sales: 25, color: "#F59E0B" }
      ]
    };
  }
};
</script>

<style scoped>
.product-chart {
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  font-family: sans-serif;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  box-sizing: border-box;
}

/* Grid layout */
.row {
  display: grid;
  grid-template-columns: 30px 1fr 1fr 50px; /* flexible for small screens */
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.row:last-child {
  border-bottom: none;
}

.heading {
  font-weight: 600;
  color: #444;
  border-bottom: 2px solid #ddd;
}

.bar {
  height: 8px;
  background: #f3f3f3;
  border-radius: 4px;
  overflow: hidden;
}

.fill {
  height: 8px;
  border-radius: 4px;
}

.name {
  font-weight: 500;
  color: #333;
}

.sales {
  font-weight: bold;
  color: #111;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .row {
    grid-template-columns: 25px 2fr 1fr 50px;
  }
}

@media (max-width: 768px) {
  .product-chart {
    padding: 16px;
    font-size: 13px;
  }
  .row {
    grid-template-columns: 20px 2fr 1fr 40px;
    gap: 6px;
  }
  .bar {
    height: 6px;
  }
  .fill {
    height: 6px;
  }
}
</style>
