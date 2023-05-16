<template>
    <section class="about-me" id="about-me">
        <div class="container">
            <div class="row">
                <div class="col-xxl-5 col-xl-5 col-lg-5">
                    <div class="person">
                        <img class="person__chef" src="person2.png" alt="">
                        <div class="person__ages">
                            <div class="person__ages-block">
                                <h2>14</h2>
                                <span>лет стажа</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-7">
                    <div class="about">
                        <h1>Обо мне</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit blanditiis non ut, quisquam beatae debitis veniam iure dignissimos nulla quia quos sit, ullam voluptatum neque modi tempora. Inventore aliquid repudiandae aut mollitia quis maxime? Nesciunt esse facere maxime repudiandae, perferendis sunt non dignissimos rem voluptate eum quaerat molestias corporis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reprehenderit blanditiis non ut, quisquam beatae debitis veniam iure dignissimos nulla quia quos sit, ullam voluptatum neque modi tempora. Inventore aliquid repudiandae aut mollitia quis maxime? Nesciunt esse facere maxime repudiandae, perferendis sunt non dignissimos rem voluptate eum quaerat molestias corporis.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin-top: 100px;
    width: 100%;

    .person {
        width: 100%;
        position: relative;

        &__chef {
            // max-height: 80%;
            max-width: 75%;
        }
        &__ages {
            background-color: $color-1;
            border-radius: 12px;
            box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
            padding: 15px;
            position: absolute;
            bottom: -30px;
            right: 60px;

            &-block {
                padding: 15px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 2px dashed $color-5;
                border-radius: 12px;

                h2 {
                    font-weight: 800;
                    font-size: 84px;
                    color: $color-3;
					background: $base-gradient;
					background-clip: text;
  					-webkit-text-fill-color: transparent;
                }
                span {
                    font-weight: 500;
                    font-size: 20px;
                    color: $color-2;
                }
            }
        }
    }
}
@media screen and (max-width: $screen-xl) {
    section {
        margin-top: 0;
        .person {
            &__chef {
                max-width: 80%;
                max-height: 90%;
            }
            &__ages {
                right: 0;
                padding: 15px;

                &-block {
                    padding: 15px;

                    h2 {
                        font-size: 62px;
                    }
                    span {
                        font-size: 14px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1399px) {
    section {
        .person {
            &__ages {
                right: 50px;
                padding: 15px;
            }
        }
    }
}
</style>