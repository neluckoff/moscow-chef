export default ({ app }, inject) => {
    inject('serialize', serialize)
}

function serialize(obj = null, exclude = Array, clear = false) {
    var str = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            for (let index = 0; index < exclude.length; index++) {
                if (p !== exclude[index]) {
                    if (clear) {
                        if (obj[p] !== null) {
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        }
                    } else {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                }
            }
        }
    }
    return str.join("&");
}