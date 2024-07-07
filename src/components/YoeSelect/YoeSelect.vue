<script lang="ts" setup>
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/helpers";

const selectVariants = cva(["border", "rounded", "font-semibold"], {
    variants: {
        type: {
            primary: ["bg-zinc-950", "text-white"],
            secondary: [],
        },
        size: {
            small: [],
            medium: ["w-50 h-50", "p-5"],
            large: [],
        },
    },
});

type SelectProps = VariantProps<typeof selectVariants>;

withDefaults(
    defineProps<{
        type?: SelectProps["type"];
        size?: SelectProps["size"];
    }>(),
    {
        type: "primary",
        size: "medium",
    },
);
</script>

<template>
    <div :class="cn(selectVariants({ type, size }))"></div>
</template>
