<template>
    <div id="customer_table">
        <div class="btn-wrapper">
            <router-link :to="{name:'customer.create'}" class="btn btn-primary btn-sm">create</router-link>
        </div>
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <template v-if="!customers.length">
                    <tr>
                        <td colspan="4" class="text-center">No Customers Available</td>
                    </tr>
                </template>
                <template v-else>
                    <tr v-for="customer in customers" :key="customer.id">
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.email }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>
                            <router-link :to="{name:'customer.show', params: { id: customer.id }}">View</router-link>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name: "customer_table",
        mounted() {
            this.$store.dispatch("getCustomers");
        },
        computed: {
            customers() {
                return this.$store.getters.customer;
            }
        }
    };

</script>

<style scoped>
    .customer-view {
        display: flex;
        align-items: center;
    }

    .user-img {
        flex: 1;
    }

    .user-img img {
        max-width: 160px;
    }

    .user-info {
        flex: 3;
        overflow-x: scroll;
    }

</style>
