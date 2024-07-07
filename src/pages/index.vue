<script lang="ts" setup>
import YoeButton from "~/components/YoeButton/YoeButton.vue";
import YoeInput from "~/components/YoeInput/YoeInput.vue";
import YoeSelect from "~/components/YoeSelect/YoeSelect.vue";
</script>

<template>
    <div class="max-w-[720px] mx-auto my-8">
        <h1 class="mb-4">YoeComponents</h1>

        <div>
            <h2>button</h2>

            <div class="flex gap-x-2">
                <YoeButton>hehe</YoeButton>
                <YoeButton type="secondary">hehe</YoeButton>
                <YoeButton type="destructive">hehe</YoeButton>
            </div>
        </div>

        <div>
            <h2>input</h2>

            <YoeInput />
        </div>

        <div>
            <h2>select</h2>

            <YoeSelect />
        </div>
    </div>
</template>
