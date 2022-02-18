<template>
  <q-page class="col items-center justify-evenly">
    <h1>Fav foods</h1>
    <q-icon name="thumb_up" size="lg" />
    <!-- <ol>
      <li>Pizza</li>
      <li>Sandwich</li>
    </ol> -->
    <!-- <q-btn color="secondary" label="count++" @click="count++"></q-btn> -->

    <q-list bordered separator>
      <q-item
        @click="markDone(item.id, !item.data.done)"
        clickable
        v-ripple
        v-for="item in data"
        :key="item.id"
      >
        <q-item-section avatar>
          <q-icon v-if="item.data.done" name="done" />
        </q-item-section>

        <q-item-section>
          {{ item.data.label }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref, watchEffect } from 'vue';
import {
  getFirestore,
  collection,
  // getDocs,
  onSnapshot,
  setDoc,
  doc,
} from 'firebase/firestore';

export default defineComponent({
  name: 'PageIndex',
  // eslint-disable-next-line vue/no-unused-components
  // components: { ExampleComponent },

  setup() {
    const db = getFirestore();

    const data = ref();

    watchEffect(() => {
      void (() => {
        onSnapshot(collection(db, 'todos'), (querySnapshot) => {
          console.log('Data loaded', querySnapshot);

          const todos = querySnapshot.docs.map((doc) => {
            // eslint-disable-next-line

            return { id: doc.id, data: doc.data() };
          });

          data.value = todos;
        });
      })();
    });

    async function markDone(id: string, done: boolean) {
      const cityRef = doc(db, 'todos', id);

      await setDoc(cityRef, { done }, { merge: true });
    }

    return { data, markDone };
  },
});
</script>
