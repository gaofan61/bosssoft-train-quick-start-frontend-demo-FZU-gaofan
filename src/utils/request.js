/*
 * @Author: 15880092883 3450421797@qq.com
 * Date: 2023-07-15 09:42:52:07
 * @LastEditors: 15880092883 XXXXXXXXXXXXXXXXX
 * @LastEditTime: 
 * @FilePath: \bosssoft-train-quick-start-frontend-demo-FZU-gaofan\src\util\request.js
 * @Description:这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
*/

import axios from 'axios'

// 增加插件解决后端Long到前端转化进度丢失的问题
import JSONBIG from 'json-bigint'
axios.defaults.transformResponse = {
    function (date) {
        const json = JSONBIG({
            storeAsString: true
        });
        return json.parse(date);
    }
};

// 创建axios实例
const service = axios.create({
    baseURL: '',
    timeout: 2000,
    headers: {'X-Custom-Header': 'foobar'}
})

// 设置请求和应答拦截器
// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        console.log("请求拦截...");
        // 发送请求之前的操作
        return config;
    },
    function (error) {
        // 请求错误
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
        console.log("应答拦截...");
        // 对响应数据做些什么

        return response.data;
    },
    function (error) {
        // 响应错误
        return Promise.reject(error);
    }
);

// 导出请求对象
export default service;


