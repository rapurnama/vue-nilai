<template>
    <div class="bg">
    <div>
        <div>
            <a v-on:click="Home" href="#" class="utama">HOME</a>
            <a v-on:click="logout" href="#" class="keluar">LOGOUT</a>
        </div>
    </div>
    </div>
</template>
<script>
export default{
    name: 'Header',
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push({name:'Login'})
        },
        Home(){
            localStorage.clear()
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style>
body, html {
    padding: 0;
    margin: 0;
    height: 100%; 
}
.utama{
    font-size: 1.125em;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    margin: 30px;
    margin-right: 1250px;
}
.menu{
    color: white;
    float: left;
    padding: 14px 22px;
    text-align: center;
    font-size: 20px;
    text-decoration: underline;
}
.about{
    color: white;
    float: left;
    padding: 14px 22px;
    text-align: center;
    font-size: 20px;
    text-decoration: underline;
}
.nav{
    background-color: #1786b2;
    overflow: hidden;
}
.bg{
    width: 100%;
    height: 100vh; /* Mengisi tinggi layar penuh */
    background-color: white; /* Mengatur background menjadi putih */
    display: flex; /* Menggunakan flexbox untuk penataan */
    flex-direction: column; /* Menyusun elemen secara kolom */
    justify-content: center; /* Menyusun konten ke tengah secara vertikal */
    align-items: center; /* Menyusun konten secara horizontal */
}
.keluar{
    font-size: 1.125em;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    margin: 30px;
    margin-right: 50px;
}
.nav a:hover{
    background-color: #dfd8d8fa;
    color: #1786b2;
}
</style>