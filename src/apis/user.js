/*
 * @Author: 15880092883 3450421797@qq.com
 * Date: 2023-07-15 10:18:52:07
 * @LastEditors: 15880092883 XXXXXXXXXXXXXXXXX
 * @LastEditTime: 
 * @FilePath: \bosssoft-train-quick-start-frontend-demo-FZU-gaofan\src\util\request.js
 * @Description:这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
*/

import request from '@/utils/request';

/**
 * 调用后端接口增加用户
 * @param {*} userDTD
*/
export function add(userDTD) {
    return request({
        url: '/user',
        method: 'post',
        data: userDTD
    });
}

/**
 * 调用后端接口更用户
 * @param {*} userDTD
*/
export function update(userDTD) {
    return request({
        url: '/user',
        method: 'put',
        data: userDTD
    });
}

/**
 * 调用后端接口根据id查询获得用户
 * @param {*} userDTD
*/
export function findById(id) {
    return request({
        url: '/user/' + id,
        method: 'get'
    });
}

/**
 * 查询用户信息
 * @param {*} userQuery
*/
export function search(userQuery) {
    return request({
        url: '/user',
        method: 'get',
        data: userQuery
    });
}
/**
 * 查询用户信息
 * @param id 当前行的id
 * @param version 当前版本
*/
export function remove(id, version) {
    return request({
        url: '/optimism/user',
        method: 'delete',
        params: { id: id, version: version }
    });
}

/**
 * 查询用户信息
 * @param id 当前行的id
 * @param version 当前版本
*/
export function batchRemove(id, version) {
    return request({
        url: '/batch/user',
        method: 'delete',
        data: { id: id, version: version }
    });
}