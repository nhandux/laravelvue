<template>
    <section class="container">
        <h1>Category</h1>
        <section class="container alert alert-danger col-md-12" v-if="alert!==''">{{alert}}</section>
        <section>
            <router-link :to="{name:'StoreCategory'}" class="btn btn-success" style="margin: 5px">
                Add category
            </router-link>
        </section>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Rank</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="categories.length>0" v-for="cate in categories">
                    <td>{{cate.id}}</td>
                    <td><router-link :to="{name: 'ShowCategory', params: {id:cate.id}}">{{cate.name}}</router-link></td>
                    <td>{{cate.rank}}</td>
                    <td>{{cate.status === 1 ? 'Active' : 'Not active' }}</td>
                    <td>
                        <router-link :to="{name: 'UpdateCategory',params:{id:cate.id}}" class="btn btn-info">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteCategory(cate.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                categories: [],
                alert: ''
            }
        },
        created: function(){
            this.showCategory();
        },
        methods: {
            showCategory(){
                this.axios.get('/category')
                .then((res)=>{this.categories=res.data})
                .catch((error)=>{this.alert=error});
            },
            deleteCategory(id) {
                if(confirm('Are you sure?')){
                    this.axios.delete('/category/'+id)
                    .then((res)=>{this.categories=res.data.categories;this.alert=res.data.alert})
                    .catch((error)=>{this.alert=error});
                }
            }
        }
    }
</script>
