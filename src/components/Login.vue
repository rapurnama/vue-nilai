<template>
    <video autoplay loop muted class="pidio">
        <source src="../assets/video1.mp4" type="video/webm"/>
        <source src="../assets/video1.mp4" type="video/mp4"/>
    </video>
    <div>
        <h1 class="huruf">Login</h1>

        <div>
            <div v-if="userName" class="alert" ref="usernameAlert">Username Harus di Isi</div>
            <input class="user" type="text" placeholder="Masukan Username" v-model="username"/>
            <div v-if="passWord" class="pwkosong" ref="passwordAlert">Password Harus di Isi</div>
            <div v-if="showError" class="erorr" ref="erorrMsg">Username/Password Salah</div>
            <input class="pw" type="password" placeholder="Masukan Password" v-model="password"/>
            <button class="klik" v-on:click="Login">Login</button>
            <p>
                <router-link to="/sign-up">Belum Punya Akun? Daftar</router-link>
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
    name: 'Login',
    data(){
        return {
            username: '',
            password: '',
            showError: false,
            userName: false,
            passWord: false
        };
    },
    methods: {
        async Login() {
            
            this.userName = false;
            this.passWord = false;
            this.showError = false;

            if (!this.username) {
            this.userName = true;
            this.$nextTick(() => {
                const usernameAlert = this.$refs.usernameAlert;
                if (usernameAlert) {
                    usernameAlert.classList.add('show');
                    setTimeout(() => {
                        usernameAlert.classList.remove('show');
                    }, 3000); // Tampilkan selama 3 detik
                }
            });
            return;
        }
            if (!this.password) {
            this.passWord = true;
            this.$nextTick(() => {
                const passwordAlert = this.$refs.passwordAlert;
                if (passwordAlert) {
                    passwordAlert.classList.add('show');
                    setTimeout(() => {
                        passwordAlert.classList.remove('show');
                    }, 3000); // Tampilkan selama 3 detik
                }
            });
            return;
            }

            try {
               const result = await axios.get(
                    `http://localhost:3000/user?username=${this.username}&password=${this.password}`
                );

                if (result.status === 200 && result.data.length > 0) {
                    alert("Login Berhasil")
                    localStorage.setItem('user-info', JSON.stringify(result.data));
                    this.$router.push({ name: 'Header' });
            }   else {
                this.showError = true;
                this.$nextTick(() => {
                    const erorrMsg = this.$refs.erorrMsg;
                    if (erorrMsg) {
                        erorrMsg.classList.add('show');
                        setTimeout(() => {
                            erorrMsg.classList.remove('show');
                        }, 3000); // Tampilkan selama 3 detik
                    }
                });
            }
            } catch (error) {
                console.error("Error during login:", error);
                alert("Terjadi Kesalahan, Silahkan Coba Lagi")
            }
        }
    },
    watch: {
        username(newVal) {
            if (newVal) {
                this.userName = false;
            }
        },
        password(newVal) {
            if (newVal) {
                this.passWord = false;
                this.showError = false;
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'Header' });
        }
    }
}
</script>

<style>
/* Your existing styles remain unchanged */
</style>


<style>
.pidio{
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
    filter: blur(100px) brightness(0.1);
}
.huruf{
    width: 150px;
    padding-right:2px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    font-size: 47px;
}
.user{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 15px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #1786b2;   
}
.lambang{
    width: 180px;
    padding-right: 10px;
}
.pw{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #1786b2;
}
.alert, .pwkosong, .erorr{
    color: red;
    font-weight: bold;
    opacity: 0; /* Mulai dengan transparan */
    transition: opacity 0.5s ease-in-out;
}
.alert.show, .pwkosong.show, .erorr.show{
    opacity: 1;
}
.alert{
    padding-right: 155px;
}
.pwkosong{
    padding-right: 160px;
}
.erorr{
    padding-right: 120px;
}
.klik{
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