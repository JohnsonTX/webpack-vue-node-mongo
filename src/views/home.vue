<template>
    <div>
        <input type="button" name="" id="btn" value="添加" />
        <ol id="target">
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
        <button @click="eClick()">事件</button>
    </div>
</template>

<script>
    export default {
        name: 'indexP',
        data () {
            return {
                todos: [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue' },
                    { text: 'Build something awesome' },
                ]
            }
        },
        methods:{
            eClick(){
                for(var i=0;i<5;i++){
                    var a=function(){
                        console.log(i);                            //由于这个闭包的关系，他是循环完毕之后才返回，最终结果是4++是5
                    }();
                }
                a;
        }
        }
    }
</script>
