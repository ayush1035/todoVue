<template>
    <div class="container">
        <div v-for="(task, index) in tasks" v-bind:key="task.id" class="list row mb-2">
            <div class="col-md-7" v-bind:class="task.status? 'doneTask': ''">{{task.text}}</div>
            <button class="btn btn-secondary col-md-1 mr-2"  v-bind:class="index>0? '':'hidden'" @click="handleUp(task.id)">Up</button>
            <button class="btn btn-secondary col-md-1" v-bind:class="index != tasks.length-1?'':'hidden'" @click="handleDown(task.id)">Down</button>
            <button class="col-md-1 offset-md-1  btn-margin" v-bind:class="task.status? 'btn btn-success': 'btn btn-warning'" @click="handleStatus(task.id)">{{task.status? "Complete":"Pending"}}</button>
            <button class="col-md-1 offset-md-1 btn btn-danger btn-margin"  @click="handleDelete(task.id)">Delete</button>

        </div>
       
    </div>


</template>
<script type = "text/javascript">
export default {
  name: "todolist",
  props: {
    tasks: {
      type: Array
    }
  },
  methods:{
      handleDelete(taskId){
         this.$emit('handle-delete',taskId);
      },
      handleStatus(taskId){
          this.$emit('handle-status',taskId);
      },
      handleUp(taskId){
          this.$emit('handle-up',taskId);
      },
      handleDown(taskId){
          this.$emit('handle-down',taskId);
      }
  }
};
</script>
<style>
.list{
     padding: 10px 10px 20px 10px;
  border: 1px solid #BFBFBF;
  background-color: white;
  box-shadow: 10px 10px 5px #d7d7d7;

}
.btn-margin{
    margin-left: 10px !important;
}
.hidden{
    visibility: hidden;
}
.doneTask{
    text-decoration: line-through
}
/* Styles for wrapping the search box */
</style>