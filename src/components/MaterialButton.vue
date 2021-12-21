<template>
    <button 
        v-bind="attrs"
        class="material-button">
        
        <slot name="default" />
    </button>
</template>

<script>
export default {
    setup(props, { attrs }) {
        return {
            attrs
        };
    } 
};
</script>

<style lang="postcss">
.material-button {
    padding: 1em;
    border: 2px solid transparent;
    
    background-color: tomato;
    color: white;

    transition: all .15s ease-out;

    &:hover {
        border-color: tomato;

        background-color: white;
        color: tomato;
    }
}
</style>
