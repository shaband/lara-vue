<template>
    <nav id="header" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <template v-if="currentUser">
                    <li class="nav-item">
                        <router-link :to="{name:'customer.index'}" exact class="nav-link">customers</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">{{currentUser.name}}</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" @click.prevent="logout">Logout</a>
                        </div>
                    </li>
                </template>

            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        name: "header-app",
        methods: {
            logout() {
                this.$store.commit("logout");
                this.$router.push("/login");
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        }
    }

</script>
