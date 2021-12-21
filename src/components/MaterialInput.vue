<template>
    <input 
        v-model="model"
        v-bind="attrs"
        class="material-input">
</template>

<script>
import { toRef, computed } from 'vue';

export default {
    props: {
        valueModel: {
            type: String,
            required: true,
            default: ''
        }
    },

    emits: [
        'update:valueModel'
    ],

    setup(props, { emit, attrs }) {
        const { valueModel } = props;

        const model = computed({
            get() {
                return valueModel;
            },

            set(value) {
                emit('update:valueModel', value);
            } 
        }); 
        
        return {
            model,
            attrs
        };
    }
};
</script>

<style lang="postcss">
.material-input {
    padding: 1em;
    border: 2px solid rgb(255, 99, 71);
    outline: none !important;

    transition: all 15s ease;

    &:focus {
        border-style: dotted;
    }
}
</style>
