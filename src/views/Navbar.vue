<template>
    <div>
        <header class="menu">
            
        <ul class="menu_list">
            <router-link to="#">
            <div class="logo" style="margin-top: -30px; margin-right: 70px;">
            <svg width="32.85" height="32.81" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5847 6.77396L26.1475 0.336827C25.6984 -0.112276 24.9 -0.112276 24.4509 0.336827L17.3651 7.42267C16.916 7.87177 16.1176 7.87177 15.6685 7.42267L8.58263 0.336827C8.13353 -0.112276 7.33513 -0.112276 6.88602 0.336827L0.448888 6.77396C-0.000215136 7.22307 -0.000215136 8.02147 0.448888 8.47058L7.53472 15.5564C7.98382 16.0055 7.98382 16.8039 7.53472 17.253L0.448888 24.3389C-0.000215136 24.788 -0.000215136 25.5864 0.448888 26.0355L6.88602 32.4726C7.33513 32.9217 8.13353 32.9217 8.58263 32.4726L15.6685 25.3868C16.1176 24.9377 16.916 24.9377 17.3651 25.3868L24.4509 32.4726C24.9 32.9217 25.6984 32.9217 26.1475 32.4726L32.5847 26.0355C33.0338 25.5864 33.0338 24.788 32.5847 24.3389L25.4988 17.253C25.0497 16.8039 25.0497 16.0055 25.4988 15.5564L32.5847 8.47058C33.0837 8.02147 33.0837 7.27297 32.5847 6.77396Z" fill="#00093C"/>
</svg>
<svg width="38.1" height="31.65" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3895 0.833595L0.525148 30.0253C0.0261453 30.8736 0.575049 31.9215 1.52315 31.9215H19.3875H37.2518C38.1999 31.9215 38.7488 30.8237 38.2498 30.0253L20.3855 0.833595C19.8865 0.0850907 18.8386 0.0850907 18.3895 0.833595Z" fill="#00093C"/>
</svg>
<div id="flex">
<svg width="32.93" height="32.93" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4671 33.6464C7.38524 33.6464 0 26.2611 0 17.1793C0 8.0974 7.38524 0.712158 16.4671 0.712158C25.549 0.712158 32.9342 8.0974 32.9342 17.1793C32.9342 26.311 25.549 33.6464 16.4671 33.6464Z" fill="#00093C"/>
</svg>
<p class="name-logo">FUTURE<br/>ACADEMY</p>
 </div>
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
            <li class="cities"><i class='fas fa-map-marker-alt'></i>Нижний Новгород</li>
            <p class="cities" style="color: #00093C;">8 800 950-33-98 </p>
            <li><router-link to="" class="user"><i class='fa fa-user'></i>Войти</router-link></li>
        </ul>

        </header>
    </div>
</template>
<script>
    import '../assets/scss/nav-bar.scss'
</script>