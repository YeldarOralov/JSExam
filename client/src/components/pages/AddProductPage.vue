<template>
  <div class="add">
    <div>
      <h2>Add product</h2>
      <input type="text" class="mainInputs" v-model="product.name" placeholder="Product Name" />
      <input type="number" class="mainInputs" v-model="product.price" placeholder="Product Price" />
      <button @click="addProduct" class="linkButton">Add</button>
    </div>
  </div>
</template>

<script>
import ProductsService from "@/services/ProductsService.js";
import UsersService from "@/services/UsersService.js";
import cookies from "@/scripts/cookies.js";
export default {
  data() {
    return {
      product: {
        name: "",
        price: ""
      }
    };
  },
  methods: {
    async addProduct() {
      if (this.product.name !== "" && this.product.price !== "") {
        await ProductsService.addProduct({
          name: this.product.name,
          price: this.product.price
        });
        this.$router.push({ name: "Products" });
      } else {
        alert("Empty fields!");
      }
    },
    async userVer() {
      if (cookies.getItem("userSession")) {
        var response = await UsersService.getUser({
          id: cookies.getItem("userSession")
        });
        if (!response.data.isAdmin) {
          this.$router.push({ name: "Products" });
        }
      }
    }
  },
  beforeMount() {
    this.userVer();
  },
};
</script>

<style>
.add {
  display: flex;
  justify-content: center;
  align-items: center;
}
.add div {
  margin-block-start: 50px;
  padding: 20px;
  border: 2px solid #1b57927e;
  border-radius: 10px;
  background-color: #7ab0e6;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>