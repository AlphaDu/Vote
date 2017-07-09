const overTime = 5000 //ms
import xhr from './xhr'
export default{


  async Login ({userName,password},callBacks){
    try{
      let result = await xhr._postDataToUrl();
      if(callBacks && callBacks.onSuccess){
        callBacks.onSuccess();
      }
      return result
    }catch(error){
      if (callBack && callBacks.onFail)
      callBacks.onFail();
    }
  },
  async logout(userName,password,callBack){

  },

}

