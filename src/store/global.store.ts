export const useGlobalStore = defineStore("global", () => {
    const count = ref<number>(0);

    const incrementCount = () => count.value++;

    return {
        count,
        incrementCount,
    };
});
