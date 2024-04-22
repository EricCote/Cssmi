// An example implementation.
// You can implemnet in your own way.
// Credit: https://blog.logrocket.com/data-fetching-react-suspense/

export function fetchData(url) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res);
  return wrapPromise(promise);
}

function wrapPromise(promise) {
  let status = 'pending';
  let response;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read };
}
