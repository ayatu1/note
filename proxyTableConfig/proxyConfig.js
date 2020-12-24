const config = require("./config")

module.exports = {
    proxy: {
        [config.ROOT]: {    //将www.example.com印射为/apis
            target: config.PROXYROOT,  // 真实接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                [`^${config.ROOT}`]: ''   //需要rewrite的
            },
            cookieDomainRewrite: {
                'www.example.com': '127.0.0.1'   //把www.example.com的cookie都配置到127.0.0.1上
            }
        }
    }
}