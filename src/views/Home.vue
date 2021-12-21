<template>
    <article class="home">
        <h1 
            class="
                twl-font-bold
                twl-text-4xl">

            This home view
        </h1>

        <MaterialButton 
            class="twl-mt-10"
            @click.prevent="goRoute('list')">
            
            Go to tasks list
        </MaterialButton>
    </article>
</template>

<script>
import createRouter from '../composables/createRouter.js';

import MaterialButton from '../components/MaterialButton.vue';

export default {

    components: {
        MaterialButton
    },
    setup() {
        const {
            goRoute,
            router, 
            route
        } = createRouter();

        return {
            goRoute, 
            router,
            route
        };
    }
};
</script>

<style lang="postcss">
.home {
    padding: 1em;

    color: tomato;
    text-align: center;
}
</style>
