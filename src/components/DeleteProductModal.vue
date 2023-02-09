<script setup>
import { ref, onMounted } from "vue";
import * as bootstrap from "bootstrap";
import axios from "axios";

const props = defineProps(["tempProduct"]);
const emit = defineEmits(["update"]);

const delProductModalRef = ref();
let delProductModal = null;

onMounted(() => {
  delProductModal = new bootstrap.Modal(delProductModalRef.value, {
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
    emit("update");
  } catch (error) {
    alert(error.response.data.message);
  }
};

const showModal = () => delProductModal?.show();

const hideModal = () => delProductModal?.hide();

defineExpose({ delProductModalRef, deleteProduct, showModal, hideModal });
</script>

<template>
  <div
    id="delProductModal"
    ref="delProductModalRef"
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
    const delProductModalRef = ref();
    let delProductModal = null;

    onMounted(() => {
      delProductModal = new bootstrap.Modal(delProductModalRef.value, {
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

    const showModal = () => delProductModal?.show();

    const hideModal = () => delProductModal?.hide();

    return {
      delProductModalRef,
      deleteProduct,
      showModal,
      hideModal,
    };
  },
};
</script> -->
