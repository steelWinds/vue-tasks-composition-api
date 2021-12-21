<template>
    <input 
        v-model="model"
        v-bind="attrs"
        class="material-input">
</template>

<script>
import { toRefs, computed } from 'vue';

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
        const { valueModel } = toRefs(props);

        const model = computed({
            get() {
                return valueModel.value;
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
