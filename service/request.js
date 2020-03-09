const baseUrl = 'http://123.207.32.32:8000/api/wh'
export function request(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url:baseUrl +options.url,
      method:options.method || 'get',
      data:options.data || {},
      success:(res) =>{
        resolve(res)
      },
      fail:(error) => {
        reject(error)
      }
    })
  })
}
