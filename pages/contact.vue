<template>
    <section>
        <items-breadcrumbs :crumbs="crumbs" />
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="about">
                        <h1>Связаться со мной</h1>
                        <div class="buttons">
                            <div class="row">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-3">
                                    <items-menu-card :title="`Номер телефона`" :desc="`+7 (926) 527-68-96`" :svg="`phone`" :path="`about`" />
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-3">
                                    <items-menu-card :title="`Почта`" :desc="`vasil792@mail.ru`" :svg="`envelope-dot`" :path="`about`" />
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-3">
                                    <items-menu-card :title="`Telegram`" :desc="`@vasilchef`" :svg="`telegram`" :path="`about`" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <keep-alive>
                        <form class="contact">
                            <h3>Обратная связь</h3>
                            <p>Заполните контактную форму и я свяжусь с Вами в скором времени!</p>
                            <div class="contact__form row">
                                <div class="col-xxl-6 col-xl-6 col-lg-5 col-md-5 mb-3">
                                    <input type="email" placeholder="E-mail" class="mb-3">
                                    <input type="name" placeholder="Имя">
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 mb-3">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Сообщение"></textarea>
                                </div>
                            </div>
                            <button class="btn btn-primary">
                                <span>Отправить</span>
                            </button>
                        </form>
                    </keep-alive>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        // console.log(this.$route)
        return {
            crumbs: [
                {
                    title: "Контакты",
                    to: '/contact'
                },
            ],
        };
    },
}
</script>

<style lang="scss" scoped>
    section {
        margin-top: 120px;

        h1 {
            margin-top: 30px;
        }
    }

    .buttons {
        margin: 30px 0;
    }
    .btn {
        width: auto;
        width: 200px;
        outline: none;
        border: 0;
    }
    .contact {
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;

        &:hover {
            box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.15);
        }
        p {
            margin-bottom: 32px;
        }
        &__form {
            display: flex;
            flex-direction: row;
            
            input {
                width: 100%;
                background-color: $color-10;
                font-size: 16px;
                font-weight: 400;
                padding: 10px 15px;
                transition: all .3s;
                border: 1px solid transparent;
                border-radius: 10px;

                &:focus {
                    // border: 1px solid $green-color;
                    outline: none;
                }
                &:active {
                    // border: 1px solid $green-color;
                }
            }
            textarea {
                width: 100%;
                max-width: 100%;
                min-width: 100%;
                background-color: $color-10;
                font-size: 16px;
                font-weight: 400;
                padding: 10px 15px;
                transition: all .3s;
                border: 1px solid transparent;
                border-radius: 10px;
            }
        }
    }
</style>