<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>主体</ion-title>
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
} from "@ionic/vue";
import { reactive, toRefs, onMounted } from "vue";
export default {
  name: "center",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
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