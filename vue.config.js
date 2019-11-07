module.exports = {
    // npm run build 打包编译后输出的目录
    outputDir: 'system',
    // 打包输出静态资源放置目录
    assetsDir: 'static',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/style/_variable.scss";@import "@/style/common.scss";` // 导入scss全局变量
            }
        }
    },
    devServer: {
        // 配置代理，解决跨域问题
        proxy: {
            '/api': {
                target: 'http://192.168.5.46:40010',
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        }
    }
};
