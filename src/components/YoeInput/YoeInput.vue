<script lang="ts" setup>
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/helpers";

const inputVariants = cva(["border", "rounded", "font-semibold"], {
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

type InputProps = VariantProps<typeof inputVariants>;

withDefaults(
    defineProps<{
        type?: InputProps["type"];
        size?: InputProps["size"];
    }>(),
    {
        type: "primary",
        size: "medium",
    },
);
</script>

<template>
    <input :class="cn(inputVariants({ type, size }))" />
</template>
