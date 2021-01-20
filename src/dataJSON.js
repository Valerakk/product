const getData = () => {
  var myRequest = new Request("books.json");
  return fetch(myRequest).then((res) => res.json());
};

export default getData;
