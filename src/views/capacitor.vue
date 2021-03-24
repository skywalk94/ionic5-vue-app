<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>原生Api</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content> 内容 </ion-content>
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
import { reactive, toRefs } from "vue";
export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const that = reactive({});
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