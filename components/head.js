import NextHead from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import Index from '../pages/verein'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default Index