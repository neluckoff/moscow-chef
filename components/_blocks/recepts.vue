<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="menu">
                        <h1>Готовим вместе</h1>
                        <div class="row">
                            <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                <div class="menu__desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi laborum animi? 
                                    Ducimus officiis totam eligendi illo molestiae nam cum.</p>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                <div class="menu__btn">
                                    <div class="btn btn-secondary">
                                        <span>Все рецепты</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu__buttons">
                            <div class="row">
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-3">
                                    <nuxt-link to="/">
                                        <div class="menu-card">
                                            <base-svg name="steak"></base-svg>
                                            <div class="menu-card__name">
                                                <p class="menu-card-title">Основные блюда</p>
                                                <p class="menu-card-desc">Горячие блюда</p>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-3">
                                    <nuxt-link to="/">
                                        <div class="menu-card">
                                            <base-svg name="bowl-hot"></base-svg>
                                            <div class="menu-card__name">
                                                <p class="menu-card-title">Супы</p>
                                                <p class="menu-card-desc">Горячие блюда, залитые бульеном</p>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-3">
                                    <nuxt-link to="/">
                                        <div class="menu-card">
                                            <base-svg name="salad"></base-svg>
                                            <div class="menu-card__name">
                                                <p class="menu-card-title">Салаты</p>
                                                <p class="menu-card-desc">Свежие овощи и прекрасная заправка</p>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-3">
                                    <nuxt-link to="/">
                                        <div class="menu-card">
                                            <base-svg name="pie"></base-svg>
                                            <div class="menu-card__name">
                                                <p class="menu-card-title">Десерты</p>
                                                <p class="menu-card-desc">Сладкие ингридиенты</p>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu dishes">
                        <h1>Популярные блюда</h1>
                        <div class="row">
                            <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                                <div class="menu__desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi laborum animi?
                                    Ducimus officiis totam eligendi illo molestiae nam cum.</p>
                                </div>
                            </div>
                            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                <div class="menu__btn">
                                    <div class="btn btn-gradient">
                                        <span>Случайный рецепт</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-top: 120px;
    width: 100%;
    height: 100vh;

    .menu {
        &__desc {
            display: flex;
            align-items: center;
            height: 100%;
        }
        &__btn {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
        }
        &__buttons {
            display: flex;
            flex-direction: column;
            margin-top: 50px;
        }
        &-card {
            box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
            border-radius: 10px;
            padding: 20px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            height: 100%;

            .svg {
                width: 67px;

                :deep() svg {
                    fill: $base-gradient;
                }
            }
            &__name {
                display: flex;
                flex-direction: column;
                margin-left: 20px;

                p {
                    margin-top: 0;
                }
            }
            &-title {
                color: $color-2;
                font-weight: 600;
            }
            &-desc {
                font-size: 16px;
                line-height: 20px;
                font-weight: 400;
            }
        }
    }
    .dishes {
        margin-top: 100px;
    }
}
</style>