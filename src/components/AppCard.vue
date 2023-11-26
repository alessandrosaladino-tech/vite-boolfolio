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
        
        <div class="img_container" >
            <img class="card-img-top w-100 h-100" v-if="project.thumb" :src="project.thumb" alt="">
            <img v-else class="bg-light-subtle card-img-top w-100 h-100" src="../assets/img/volpe.png" alt="">
        </div>

        <div class="card-body h-100 d-flex flex-column justify-content-around">
            <h3 class="text-center text-truncate text-danger">{{ project.title }}</h3>

            <div class="d-flex justify-content-center flex-wrap pt-3" v-if="project.technologies.length > 0">
                <small class="badge rounded-pill text-bg-danger m-1" v-for="technology in project.technologies">{{
                    technology.name }}</small>
            </div>
            <div class="d-flex justify-content-center flex-wrap pt-3" v-else>
                <small class="badge rounded-pill text-bg-danger m-1">No technology</small>
            </div>

            <div class="d-flex justify-content-center align-items-center flex-wrap pt-3 pb-3">
                <small v-if="project.types" class="badge rounded-pill text-bg-danger m-1"> {{ project.types }}</small>
                <small v-else class="badge rounded-pill text-bg-primary m-1">Uncategorized</small>
            </div>

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
    box-shadow: 0px 0px 15px #d90404;
}

.border-link {
    border: 1px solid rgb(183, 4, 4);
    color: red
}

.img_container {
    height: 250px;
    & img {
        object-fit: cover;
    }
}
</style>