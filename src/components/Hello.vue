<template>
    <div>
        <h1>Hello World</h1>
    </div>
</template>

<script>
import {reqHelloworld} from "@/api"
export default {
    mounted() {
        //向/helloword发送axios请求
        let result = reqHelloworld()
        // if(result.code === 200) {
        //     console.log(result.msg)
        //     console.log(result.data)
        // }else{
        //     console.log("Error")
        // }
        console.log(result)
        console.log('Hello World');
    }
}
</script>

<style>

</style>