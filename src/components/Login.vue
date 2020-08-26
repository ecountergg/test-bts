<template>
    <div>
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input v-model="form.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input v-model="form.password" class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                </div>
                <div class="flex items-center justify-between">
                    <button @click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <router-link to="/">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Register
                        </button>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        };
    },
    methods: {
        login() {
            axios.post('http://18.141.178.15:8080/login', {
                password:this.form.password,
                username:this.form.username,
            })
            .then(response => {
                const token = response.data.data.token;

                if (token) {
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    this.$router.push({
                        name: "backend",
                        params: {
                            token: token
                        }
                    });
                }
            })
            .catch(error => {
                alert(error + "\n" + "Username / password yang dimasukkan salah.");
            });
        }
    }
}
</script>
