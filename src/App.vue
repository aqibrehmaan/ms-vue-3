<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
import { ref } from 'vue';

// import { ref, reactive, isRef, isReactive, toRefs } from 'vue';

export default {
  setup() {
    const uName = ref('Maximilian');
    const uAge = ref(31);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    // console.log(isRef(uAge));
    // console.log(isReactive(user), user.age);

    function setNewAge() {
      uAge.value = 33;
    }

    // toRefs - will convert all the properties of object refs means reactive

    // const userRefs = toRefs(user);

    // return { user: user, userName: userRefs.name, age: userRefs.age };

    return { userName: uName, age: uAge, setAge: setNewAge };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>