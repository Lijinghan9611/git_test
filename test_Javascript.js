function parseUrl(url){
  if(!url){ //url没有值
    return {}
  }

  let protocol = "";

  let url_temp;  //保存剩余的
  let param_temp  //保存参数字符串
  let url_split;  //链接切割数组
  if(url.indexOf(":") != -1){  //获得协议
    url_split = url.split(':')
    protocol = url_split[0]; //取得协议
  }

  url_temp = url_split[1].replace('//', '');  //去掉链接中的双斜杠
  param_temp = url_temp.split("?")[1];  //取到参数
  url_temp = url_temp.split("?")[0];  //取到去掉协议非参数部分
  console.log(protocol);
  console.log(param_temp);
  let host_end_index = url_temp.indexOf('/'); //取得域名结束的下标
  let host = url_temp.substring(0, host_end_index);  //域名/IP
  let path = url_temp.replace(host, "");  //路径
  console.log(host);
  console.log(path);
  let hash = '';
  if(param_temp.indexOf('#') != -1){    //取得hash
    hash = param_temp.split('#')[1]
    param_temp = param_temp.split('#')[0]
  }
  console.log(param_temp);
  console.log(hash);

  let query = {}  //链接参数

  if(param_temp){

  }
}

function parseUrl(url){
  let protocol = url.indexOf(':') != -1? url.match(/(\S*):/)[1]:''; //取得协议

  //开始匹配域名和路径
  let hostAndPath = url.indexOf('?') != -1? url.match(/\/\/(\S*)\?/)[1] : url.match(/\/\/(\S*)/)[1]  //域名和路径
  let host_end_index = hostAndPath.indexOf('/');  //取得域名和路径分隔斜杠的下标
  let host = '';
  let path = ''
  if(host_end_index != -1){
    host = hostAndPath.substring(0, host_end_index);  //取得域名
    path = hostAndPath.replace(host, "")  //取得路径
  }
  //结束匹配域名和路径
  
  let queryStr;
  let hash;
  if(url.indexOf('#') != -1){  //链接包含#
    queryStr = url.indexOf('?') != -1? url.match(/\?(\S*)#/)[1] : ''  //取得参数字符串
    hash = url.match(/#(\S*)/)[1];  //取得hash
  }
  else{
    queryStr = url.indexOf('?') != -1?url.match(/\?(\S*)/)[1]: ''  //取得参数字符串
    hash = "";  //取得hash
  }

  let query = {};
  if(queryStr.trim().length != 0){  //获取参数
    let _temp_query = queryStr.split('&');
    let query_resultStr = "";
    _temp_query.forEach(val => {  //循环组建参数json字符串
      val = '"' + val.replace("=" ,'":"') + '",';
      query_resultStr += val;
    });
    query_resultStr = "{" + query_resultStr.substring(0, query_resultStr.length - 1) + "}";
    query = JSON.parse(query_resultStr);
  }

  return {
    protocol: protocol,
    host: host,
    path: path,
    query: query,
    hash: hash
  }
}

var re = parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title")
console.log(re)