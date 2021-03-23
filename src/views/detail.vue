<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>详情</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>详情</h1>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import { reactive, toRefs, onMounted } from "vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonBackButton,
    IonButtons,
  },
  setup() {
    const that = reactive({});
    onMounted(() => {});
    const methods = {};
    return {
      ...toRefs(that),
      ...methods,
    };
  },
};
</script>
<style  scoped>
</style>