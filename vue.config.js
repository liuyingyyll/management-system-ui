module.exports = {
    outputDir: '../public'
    , devServer: { proxy: { '/demo': { target: 'http://localhost:8081', changeOrigin: true, ws: true, pathRewrite: { '^/demo':  '/demo', } } }
    }
  }