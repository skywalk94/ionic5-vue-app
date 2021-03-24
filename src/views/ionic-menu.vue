<template>
  <ion-page>
    <headBack>ionic-menu组件</headBack>
    <ion-content>
      <ion-button expand="block" class="btn"> 打开Menu组件 </ion-button>
    </ion-content>
    <ion-menu side="start" menu-id="menu" content-id="main">
      <ion-content>123</ion-content>
      <ion-router-outlet id="main" />
    </ion-menu>
  </ion-page>
</template>
<script>
import {
  IonContent,
  IonPage,
  IonRouterOutlet,
  IonMenu,
  IonButton,
  // menuController,
} from "@ionic/vue";
import { reactive, toRefs } from "vue";
import headBack from "@/components/headBack";
export default {
  components: {
    IonPage,
    IonContent,
    IonRouterOutlet,
    IonMenu,
    headBack,
    IonButton,
    // menuController,
  },
  setup() {
    const state = reactive({});
    const methods = {
      openFirst() {
        // menuController.open("menu");
      },
    };
    return {
      ...toRefs(state),
      ...methods,
    };
  },
};
</script>
<style scoped>
.btn {
  margin-top: 30px;
}
</style>