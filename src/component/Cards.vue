<script setup>
const props = defineProps({
    icon:String,
  orderNumber: Number,
  orderText:String,
  orderRatio:String,
  customClass:String
})
</script>


<template>
    <div :class="['card', customClass]">
        <div v-html="icon"></div>
        <p class="orderNumber">{{ orderNumber }}</p>
        <p class="orderText">{{ orderText }}</p>
        <p class="orderRatio">{{ orderRatio }}% from yesterday</p>
    </div>
</template>

<style scoped>
.card {
  padding: 15px;
  border-radius: 16px;
  margin-top: 20px;
}
.orderNumber{
    font-size: 24px;
    margin-top: 5px;
    font-weight: 600;
}
.orderText{
    margin-top: 5px;
}
.orderRatio{
    font-size: 12px;
    color: #4079ED;
    margin-top: 5px;
}
.card-red{
    background-color: #FFE2E5;
}
.card-yellow{
    background-color: #FFF4DE;
}
.card-green{
    background-color: #DCFCE7;
}
.card-voilet{
    background-color: #F3E8FF;
}
</style>