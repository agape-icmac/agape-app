import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/login/LoginPage.vue';
import BookListPage from './components/book/BookListPage.vue';
import BookEntryPage from './components/book/BookEntryPage.vue';
import LibraryListpage from './components/library/LibraryListPage.vue';
import LibraryEntryPage from './components/library/LibraryEntryPage.vue';
import AppHomePage from './components/home/AppHomePage.vue';
import DiscipuloPage from './components/discipulo/DiscipuloPage.vue';

Vue.use(Router);

const routes = [
    { path: '/', name: 'login', component: LoginPage },
    { path: '/dashboard', name: 'dashboardPage', component: AppHomePage },
    { path: '/discipulo', name: 'discipuloList', component: DiscipuloPage },
    { path: '/book', name: 'book', component: BookListPage },
    { path: '/book/:id', name: 'bookEntry', component: BookEntryPage },
    { path: '/library', name: 'libraryList', component: LibraryListpage },
    { path: '/library/:id', name: 'libraryEntry', component: LibraryEntryPage },
];

export default new Router({
    routes,
});
