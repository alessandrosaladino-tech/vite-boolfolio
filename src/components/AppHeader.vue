<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header id="app_header">
        <nav class="navbar navbar-expand-sm  bg-transparent  border-header">
            <div class="container ">

                <RouterLink class="navbar-brand py-3 text-danger " active-class="active " to="/home">
                    <img class="avatar avatar_img" src="../assets/img/volpe.png" alt="">
                </RouterLink>
                <button class="navbar-toggler d-lg-none " type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId " aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav m-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link py-3 text-danger" active-class="active " to="/home">Home
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link py-3 text-danger" to="/about">About Me</router-link>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link py-3 text-danger" active-class="active " to="/contacts">Contacts
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link py-3 text-danger" active-class="active " to="/projects">Projects
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!-- /#app_header -->
</template>


<style lang="scss" scoped>
#app_header {
    height: 20%;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.avatar_img {
    object-fit: contain;
    object-position: center;
    background-color: rgba(171, 168, 168, 0.47);
    background-size: contain;
    border-radius: 50%;
    margin: auto;
}

.avatar:hover {
    border: 2px solid red;
    background-color: rgba(255, 255, 255, 0.751);
    box-shadow: 0px 0px 30px #d90404;
}

.border-header {
    border-bottom: 2px solid black;
    border-radius: 12px / 10px;
    box-shadow: 10px 10px 10px rgba(0,0,0,.6);
}

.nav-link:hover {
    border-bottom:1px solid rgba(255, 0, 0, 0.671);
    box-shadow: 10px 10px  500px #d90404;
    
}
</style>