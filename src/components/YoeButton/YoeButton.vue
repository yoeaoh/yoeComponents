<script lang="ts" setup>
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/helpers";

const buttonVariants = cva(["rounded-md"], {
    variants: {
        type: {
            primary: ["bg-slate-950", "text-white"],
            secondary: ["bg-slate-200", "text-black"],
            destructive: [
                "bg-red-400",
                "text-white",
                "[text-shadow:_1px_1px_1px_black]",
            ],
            outline: [],
            ghost: [],
            link: [],
            withIcon: [],
            loading: [],
        },
        size: {
            small: [],
            medium: ["px-4 py-2"],
            large: [],
            icon: [],
        },
    },
});

type ButtonProps = VariantProps<typeof buttonVariants>;

withDefaults(
    defineProps<{
        type?: ButtonProps["type"];
        size?: ButtonProps["size"];
    }>(),
    {
        type: "primary",
        size: "medium",
    },
);
</script>

<template>
    <button :class="cn(buttonVariants({ type, size }))">
        <slot />
    </button>
</template>
