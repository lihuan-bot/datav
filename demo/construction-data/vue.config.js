module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  devServer: {
    hotOnly: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/weather': {
        target: 'https://www.toutiao.com/stream/widget/local_weather/data/?city=%E4%B8%8A%E6%B5%B7',
        changeOrigin: true,
        pathRewrite: {
          '^/weather': '/'
        },
        secure: false
      },
      '/api': {
        target: process.env.NODE_ENV === 'production' ? '/api/' : 'http://101.132.169.245:8071/public-gateway/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
