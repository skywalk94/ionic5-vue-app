<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ionic组件</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="box">
        <div
          class="row ion-activatable"
          v-for="(item, index) in eleList"
          :key="index"
          @click="goUrl(item.path)"
        >
          {{ item.name }}
          <ion-ripple-effect></ion-ripple-effect>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRippleEffect,
} from "@ionic/vue";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRippleEffect,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      eleList: [
        {
          name: "ionic-menu",
          path: "/ionic-menu",
        },
      ],
    });
    const methods = {
      goUrl(e) {
        router.push({
          path: e,
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
.box {
  padding: 15px;
}

.row {
  position: relative;
  font-size: 20px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #999999;
  border-radius: 5px;
  overflow: hidden;
}
</style>