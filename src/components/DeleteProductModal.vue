<script setup>
import { ref, onMounted } from "vue";
import * as bootstrap from "bootstrap";
import axios from "axios";

const props = defineProps(["tempProduct"]);
const emit = defineEmits(["update"]);

const deleteProductModalRef = ref();
let deleteProductModal = null;

onMounted(() => {
  deleteProductModal = new bootstrap.Modal(deleteProductModalRef.value, {
    keyboard: false,
    backdrop: false,
  });
});

const deleteProduct = async () => {
  const { VITE_URL, VITE_PATH } = import.meta.env;
  const url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${props.tempProduct.id}`;
  try {
    const response = await axios.delete(url);
    alert(response.data.message);
    hideModal();
    emit("update");
  } catch (error) {
    alert(error.response.data.message);
  }
};

const showModal = () => deleteProductModal?.show();

const hideModal = () => deleteProductModal?.hide();

defineExpose({ deleteProductModalRef, deleteProduct, showModal, hideModal });
</script>

<template>
  <div
    id="deleteProductModal"
    ref="deleteProductModalRef"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="hideModal"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct?.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="hideModal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import { ref, onMounted } from "vue";
import * as bootstrap from "bootstrap";
import axios from "axios";

export default {
  props: ["tempProduct"],
  setup(props, context) {
    const deleteProductModalRef = ref();
    let deleteProductModal = null;

    onMounted(() => {
      deleteProductModal = new bootstrap.Modal(deleteProductModalRef.value, {
        keyboard: false,
        backdrop: false,
      });
    });

    const deleteProduct = async () => {
      const url = `${import.meta.env.VITE_URL}/api/${
        import.meta.env.VITE_PATH
      }/admin/product/${props.tempProduct.id}`;
      try {
        const response = await axios.delete(url);
        alert(response.data.message);
        hideModal();
        context.emit("update");
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    const showModal = () => deleteProductModal?.show();

    const hideModal = () => deleteProductModal?.hide();

    return {
      deleteProductModalRef,
      deleteProduct,
      showModal,
      hideModal,
    };
  },
};
</script> -->
