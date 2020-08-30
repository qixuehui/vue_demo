//axios的封装
import axios from 'axios'
//实例
export function request(config) {
    //1创建
    const instance = axios.create({
            baseURl: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        //2拦截
    instance.interceptors.request.ues((config) => {
        //处理客户端请求成功信息
        return config
    }, (err) => {
        //处理客户端请求错误信息
        console.log(err);
        return err
    })
    instance.interceptors.response, ues((res) => {
            //处理服务端响应成功信息
            return res
        }, (err) => {
            //处理服务端响应错误信息
            console.log(err);
            return err
        })
        //3发送真正的网络请求
    return instance(config)
}
//使用
// request({
//     url: 'xxxx'
// }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })