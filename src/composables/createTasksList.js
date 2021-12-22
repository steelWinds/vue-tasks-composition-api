import { ref } from 'vue';

import LocalStorage from './localStorageAPI.js';

let createTasksList = (startValue) => {
    if ( !(startValue instanceof Array) ) {
        throw new Error('startValue is not Array type!');
    }

    const tasks = ref(startValue);
    const taskContent = ref('');

    let addTask = (task) => {
        if (task.length === 0) {
            return;
        }

        let taskObject = {
            content: task
        };

        tasks.value.push(taskObject);

        LocalStorage.set('tasks-list', tasks.value);

        taskContent.value = '';
    };

    let removeTask = (taskId) => {
        tasks.value.splice(taskId, 1);

        LocalStorage.set('tasks-list', tasks.value);
    };

    return {
        tasks, 
        addTask,
        removeTask,
        taskContent
    };
};

export default createTasksList;
