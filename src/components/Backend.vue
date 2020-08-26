<template>
  <div>
      <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Ceklis
            </label>
            </div>
            <div class="md:w-2/3">
            <input v-model="form.name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
            <button @click="save" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Simpan
            </button>
            </div>
        </div>
    </form>
    <ul class="list-disc">
        <li v-for="(list, index) in lists" :key="index" @click="deleteList(list.id)" >
            {{ list.name }}
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Backend',
    data() {
        return {
            token: "",
            currentRouteName: "",
            form: {
                name: '',
            },
            lists: [],
        };
    },
    created() {
        this.getData();
    },
    methods: {
        save() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
             axios({
                method: 'POST',
                url: 'http://18.141.178.15:8080/checklist',
                data: this.form,
                headers:headers
            })
            .then(response => {
                console.log(response);
                this.getData();
                this.form.name = '';
            })
            .catch(error => {
                console.log(error);
            });
        },
        getData() {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            axios.get('http://18.141.178.15:8080/checklist', config)
            .then(response => {
                this.lists = response.data.data
            })
            .catch(error => {
                console.log(error);
            });
        },
        deleteList(id) {
            axios.delete(`http://18.141.178.15:8080/checklist/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            })
            .then(response => {
                console.log(response)
                this.getData();
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>
