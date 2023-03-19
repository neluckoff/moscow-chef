<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                    <div class="infos">
                        <h1>Сделаем каждый <br/>прием пищи<br/> красивым!</h1>
                        <p>Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
                    </div>
                    <div class="buttons">
                        <nuxt-link to="">
                            <div class="btn btn-primary">
                                <span>Книга рецептов</span>
                            </div>
                        </nuxt-link>
                        <nuxt-link to="">
                            <div class="btn btn-secondary">
                                <span>Связаться со мной</span>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                    <div class="person">
                        <img class="person__kitchen" src="kitchen.png" alt="">
                        <img class="person__chef" src="person.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-image: url("./static/main.png");
    background-size: cover;
    // background-position: center center;
    height: 100vh;
    width: 100%;
    .container {
        padding-top: 100px;
        height: 100%;
    }
    .infos {
        display: flex;
        flex-direction: column;
        margin-top: 200px;
    }
    .buttons {
        margin-top: 40px;
    }
    .person {
        margin-top: 40px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;

        &__kitchen {
            position: relative;
            max-height: 90%;
            max-width: auto;
        }
        &__chef {
            position: absolute;
            max-height: 95%;
            max-width: auto;
            top: 0;
            right: 0;
        }
    }
}

@media screen and (max-width: $screen-xl) {
    section {
        .infos {
            margin-top: 100px;
        }
        .person {
            &__kitchen {
                max-height: 70%;
            }
            &__chef {
                max-height: 75%;
            }
        }
    }
    
}

@media screen and (max-width: $screen-lg) {
    section {
        .person {
            display: none;
        }
    }
    
}
</style>