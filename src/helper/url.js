const url = "https://m.me/100010586863647?source=qr_link_share&";

function encodeData(data) {
    return Object.keys(data).map(function(key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
}  

export default function MessengerLink(message){
    let params = {text: message};
    return url + encodeData(params);
}