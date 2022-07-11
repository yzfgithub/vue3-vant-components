<template>
    <van-button :type="primary" :plain="plain">{{message}}</van-button>
</template>
<script>
    export default {
        name: 'cus-button',
        props:{
            message:{
                type: String,
                default:()=>'信息'
            },
            primary: {
                type: String,
                default: "default"
            },
            plain: {
                type: Boolean,
                default: false
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