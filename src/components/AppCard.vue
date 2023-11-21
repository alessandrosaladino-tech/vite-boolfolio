<script>
export default {
    name: 'AppCard',
    props: {
        'project': Object
    },
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
        }
    }
}
</script>

<template>
    <div class="card h-100">
        
            <img :src="project.thumb" alt="">
        
        <div class="card-body h-100 d-flex flex-column justify-content-around">
            <h3 class="text-center text-truncate">{{ project.title }}</h3>
            <div class="d-flex justify-content-center flex-wrap">
                <small class="badge rounded-pill text-bg-primary m-1" v-for="technology in project.technologies">{{
                    technology.name }}</small>
            </div>
            <p class="card-text placeholder-glow">
                {{ project.description }}
            </p>
            <div class="col">
                    <router-link class="my-1 btn btn-dark text-white w-100" :to="{
                        name: 'project',
                        params: { slug: project.slug }
                    }">
                        View Project
                    </router-link>
                </div>
            <div class="d-flex justify-content-around py-1">
                <a :href="project.website_link" class="btn btn-primary">
                    Website link
                </a>
                <a :href="project.github_link" class="btn btn-dark text-white">
                    GitHub Link
                </a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>