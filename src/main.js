import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'},
        { path: '/teams', name: 'teams', components: {
         default: TeamsList,
         footer: TeamsFooter
        }, children: [
            { path: ':teamId', name: 'team-members', component: TeamMembers, props: true },
        ] }, // our-domain.com/teams => TeamsList
        { path: '/users', components: {
            default: UsersList,
            footer: UserFooter
         }
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);

        if(savedPosition) {
            return savedPosition;
        }
        return {
            left: 0, 
            top: 0
        };
    }
});

const app = createApp(App);

app.use(router);
app.mount('#app');
