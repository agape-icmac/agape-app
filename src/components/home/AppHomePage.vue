<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols="12"
            >
                <h3 class="title text-uppercase">Indicadores - Dashboard</h3>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <v-card
                    class="mx-auto"
                    color="green"
                >
                    <v-card-title>
                        <span>Discipulos</span>
                    </v-card-title>

                    <v-card-text>
                        <span class="justify-center text-center">Quantidade de discipulos</span>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <v-card
                    class="mx-auto"
                    color="blue"
                >
                    <v-card-title>
                        <span>Caixa</span>
                    </v-card-title>

                    <v-card-text>
                        <span class="justify-center text-center">Quantidade de discipulos</span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'AppHomePage',
    };
</script>

<style scoped>

</style>
