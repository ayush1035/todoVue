<template>
  <div class="container">
        <div class="row heading">
            <h1>Todo App</h1>
        </div>
        <br>
        <div class="row">
          <div class="col-md-10">
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" v-model="todo.task" class="form-control" placeholder="Enter a task" >
                </div>
          </div>
          <div class="col-md-1">
              <button @click="onAddClick" class="btn btn-success">Add</button>
          </div>
           <div class="col-md-1">
              <button @click="sortTasks" class="btn btn-success">Sort</button>
          </div>
      </div>
    <div>
        <TodoList :tasks ="tasks" @handle-delete="handleDelete" @handle-status="handleStatus" @handle-up="handleUp" @handle-down="handleDown"/>
    </div>
  </div>
</template>

<script type = "text/javascript">
import TodoList from './TodoList.vue';

export default {
    name: 'todoapp',
    data: function(){
       return{
        tasks:[],   
        todo:{
            task: ''
        }}
    },
    methods:{
        onAddClick(){
          let task = {id:new Date().getTime(), text: this.todo.task, status: 0};
          this.tasks.push(task);
        },
        handleDelete(value)
        {
            let index = this.tasks.findIndex((task)=>{return task.id == value});
            if(index>=0)
            {
                 this.tasks.splice(index, 1);
            }
        },
        handleStatus(value){
            let index = this.tasks.findIndex((task)=>{return task.id == value});
            if(index>=0)
            {
                let task = this.tasks[index];
                task.status = 1
                this.tasks.splice(index,1,task)
            }
        },
        handleUp(value){
            let index = this.tasks.findIndex((task)=>{return task.id == value});
            let taskGoingUp = this.tasks[index];
            let taskGoingDown = this.tasks[index-1];
            this.tasks.splice(index,1,taskGoingDown);
            this.tasks.splice(index-1,1,taskGoingUp);

        },
        handleDown(value){
            let index = this.tasks.findIndex((task)=>{return task.id == value});
            let taskGoingDown = this.tasks[index];
            let taskGoingUp = this.tasks[index+1];
            this.tasks.splice(index,1,taskGoingUp);
            this.tasks.splice(index+1,1,taskGoingDown);

        },
        sortTasks(){
            this.tasks.sort(function(a, b){
                return b.status - a.status
            })
        }
    },
    components:{
        TodoList
    }
};
</script>
<style>
/* Styles for wrapping the search box */
.heading{
    justify-content: center
}
.main {
    width: 50%;
    margin: 50px auto;
}

/* Bootstrap 4 text input with search icon */

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
</style>