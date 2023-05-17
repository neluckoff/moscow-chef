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
                                        <items-menu-card :title="`Основные блюда`" :desc="`Горячие блюда`" :svg="`steak`" />
                                    </nuxt-link>
                                </div>
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-3">
                                    <nuxt-link to="/">
                                        <items-menu-card :title="`Супы`" :desc="`Горячие блюда, залитые бульеном`" :svg="`bowl-hot`" />
                                    </nuxt-link>
                                </div>
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-3">
                                    <nuxt-link to="/">
                                        <items-menu-card :title="`Салаты`" :desc="`Свежие овощи и прекрасная заправка`" :svg="`salad`" />
                                    </nuxt-link>
                                </div>
                                <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-3">
                                    <nuxt-link to="/">
                                        <items-menu-card :title="`Десерты`" :desc="`Сладкие ингридиенты`" :svg="`pie`" />
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
                        <div class="row row-flex">
				            <div class="col-xxl-12">
                                <items-carusel />
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
    overflow: hidden;

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
    }
    .dishes {
        margin-top: 100px;
    }
}
</style>