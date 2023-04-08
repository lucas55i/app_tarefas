<script  lang="ts">
import type { Task } from '@/core/models/task';
import { taskStore } from '@/store/tasks';

export default {
    setup() {
        const userStore = taskStore();
        return {
            userStore,
        };
    },

    data() {
        return {
            valid: true,
            task: {
                title: "",
                action: "",
                done: false
            } as Task
        }
    },
    methods: {
        submitForm() {
            this.userStore.createTask(this.task)
        }
    },
}

</script>

<template>
    <v-form ref="form-task" class="custom-input">
        <v-text-field v-model="task.title" label="Titúlo" required></v-text-field>
        <v-text-field v-model="task.action" label="Descrição" required></v-text-field>
        <v-btn color="primary" class="custom-button" @click="submitForm">Enviar</v-btn>
    </v-form>
</template>

<style scoped>
.custom-input {
    border-radius: 8px;
    border: 2px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
}

.custom-button {
    border-radius: 8px;
    padding: 10px;
    margin-top: 20px;
}
</style>
