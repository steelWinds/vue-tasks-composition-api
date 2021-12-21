<template>
    <article class="task">
        <p class="task__content">
            <slot name="default">
                empty task
            </slot>
        </p>

        <MaterialButton
            class="twl-flex-shrink-0"
            @click="emit('callbackEvent')">
            
            Remove task
        </MaterialButton>
    </article>
</template>

<script>
import MaterialButton from './MaterialButton.vue';

export default {
    components: {
        MaterialButton
    },
    emits: [
        'callbackEvent'
    ],

    setup(props, { emit }) {
        return {
            emit
        };
    },

};
</script>

<style lang="postcss">
.task {
    @apply
        twl-w-full
        twl-max-w-sm
        twl-flex
        twl-flex-row
        twl-justify-between
        twl-items-center
        twl-gap-10 !important;

    overflow-wrap: anywhere;
    text-align: start;

}
</style>
