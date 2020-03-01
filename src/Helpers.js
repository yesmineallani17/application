export const ApiUrl = 'https://apitndati.com/v003/public/';

const TOKEN = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZlYjJjZGRhYzM1ODgyMGJiYTU2YmQ4MTcwMzRiYmVmMzUxZjhhYTgyMjU1MTM2ZTJlNTMyYjdiZmM0ZmYyMTZhNjZiZDM2NWY2NjZmOTY4In0.eyJhdWQiOiIyIiwianRpIjoiZmViMmNkZGFjMzU4ODIwYmJhNTZiZDgxNzAzNGJiZWYzNTFmOGFhODIyNTUxMzZlMmU1MzJiN2JmYzRmZjIxNmE2NmJkMzY1ZjY2NmY5NjgiLCJpYXQiOjE1ODI5MTgxMDksIm5iZiI6MTU4MjkxODEwOSwiZXhwIjoxNjE0NTQwNTA5LCJzdWIiOiI1NSIsInNjb3BlcyI6WyIqIl19.El5_uU_YLpUwiIjeCngGjaHM2NRR-iaylrWbVQ2AhuJKNQONC-3SvZH16J2W_Tmb5eY00SKV-ow4rSQAONOsS9ojcu3QeIEKeJCdVrAS5qERvnXyjEdN0pQ7OCp7USAI9xJPeWY53Rp6ap15Jc0cKgaEzysLYt3bNCpMoOBIdlMn2OcrYyJPTLpM3GKsm37dApqB-8DpL4-3AoRHBnsh3EMydqWiORP8m1fUSD1XdXXG_SClNWaF63HW2nMmv9jGJePTq8ih4jttx2SUBJFUOrwl7JsCSYgpgNzfrH1xR4BGbPcK2ezAiCsPjkSEDnWOKdXzn7pfNG6_09DchG64lbeBrr6xJhkPZ82dSOxu6Jj7k-SR_qd76YO5j-G-6A8HtpFuZQmJlpqmq1fiaM9fzzdW8ACzBbwd1YMpnOudnkVQ9G_7awNqk2tOUd64yjHnu58uCvS89DcfuPd8GGgmmQfWpEpYBQfBY3VI_SQPxVm3iE94kFxWuuYe3v4G5sY_3B_u9Th1JBF2zJejGNqLSO6nxdu1lq0a54GPkKGtxiEbNMw0luka0PDFb_p7ZFGwMbzvUtAPmtLBqI3iAv_FcxjBR9HpKm0GWlk-DuVU5uM54Om_waEq-e2D8r3PkMRVc23Tbb60TRuokxy4F3LC4jVWi2F-axxq-H-0MKxmfHY`;
export async function callApi(path, body = {}, method = 'GET') {
  // let token = JSON.parse(localStorage.getItem('user')).access_token || '';
  // let rtoken = JSON.parse(localStorage.getItem('user')).refresh_token || '';
  return fetch(`${ApiUrl}${path}${convertToQuery(body)}`, {
    method,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: TOKEN,
      Accept: '*/*',
    },
  })
    .then((val) => val.json())
    .catch((error) => {
      return {
        error,
      };
    });
}

export async function callApiWithBody(path, body = {}, method = 'POST') {
  // let token = JSON.parse(localStorage.getItem('user')).access_token || '';
  // let rtoken = JSON.parse(localStorage.getItem('user')).refresh_token || '';
  return fetch(`${ApiUrl}${path}`, {
    method,
    headers: {
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
      Authorization: TOKEN,
    },
    body: body,
  })
    .then((val) => val.json())
    .catch((error) => {
      console.log(error, path);
      return {
        error,
      };
    });
}
export function convertToQuery(obj) {
  return (
    '?' +
    Object.keys(obj)
      .map((x) => `${encodeURIComponent(x)}=${encodeURIComponent(obj[x])}`)
      .join('&')
  );
}
