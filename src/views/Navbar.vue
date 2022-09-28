<template>
    <div>
        <header class="menu">
            
        <ul class="menu_list">
            <router-link to="#">
            <div class="logo_blue">
                <img src="../assets/img/logo1.png">
</div>
</router-link>
            <li>
                <router-link to="" class="menu_link"><i class='fa fa-bars'></i>Все курсы</router-link>
            </li>
            <li>
                <router-link to="" class="menu_link">Мероприятия</router-link>
            </li>
            <li>
                <router-link to="" class="menu_link">Базы знаний</router-link>
            </li>
            <li>
                <router-link to="" class="menu_link">Карьера</router-link>
            </li>
            <li class="cities"><i class='fas fa-map-marker-alt'></i>Новополоцк</li>
            <p class="cities" style="color: #00093C;">8 800 950-33-98 </p>
            <li><router-link to="" class="user"><i class='fa fa-user'></i>Войти</router-link></li>
        </ul>

        </header>
    </div>
</template>
<script>
    import '../assets/scss/nav-bar.scss'
</script>