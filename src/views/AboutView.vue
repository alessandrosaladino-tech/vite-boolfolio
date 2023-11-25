<script >

export default {
    name: 'AboutView',
    data() {
        return {
            FrontTech: ['HTML', 'CSS', 'JavaScript', 'VueJs', 'Vite', 'SCSS', 'API', 'Bootstrap'],
            BackTech: ['Databases', 'Laravel', 'PHP'],
        }
    },

    props: {

    },

    methods: {

    }

}

</script>

<template>
    <div class="p-5 mb-4   mt-5 bg_jumbo_about">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">About me</h1>
            <p class="col-md-8 fs-4 text-white">Welcome in my Bio Page. Check  my History and skills </p>

        </div>
    </div>

    <div class="container_avatar m-auto">
        <img src="../assets/img/avatar.jpg" alt=""> <!--Cambia link per cambiare immagine avatar -->
    </div>

    <div class="container mt-5 mb-5 bg_container_about">

        <div class="row">
            <div class="col d-flex">
                <div class="card bg_card p-5">
                    <h1 class="text-danger">Chi sono?</h1>
                    <p>Ciao, sono Alessandro Saladino un Junior Web Developer. Le mie più grandi passioni sono le moto e la
                        tecnologia ed è proprio per quest'ultima che ho deciso di intraprendere la strada del Web Developer.
                        Ho frequentato il corso online di Boolean completandolo al 100%. Controlla i miei Progetti o
                        contattami per qualsiasi cosa! </p>
                </div>
            </div>

            
                <div class="col">
                    <div class="card bg_card text-center">
                        <h1 class="text-danger pt-4">FrontEnd Technology</h1>
                        <div class="d-flex justify-content-center flex-wrap gap-3 p-3">
                            <small class="badge rounded-pill text-bg-dark" v-for="tech in FrontTech">{{ tech }}</small>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card bg_card text-center">
                        <h1 class="text-danger pt-4">BackEnd Technology</h1>
                        <div class="d-flex justify-content-center flex-wrap gap-3 p-3">
                            <small class="badge rounded-pill text-bg-danger" v-for="tech in BackTech">{{ tech }}</small>
                        </div>
                    </div>
                </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg_jumbo_about {
    background-color: rgba(0, 0, 0, 0.53);
    color: red;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
}

.container_avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;

    &:hover {
        box-shadow: 2px 5px 100px #d90404;
    }

}

.bg_card {
    background-color: rgba(0, 0, 0, 0.786);
    color: white;
    border: 1px solid  #7c0404;
    border-radius: 10px;
}

.container_avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

}

.bg_container_about {
    background-color: rgba(0, 0, 0, 0.696);
    border-radius: 10px;
    padding: 50px;
    box-shadow: 0px 0px 100px #d90404;
}

i {
    color: rgb(20, 255, 20);
}

small {
    display: none;
}

.card:hover {

    small {
        display: inline;
    }
}
</style>