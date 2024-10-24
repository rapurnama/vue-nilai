<template>
    <video autoplay loop muted class="pidio">
        <source src="../assets/video1.mp4" type="video/webm"/>
        <source src="../assets/video1.mp4" type="video/mp4"/>
    </video>
    <div>
        <h1 class="tulisan">SignUp</h1>

        <div>
            <div v-if="Name" class="satu">Nama Harus di Isi</div>
            <input class="nama" type="text" placeholder="Masukan Nama" v-model="name"/>

            <div v-if="Username" class="dua">Username Harus di Isi</div>
            <input class="username" type="text" placeholder="Masukan Username" v-model="username"/>
            
            <div v-if="Password" class="tiga">Password Harus di Isi</div>
            <input class="password" type="password" placeholder="Masukan Password" v-model="password"/>
            
            <button class="button" v-on:click="signUp">Sign Up</button>
            <p>
                <router-link to="/login">Sudah Punya Akun? Masuk</router-link>
            </p>
            <p>
                <router-link to="/home">Kembali Ke Halaman Utama</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from '../routers';

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            username: '',
            password: '',
            Name: false,
            Username: false,
            Password: false,
        };
    },
    methods: {
        async signUp() {
            // Reset validation flags
            this.Name = false;
            this.Username = false;
            this.Password = false;

            if (!this.name) {
                this.Name = true;
                return;
            }
            if (!this.username) {
                this.Username = true;
                return;
            }
            if (!this.password) {
                this.Password = true;
                return;
            }

            try {
                let result = await axios.post("http://localhost:3000/user", {
                    name: this.name,
                    username: this.username,
                    password: this.password
                });

                if (result.status === 201) {
                    alert("Sign Up Berhasil");
                    this.$router.push({name: 'Login' });
                }
            } catch (error) {
                console.error("Error during sign up:", error);
                alert("Terjadi kesalahan. Silakan coba lagi.");
            }
        }
    },
    watch: {
        name(newVal){
            if(newVal){
                this.Name = false;
            }
        },
        username(newVal){
            if(newVal){
                this.Username = false;
            }
        },
        password(newVal){
            if(newVal){
                this.Password = false;
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({name: 'Login' });
        }
    }
}
</script>

<style>
.tulisan{
    width: 150px;
    height: 50px;
    padding-right:20px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    font-size: 47px;
}
.nama{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 15px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #1786b2;
}
.poto{
    width: 180px;
    padding-right: 19px;
    display: block;
    margin-bottom: 2px;
    margin-right: auto;
    margin-left: auto;
}
.satu{
    color: red;
    font-weight: bold;
    padding-right: 180px;
}
.dua{
    color: red;
    font-weight: bold;
    padding-right: 150px;
}
.tiga{
    color: red;
    font-weight: bold;
    padding-right: 155px;
}
.username{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 15px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #1786b2;   
}
.password{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #1786b2;
}
.button{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    background-color: #1786b2;
    color: white;
    border: none;
    cursor: pointer;
}
</style>