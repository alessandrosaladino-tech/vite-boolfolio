<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header id="app_header">
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/">Boolfolio</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link py-3" active-class="active " to="/home">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link py-3" to="/about">About Me</router-link>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link py-3" active-class="active " to="/contacts">Contacts</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nav-link py-3" active-class="active " to="/projects">Projects</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!-- /#app_header -->
</template>


<style lang="scss" scoped></style>