<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <Sidebar />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="{ 'overlay' : sideBarOpen }" id="main-content">

                <Navbar />

                <div class="p-6 bg-gray-100 mb-20">
                    <router-view />
                </div>

                <Footer />

            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

import Sidebar from '@/components/layout/Sidebar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
    name: 'Dashboard',
    components: {
        Sidebar,
        Navbar,
        Footer,
    },
    computed: {
        ...mapState({
            sideBarOpen: state => state.dashboard.sideBarOpen,
        }),
    },
}
</script>
