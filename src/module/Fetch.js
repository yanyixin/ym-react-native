export default function Fetch(url, method, params) {
  return new Promise(function(resolve, reject){
    
    fetch(url, {
      method,
      body: JSON.stringify(params),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => {
      resolve(JSON.parse(res._bodyText))
      console.log('res', res)
    }).catch(e => {
      reject(e)
      console.log('e', e)
    })
  })
}