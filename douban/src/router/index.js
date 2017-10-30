import Vue from 'vue'
import Router from 'vue-router'

import page from '../components/page/Page'
import book from '../components/book/Book'
import group from '../components/group/Group'
import list from '../components/list/List'
import movie from '../components/movie/Movie'
import search from '../components/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/page', name: 'Page', component: page},
    {path: '/book', name: 'Book', component: book},
    {path: '/group', name: 'Group', component: group},
    {path: '/list', name: 'List', component: list},
    {path: '/movie', name: 'Movie', component: movie},
    {path: '/search', name: 'Search', component: search}
  ]
})
