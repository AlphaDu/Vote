export default {
  _getDataFromUrl(url) {
    return Promise.race([
      new Promise((res, rej) => {
        setTimeout(() => rej('通讯超时'), overTime);
      }),
      new Promise((res, rej) => {
        fetch(url)
          .then(response => {
            if (response.status == 200) response.json();
            reject('ERROR! HTTP' + response.status);
          })
          .then(data => {
            if (data){
              resolve(data);
            } else {
              resject('数据格式错误，解析失败。');
            }
          })
          .catch(error => {
            reject('网络错误！');
          });
      })
    ]);
  },
  _postDataToUrl(url, form){
    let data=new FormData();
    data.append("json", JSON.stringify(form));
    return Promise.race([
      new Promise((res, rej) => {
        setTimeout(() => rej('通讯超时'), overTime);
      }),
      new Promise((res, rej) => {
        fetch(URL, {
          method: "POST",
          headers: {
            'Accept': 'application/json'
          },
          body: data
        }).then(response => {
          if (response.status == 200) return response.json();
          reject('ERROR! HTTP' + response.status);
        }).then(responseData => {
          if (responseData){
            resolve(responseData);
          } else {
            resject('数据格式错误，解析失败。');
          }
        }).catch(error => {
          reject('网络错误');
        })
      })
    ]);
  }
}
