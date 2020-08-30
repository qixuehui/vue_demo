module.exports = {
    configureWebpack: {
        //路径相关的配置
        resolve: {
            //扩展名
            extensions: [],
            //别名
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'content': 'components/content',
                'common': 'components/common',
                'network': '@/network',
                'router': '@/router',
                'store': '@/store',
                'views': '@/views',
            }
        }
    }
}