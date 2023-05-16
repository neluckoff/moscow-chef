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
                                    <a href="tel:89265276896">
                                        <items-menu-card :title="`Номер телефона`" :desc="`+7 (926) 527-68-96`" :svg="`phone`" :path="`about`" />
                                    </a>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-3">
                                    <a href="mailto:vasil792@mail.ru">
                                        <items-menu-card :title="`Почта`" :desc="`vasil792@mail.ru`" :svg="`envelope-dot`" :path="`about`" />
                                    </a>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-3">
                                    <a href="https://t.me/vasilchef" target="_blank">
                                        <items-menu-card :title="`Telegram`" :desc="`@vasilchef`" :svg="`telegram`" :path="`about`" />
                                    </a>
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
                                    <input type="text" id="name" name="name" placeholder="Имя">
                                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-7 mb-3">
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Сообщение"></textarea>
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
        transition: all .3s;

        &:hover {
            box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.15);
        }
        p {
            margin-bottom: 32px;
        }
        &__form {
            display: flex;
            flex-direction: row;
        }
    }
</style>