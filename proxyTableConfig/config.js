/*
* 项目地址的配置
* */

//项目域名地址
const url = 'https://example.com'

let ROOT      //在开发环境指向代理地址，在生产环境指向真实的域名
//由于封装的axios请求中，会将ROOT打包进去，为了方便之后不再更改，判断了当前环境，而生成的不同的ROOT
if (process.env.NODE_ENV === 'development') {
    //开发环境下的代理地址，解决本地跨域跨域，配置在config目录下的index.js dev.proxyTable中
    ROOT = "/apis"
} else {
    //生产环境下的地址
    ROOT = url
}

exports.PROXYROOT = url    //真实的请求地址
exports.ROOT = ROOT        //ajax请求的地址，开发环境下为代理地址，生产环境下为真实的请求域名