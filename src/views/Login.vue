<template>
  <div class="bg"></div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.bg {
    background-image: url("@/assets/bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    .login {
        width: 500px;
        height: 300px;
        padding: 50px;
        box-shadow: 0 0 10px 10px #f4f4f4;
        text-align: center;
        position: absolute;
        top: 50%;
        margin-top: -200px;
        left: 10%;
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
            h1 {
                color: rgb(14, 53, 148);
            }
        }
    }
}
</style>