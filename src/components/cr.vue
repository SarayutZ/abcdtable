<template>
    <div class="text-center show">
      <h3 class="text-center mt-4">รูปจาก</h3>
      <label for="originalImage">สามารถคลิกรูปเพื่อดูต้นฉบับ</label><br/>
      <a href="https://www.flaticon.com/free-icon/bibimbap_2276931?term=food&page=1&position=20&origin=search&related_id=2276931" target="_blank">
        <img id="originalImage" src="/src/images/logo.png" alt="Bibimbap Original Image">
      </a>
      <div class="col mt-5" v-for="(restaurant, index) in travelList" :key="index">
        <div class="card" style="width: 18rem">
            <a :href="restaurant.hreflink" target="_blank">
            
                <img
                  :src="restaurant.imagesP"
                  class="card-img-top"
                  :width="sizeW"
                  :height="sizeH"
                  
                />
            </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const sizeW = 100; // You can adjust the width as needed
  const sizeH = 100; // You can adjust the height as needed
  
  const travelList = ref([
    {

      hreflink:"https://www.pinterest.com/pin/6333255718254329/",
      imagesP:
        "https://i.pinimg.com/564x/e7/df/6d/e7df6d197bb73f8177549c69d2229b00.jpg",
    },
    {

      hreflink:"https://www.pinterest.com/pin/759841768394989535/",
      imagesP:
        "https://i.pinimg.com/736x/98/9a/e6/989ae63f69fa7dcc0927ea1323209bb3.jpg",
    },
    {

      hreflink:"https://www.pinterest.com/pin/334533078586870208/",
      imagesP:
        "https://i.pinimg.com/564x/f6/f2/86/f6f286c357db32aad0d5f5ffe5846356.jpg",
    },
    {

      hreflink:"https://www.pinterest.com/pin/787707791098105148/",
      imagesP:
        "https://i.pinimg.com/564x/f5/e0/de/f5e0de18579b1f6900e86b1087468df3.jpg",
    },
    {

      hreflink:"https://www.pinterest.com/pin/970807263399371746/",
      imagesP:
        "https://i.pinimg.com/736x/d9/62/af/d962af31373b46a60c6d60d28afca945.jpg",
    },
  ]);
  </script>
  
  <style>
.show {
    text-align: center;
  }

  .show h3 {
    margin-top: 4rem;
    font-size: 24px; /* ปรับขนาดตัวอักษรตามที่ต้องการ */
  }

  label[for="originalImage"] {
    display: block;
    margin-top: 1rem;
    font-size: 16px; /* ปรับขนาดตัวอักษรตามที่ต้องการ */
  }

  #originalImage {
    width: 100px;
    height: 100px;
  }

  .col {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }

  .card {
    width: 18rem;
    margin: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* เพิ่มเงาให้กับการ์ด */
  }

  .card-img-top {
    width: 100%;
    height: auto;
  }
  </style>
  