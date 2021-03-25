<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>menu组件</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content id="main">
      <ion-menu-toggle>
        <ion-button> 打开Menu组件 </ion-button>
      </ion-menu-toggle>
    </ion-content>
    <ion-menu side="start" contentId="main">
      <ion-content>
        <ion-menu-toggle auto-hide="false">
          <ion-button @click="goHome()"> 回到首页 </ion-button>
        </ion-menu-toggle>
      </ion-content>
    </ion-menu>
  </ion-page>
</template>
<script>
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonPage,
  IonMenu,
  IonButton,
  IonMenuToggle,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonMenu,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonMenuToggle,
  },
  setup() {
    const router = useRouter();
    const state = reactive({});
    const methods = {
      goHome() {
        router.push({
          path: "/tab/index",
        });
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
</style>