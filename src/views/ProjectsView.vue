<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
import AppCardPlaceholder from '../components/AppCardPlaceholder.vue';

export default {
    name: 'ProjectsView',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            apiURI: '/api/projects',
            projects: [],
            links: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        fetchData(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.projects.data;
                    this.lastPage = response.data.projects.last_page;
                    this.links = response.data.projects.links;
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    mounted() {
        this.fetchData(this.baseUrl + this.apiURI)
    },
    components: {
        AppCard,
        AppCardPlaceholder
    }
}
</script>

<template>
    <div id="jumbotron" class="p-5 bg-transparent">
        <div class="container py-5 text-center text-lg-start">
            <h1 class="display-5 fw-bold text-center text-danger">Hi There!</h1>
            <p class="fs-4 text-center text-white">All my Projects!</p>
        </div>
    </div>
    <div id="project_list" class="py-3">
        <div class="container">

            <div class="row row-cols-1 row-cols-lg-3 g-4 justify-content-center">
                <div v-if="this.projects.length > 0" class="col" v-for="project in  this.projects ">
                    <AppCard :project="project" />
                </div>
                <AppCardPlaceholder v-else />
            </div>

            <nav aria-label="Page navigation" class="d-flex justify-content-center my-3">
                <ul class="pagination border border-dark">
                    <li class="page-item border border-dark" :class="link.active ? 'active' : ''" aria-current="page"
                        v-for="link in this.links">
                        <a class="page-link bg-danger text-dark" role="button" @click="fetchData(link.url)" v-html="link.label"></a>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>