<template>
    <div class="show-info">
      <!-- แสดงข้อมูลที่ถูกส่งมาจาก TableC.vue -->
      <h1> จองโต๊ะที่ : {{ item }}</h1>
      <h2>ชื่อ : {{ name }}</h2>
      <h2>เบอร์โทร: {{ phoneNumber }}</h2>
      <h2>วันเวลา: {{ formattedDateTime }}</h2>
    </div>
  </template>

  
  
  <script>
  import { format } from "date-fns";

  export default {
    props: {
      item: String, // รับค่า item จาก TableC.vue
      name: String, // รับค่า name จาก TableC.vue
      phoneNumber: String, // รับค่า phoneNumber จาก TableC.vue
      dateTime: String, // รับค่า dateTime จาก TableC.vue
    },
    computed: {
    formattedDateTime() {
      return format(new Date(this.dateTime), "dd MMM yyyy HH:mm");
    },
    },
  };
  </script>
  
  <style scoped>
  .show-info {
    text-align: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .show-info h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .show-info h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  </style>
  