<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">login</div>
                <div class="card-body">
                    <form @submit.prevent="authenticate">
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email" v-model="form.email" class="form-control" placeholder="Email Address">
                        </div>
                        <div class="form-group row">
                            <label for="password">Password:</label>
                            <input type="password" v-model="form.password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group row">
                            <input type="submit" value="Login">
                        </div>


                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        login
    } from "../../helpers/helper.js"
    export default {
        name: "login",
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            authenticate() {
                this.$store.dispatch('login')
                login(this.form)
                    .then(res => {
                        this.$store.commit('login_success', res)

                        this.$router.push({
                            path: '/'
                        })
                    })
                    .catch(err => this.$store.commit('login_error', {
                        err
                    }))


            },
        }

    }

</script>
