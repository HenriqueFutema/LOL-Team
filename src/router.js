import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Players from './views/Players.vue'
import Team from './views/Team.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/signup',
            name: 'signup',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/SignUp.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/teams',
            name: 'teams',
            component: Team
        },
        {
            path: '/Players',
            name: 'players',
            component: Players
        }
    ]
})