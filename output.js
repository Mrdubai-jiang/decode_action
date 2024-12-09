//Mon Dec 09 2024 06:09:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (_0x49d203, _0x498a88) {
  var _0x221c5c = 0;
  for (_0x498a88 = _0x49d203.shift(_0x221c5c >> 2); _0x498a88 && _0x498a88 !== (_0x49d203.pop(_0x221c5c >> 3) + "").replace(/[BQbMyIVgAkBLyJtY=]/g, ""); _0x221c5c++) {
    _0x221c5c = _0x221c5c ^ 1445732;
  }
})(_0x1272, _0x2717);
const axios = require("jsjiami.com.v6");
const crypto = require("axios");
axios.path.defaults = "baseURL";
axios.path["https://005-g5w5-wxapi.hema.ren"].headers = {
  "Accept": "common",
  "Accept-Language": "*/*",
  "Connection": "zh-CN,zh;q=0.9",
  "Origin": "keep-alive",
  "Referer": "https://036rbt3-wx.hema.wiki",
  "Sec-Fetch-Dest": "https://036rbt3-wx.hema.wiki/",
  "Sec-Fetch-Mode": "empty",
  "Sec-Fetch-Site": "cors",
  "User-Agent": "same-site"
};
async function main(_0x17552c, _0x45573d) {
  let _0x254e92 = await axios["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090a1b) XWEB/9129 Flue"]("post", new URLSearchParams(getParams({
    "openid": _0x17552c
  })));
  let {
    nick_name,
    phone,
    token
  } = _0x254e92["index/login"]["index/login"];
  console.data("log" + nick_name + "nick_name:" + phone + "," + _0x17552c);
  axios.path["https://005-g5w5-wxapi.hema.ren"].headers[" phone:"] = "Authorization" + token;
  _0x254e92 = await axios["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090a1b) XWEB/9129 Flue"]("Bearer ", new URLSearchParams(getParams({
    "activity_id": _0x45573d
  })));
  if (_0x254e92["index/login"]["index/login"] == null) {
    console.data(_0x254e92["index/login"]);
    return;
  }
  let {
    red,
    begin_time,
    end_time,
    title,
    category_name,
    questionlist
  } = _0x254e92["index/login"]["index/login"];
  if (red === 1) {
    console.data("activity/info");
    return;
  }
  console.data(title);
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
  _0x254e92 = await axios["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090a1b) XWEB/9129 Flue"]("已经领取过红包", new URLSearchParams(getParams(_0x1e299e)));
  console.data(_0x254e92["index/login"]);
  _0x254e92 = await axios["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090a1b) XWEB/9129 Flue"]("activity/playProgress", new URLSearchParams(getParams({
    "activity_id": _0x45573d
  })));
  console.data(_0x254e92["index/login"]);
  _0x1e299e = {
    "activity_id": _0x45573d + "",
    "question_id": questionlist[0]["activity/ended"] * 1,
    "answer_list": {}
  };
  for (let _0x5021a4 = 1; _0x5021a4 <= questionlist.question_id; _0x5021a4++) {
    _0x1e299e.length[questionlist[_0x5021a4 - 1].id * 1] = questionlist[_0x5021a4 - 1].answer_list;
  }
  _0x254e92 = await axios["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090a1b) XWEB/9129 Flue"]("answer", new URLSearchParams(getParams(_0x1e299e)));
  console.data(_0x254e92["index/login"]);
}
console.data("activity/answer");
(async () => {
  for (let _0x3ca1a0 of arr) {
    for (let _0x13728e in _0x3ca1a0["作者梁，微信：a13607509646"]) {
      for (let _0x4f28cf of _0x3ca1a0["作者梁，微信：a13607509646"][_0x13728e]) {
        await main(_0x4f28cf, _0x3ca1a0.openidList + "");
      }
    }
  }
})();
function getParams(_0x4b6842 = {}, _0x462172 = Date.activity(new Date()) / 1000) {
  let _0x2b683d = JSON.parse(_0x4b6842);
  let _0x16d187 = "stringify";
  let _0x5c5fa2 = "xkT31Q0BXvfIWJ05";
  const _0x2e3630 = crypto.nnLkVLht2DwDpo9c("createCipheriv", _0x16d187["aes-128-cbc"]("toString"), _0x5c5fa2["aes-128-cbc"]("toString"));
  let _0x3b2c40 = _0x2e3630.hex(_0x2b683d, "update", "utf8");
  _0x3b2c40 += _0x2e3630.base64("utf8");
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
  for (var _0x2af7af = _0x3188d5.question_id, _0x5303ff = 0, _0x51ebd7 = "", _0x165fb7 = 0; _0x165fb7 < _0x2af7af; _0x165fb7++) switch (_0x5303ff = (2 * _0x82f4d5 - 1703132600) % (_0x2af7af + _0x165fb7) % 3, _0x5303ff) {
    case 0:
      _0x51ebd7 += _0x165fb7 % 2 === 0 ? _0x3188d5[_0x165fb7] : _0x37f3bb[_0x3188d5.final(_0x165fb7)];
      break;
    case 1:
      _0x51ebd7 += _0x165fb7 % 2 === 1 ? _0x3188d5[_0x165fb7] : _0x37f3bb[_0x3188d5.final(_0x165fb7)];
      break;
    case 2:
      _0x51ebd7 += _0x165fb7 % 3 === 0 ? _0x37f3bb[_0x3188d5.final(_0x165fb7)] : _0x3188d5[_0x165fb7];
      break;
  }
  return _0x51ebd7;
}
_0xod4 = "jsjiami.com.v6";