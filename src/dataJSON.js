


const getData = () => {
    var myRequest = new Request('json.json');
    return fetch(myRequest)
    .then((res) => (res.json()))
     }

export default getData;

