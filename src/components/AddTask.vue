<script  lang="ts">
import type { Task } from '@/core/models/task';
import { taskStore } from '@/store/tasks';
import { required } from '@vuelidate/validators'

export default {
  setup() {
    const userStore = taskStore()
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
      } as Task,
    }
  },
  validations: {
    title: { required },
    action: { required },
  },
  methods: {
    submitForm() {
      const formTask = this.$refs.formTask as any;
      if (formTask.validate()) {
        this.userStore.createTask(this.task)
        this.$emit('taskAded')
        this.task = {
          title: "",
          action: "",
          done: false
        }
      }
      else {
        alert('FORMULARIO NÃO VALIDADO')
      }
    }
  },
}
</script>

<template>
  <div class="form-component">
    <v-form ref="formTask" class="custom-input">
      <v-text-field v-model="task.title" label="Titúlo" required></v-text-field>
      <v-text-field v-model="task.action" label="Descrição" required></v-text-field>
      <v-btn color="primary" class="custom-button" @click="submitForm">Enviar</v-btn>
    </v-form>
  </div>
</template>

<style scoped>
.form-component {
  width: 100%;
  align-items: start;
}

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
