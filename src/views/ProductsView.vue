<script>
import { reactive, toRefs, onMounted, ref, computed } from "vue";
import axios from "axios";
import router from "../router";

import DeleteProductModal from "../components/DeleteProductModal.vue";
import ProductModal from "../components/ProductModal.vue";
import PaginationComponent from "../components/PaginationComponent.vue";

export default {
  components: {
    DeleteProductModal,
    ProductModal,
    PaginationComponent,
  },

  setup() {
    const state = reactive({
      deleteProductModalRef: ref(),
      productModalRef: ref(),
      paginationComponentRef: ref(),
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false,
      pagination: {},
    });

    const deleteProductModalRef = computed(() => state.deleteProductModalRef);
    const productModalRef = computed(() => state.productModalRef);
    const { VITE_URL, VITE_PATH } = import.meta.env;

    onMounted(() => {
      getCookie("loginToken");
      checkAdmin();
    });

    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      const token = parts.length === 2 ? parts.pop().split(";").shift() : "";
      axios.defaults.headers.common.Authorization = token;
    };

    const checkAdmin = async () => {
      const url = `${VITE_URL}/api/user/check`;
      try {
        await axios.post(url);
        getProductList();
      } catch (error) {
        alert(error.response.data.message);
        router.push("/");
      }
    };

    const getProductList = async (
      currentPage = state.pagination.current_page || 1
    ) => {
      console.log(`getting update with ${currentPage}`);
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/products/?page=${currentPage}`;
      try {
        const response = await axios.get(url);
        state.products = response.data.products;
        state.pagination = response.data.pagination;
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    const openModal = (modalType, currentProduct) => {
      switch (modalType) {
        case "new":
          state.tempProduct = { imageUrl: [] };
          state.isNew = true;
          productModalRef.value?.showModal();
          break;
        case "edit":
          state.tempProduct = { ...currentProduct };
          state.isNew = false;
          productModalRef.value?.showModal();
          break;
        case "delete":
          state.tempProduct = { ...currentProduct };
          deleteProductModalRef.value?.showModal();
          break;
      }
    };

    return {
      ...toRefs(state),
      getProductList,
      openModal,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody v-if="products?.length">
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">{{ product.origin_price }}</td>
          <td class="text-end">{{ product.price }}</td>
          <td>
            <span :class="{ 'text-success': product.is_enabled }">{{
              product.is_enabled ? "啟用" : "未啟用"
            }}</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <PaginationComponent
        :pagination="pagination"
        @change-page="getProductList"
        ref="paginationComponentRef"
      />
    </div>
  </div>
  <!-- Modal -->
  <ProductModal
    :temp-product="tempProduct"
    :is-new="isNew"
    @update="getProductList"
    ref="productModalRef"
  />
  <DeleteProductModal
    :temp-product="tempProduct"
    @update="getProductList"
    ref="deleteProductModalRef"
  />
  <!-- Modal -->
</template>

<!-- const deleteProductModalRef = ref();
    const productModalRef = ref();
    const state = reactive({
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false,
    }); -->
