<script>

export default {
    name: 'AppFooter',
}
</script>

<template>
    <footer id="app_footer" class="bg-transparent text-light py-3 border-footer d-flex">



        <div class="container">
            <div class="row">

                <div class="container d-flex text-center ">
                    <div class="col ">
                        <p class="text_tm">TM © 2023 - Alessandro Saladino - All Rights Reserved</p>
                    </div>

                    <div class="col  icon_social">
                        <a href="https://www.instagram.com/alessandro______._/">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>

                    <div class="col  icon_social">
                        <a href="www.linkedin.com/in/alessandro-saladino-a65a97164">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>

                    <div class="col  icon_social">
                        <a href="https://github.com/alessandrosaladino-tech">
                            <i class="bi bi-github"></i>
                        </a>
                    </div>

                    <div class="col  icon_social">
                        <a href="https://www.facebook.com/alessandro.saladino.7/">
                            <i class="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    <!-- /#app_footer -->
</template>

<style lang="scss" scoped>

#app_footer {
    height: 110px;
}

.border-footer {
    border-top: 2px solid black;
    box-shadow: 10px 10px 10px 20px rgba(0, 0, 0, .6);
}

i {
    width: 50px;
    height: 50px;

}

.icon_social {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;


    & a {
        text-decoration: none;
        color: red;
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        padding-top: 6.8px;
    }

    & :hover {
        transition: 1.5s;
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg)
    }

}

.text_tm {
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
}
</style>