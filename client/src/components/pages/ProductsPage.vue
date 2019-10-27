<template>
  <div id="content">
    <div v-if="products.length" id="productList">
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th v-if="user.isAdmin">Actions</th>
        </tr>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td v-if="user.isAdmin">
            <router-link
              class="EDButton"
              :to="{name:'EditProductPage', params:{id:product._id}}"
            >Edit</router-link>
            <span>|</span>
            <button class="EDButton" @click="removeProduct(product._id)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
    <span v-else>No products yet!</span>
    <router-link class="linkButton" :to="{name: 'AddProductPage'}" v-if="user.isAdmin">Add product</router-link>
  </div>
</template>

<script>
import ProductsService from "@/services/ProductsService.js";
import UsersService from "@/services/UsersService.js";
import cookies from "@/scripts/cookies.js";
export default {
  data() {
    return {
      user:{
        login:null,
        isAdmin:null
      },
      products: [],
      product: {
        name: "",
        price: ""
      }
    };
  },
  methods: {
    async getProducts() {
      const response = await ProductsService.fetchProducts();
      this.products = response.data.products;
    },
    async removeProduct(value) {
      await ProductsService.deleteProduct(value);
      this.getProducts();
    },
    async userVer() {
      if (cookies.getItem("userSession")) {
        var response = await UsersService.getUser({
        id: cookies.getItem("userSession")
        });
        this.user.login = response.data.login;
        this.user.isAdmin = response.data.isAdmin;
      }
    }
  },
  mounted() {
    this.getProducts();
  },
  beforeMount() {
    if (!cookies.getItem("userSession")) {
      this.$router.push({ name: "AuthorizationPage" });
    }
    else{
      this.userVer();
    }
  }
};
</script>

<style>
#content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#productList {
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: whitesmoke;
}
th {
  background-color: #457db6;
}
tr {
  background-color: #8191a1;
}
.EDButton {
  text-decoration: none;
  color: #1b3855;
  background-color: transparent;
  border: 0;
  font-size: 15px;
  padding: 0;
}
</style>