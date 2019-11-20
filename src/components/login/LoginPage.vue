<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col
                cols="12"
                md="4"
                lg="3"
                class="text-center"
            >
                <h6 class="display-1 text-uppercase pb-8">Agape - Login</h6>

                <v-text-field
                    v-model="userId"
                    label="Usuário"
                />

                <v-text-field
                    v-model="token"
                    label="Senha"
                />

                <v-btn
                    depressed
                    dark
                    block
                    color="primary"
                    class="mb-2"
                    @click="login"
                >
                    Login
                </v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                userId: '108012498928503515626',
                token: 'AIzaSyAslcPe9rscHhpwtTi0kqbKmQkvfdvlAMw',
            };
        },
        methods: {
            login() {
                if (this.userId && this.token) {
                    this.$store.commit('setAuthToken', this.token);
                    this.$store.commit('setUserId', this.userId);
                    this.$router.push('/dashboard');
                } else {
                    this.$store.commit('showErrorMessage', 'Você deve informar um ID de Usuário e um Token');
                }
            },
            loginAsGuest() {
                this.$store.commit('setLogged', true);
                this.$router.push('/dashboard');
            },
        },
    };
</script>

<style scoped>

</style>
