<template>
    <video autoplay loop muted class="video">
        <source src="../assets/video1.mp4" type="video/webm"/>
        <source src="../assets/video1.mp4" type="video/mp4"/>
    </video>
    <div>
        <title></title>
        <a v-on:click="Login" href="#" class="masuk">LOGIN</a>
        <a v-on:click="SignUp" href="#" class="daftar">SIGN UP</a>
    </div>
    <div class="welcome">
        <h2>
            Web Informasi Nilai Siswa
        </h2>
    </div>


</template>
<script>
export default {
    name: 'Home',
    methods:{
        Login(){
            localStorage.clear()
            this.$router.push({name:'Login'})
        },

        SignUp(){
            localStorage.clear()
            this.$router.push({name:"SignUp"})
        }
    },
}
</script>

<style>
.masuk{
    font-size: 1.125em;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    margin: 30px;
    margin-right: 200px;
}
.daftar{
    font-size: 1.125em;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    margin: 30px;
    margin-right: 100px;
}
.video{
    z-index: -1000;
    left: 50%;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50% , -50%);
    -moz-transform: translate(-50% , -50%);
    -ms-transform: translate(-50% , -50%);
    transform: translate(-50% , -50%);
    object-fit: cover;
    filter: blur(100px) brightness(0.0);
}
.welcome{
    font-size: 35px;
    position:center;
    text-align: center;
    font-family:Georgia, 'Times New Roman', Times, serif;
}
.gambar{
    position: absolute;
    top: 0;
    right: 0;
    margin: 26px;
    margin-right: 1163px;
    width: 139px;
}
@font-face {
    font-family: 'welcome';
    src: url('../assets/tulis.ttf') format(ttf);
}
</style>