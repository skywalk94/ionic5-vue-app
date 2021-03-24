<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
        <!-- <ion-back-button></ion-back-button> -->
      </ion-buttons>
      <ion-title><slot>组件标题</slot></ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from "@ionic/vue";
export default {
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
  },
};
</script>