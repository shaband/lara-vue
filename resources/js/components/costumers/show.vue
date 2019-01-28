<template>

    <div id="customer_show" class="customer-view" v-if="customer">
        <div class="user-img">
            <img src="https://www.scottsdaleazestateplanning.com/wp-content/uploads/2018/01/user.png" alt="">
        </div>
        <div class="user-info">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <td>{{ customer.id }}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{ customer.name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ customer.email }}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{ customer.phone }}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{ customer.website }}</td>
                </tr>
            </table>
            <router-link :to="{name:'customer.index'}">Back to all customers</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "customer_show",
        data() {
            return {
                customer: null
            }
        },
        computed: {
            customers() {
                return this.$store.getters.customer
            }
        },
        mounted() {

            let app = this;
            let customer = this.customers.find(customer => {
                return customer.id == app.$route.params.id
            })
            if (customer) {
                return this.customer == customer
            } else {
                this.$store.dispatch('getCustomer', this.$route.params.id).then(res => this.customer = res.data.customer)
            }

        }
    };

</script>
