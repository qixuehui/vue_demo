//axios的封装
import axios from 'axios'
//实例
// 项目最后其实就是只需要一个实例
export function request(config) {
    //1创建
    const instance = axios.create({
            baseURl: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        //2拦截

    instance.interceptors.request.use((config) => {
        //处理客户端请求成功信息
        return config
    }, (err) => {
        //处理客户端请求错误信息
        // console.log(err);
        return err
    })
    instance.interceptors.response.use((res) => {
            //处理服务端响应成功信息
            return res.data
        }, (err) => {
            //处理服务端响应错误信息
            // console.log(err);
            return err
        })
        //3发送真正的网络请求
    return instance(config)
}