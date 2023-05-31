<template>
    <section>
        <items-breadcrumbs :crumbs="crumbs" />
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <h1>{{ recept.name }}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-12">
                    <img v-if="recept.image" :src="recept.image" :alt="recept.name">
                    <img v-else src="~/static/no-image.png" alt="">
                </div>
                <div class="col-xxl-6 col-xl-5 col-lg-4 col-md-12">
                    <h3>Ингредиенты</h3>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-xxl-12">
                    <h3 class="recept-section">Описание</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus illum ad pariatur. Id accusantium sed voluptatum ipsum iusto dolores autem nihil facere similique molestias mollitia nostrum eius repellat aspernatur nesciunt voluptas veritatis harum corporis obcaecati cupiditate officiis vel, eum perspiciatis! Quis, eum nesciunt, accusantium corporis numquam excepturi alias libero sit itaque cumque ea rerum quae iure voluptate adipisci nulla illum esse necessitatibus eveniet hic voluptatum dolores fugiat sed. Doloribus molestiae ducimus sapiente nihil, dolorum dolore temporibus quod earum minima saepe, numquam et dignissimos impedit vitae? Sunt architecto odio veritatis qui modi placeat fugit delectus, cupiditate laboriosam eum porro nemo quis quam esse quod provident mollitia officiis praesentium aperiam odit recusandae. Voluptates dolorum maxime nisi praesentium, harum beatae quasi sed.</p>
                </div>
                <div class="col-xxl-12">
                    <h3 class="recept-section">Рецепт</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, totam praesentium a corrupti placeat, culpa soluta molestiae eius optio in quasi consequuntur exercitationem perferendis perspiciatis molestias adipisci reprehenderit quae necessitatibus, esse repellat facilis quidem. Eveniet consequatur veritatis minus fuga a, qui sequi modi nihil architecto consectetur rem iste amet enim officia magnam culpa autem. Quibusdam modi eius officia facilis magni iste nesciunt ut laborum a? Optio dignissimos sit ducimus dolore commodi perspiciatis velit delectus inventore consequatur cumque, maiores repudiandae eos architecto ullam quod ad voluptate dicta placeat dolorum nemo rerum provident eaque nisi! Magni quidem aspernatur expedita mollitia porro voluptates.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        margin: 120px 0;
        // height: 100vh;

        h1 {
            margin: 30px 0 20px 0;
        }
        img {
            width: 80%;
            height: auto;
            object-fit: cover;
            transition: 1s;
            border-radius: 20px;
        }
        .recept-section {
            margin-top: 20px;
        }
    }

    @media screen and (max-width: $screen-lg) {
        section {
            margin: 90px;

            h1 {
                margin: 0;
            }
            img {
                width: 100%;
            }
            .recept-section {
                margin-top: 0;
            }
            h3 {
                margin: 20px 0;
            }
        }
        
    }
</style>

<script>
export default {
    data() {
        return {
            crumbs: [
                {
                    title: "Книга рецептов",
                    to: '/recepts'
                },
                {
                    title: "Name",
                    to: '/id'
                },
            ],
            recept: {
                name: 'Название',
                image:  ''
            }
        };
    },
}
</script>