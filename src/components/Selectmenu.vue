<template>
<div class="box-color"></div>
  <div class="container text-center">
    <div class="row">
      <div
        class="col mt-5"
        v-for="(restaurant, index) in travelList"
        :key="index"
      >
      
        <div class="card" style="width: 18rem">
          <img
            :src="restaurant.imagesP"
            class="card-img-top"
            :width="sizeW"
            :height="sizeH"
          />
          <div class="card-body">
            <h5 class="card-title">ชื่อร้าน : {{ restaurant.name }}</h5>
            <p class="card-text">ราคาเริ่ม : {{ restaurant.price }}</p>
            <button
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            @click="addShop(restaurant.name,restaurant.imagesP)"
            >
              จองร้าน
            </button>
            <!-- <chosetable :item="shop" />
            <chosetable :item="selectedItem" /> -->
            <!-- <chosetable  :item="shop"/> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import menubar from "./menubar.vue";
import { ref } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const shop = ref([])

function addShop(restaurant) {
  
  shop.value.push(restaurant);
  console.log(shop.value);

  // Navigate to the '/table' route with 'item' query parameter
  router.push({ name: 'table', query: { item: restaurant } });
}

const Chosemenu = ref([]); // สร้าง ref สำหรับเก็บร้านที่ผู้ใช้เลือก
const travelList = ref([
  {
    name: "ร้าน ก๋วยเตี๋ยว",
    price: 1500,
    imagesP:
      "https://i.pinimg.com/564x/e7/df/6d/e7df6d197bb73f8177549c69d2229b00.jpg",
  },
  {
    name: "ร้าน ผัดไทย",
    price: 70,
    imagesP:
      "https://i.pinimg.com/736x/98/9a/e6/989ae63f69fa7dcc0927ea1323209bb3.jpg",
  },
  {
    name: "ร้าน กะเพราหมูสับ",
    price: 45,
    imagesP:
      "https://i.pinimg.com/564x/f6/f2/86/f6f286c357db32aad0d5f5ffe5846356.jpg",
  },
  {
    name: "ร้าน มาม่าผัดขี้เมา",
    price: 65,
    imagesP:
      "https://i.pinimg.com/564x/f5/e0/de/f5e0de18579b1f6900e86b1087468df3.jpg",
  },
  {
    name: "ร้าน ส้มตำ",
    price: 40,
    imagesP:
      "https://i.pinimg.com/736x/d9/62/af/d962af31373b46a60c6d60d28afca945.jpg",
  },
]);
const sizeW = 350;
const sizeH = 250;

</script>

<script>
import chosetable from "./chosetable.vue";
import { useRouter } from "vue-router"; // Import useRouter

export default {
  components: {
    chosetable,
  },
  setup() {
    const router = useRouter(); // Initialize router here
    return { router };
  },
};
</script>

<style>
body {
  margin-bottom: 1000px;
}
.box-color {
  background-color: rgb(240, 241, 241);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5); /* เงาล่าง */
  width: 100%;
  height: 100px;
}
</style>
