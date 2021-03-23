<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="index" href="/tab/index">
          <ion-icon :icon="flash" />
          <ion-label>首页</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="center" href="/tab/center">
          <ion-icon :icon="grid" />
          <ion-label>中心</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="person" href="/tab/person">
          <ion-icon :icon="person" />
          <ion-label>我的</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { flash, grid, person } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      flash,
      grid,
      person,
    };
  },
};
</script>