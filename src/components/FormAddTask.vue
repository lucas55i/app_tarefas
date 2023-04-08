<script  lang="ts">
import type { Task } from '@/core/models/task';

export default {

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
            // Aqui você pode enviar os dados do formulário para um servidor
            console.log({
                name: this.task.title,
                email: this.task.action,
                message: this.task.done,
            });
        },
    }
}
</script>

<template>
    <v-form v-model="valid" class="custom-input">
        <v-text-field v-model="task.title" label="Titúlo" required ></v-text-field>
        <v-text-field v-model="task.action" label="Descrição" required ></v-text-field>
        <v-btn :disabled="!valid" color="primary" class="custom-button" @click="submitForm">Enviar</v-btn>
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
