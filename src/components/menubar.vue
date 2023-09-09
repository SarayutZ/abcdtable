<template>

<div class="menubar ">

<div class="logomain m-3">
  <a href="/"><img src="/src/images/logo.png" alt="" srcset="" width="50" height="50"></a>
  <a class="you fs-2 mx-2" href="/">อาหารเพื่อคุณ</a>
</div>

<div class="wrap-menu">
  <router-link to="/cr"><a><p class="mt-4 mx-2">รูปภาพจาก</p></a></router-link>
  <a><p class="mt-4"></p></a>
</div>

</div>





</template>



<script setup>
import Selectmenu from './Selectmenu.vue';
import Chosetable from './chosetable.vue';

</script>

<style >
h2{
  text-decoration: none; /* ลบขีดใต้ข้อความลิงค์ */
}
a{
  text-decoration: none; /* ลบขีดใต้ข้อความลิงค์ */
  list-style: none;
}
.you ,a {
  color: black !important;  /* สีของลิงค์เริ่มต้น (สีดำ) */
  text-decoration: none !important; /* ไม่มีขีดเส้นใต้ข้อความลิงค์ */

  
  transition: color 0.3s; /* เพิ่มการเปลี่ยนสีอย่างนุ่มนวล */
  list-style: none;
}
.link-to-home:hover {
  color: gray; /* สีของลิงค์เมื่อโฮเวอร์ (สีเทาหรือสีที่คุณต้องการ) */
}
.logomain{
    cursor: pointer;
}

.menubar {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* เพิ่มเงาด้านใต้ */
  /* อื่น ๆ ในการตกแต่ง div class "menubar" */
}
.menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logomain {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }

  .wrap-menu {
    display: flex;
    justify-content: flex-end;
    margin: 0 20px;
    margin-bottom: 10px;
  }


</style>