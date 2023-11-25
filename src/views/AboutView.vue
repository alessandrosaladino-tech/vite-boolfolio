<script >

export default {
    name: 'AboutView',

    props: {

    },

    methods: {

    }

}

</script>

<template>
    <div class="p-5 mb-4   mt-5 bg_jumbo_about">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in
                previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your
                liking.</p>

        </div>
    </div>

    <div class="container_avatar m-auto">
        <img src="../assets/img/avatar.jpg" alt=""> <!--Cambia link per cambiare immagine avatar -->
    </div>

    <div class="container mt-5 mb-5 bg_container_about">

        <div class="row">
            <div class="col d-flex gap-3">
                <div class="card bg_card">
                    <h1>Chi sono?</h1>
                    <p>Ciao, sono Alessandro Saladino un Junior Web Developer. Le mie più grandi passioni sono le moto e la
                        tecnologia ed è proprio per quest'ultima che ho deciso di intraprendere la strada del Web Developer.
                        Ho frequentato il corso online di Boolean completandolo al 100%. Controlla i miei Progetti o
                        contattami per qualsiasi cosa! </p>
                </div>
            </div>

            <div class="row pt-4 text-center justify-content-around">
                <div class="col">
                    <div class="card bg_card">
                        <h1>FrontEnd Technology:</h1>
                        <ul class="">
                            <li class="list-unstyled">
                                <i class="bi bi-check2-all pe-3"></i>
                                <span class="">HTML</span>
                            </li>
                            <li class="list-unstyled">
                                <i class="bi bi-check2-all pe-3"></i>
                                <span class="">CSS</span>
                            </li>
                            <li class="list-unstyled">
                                <p class=""><i class="bi bi-check2-all pe-3"></i>JavaScript</p>
                            </li>
                            <li class="list-unstyled">
                                <p class=""><i class="bi bi-check2-all pe-3"></i>JavaScript</p>
                            </li>
                            <li class="list-unstyled">
                                <p class=""><i class="bi bi-check2-all pe-3"></i>JavaScript</p>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="col">
                    <div class="card bg_card">
                        <h1>BackEnd Technology:</h1>
                        <ul>
                            <li class="list-unstyled">
                                <p class=""><i class="bi bi-check2-all pe-3"></i>HTML</p>
                            </li>

                        </ul>
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
    border:1px solid red;
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
}

i {
    color: rgb(20, 255, 20);
}

li {
    display: none;
}

.card:hover {

    li {
display: inline;
    }
}
</style>