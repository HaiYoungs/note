import Vue from 'vue'
import VueRouter from 'vue-router'
import NoteList from '@/views/NoteList'
import NoteDetail from '@/views/NoteDetail'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'List',
    component: NoteList
  },
  {
    path: '/detail',
    name: 'Detail',
    component: NoteDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
