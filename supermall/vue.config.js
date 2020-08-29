module.exports = {
    configureWebpack: {
        //路径相关的配置
        resolve: {
            //扩展名
            extensions: [],
            //别名
            alias: {
                'components': '@/components',
                'content': 'components/content',
                'common': 'components/common',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}