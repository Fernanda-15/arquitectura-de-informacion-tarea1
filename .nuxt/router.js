import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bf201892 = () => interopDefault(import('..\\pages\\deportes\\list.vue' /* webpackChunkName: "pages/deportes/list" */))
const _03c44b3a = () => interopDefault(import('..\\pages\\economia\\list.vue' /* webpackChunkName: "pages/economia/list" */))
const _ccdb7950 = () => interopDefault(import('..\\pages\\sucesos\\list.vue' /* webpackChunkName: "pages/sucesos/list" */))
const _29c343f9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _f1673c7e = () => interopDefault(import('..\\pages\\deportes\\_slug.vue' /* webpackChunkName: "pages/deportes/_slug" */))
const _e2fa0ac4 = () => interopDefault(import('..\\pages\\economia\\_slug.vue' /* webpackChunkName: "pages/economia/_slug" */))
const _9b17f380 = () => interopDefault(import('..\\pages\\sucesos\\_slug.vue' /* webpackChunkName: "pages/sucesos/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/deportes/list",
    component: _bf201892,
    name: "deportes-list"
  }, {
    path: "/economia/list",
    component: _03c44b3a,
    name: "economia-list"
  }, {
    path: "/sucesos/list",
    component: _ccdb7950,
    name: "sucesos-list"
  }, {
    path: "/",
    component: _29c343f9,
    name: "index"
  }, {
    path: "/deportes/:slug?",
    component: _f1673c7e,
    name: "deportes-slug"
  }, {
    path: "/economia/:slug?",
    component: _e2fa0ac4,
    name: "economia-slug"
  }, {
    path: "/sucesos/:slug?",
    component: _9b17f380,
    name: "sucesos-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
