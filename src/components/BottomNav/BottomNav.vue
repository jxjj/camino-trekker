<template>
  <div class="bottom-nav">
    <nav class="bottom-nav__navbar">
      <button class="bottom-nav__button" @click="setActiveSheet(SHEETS.MENU)">
        <span class="material-icons">menu</span>
        <span class="sr-only">Menu</span>
      </button>
      <button
        class="bottom-nav__progress-button"
        @click="setActiveSheet(SHEETS.STOPLIST)"
      >
        <ProgressIndicator :total="totalStopsRef" :active="stopIndexRef" />
        <span class="sr-only">Open Tour Stops</span>
      </button>
      <button class="bottom-nav__button" @click="setActiveSheet(SHEETS.MAP)">
        <span class="material-icons">map</span>
        <span class="sr-only">Map</span>
      </button>
    </nav>
    <div>
      <MenuSheet
        :is-open="isActiveSheet(SHEETS.MENU)"
        @close="handleSheetClose()"
      />
      <StopListSheet
        :is-open="isActiveSheet(SHEETS.STOPLIST)"
        @close="handleSheetClose()"
      />
      <MapSheet
        :is-open="isActiveSheet(SHEETS.MAP)"
        @close="handleSheetClose()"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ProgressIndicator from "../ProgressIndicator.vue";
import MapSheet from "../MapSheet/MapSheet.vue";
import MenuSheet from "../MenuSheet/MenuSheet.vue";
import StopListSheet from "../StopListSheet.vue";

const SHEETS = {
  MENU: "MENU",
  STOPLIST: "STOPLIST",
  MAP: "MAP",
};

const activeSheet = ref(null);
const store = useStore();

const stopIndexRef = computed(() => store.getters.stopIndex);
const totalStopsRef = computed(() => store.getters.totalStops);

const setActiveSheet = (sheetKey) => {
  activeSheet.value = SHEETS[sheetKey];
};

const handleSheetClose = () => (activeSheet.value = null);

const isActiveSheet = (sheetKey) => {
  return activeSheet.value === sheetKey;
};
</script>
<style scoped>
.bottom-nav__navbar {
  background: var(--black);
  display: grid;
  grid-template-columns: min-content minmax(0, 1fr) min-content;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 1.25rem;
  z-index: 100;
}
.bottom-nav__button {
  background: transparent;
  border: 0;
  color: var(--gray-dark);
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all ease 0.1s;
}
.bottom-nav__button:hover,
.bottom-nav__progress-button:hover {
  background: hsla(0, 0%, 100%, 0.1);
  color: var(--gray-light);
}
button:active {
  background: var(--white);
  color: var(--black);
}
.bottom-nav__progress-button {
  display: flex;
  background: transparent;
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0;
}
</style>
