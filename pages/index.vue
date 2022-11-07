<template>
  <div>
    <button class="test" @click="test">{{ data }}</button>
  </div>
</template>

<script setup lang="ts">
let data = ref(1);

const test = () => {
    console.log(1);
    data.value += 1;
    console.log(data);
};

// export default defineNuxtComponent({
//     data() {
//         console.log(2);
//         return {
//             count: 2222,
//         };
//     },
//     methods: {
//         test() {
//             console.log(this.count);
//             this.count += 1;
//         },
//     },
//     async asyncData() {
//         console.log(1);
//         return {
//             count: 2,
//         };
//     },
// });
</script>

<style lang="scss">
.test {
    background: map.get($colors, "blue-gray-500");
}
</style>
