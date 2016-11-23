const Welcome = r => {
  NProgress.start()
  require.ensure([], () => {
    NProgress.done()
    r(require('../pages/Welcome.vue'))
  }, 'welcome')
}

const BaseView = r => {
  require.ensure([], () => {
    r(require('../components/BaseView.vue'))
  }, 'base-view')
}

const Home = r => {
  require.ensure([], () => {
    r(require('../pages/Home.vue'))
  }, 'home')
}

const Search = r => {
  require.ensure([], () => {
    r(require('../pages/Search.vue'))
  }, 'seach')
}

const Me = r => {
  require.ensure([], () => {
    r(require('../pages/Me.vue'))
  }, 'me')
}


export default [
  {
    path: '/',
    redirect: '/welcome'
  }, 
  {
    path: '/welcome',
    component: Welcome,
    name: 'welcome'
  }, 
  {
    path: '/home',
    component: BaseView,
    name: 'home'
  },
  {
    path: '/search',
    component: BaseView,
    name: 'search'
  },
  {
    path: '/me',
    component: BaseView,
    name: 'me'
  }
]