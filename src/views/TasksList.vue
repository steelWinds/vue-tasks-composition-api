<template>
    <article class="tasks-list">
        <h1 
            class="
                tasks-list__title
                twl-font-bold
                twl-text-4xl">

            This is tasks
        </h1>

        <MaterialButton 
            class="twl-mt-10"
            @click.prevent="goRoute('home')">
            
            Go to home page
        </MaterialButton>

        <form
            class="
                tasks-list__form 
                twl-mt-10"
            @click.prevent>

            <MaterialInput
                v-model:valueModel="taskContent" 
                type="text"
                name="task-content"
                inputmode="text" />

            <MaterialButton
                @click="addTask(taskContent)">
                
                Add task
            </MaterialButton>
        </form>

        <section class="tasks-list__list twl-mt-14">
            <template
                v-for="(task, taskId) of tasks"
                :key="taskId">

                <Task
                    @callback-event="removeTask(taskId)">
                    
                    {{ task.content }}
                </Task>
            </template>
        </section>
    </article>
</template>

<script>
import createRouter from '../composables/createRouter.js';
import createTasksList from '../composables/createTasksList.js';
import LocalStorage from '../composables/localStorageAPI.js';

import MaterialButton from '../components/MaterialButton.vue';
import MaterialInput from '../components/MaterialInput.vue';
import Task from '../components/TaskItem.vue';

export default {
    components: {
        MaterialButton,
        MaterialInput,
        Task
    },

    setup() {
        const startTasks = LocalStorage.get('tasks-list');

        const {
            goRoute,
            router, 
            route
        } = createRouter();

        const {
            tasks, 
            addTask,
            removeTask,
            taskContent
        } = createTasksList(startTasks);

        return {
            goRoute, 
            router,
            route,
            tasks,
            addTask,
            removeTask,
            taskContent
        };
    }
};
</script>

<style lang="postcss">
.tasks-list {
    @apply 
        twl-w-full
        twl-h-auto
        twl-min-h-screen
        twl-flex
        twl-flex-col
        twl-items-center;

    padding: 1em;

    color: tomato;

    &__form {
        @apply
            twl-w-full
            twl-max-w-lg
            twl-flex
            twl-flex-col
            sm:twl-flex-row
            twl-justify-center
            twl-flex-wrap
            sm:twl-flex-nowrap;

        & > * {
            @apply
                twl-basis-full;
        }
    }

    &__list {
        @apply 
            twl-w-full
            twl-flex
            twl-flex-col
            twl-items-center
            twl-gap-5;
    }
}
</style>
