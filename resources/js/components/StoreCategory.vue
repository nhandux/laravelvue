<template>
    <section class="container">
        <h1>Add Category</h1>
        <section class="container alert alert-danger col-md-12" v-if="alert!==''">{{alert}}</section>
        <section>
            <router-link :to="{name:'Category'}" class="btn btn-success" style="margin: 5px">
                List category
            </router-link>
        </section>
        <form @submit.prevent="addCategory" class="col-md-6">
            <section class="form-group">
                <label>Name:</label>
                <input autofocus required type="text" v-model="category.name" class="form-control" />
            </section>
            <section class="form-group">
                <label>Rank:</label>
                <input autofocus required type="text" v-model="category.rank" class="form-control" />
            </section>
            <section class="form-group">
                <input type="submit" value="Add" class="btn btn-success" />
            </section>
        </form>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                category: {},
                alert: ''
            }
        },
        methods: {
            addCategory(){
                this.axios.post('/category', this.category)
                .then((res)=>{this.$router.push({name:'Category'})})
                .catch((error)=>{this.alert=error});
            }
        }
    }
</script>
