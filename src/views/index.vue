<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-button color="tertiary" @click="goMain()">跳转到main</ion-button>
      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
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
  IonFab,
  IonFabButton,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { add } from "ionicons/icons";
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
export default {
  name: "index",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
  },
  setup() {
    const router = useRouter();
    const that = reactive({
      title: "首页",
    });
    const methods = {
      goMain() {
        router.push({
          path: "/main",
          query: {
            id: 123,
          },
        });
      },
    };
    return {
      add,
      ...toRefs(that),
      ...methods,
    };
  },
};
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>