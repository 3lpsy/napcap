import Resource from './classes/resource';
import Api from './classes/api';

let napcap = {
    api: function(args) {
        return new Api(args)
    },
    resource: function(args) {
        return new Resource(args)
    },
};

export default napcap
