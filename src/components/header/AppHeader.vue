<template>
    <v-app-bar
        app
        dark
        flat
        color="primary"
    >
        <v-toolbar-title>Agape - Igreja Automatizada</v-toolbar-title>

        <v-spacer />
        <v-toolbar-items v-if="$store.state.logged">
            <v-btn
                text
                @click="goToHome"
            >
                Inicio
            </v-btn>
            <v-btn
                text
                @click="goToBookList"
            >
                Discipulos
            </v-btn>
            <v-btn
                v-if="$store.state.authToken"
                text
                @click="goToCollection"
            >
                Financeiro
            </v-btn>
            <v-btn
                text
                @click="logout"
            >
                Sair
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppHeader',
        methods: {
            goToHome() {
                this.$router.push('/dashboard');
            },
            goToBookList() {
                this.$router.push('/discipulo');
            },
            goToCollection() {
                this.$router.push('/library');
            },
            logout() {
                this.$store.commit('setAuthToken', '');
                this.$store.commit('setUserId', '');
                this.$router.push('/');
            },
        },
    };
</script>

<style scoped>

</style>
