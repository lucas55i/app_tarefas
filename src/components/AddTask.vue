<script lang="ts">
import type { CreateTask, Task } from '@/core/models/task'
import { taskStore } from '@/store/tasks'
import { required } from '@vuelidate/validators'
import { useField, useForm } from 'vee-validate'

export default {
  setup() {
    const userStore = taskStore()

    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        action(value: string) {
          if (value?.length >= 2) return true

          return 'action needs to be at least 2 characters.'
        },
      },
    })
    const action = useField('action')

    return {
      userStore,
      action,
    }
  },
  emits: ['taskAded'],

  data() {
    return {
      valid: true,
      task: {
        title: '',
        action: '',
        done: false
      } as CreateTask,
      error: ''
    }
  },
  validations: {
    title: { required },
    action: { required }
  },
  methods: {
    submitForm() {
      if (this.task.title && this.task.action) {
        this.userStore.createTask(this.task)
        this.$emit('taskAded')
        this.task = {
          title: '',
          action: '',
          done: false
        }
      } else {
        alert(`Os campos ${this.task.title} devem ser` )
      }
    }
  }
}
</script>

<template>
  <div class="form-component">
    <form class="custom-input">
      <v-text-field v-model="task.title"  label="Titúlo"></v-text-field>
      <v-text-field v-model="task.action" :counter="164" label="Descrição"></v-text-field>
      <v-btn color="primary" class="custom-button" @click="submitForm">Enviar</v-btn>
    </form>
  </div>
</template>

<style scoped>
.form-component {
  width: 80%;
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
