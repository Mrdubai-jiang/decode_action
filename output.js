//Mon Dec 09 2024 06:12:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
const crypto = require("crypto");
axios.defaults.baseURL = "https://005-g5w5-wxapi.hema.ren";
axios.defaults.headers.common = {
  "Accept": "*/*",
  "Accept-Language": "zh-CN,zh;q=0.9",
  "Connection": "keep-alive",
  "Origin": "https://036rbt3-wx.hema.wiki",
  "Referer": "https://036rbt3-wx.hema.wiki/",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090a1b) XWEB/9129 Flue"
};
async function main(_0x17552c, _0x45573d) {
  let _0x254e92 = await axios.post("index/login", new URLSearchParams(getParams({
    "openid": _0x17552c
  })));
  let {
    nick_name,
    phone,
    token
  } = _0x254e92.data.data;
  console.log("nick_name:" + nick_name + " phone:" + phone + "," + _0x17552c);
  axios.defaults.headers.common.Authorization = "Bearer " + token;
  _0x254e92 = await axios.post("activity/info", new URLSearchParams(getParams({
    "activity_id": _0x45573d
  })));
  if (_0x254e92.data.data == null) {
    console.log(_0x254e92.data);
    return;
  }
  let {
    red,
    begin_time,
    end_time,
    title,
    category_name,
    questionlist
  } = _0x254e92.data.data;
  if (red === 1) {
    console.log("已经领取过红包");
    return;
  }
  console.log(title);
  let _0x1e299e = {
    "activity_id": _0x45573d + "",
    "activity_title": title,
    "activity_begin": begin_time,
    "activity_end": end_time,
    "category_id": _0x45573d * 1,
    "category_name": category_name,
    "user_play_second": 2,
    "activity_total_second": 51,
    "user_play_ratio": 3
  };
  _0x254e92 = await axios.post("activity/playProgress", new URLSearchParams(getParams(_0x1e299e)));
  console.log(_0x254e92.data);
  _0x254e92 = await axios.post("activity/ended", new URLSearchParams(getParams({
    "activity_id": _0x45573d
  })));
  console.log(_0x254e92.data);
  _0x1e299e = {
    "activity_id": _0x45573d + "",
    "question_id": questionlist[0].question_id * 1,
    "answer_list": {}
  };
  for (let _0x5021a4 = 1; _0x5021a4 <= questionlist.length; _0x5021a4++) {
    _0x1e299e.answer_list[questionlist[_0x5021a4 - 1].id * 1] = questionlist[_0x5021a4 - 1].answer;
  }
  _0x254e92 = await axios.post("activity/answer", new URLSearchParams(getParams(_0x1e299e)));
  console.log(_0x254e92.data);
}
console.log("作者梁，微信：a13607509646");
(async () => {
  for (let _0x3ca1a0 of arr) {
    for (let _0x13728e in _0x3ca1a0.openidList) {
      for (let _0x4f28cf of _0x3ca1a0.openidList[_0x13728e]) {
        await main(_0x4f28cf, _0x3ca1a0.activity + "");
      }
    }
  }
})();
function getParams(_0x4b6842 = {}, _0x462172 = Date.parse(new Date()) / 1000) {
  let _0x2b683d = JSON.stringify(_0x4b6842);
  let _0x16d187 = "xkT31Q0BXvfIWJ05";
  let _0x5c5fa2 = "nnLkVLht2DwDpo9c";
  const _0x2e3630 = crypto.createCipheriv("aes-128-cbc", _0x16d187.toString("hex"), _0x5c5fa2.toString("hex"));
  let _0x3b2c40 = _0x2e3630.update(_0x2b683d, "utf8", "base64");
  _0x3b2c40 += _0x2e3630.final("base64");
  let _0x3d0fd4 = getParam(_0x3b2c40, _0x462172);
  return {
    "param": _0x3d0fd4,
    "time": _0x462172
  };
}
function getParam(_0x3188d5, _0x82f4d5) {
  let _0x37f3bb = {
    "43": "5",
    "47": "9",
    "48": "A",
    "49": "y",
    "50": "z",
    "51": "L",
    "52": "0",
    "53": "1",
    "54": "2",
    "55": "X",
    "56": "Y",
    "57": "4",
    "61": "O",
    "65": "D",
    "66": "n",
    "67": "E",
    "68": "F",
    "69": "3",
    "70": "G",
    "71": "H",
    "72": "j",
    "73": "k",
    "74": "I",
    "75": "6",
    "76": "J",
    "77": "K",
    "78": "M",
    "79": "N",
    "80": "P",
    "81": "Q",
    "82": "R",
    "83": "S",
    "84": "p",
    "85": "q",
    "86": "=",
    "87": "B",
    "88": "T",
    "89": "8",
    "90": "U",
    "97": "V",
    "98": "W",
    "99": "o",
    "100": "/",
    "101": "Z",
    "102": "a",
    "103": "b",
    "104": "c",
    "105": "7",
    "106": "d",
    "107": "e",
    "108": "f",
    "109": "g",
    "110": "h",
    "111": "i",
    "112": "l",
    "113": "m",
    "114": "r",
    "115": "s",
    "116": "t",
    "117": "u",
    "118": "+",
    "119": "v",
    "120": "w",
    "121": "C",
    "122": "x"
  };
  for (var _0x2af7af = _0x3188d5.length, _0x5303ff = 0, _0x51ebd7 = "", _0x165fb7 = 0; _0x165fb7 < _0x2af7af; _0x165fb7++) switch (_0x5303ff = (2 * _0x82f4d5 - 1703132600) % (_0x2af7af + _0x165fb7) % 3, _0x5303ff) {
    case 0:
      _0x51ebd7 += _0x165fb7 % 2 === 0 ? _0x3188d5[_0x165fb7] : _0x37f3bb[_0x3188d5.charCodeAt(_0x165fb7)];
      break;
    case 1:
      _0x51ebd7 += _0x165fb7 % 2 === 1 ? _0x3188d5[_0x165fb7] : _0x37f3bb[_0x3188d5.charCodeAt(_0x165fb7)];
      break;
    case 2:
      _0x51ebd7 += _0x165fb7 % 3 === 0 ? _0x37f3bb[_0x3188d5.charCodeAt(_0x165fb7)] : _0x3188d5[_0x165fb7];
      break;
  }
  return _0x51ebd7;
}
_0xod4 = "jsjiami.com.v6";