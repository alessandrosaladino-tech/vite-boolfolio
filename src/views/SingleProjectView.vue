<script>
import axios from 'axios';
import { router } from '../router.js'

export default {
    name: 'SingleProjectView',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            apiURI: '/api/projects/' + this.$route.params.slug,
            project: null,
            querySuccessed: false
        }
    },
    methods: {
        fetchData(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    if (response.data.success) {
                        this.querySuccessed = true
                        this.project = response.data.project;
                    } else {
                        router.push({ name: 'not-found' })
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    mounted() {
        this.fetchData(this.baseUrl + this.apiURI);
    }
}
</script>

<template>
    <div class="p-5 bg_single" v-if="this.querySuccessed">
        <div class="container">
            <div class="row">
                <div class="card card_bg">
                    <div class="d-flex justify-content-center align-items-center pt-3">
                        <img class="card-img-top img_single" v-if="this.project.thumb" :src="this.project.thumb" alt="">
                        <img v-else class="card-img-top img_single" src="../assets/img/volpe.png" alt="">
                        <!--this.baseUrl + '/storage/' +  (for add storage img)-->
                    </div>
                    <div class="card-body text-center">
                        <h1 class="display-5 fw-bold card-title text-danger pb-5">#{{ this.project.id }} - {{
                            this.project.title }}</h1>

                        <div class="d-flex" v-if="project.technologies.length > 0">
                            <ul class="d-flex g-2 list-unstyled pb-4 " v-for="technology in project.technologies">
                                <li class="badge bg-danger me-1">
                                    <i class="bi bi-code"></i> {{ technology.name }}
                                </li>
                            </ul>
                        </div>

                        <div class="d-flex pb-4" v-else>
                            <ul class="d-flex gap-2 list-unstyled">
                                <li class="badge bg-secondary">
                                    <i class="bi bi-code"></i> No Technology
                                </li>
                            </ul>
                        </div>

                        <div class="pb-4 ">
                            <p><strong class="text-danger">Type: </strong>
                                <span class="text-white" v-if="project.type"> {{ project.type.name }} </span>
                                <span class="text-white" v-else>Uncategorized</span>
                            </p>
                        </div>

                        <div class="pb-5  d-flex justify-content-center align-items-center">
                            <p v-if="this.project.description" class="col-md-8 w-100 text-white">{{
                                this.project.description }}</p>
                            <p v-else class="col-md-8 text-center w-100 text-white">No Description</p>
                        </div>

                        <div class="row">
                            <div class="col">
                                <a :href="this.project.public_link"
                                    class="btn btn-lg btn-danger text-decoration-none text-dark fs-6 d-block">
                                    Website Link
                                </a>
                            </div>
                            <div class="col">
                                <a :href="this.project.github_link"
                                    class="btn btn-lg btn-dark text-decoration-none text-white fs-6 d-block">
                                    GitHub Link
                                </a>
                            </div>
                        </div>



                        <ul class="d-flex p-0">
                            <li class="list-unstyled me-2">

                            </li>
                            <li class="list-unstyled">

                            </li>
                        </ul>


                    </div>

                </div>
            </div>
        </div>
    </div>
    <div v-else>Error</div>
</template>


<style lang="scss" scoped>
.card_bg {
    background-color: rgba(0, 0, 0, 0.785);
    box-shadow: 0px 0px  15px #d90404;
}


</style>