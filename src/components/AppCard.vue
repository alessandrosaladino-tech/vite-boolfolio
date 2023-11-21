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
    <div class="card h-100 bg-dark">
        
            <img :src="project.thumb" alt="">
        
        <div class="card-body h-100 d-flex flex-column justify-content-around">
            <h3 class="text-center text-truncate text-danger">{{ project.title }}</h3>
            <div class="d-flex justify-content-center flex-wrap">
                <small class="badge rounded-pill text-bg-danger m-1" v-for="technology in project.technologies">{{
                    technology.name }}</small>
            </div>
            <p class="card-text text-white placeholder-glow">
                {{ project.description }}
            </p>
            <div class="col">
                    <router-link class="my-1 btn btn-dark text-white w-100 border-link" :to="{
                        name: 'project',
                        params: { slug: project.slug }
                    }">
                        View Project
                    </router-link>
                </div>
            <div class="d-flex justify-content-between py-1">
                <a :href="project.website_link" class="btn btn-dark border-link">
                    Website link
                </a>
                <a :href="project.github_link" class="btn btn-dark  border-link">
                    GitHub Link
                </a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.card {
    box-shadow: 0px 0px  15px #d90404;
}

.border-link {
    border: 1px solid rgb(183, 4, 4);
    color: red
}

</style>