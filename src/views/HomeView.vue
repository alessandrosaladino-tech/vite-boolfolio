<script>
import AppCard from '../components/AppCard.vue';
import AppCardPlaceholder from '../components/AppCardPlaceholder.vue';
import axios from 'axios';

export default {
    name: 'HomeView',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            latestProjectsApiURI: '/api/projects/latest',
            skillsApiURI: '/api/technologies',
            latestProjects: [],
            skills: [],
            latestProjects: [],
        }
    },
    methods: {
        fetchProjects(url) {
            axios
                .get(url)
                .then(response => {
                    this.latestProjects = response.data.projects;
                })
                .catch(error => {
                    console.error(error)
                })
        },
        fetchSkills(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.skills = response.data.technologies;
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    components: {
        AppCard,
        AppCardPlaceholder
    },
    mounted() {
        this.fetchProjects(this.baseUrl + this.latestProjectsApiURI)
        this.fetchSkills(this.baseUrl + this.skillsApiURI)
    },
}
</script>
        
<template>
    <div id="jumbotron" class="p-5 bg-transparent">
        <div class="container py-5 text-center text-lg-start">
            <h1 class="display-5 fw-bold text-center text-danger">Hi There!</h1>
            <p class="fs-4 text-center text-white">This is Alessandro, welcome to my Portfolio!</p>
        </div>
    </div>

    <div class=" about p-5 mb-4 rounded-3 border border-danger border-opacity-20 text-center  border-4">
        <div class="container-fluid py-5 ">
          <h1 class="display-5 fw-bold text-danger">Check who am i </h1>
          <p class="col-md-8 fs-4"></p>
          <button class="btn btn-dark btn-lg" type="button"> <router-link class="nav-link py-3 text-danger" to="/about">About Me</router-link></button>
        </div>
      </div>

    <div id="project_list" class="mb-5 pt-5 bg-transparent">
        <div class="container">
            <h2 class="text-center text-uppercase py-2 text-danger">Latest Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
                <div v-if="this.latestProjects.length > 0" class="col" v-for="project in this.latestProjects">
                    <AppCard :project="project" />
                </div>
                <AppCardPlaceholder v-else />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.about {
    background-color: rgba(0, 0, 0, 0.694);
    box-shadow: 10px 10px  500px #d90404;

}

</style>