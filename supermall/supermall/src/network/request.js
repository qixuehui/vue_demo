//axios的封装
import axios from 'axios'
//实例
// 项目最后其实就是只需要一个实例
export function request(config) {
    //1创建
    const instance = axios.create({
            baseURl: 'http://123.207.32.32:8000', //'http://123.207.32.32:8000',
            timeout: 5000
        })
        //2拦截

    instance.interceptors.request.use((config) => {
        //处理客户端请求成功信息
        console.log('来到了request拦截success中');
        return config
    }, (err) => {
        //处理客户端请求错误信息
        // console.log(err);
        console.log('来到了request拦截failure中');
        return err
    })
    instance.interceptors.response.use((res) => {
            //处理服务端响应成功信息
            console.log('来到了response拦截success中');
            return res.data
        }, (err) => {
            //处理服务端响应错误信息
            // console.log(err);
            console.log('来到了response拦截failure中');
            if (err && err.response) {
                switch (err.response.status) {
                    case 400:
                        err.message = '请求错误'
                        break
                    case 401:
                        err.message = '未授权的访问'
                        break
                }
            }
            return err
        })
        //3发送真正的网络请求
    return instance(config)
}