<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ionic组件</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button
        v-for="(item, index) in eleList"
        :key="index"
        @click="goUrl(item.path)"
      >
        {{ item.name }}
      </ion-button>
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
  IonButton,
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
    IonButton,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      eleList: [
        {
          name: "滑动弹窗",
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