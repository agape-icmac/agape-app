<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols="12"
            >
                <h3 class="title text-uppercase">Gestão de Discipulo</h3>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <v-card
                    class="mx-auto book-card"
                    color="orange"
                >
                    <v-card-title>
                        <span>Ativo</span>
                    </v-card-title>

                    <v-card-text>
                        <span>Buscar membros ativos</span>
                    </v-card-text>

                    <v-card-actions>
                        <forward-navigation-button :url="entryPageUrl" />
                        <v-btn
                            text
                            small
                            color="primary"
                        >
                            Buscar ativos
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <v-card
                    class="mx-auto book-card"
                    color="green"
                >
                    <v-card-title>
                        <span>Afastados</span>
                    </v-card-title>

                    <v-card-text>
                        <span>Buscar membros afastados</span>
                    </v-card-text>

                    <v-card-actions>
                        <forward-navigation-button :url="entryPageUrl" />
                        <v-btn
                            text
                            small
                            color="primary"
                        >
                            Buscar afastados
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <v-card
                    class="mx-auto book-card"
                    color="blue"
                >
                    <v-card-title>
                        <span>Todos</span>
                    </v-card-title>

                    <v-card-text>
                        <span>Buscar todos os membros da igreja</span>
                    </v-card-text>

                    <v-card-actions>
                        <forward-navigation-button :url="entryPageUrl" />
                        <v-btn
                            text
                            small
                            color="primary"
                        >
                            Buscar todos
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <v-card
                    class="mx-auto book-card"
                    color="yellow"
                >
                    <v-card-title>
                        <span>Novo discipulo</span>
                    </v-card-title>

                    <v-card-text>
                        <span>Buscar todos os membros da igreja</span>
                    </v-card-text>

                    <v-card-actions>
                        <forward-navigation-button :url="entryPageUrl" />
                        <discipulo-modal />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import DiscipuloModal from './DiscipuloModal.vue';

    export default {
        name: 'DiscipuloPage',
        components: { DiscipuloModal },
    };
</script>

<style scoped>

</style>
