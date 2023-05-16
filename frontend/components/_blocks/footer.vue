<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-xxl-4">
                    <div class="logo">
                        <base-svg name="logo"></base-svg>
                        <span class="logo__span">Уникальные рецепты от шеф-повара</span>
                    </div>
                </div>
                <div class="col-xxl-4">
                    <div class="nav">
                        <span class="nav__title">Меню</span>
                        <div class="nav__menu">
                            <ul>
                                <li>
                                    <nuxt-link to="/">Главная</nuxt-link>  
                                </li>
                                <li>
                                    <nuxt-link to="/#about-me">Обо мне</nuxt-link>  
                                </li>
                                <li>
                                    <nuxt-link to="/contact">Контакты</nuxt-link>  
                                </li>
                                <li>
                                    <nuxt-link to="/recepts">Рецепты</nuxt-link>  
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4">

                </div>
            </div>
            <div class="row footer-back">
                Все права защищены © 2023 / Разработка сайтов @luckoff
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: $color-9;
    padding: 60px 0;

    .logo {
        .svg {
			width: 60%;
            margin-bottom: 10px;
		}

        &__span {
            font-weight: 400;
            font-size: 14px;
            color: $color-1;
        }
    }
    .nav {
        display: flex;
        flex-direction: column;

        &__title {
            font-weight: 600;
            color: $color-1;
            font-size: 18px;
            line-height: 21.78px;
        }
        &__menu {
            ul {
                margin-top: 10px;
                li {
                    display: inline;
                    margin-right: 10px;

                    a {
                        color: $color-1;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 16.94px;
                        transition: all .3s;

                        &:hover {
                            color: $color-3;
                        }
                    }
                }
            }
        }
    }
    .footer-back {
        margin-top: 30px;
        border-top: 2px solid $color-footer;
        display: flex;
        justify-content: center;
        padding-top: 20px;
        color: #595C63;
        font-weight: 400;
        font-size: 14px;
    }
}
</style>