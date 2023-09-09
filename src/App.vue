<template>
  <div>
    <Menubar/>
<router-view></router-view>

    <!-- <Chosetable/> -->
  </div>
</template>

<script>
import Selectmenu from './components/Selectmenu.vue';
import Chosetable from './components/chosetable.vue';


import Menubar from './components/menubar.vue';
import menubar from './components/menubar.vue';
import Showinform from './components/Showinform.vue';


export default {
  components: {

    Menubar,
    Selectmenu,
    Chosetable,
    Showinform
},
 
}
</script>
