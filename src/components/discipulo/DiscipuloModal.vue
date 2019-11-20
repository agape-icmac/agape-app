<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                >
                    Adicionar
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Adicionar novo Discipulo</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                    label="Nome completo*"
                                    required
                                />
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-select
                                    :items="['Masculino', 'Feminino' ]"
                                    label="Sexo*"
                                    required
                                />
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                    label="Profissão*"
                                    required
                                />
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                    label="CPF*"
                                    required
                                />
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-select
                                    :items="['Ativo', 'Afastado']"
                                    label="Situação*"
                                    required
                                />
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>Campos obrigatórios</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Fechar
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        name: 'DiscipuloModal',
        data() {
            return {
                dialog: false,
            };
        },
    };
</script>

<style scoped>

</style>
