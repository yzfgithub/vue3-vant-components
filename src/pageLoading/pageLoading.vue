<template>
    <div class="loading">
        <van-loading color="#0094ff" vertical>
            <slot>{{title}}</slot>
        </van-loading>
    </div>
</template>
<script>
    export default {
        name: 'page-loading',
        props:{
            title:{
                type:String,
                default:()=>'加载中...'
            }
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
.loading {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 10;
    background: rgba(255,255,255, 0.7);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>