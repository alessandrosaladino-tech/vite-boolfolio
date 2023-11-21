<script>

export default {
    name: 'AppFooter',
}
</script>

<template>
    <footer id="app_footer" class="bg-transparent text-light py-3 border-footer">

        <div class="container ">
            <div class="row justify-content-between text-center align-items-center">
                <div class="col ">
                    <p>TM © 2023 - Alessandro Saladino - All Rights Reserved</p>
                </div>

                <div class="col">


                    <a href="">
                        <i class="bi bi-instagram"></i>
                    </a>


                </div>

                <div class="col">
                    <ul class="list-unstyled">
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
    <!-- /#app_footer -->
</template>

<style lang="scss" scoped>
#app_footer {
    height: 20%;
}

.border-footer {
    border-top: 2px solid black;
    box-shadow: 10px 10px 10px 20px rgba(0, 0, 0, .6);
}

i {
    width: 50px;
    height: 50px;
    display: block;
    
}
</style>