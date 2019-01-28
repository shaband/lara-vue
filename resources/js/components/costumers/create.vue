<template>
    <div id="customer_create" class="customer-new">
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <strong>{{ fieldName }}</strong> {{ fieldsError.join('\n') }}
                </li>
            </ul>
        </div>
        <form @submit.prevent="store">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.name" placeholder="Customer Name">
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <input type="email" class="form-control" v-model="customer.email" placeholder="Customer Email">
                    </td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.phone" placeholder="Customer Phone">
                    </td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.website" placeholder="Customer Website">
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link :to="{name:'customer.index'}" class="btn">Cancel</router-link>
                    </td>
                    <td class="text-right">
                        <input type="submit" value="Create" class="btn btn-primary">
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>
<script>
    import validate from 'validate.js';

    export default {
        name: "customer_create",
        data() {
            return {
                customer: {
                    name: "",
                    email: "",
                    phone: "",
                    website: ""
                },
                errors: null
            };
        },
        methods: {
            store() {
                this.errors = null;
                const constraints = this.getConstraints();
                const errors = validate(this.$data.customer, constraints);
                if (errors) {
                    this.errors = errors;
                    return;
                }
                this.$store.dispatch("addCustomer", this.customer).then(response => {
                    this.$router.push({
                        name: 'customer.index'
                    })
                });
            },
            getConstraints() {
                return {
                    name: {
                        presence: true,
                        length: {
                            minimum: 3,
                            message: 'Must be at least 3 characters long'
                        }
                    },
                    email: {
                        presence: true,
                        email: true
                    },
                    phone: {
                        presence: true,
                        numericality: true,
                        length: {
                            minimum: 10,
                            message: 'Must be at least 10 digits long'
                        }
                    },
                    website: {
                        presence: true,
                        url: true
                    }
                };
            }
        }
    };

</script>
