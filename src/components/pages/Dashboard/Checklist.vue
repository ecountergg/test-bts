<template>
    <div class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                >
                    Checklist
                </label>
                <input
                    id="grid-first-name"
                    v-model="form.name"
                    type="text"
                    class="
                        appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4
                        mb-3 leading-tight focus:outline-none focus:bg-white
                    "
                    placeholder="Sample"
                >
            </div>
        </div>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="save"
        >
            Button
        </button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Checklist',
    data() {
        return {
            form: {
                name,
            },
        };
    },
    methods: {
        save() {
            axios.post(`${process.env.VUE_APP_BASE_API_URL}checklist`, this.form)
            .then((response) => {
                console.log(response);
                this.removeForm();  
            })
            .catch((error) => {
                console.log(error);
            })
        },
        removeForm() {
            this.form.name = '';
        },
    },
}
</script>
