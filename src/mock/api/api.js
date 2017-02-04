import Vue from 'vue'
import {API_ROOT} from 'src/config/constants'
import {map as mockMap} from './maps/map';

const getMocker = (path) => {
    mockMap.find((mock) => {
        let reg = new RegExp(mock.pattern, mock.flags);
        return reg.exec(path);
    })
}

Vue.http.interceptors.push((request, next) => {
    console.log(request);
    console.log("Mock Intercept");
    var url = request.getUrl()
    var path = url.replace(API_ROOT, '')
    var mock = getMocker(path);

    if (mock.data()) {
        next(request.respondWith(mock.data(), mock.status() ))
    }
    next(request.respondWith({}, {
        status: 404,
        statusText: 'Not found'
    } ))


})
