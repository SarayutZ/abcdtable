<template>
  <div class="box text-center">
    <div class="row" v-for="rowIndex in 3" :key="rowIndex">
      <div class="col-sm-4 mb-3 mb-sm-0" v-for="colIndex in 3" :key="colIndex">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              โต๊ะที่ {{ (rowIndex - 1) * 3 + colIndex }}
            </h5>
            <a
              href="#"
              class="btn btn-primary"
              @click="reserveTable((rowIndex - 1) * 3 + colIndex)"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >จองโต๊ะนี้</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            จองโต๊ะที่ {{ selectedTable }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">ชื่อ</span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label=""
                aria-describedby="addon-wrapping"
                v-model="reservation.name"
                required
              />
            </div>
            <div class="input-group flex-nowrap mt-3">
              <span class="input-group-text" id="addon-wrapping">เบอร์โทร</span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label=""
                aria-describedby="addon-wrapping"
                v-model="reservation.phoneNumber"
                required
              />
            </div>
            <div class="time mt-3">
              <label for="datetime">เลือกเวลาและวันที่ </label>
              <input
                type="datetime-local"
                id="datetime"
                name="datetime"
                v-model="reservation.dateTime"
                required
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                @click="saveReservation"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Showinform from "./Showinform.vue";
export default {
  components: {
    Showinform,
  },
  props: {
    item: String, // Define the item prop
  },
  data() {
    return {
      showModal: false,
      
      reservation: {
        name: "",
        phoneNumber: "",
        dateTime: "",
      },
      reservations: [], // สร้าง array เพื่อเก็บข้อมูลการจอง
    };
  },
  methods: {
    // ฟังก์ชันสำหรับการจอง
    reserveTable(tableNumber) {
    this.selectedTable = tableNumber;
    this.reservation = {
      name: "",
      phoneNumber: "",
      dateTime: ""
    }
  },
    saveReservation() {
    if (
      this.reservation.name &&
      this.reservation.phoneNumber &&
      this.reservation.dateTime
    ) {
      // ตรวจสอบว่าข้อมูลทั้งหมดไม่ว่าง

      this.$router.push({
        name: "ShowInform", // ตรงนี้ให้ตั้งชื่อเส้นทางตามที่คุณกำหนด
        query: {
          item: this.selectedTable,
          name: this.reservation.name,
          phoneNumber: this.reservation.phoneNumber,
          dateTime: this.reservation.dateTime,
        },
      });

      // ล้างข้อมูลการจองใน modal
      this.selectedTable = null;
      this.reservation = {
        name: "",
        phoneNumber: "",
        dateTime: "",
      };
      

      // ปิด modal
      this.$refs.myModal.hide();
    }
    else {
    alert("กรุณากรอกข้อมูลให้ครบก่อนจอง");
  }
  
},

    // ฟังก์ชันสำหรับการทดสอบการเปลี่ยนเส้นทาง
  },

  // ใช้ฟังก์ชัน setup และสร้างตัวแปร router ในนั้น
  // setup() {
  //   const router = useRouter();
  //   return { router };
  // },
};
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.box .card {
  margin: 10px;
}

form {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

/* ตกแต่งสไตล์ข้อความและช่องข้อมูล */
label,
input[type="datetime-local"],
input[type="submit"] {
  display: block;
  margin: 10px auto;
}

/* ตกแต่งสไตล์ปุ่มส่งข้อมูล */
input[type="submit"] {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

/* เมื่อนำเมาส์มาชี้ที่ปุ่มส่งข้อมูล */
input[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
