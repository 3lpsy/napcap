import Resource from './classes/resource';
import Api from './classes/api';
import Route from './classes/route';

let napcap = {
    api: function(...args) {
        return new Api(...args)
    },
    resource: function(...args) {
        return new Resource(...args)
    },
    route: function(...args) {
        return new Route(...args)
    }
};

export default napcap
