<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>main页</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"> 123 </ion-content>
  </ion-page>
</template>
<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import { reactive, toRefs, onMounted } from "vue";
export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
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
<style scoped>
</style>