module.exports = {
    // devServer: {
    //     port: 8080,
    //     open: false,
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:3000',
    //             pathRewrite: {'^/api': '' },
    //             secure: false,
    //             changeOrigin: true
    //         }
    //     }

    // }
        publicPath: process.env.NODE_ENV === 'production'
          ? '/Project_Store/web-store/'
          : '/'
      
}