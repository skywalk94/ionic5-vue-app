<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="index" href="/tab/index">
          <ion-icon :icon="flash" />
          <ion-label>首页</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="element" href="/tab/element">
          <ion-icon :icon="grid" />
          <ion-label>ionic组件</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="capacitor" href="/tab/capacitor">
          <ion-icon :icon="aperture" />
          <ion-label>原生Api</ion-label>
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
import { flash, grid, aperture } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      flash,
      grid,
      aperture,
    };
  },
};
</script>