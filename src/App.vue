<template>
  <div id="app">
    <h1>Vue To-Do App</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <button @click="addTask">Add</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
          {{ task.text }}
        </span>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask.trim(), completed: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
#app {
  max-width: 400px;
  margin: 30px auto;
  font-family: Arial, sans-serif;
}
input[type="text"], input[type="checkbox"] {
  margin-right: 10px;
}
button {
  margin-left: 10px;
}
</style>
