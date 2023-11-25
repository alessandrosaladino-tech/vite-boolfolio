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
    <div class="p-5 bg-light" v-if="this.querySuccessed">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 fs-6">
                <div class="col py-5">
                    <img :src="this.project.thumb" alt=""> <!--this.baseUrl + '/storage/' +  (for add storage img)-->
                </div>
                <div class="col">
                    <div class="container py-5">
                        <div class="my-1">

                        </div>
                        <h1 class="display-5 fw-bold">#{{ this.project.id }} - {{ this.project.title }}</h1>
                        
                        <div class="d-flex" v-if="project.technologies.length > 0">
                            <ul class="d-flex g-2 list-unstyled" v-for="technology in project.technologies">
                                <li class="badge bg-success me-1">
                                    <i class="fa-solid fa-code"></i> {{ technology.name }}
                                </li>
                            </ul>
                        </div>

                        <div class="d-flex" v-else>
                            <ul class="d-flex gap-2 list-unstyled">
                                <li class="badge bg-secondary">
                                    <i class="fa-regular fa-file"></i> No Type
                                </li>
                            </ul>
                        </div>

                        <p><strong>Type: </strong>
                            <span v-if="project.type"> {{ project.type.name }} </span>
                            <span v-else>Uncategorized</span>
                        </p>

                        <p class="col-md-8 text-center w-100">{{ this.project.description }}</p>

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


<style lang="scss" scoped></style>