<template>
    <div id="main">
        <header-app></header-app>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import header from './components/layouts/header.vue'
    export default {
        name: "main-app",
        components: {
            'header-app': header,
        }
    }

</script>
