//Mon May 19 2025 05:20:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
process.noDeprecation = true;
NAME = "恐龙打工日记";
VALY = ["kldgrj"];
CK = "";
let _0x128844 = process.env.weixinToken,
  _0x3385f2 = process.env[VALY[0] + "bf"],
  _0x4b2d18 = process.env[VALY[0] + "ys"] || "",
  _0x154c41 = process.env[VALY[0] + "dl"] || "",
  _0x420048 = process.env.WECHAT_SERVER || "",
  _0x58a54d = "vip.dsrhkj.cn",
  _0x1d786e = "/app/index.php?i=3&t=0&v=1.15&from=wxapp&c=entry&a=wxapp&do=distribute&m=bh_cat",
  _0xf70222 = "https://" + _0x58a54d;
const _0x37521a = ["\n", "@"],
  _0x2aca30 = 0;
usid = 0;
class _0x37005b {
  constructor(_0x5936d2) {
    this.num = ++usid;
    this.one = 0;
    this.strck = _0x5936d2;
    this.token = _0x5936d2.split("#")[0];
  }
  async ["moshi"]() {
    if (!this.token.startsWith("wxid")) {
      console.log("当前使用CK模式");
      this.wxcode = 0;
    } else {
      console.log("当前使用code模式");
      this.wxid = this.token;
      await this.readck();
      this.wxcode = 1;
      this.token = this.ck;
    }
  }
  ["headers"]() {
    let _0x244ea2 = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13) XWEB/9129",
      "xweb_xhr": "1",
      "referer": "https://servicewechat.com/wxebc856cb722e51d1/2/page-frame.html",
      "accept-language": "zh-CN,zh;q=0.9"
    };
    return _0x244ea2;
  }
  async ["hqdl"]() {
    let _0x195016 = await $.task("get", _0x154c41, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x195016.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await $.wait($.RT(1000, 3000));
    await this.list();
    await $.wait($.RT(1000, 3000));
    await this.gxqk();
  }
  async ["huoqucode"]() {
    this.one = 1;
    const _0x3b0817 = Object.keys(this.headers()).find(_0x47b86a => _0x47b86a.toLowerCase() === "referer"),
      _0x22db82 = this.headers()[_0x3b0817],
      _0x1eaf9e = new URL(_0x22db82).pathname.split("/")[1];
    let _0x54a163 = await $.task("post", _0x420048 + "/wx/app/code", {
      "Content-Type": "application/json"
    }, "{\"wxid\": \"" + this.wxid + "\",\"appid\": \"" + _0x1eaf9e + "\"}");
    if (_0x54a163.Code == 0) {
      let _0x1b316a = _0x54a163.Data.code;
      await this.logintoken(_0x1b316a);
    } else return;
  }
  async ["logintoken"](_0x38ae6a) {
    let _0x19af63 = "获取ck";
    await $.wait($.RT(1000, 3000));
    let _0x45b29d = await this.task("get", "" + _0xf70222 + _0x1d786e + "&code=" + _0x38ae6a + "&parent_id=&contr=noLogin&action=login&version=1.0.43", this.headers());
    if (_0x45b29d.status == 1) {
      this.token = _0x45b29d.info;
      this.ck = this.token;
      await this.writeck();
      await $.wait($.RT(3000, 5000));
    } else {
      let _0x44e50f = _0x45b29d.msg;
      console.log(this.num + " " + _0x19af63 + "：" + _0x44e50f);
      if (_0x128844 !== undefined) {
        await this.wxpusher(_0x44e50f);
      }
      return;
    }
  }
  async ["login"]() {
    let _0x47e8fe = "用户信息",
      _0x257011 = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=home&contr=index&parent_id=0&token=" + this.token + "&is_new=1&version=1.0.43", this.headers());
    if (_0x257011.status == 1) {
      this.isLogin = true;
      let {
          nickname: _0x483ab3,
          currency: _0x53d528,
          foodstuff: _0x344c70,
          money: _0x1f5033,
          warehouse_level: _0x841087
        } = _0x257011.info.member,
        _0x450e4b = _0x257011.info.look_num;
      this.num = "|" + _0x483ab3 + "|";
      console.log(this.num + " 金币：" + _0x53d528 + " 💰：" + _0x1f5033 + " 食物：" + _0x344c70);
      !_0x257011.info.daily_food.status && (await $.wait($.RT(3000, 5000)), await this.shiwu());
      !_0x257011.info.is_sign && (await $.wait($.RT(3000, 5000)), await this.qiandao());
      for (let _0x516320 = _0x450e4b; _0x516320 < 10; _0x516320++) {
        await $.wait($.RT(3000, 5000));
        await this.shu();
      }
    } else {
      this.isLogin = false;
      let _0x402253 = _0x257011.info;
      console.log(this.num + " " + _0x47e8fe + "：" + _0x402253);
      if (_0x402253.includes("login") && this.wxcode && !this.one) {
        await this.huoqucode();
        await $.wait($.RT(3000, 5000));
        await this.login();
      } else _0x128844 && (await this.wxpusher(_0x402253));
    }
  }
  async ["qiandao"]() {
    let _0x20534e = "签到",
      _0x4512e6 = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=sign&contr=my&token=" + this.token + "&version=1.0.43", this.headers());
    if (_0x4512e6.status == 1) console.log(this.num + " " + _0x20534e + "：成功！");else {
      let _0x20f0a7 = _0x4512e6.info;
      console.log(this.num + " " + _0x20534e + "：" + _0x20f0a7);
    }
  }
  async ["shu"]() {
    let _0x481402 = "📚",
      _0x170ba1 = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=video&contr=food&token=" + this.token + "&version=1.0.43", this.headers());
    if (_0x170ba1.status == 1) console.log(this.num + " " + _0x481402 + "：" + _0x170ba1.info.video_currency + "食物");else {
      let _0x17f321 = _0x170ba1.info;
      console.log(this.num + " " + _0x481402 + "：" + _0x17f321);
    }
  }
  async ["gxqk"]() {
    let _0x5ee8d6 = "贡献情况",
      _0x5ef680 = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=upcurrency&contr=my&token=" + this.token + "&collect=2&version=1.0.43", this.headers());
    if (_0x5ef680.status == 1) {
      _0x5ef680.info.warehouse_currency > 10 && (await $.wait($.RT(3000, 5000)), await this.qiandaofanbei());
    } else {
      let _0xaee0e3 = _0x5ef680.info;
      console.log(this.num + " " + _0x5ee8d6 + "：" + _0xaee0e3);
    }
  }
  async ["qiandaofanbei"]() {
    let _0x44fa3c = "贡献",
      _0x1cb485 = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=upcurrency&contr=my&token=" + this.token + "&collect=1&version=1.0.43", this.headers());
    if (_0x1cb485.status == 1) console.log(this.num + " " + _0x44fa3c + "：" + _0x1cb485.info.collect_currency + "金币");else {
      let _0x2a01e7 = _0x1cb485.info;
      console.log(this.num + " " + _0x44fa3c + "：" + _0x2a01e7);
    }
  }
  async ["shiwu"]() {
    let _0xa73e53 = "食物",
      _0x2d8dbf = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=daily&contr=food&token=" + this.token + "&version=1.0.43", this.headers());
    if (_0x2d8dbf.status == 1) console.log(this.num + " " + _0xa73e53 + "：领取成功！");else {
      let _0x1329c7 = _0x2d8dbf.info;
      console.log(this.num + " " + _0xa73e53 + "：" + _0x1329c7);
    }
  }
  async ["list"]() {
    let _0x24b187 = "广告id",
      _0x13f53f = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=index&contr=task&token=" + this.token + "&version=1.0.43", this.headers());
    if (_0x13f53f.status == 1) {
      let _0x24c71c = _0x13f53f.info.task.s;
      for (let _0x48cde0 of _0x24c71c) {
        let {
          id: _0xbd6b30
        } = _0x48cde0;
        await $.wait($.RT(23000, 23500));
        await this.guangao(_0xbd6b30);
      }
    } else {
      let _0x2222de = _0x13f53f.info;
      console.log(this.num + " " + _0x24b187 + "：" + _0x2222de);
    }
  }
  async ["weishi"]() {
    let _0xeba1b9 = "喂食龙群",
      _0xccb832 = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=feed&contr=my&token=" + this.token + "&is_remind=1&version=1.0.43", this.headers());
    if (_0xccb832.status == 1) console.log(this.num + " " + _0xeba1b9 + "：加" + _0xccb832.info.percentage + "体力");else {
      let _0x442c9b = _0xccb832.info;
      console.log(this.num + " " + _0xeba1b9 + "：" + _0x442c9b);
    }
  }
  async ["guangao"](_0x2b3566) {
    let _0x3a5f6c = "📺",
      _0x1da6de = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=complete&contr=task&task_id=" + _0x2b3566 + "&token=" + this.token + "&version=1.0.43", this.headers());
    if (_0x1da6de.status == 1) console.log(this.num + " " + _0x3a5f6c + "：" + _0x1da6de.info.msg);else {
      let _0x50abfc = _0x1da6de.info;
      console.log(this.num + " " + _0x3a5f6c + "：" + _0x50abfc);
    }
  }
  async ["xinxi"]() {
    let _0x113f3c = "用户信息",
      _0x538909 = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=index&contr=my&token=" + this.token + "&version=1.0.43 ", this.headers());
    if (_0x538909.status == 1) {
      let {
        currency: _0x3e91f9,
        foodstuff: _0x4b8508,
        bonus_level: _0x64bba,
        money: _0x2bd45c
      } = _0x538909.info.member;
      console.log(this.num + " 金币：" + _0x3e91f9 + " 💰：" + _0x2bd45c + " 食物：" + _0x4b8508);
      _0x4b8508 > 0 && (await $.wait($.RT(3000, 5000)), await this.weishi());
    } else {
      this.isLogin = false;
      let _0x4cd9c8 = _0x538909.info;
      console.log(this.num + " " + _0x113f3c + "：" + _0x4cd9c8);
    }
  }
  async ["fenhong"]() {
    let _0x1d6081 = "📺",
      _0x1bf611 = await this.task("get", "" + _0xf70222 + _0x1d786e + "&action=upgrade&contr=index&token=" + this.token + "&version=1.0.43", this.headers());
    if (_0x1bf611.status == 1) console.log(this.num + " " + _0x1d6081 + "：" + _0x1bf611.info.msg);else {
      let _0x158998 = _0x1bf611.info;
      console.log(this.num + " " + _0x1d6081 + "：" + _0x158998);
    }
  }
  async ["wxpusher"](_0x53cd01) {
    let _0x17f71a = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x1c0138 = await $.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + _0x128844.split("#")[0] + "&content=" + encodeURI("" + _0x128844.split("#")[2] + NAME + "[" + this.num + "]:" + _0x53cd01) + "&uid=" + _0x128844.split("#")[1], _0x17f71a);
    _0x1c0138.code == 1000 ? console.log("微信通知" + _0x1c0138.msg) : console.log("微信通知失败");
  }
  async ["writeck"]() {
    let _0x2d645b = "写入";
    const _0x1e1886 = require("fs"),
      _0x134763 = "xg_" + VALY + ".json";
    let _0x138e1d = {};
    if (_0x1e1886.existsSync(_0x134763)) try {
      const _0x3b25bb = _0x1e1886.readFileSync(_0x134763, "utf8");
      _0x138e1d = JSON.parse(_0x3b25bb);
    } catch (_0x10251c) {
      console.log(_0x2d645b + "：读取文件失败", _0x10251c);
      return;
    }
    _0x138e1d[this.wxid] = {
      "ck": this.ck
    };
    try {
      _0x1e1886.writeFileSync(_0x134763, JSON.stringify(_0x138e1d, null, 2));
      console.log(_0x2d645b + "：成功写入CK");
    } catch (_0xf7ffa7) {
      console.log(_0x2d645b + "：写入文件失败", _0xf7ffa7);
    }
  }
  async ["readck"]() {
    let _0x3c01cf = "读取ck";
    const _0x16be3b = require("fs"),
      _0x2e7374 = "xg_" + VALY + ".json";
    if (!_0x16be3b.existsSync(_0x2e7374)) {
      console.log(_0x3c01cf + "：文件不存在，需要获取code");
      await this.huoqucode();
      return;
    }
    try {
      const _0x4f1be4 = _0x16be3b.readFileSync(_0x2e7374, "utf8"),
        _0x27be25 = JSON.parse(_0x4f1be4);
      _0x27be25[this.wxid] && _0x27be25[this.wxid].ck ? this.ck = _0x27be25[this.wxid].ck : (console.log(_0x3c01cf + "：未找到对应wxid的CK，需要获取code"), await this.huoqucode());
    } catch (_0x1b9da2) {
      console.log(_0x3c01cf + "：读取文件失败", _0x1b9da2);
      await this.huoqucode();
    }
  }
  async ["task"](_0x4609c6, _0x411b86, _0x472f55, _0x2b192e) {
    _0x4609c6 = _0x4609c6 === "delete" ? _0x4609c6.toUpperCase() : _0x4609c6;
    const _0x26cc6c = require("request"),
      _0x16cdb6 = {
        "url": _0x411b86,
        "headers": _0x472f55,
        "timeout": 20000,
        ...(_0x154c41 && {
          "proxy": "http://" + this.dlip
        })
      };
    if (_0x4609c6 === "post") {
      ["Content-Type", "content-type", "Content-Length", "content-length"].forEach(_0x46f57f => delete _0x472f55[_0x46f57f]);
      _0x472f55["content-type"] = $.safeGet(_0x2b192e) ? "application/json;charset=utf-8" : "application/x-www-form-urlencoded";
      if (_0x2b192e) _0x472f55["content-length"] = $.lengthInUtf8Bytes(_0x2b192e);
    } else _0x4609c6 === "get" && ["Content-Type", "content-type", "Content-Length", "content-length"].forEach(_0x270f5a => delete _0x472f55[_0x270f5a]);
    return _0x4609c6.indexOf("T") >= 0 ? _0x16cdb6.form = JSON.parse(_0x2b192e) : _0x16cdb6.body = _0x2b192e, _0x472f55.Host = _0x411b86.replace("//", "/").split("/")[1], new Promise(async _0x105f6b => {
      _0x26cc6c[_0x4609c6.toLowerCase()](_0x16cdb6, async (_0x1110a0, _0x515590, _0x31b974) => {
        try {
          _0x2aca30 == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x16cdb6)), console.log("==================返回=================="), console.log(_0x31b974));
        } catch (_0x1023bf) {} finally {
          if (!_0x1110a0) {
            if ($.safeGet(_0x31b974)) _0x31b974 = JSON.parse(_0x31b974);else {
              _0x31b974 = _0x31b974;
            }
          } else _0x154c41 == undefined ? (console.log("请检查网络设置"), _0x31b974 = JSON.parse("{\"code\":\"99\"}")) : (await this.hqdl(), _0x31b974 = await this.task(_0x4609c6, _0x411b86, _0x472f55, _0x2b192e));
          return _0x105f6b(_0x31b974);
        }
      });
    });
  }
}
$ = _0x3b3f39();
!(async () => {
  console.log("🔔[" + NAME + "] 📅 " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  await $.ExamineCookie();
  const _0x3902cd = !!_0x154c41;
  console.log("当前使用" + (_0x3902cd ? "代理" : "本地") + "网络运行脚本");
  this.dlqk = _0x3902cd ? 1 : 0;
  if (!_0x3385f2) for (let _0x3649ce of $.cookie_list) {
    console.log("-".repeat(20));
    if (!_0x2aca30 && _0x4b2d18 !== "1") {
      const _0xe0d182 = $.RT(150000, 490000);
      console.log("随机延迟" + Math.round(_0xe0d182 * 0.001) + "秒");
      await $.wait(_0xe0d182);
    }
    _0x3902cd && (await _0x3649ce.hqdl());
    await _0x3649ce.moshi();
    await _0x3649ce.login();
    if (_0x3649ce.isLogin) {
      await _0x3649ce.user_task_list();
      await _0x3649ce.xinxi();
    }
  } else {
    if (!_0x2aca30 && _0x4b2d18 !== "1") {
      const _0x190309 = $.RT(150000, 490000);
      console.log("随机延迟" + Math.round(_0x190309 * 0.001) + "秒");
      await $.wait(_0x190309);
    }
    _0x3902cd && (await $.Multithreading("hqdl"));
    console.log("\n-------- 用户信息 --------");
    await $.Multithreading("moshi");
    await $.Multithreading("login");
    let _0x32c06b = $.cookie_list.filter(_0x14ea30 => _0x14ea30.isLogin == true);
    if (_0x32c06b.length == 0) {
      console.log("Cookie格式错误 或 账号被禁封");
      return;
    } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
    for (let _0xe4b5bb of $.cookie_list) {
      _0xe4b5bb.xinxi();
    }
  }
})().catch(_0x26b4d3 => {
  console.log(_0x26b4d3);
}).finally(() => {});
function _0x3b3f39() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    ["maskPhone"](_0x3ea48a) {
      if (_0x3ea48a && _0x3ea48a.length === 11) {
        return _0x3ea48a.substring(0, 3) + "****" + _0x3ea48a.substring(7);
      }
      return _0x3ea48a;
    }
    async ["Multithreading"](_0x3137b6, _0x1adfb0, _0x2d3d8a) {
      let _0x6d486c = [];
      !_0x2d3d8a && (_0x2d3d8a = 1);
      while (_0x2d3d8a--) {
        for (let _0x13ff27 of $.cookie_list) {
          _0x6d486c.push(_0x13ff27[_0x3137b6](_0x1adfb0));
        }
      }
      await Promise.allSettled(_0x6d486c);
    }
    ["ExamineCookie"]() {
      let _0x34d236 = process.env[VALY] || CK,
        _0x32afb4 = 0;
      if (_0x34d236) {
        for (let _0x4dfed8 of _0x37521a) {
          if (_0x34d236.includes(_0x4dfed8)) {
            this.splitor = _0x4dfed8;
            break;
          }
        }
        for (let _0x33973d of _0x34d236.split(this.splitor).filter(_0x294ee2 => !!_0x294ee2)) {
          $.cookie_list.push(new _0x37005b(_0x33973d));
        }
        _0x32afb4 = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0x32afb4 + "个账号"), $.cookie_list;
    }
    ["task"](_0x3b7a5c, _0x576ebe, _0x54a35a, _0x4d7bf8, _0x4fc56f) {
      return _0x3b7a5c == "delete" ? _0x3b7a5c = _0x3b7a5c.toUpperCase() : _0x3b7a5c = _0x3b7a5c, _0x3b7a5c == "post" && (delete _0x54a35a["content-type"], delete _0x54a35a["Content-type"], delete _0x54a35a["content-Type"], $.safeGet(_0x4d7bf8) ? _0x54a35a["Content-Type"] = "application/json;charset=UTF-8" : _0x54a35a["Content-Type"] = "application/x-www-form-urlencoded", _0x4d7bf8 && (_0x54a35a["Content-Length"] = $.lengthInUtf8Bytes(_0x4d7bf8))), _0x3b7a5c == "get" && (delete _0x54a35a["content-type"], delete _0x54a35a["Content-type"], delete _0x54a35a["content-Type"], delete _0x54a35a["Content-Length"]), _0x54a35a.Host = _0x576ebe.replace("//", "/").split("/")[1], new Promise(async _0x327180 => {
        if (_0x3b7a5c.indexOf("T") < 0) {
          var _0x4f65ef = {
            "url": _0x576ebe,
            "headers": _0x54a35a,
            "body": _0x4d7bf8,
            "proxy": "http://" + _0x4fc56f
          };
        } else {
          var _0x4f65ef = {
            "url": _0x576ebe,
            "headers": _0x54a35a,
            "form": JSON.parse(_0x4d7bf8),
            "proxy": "http://" + _0x4fc56f
          };
        }
        !_0x4fc56f && delete _0x4f65ef.proxy;
        this.request[_0x3b7a5c.toLowerCase()](_0x4f65ef, (_0x52081b, _0x4e6bca, _0x4e57b8) => {
          try {
            if (_0x4e57b8) {
              if (_0x2aca30 == 1) {
                console.log("================ 请求 ================");
                console.log(_0x4f65ef);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x4e57b8)) {
                  console.log(JSON.parse(_0x4e57b8));
                } else console.log(_0x4e57b8);
              }
            }
          } catch (_0x3e04b2) {
            console.log(_0x3e04b2, _0x576ebe + "\n" + _0x54a35a);
          } finally {
            let _0x48eb85 = "";
            if (!_0x52081b) {
              if ($.safeGet(_0x4e57b8)) _0x48eb85 = JSON.parse(_0x4e57b8);else _0x4e57b8.indexOf("/") != -1 && _0x4e57b8.indexOf("+") != -1 ? _0x48eb85 = $.decrypts(_0x4e57b8) : _0x48eb85 = _0x4e57b8;
            } else _0x48eb85 = _0x576ebe + "   API请求失败，请检查网络重试\n" + _0x52081b;
            return _0x327180(_0x48eb85);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x3974) {
      let _0xa9830 = encodeURIComponent(_0x3974).match(/%[89ABab]/g);
      return _0x3974.length + (_0xa9830 ? _0xa9830.length : 0);
    }
    ["randomArr"](_0x46fcdb) {
      return _0x46fcdb[parseInt(Math.random() * _0x46fcdb.length, 10)];
    }
    ["wait"](_0x2903c7) {
      return new Promise(_0xf57597 => setTimeout(_0xf57597, _0x2903c7));
    }
    ["time"](_0x4c7fa2) {
      if (_0x4c7fa2 == 10) {
        return Math.round(+new Date() / 1000);
      } else return +new Date();
    }
    ["timenow"](_0x13da19) {
      let _0x41500e = new Date();
      if (_0x13da19 == undefined) {
        let _0x451f67 = new Date(),
          _0x38f17d = _0x451f67.getFullYear() + "-",
          _0x5846d7 = (_0x451f67.getMonth() + 1 < 10 ? "0" + (_0x451f67.getMonth() + 1) : _0x451f67.getMonth() + 1) + "-",
          _0x3d859d = _0x451f67.getDate() < 10 ? "0" + _0x451f67.getDate() : _0x451f67.getDate() + " ",
          _0x5c0581 = _0x451f67.getHours() + ":",
          _0x4290c1 = _0x451f67.getMinutes() + ":",
          _0x16329b = _0x451f67.getSeconds() + 1 < 10 ? "0" + _0x451f67.getSeconds() : _0x451f67.getSeconds();
        return _0x38f17d + _0x5846d7 + _0x3d859d + _0x5c0581 + _0x4290c1 + _0x16329b;
      } else {
        if (_0x13da19 == 0) {
          return _0x41500e.getFullYear();
        } else {
          if (_0x13da19 == 1) return _0x41500e.getMonth() + 1 < 10 ? "0" + (_0x41500e.getMonth() + 1) : _0x41500e.getMonth() + 1;else {
            if (_0x13da19 == 2) return _0x41500e.getDate() < 10 ? "0" + _0x41500e.getDate() : _0x41500e.getDate();else {
              if (_0x13da19 == 3) {
                return _0x41500e.getHours();
              } else {
                if (_0x13da19 == 4) return _0x41500e.getMinutes();else {
                  if (_0x13da19 == 5) {
                    return _0x41500e.getSeconds() + 1 < 10 ? "0" + _0x41500e.getSeconds() : _0x41500e.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x126469) {
      try {
        if (typeof JSON.parse(_0x126469) == "object") return true;
      } catch (_0x41c292) {
        return false;
      }
    }
    ["SJS"](_0x472aae, _0x37fdf6) {
      if (_0x37fdf6 == 0) {
        let _0x2e09de = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x12d9ea = _0x2e09de.length,
          _0x3eaac3 = "";
        for (let _0x3fd6dc = 0; _0x3fd6dc < _0x472aae; _0x3fd6dc++) {
          _0x3eaac3 += _0x2e09de.charAt(Math.floor(Math.random() * _0x12d9ea));
        }
        return _0x3eaac3;
      } else {
        if (_0x37fdf6 == 1) {
          let _0x39c4a3 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x4a467c = _0x39c4a3.length,
            _0x3d576b = "";
          for (let _0x1e038e = 0; _0x1e038e < _0x472aae; _0x1e038e++) {
            _0x3d576b += _0x39c4a3.charAt(Math.floor(Math.random() * _0x4a467c));
          }
          return _0x3d576b;
        } else {
          if (_0x37fdf6 == 2) {
            let _0x4669a6 = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789",
              _0x4afb33 = _0x4669a6.length,
              _0x29dcce = "";
            for (let _0x50ff55 = 0; _0x50ff55 < _0x472aae; _0x50ff55++) {
              _0x29dcce += _0x4669a6.charAt(Math.floor(Math.random() * _0x4afb33));
            }
            return _0x29dcce;
          } else {
            let _0x4304a7 = "0123456789",
              _0x41d853 = _0x4304a7.length,
              _0xdc4068 = "";
            for (let _0x478a5f = 0; _0x478a5f < _0x472aae; _0x478a5f++) {
              _0xdc4068 += _0x4304a7.charAt(Math.floor(Math.random() * _0x41d853));
            }
            return _0xdc4068;
          }
        }
      }
    }
    ["udid"](_0x3e2c07) {
      function _0x3a7691() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x18fde3 = _0x3a7691() + _0x3a7691() + "-" + _0x3a7691() + "-" + _0x3a7691() + "-" + _0x3a7691() + "-" + _0x3a7691() + _0x3a7691() + _0x3a7691();
      return _0x3e2c07 == 0 ? _0x18fde3.toUpperCase() : _0x18fde3.toLowerCase();
    }
    ["encodeUnicode"](_0x3511f9) {
      var _0xaebc4b = [];
      for (var _0x27c0a9 = 0; _0x27c0a9 < _0x3511f9.length; _0x27c0a9++) {
        _0xaebc4b[_0x27c0a9] = ("00" + _0x3511f9.charCodeAt(_0x27c0a9).toString(16)).slice(-4);
      }
      return "\\u" + _0xaebc4b.join("\\u");
    }
    ["decodeUnicode"](_0x5daa42) {
      return _0x5daa42 = _0x5daa42.replace(/\\u/g, "%u"), unescape(unescape(_0x5daa42));
    }
    ["RT"](_0x283154, _0x23329a) {
      return Math.round(Math.random() * (_0x23329a - _0x283154) + _0x283154);
    }
    ["arrNull"](_0xd28cad) {
      var _0x47ff4d = _0xd28cad.filter(_0x4a0092 => {
        return _0x4a0092 && _0x4a0092.trim();
      });
      return _0x47ff4d;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x47e997 = $.nowtime();
      return JSON.stringify(_0x47e997).indexOf(" ") >= 0 && (_0x47e997 = _0x47e997.replace(" ", "T")), new Date(_0x47e997).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x15d218, _0x3ca9df, _0x106870, _0x5ab40e) {
      if (_0x5ab40e == 0) {
        return JSON.stringify(_0x15d218.split(_0x3ca9df).reduce((_0x2b73f3, _0x249ab2) => {
          let _0x270ee9 = _0x249ab2.split(_0x106870);
          return _0x2b73f3[_0x270ee9[0].trim()] = _0x270ee9[1].trim(), _0x2b73f3;
        }, {}));
      } else return _0x15d218.split(_0x3ca9df).reduce((_0x3d3aad, _0x854c8a) => {
        let _0x3b12bd = _0x854c8a.split(_0x106870);
        return _0x3d3aad[_0x3b12bd[0].trim()] = _0x3b12bd[1].trim(), _0x3d3aad;
      }, {});
    }
    ["MD5Encrypt"](_0x14ee75, _0x546b58) {
      if (_0x14ee75 == 0) {
        return this.CryptoJS.MD5(_0x546b58).toString().toLowerCase();
      } else {
        if (_0x14ee75 == 1) {
          return this.CryptoJS.MD5(_0x546b58).toString().toUpperCase();
        } else {
          if (_0x14ee75 == 2) return this.CryptoJS.MD5(_0x546b58).toString().substring(8, 24).toLowerCase();else {
            if (_0x14ee75 == 3) return this.CryptoJS.MD5(_0x546b58).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0xfff264, _0x59d3fc, _0x237499) {
      return _0xfff264 == 0 ? this.CryptoJS[_0x59d3fc](_0x237499).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x59d3fc](_0x237499).toString();
    }
    ["HmacSHA_Encrypt"](_0x395f86, _0x299ad4, _0xfed65a, _0x16b3cc) {
      if (_0x395f86 == 0) {
        return this.CryptoJS[_0x299ad4](_0xfed65a, _0x16b3cc).toString(this.CryptoJS.enc.Base64);
      } else return this.CryptoJS[_0x299ad4](_0xfed65a, _0x16b3cc).toString();
    }
    ["Base64"](_0x32a835, _0x2ee742) {
      if (_0x32a835 == 0) return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x2ee742));else {
        return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x2ee742));
      }
    }
    ["DecryptCrypto"](_0x423ddb, _0x5869e1, _0x4f928e, _0xb9b494, _0x3482ec, _0x2ddb53, _0x179e93) {
      if (_0x423ddb == 0) {
        const _0x14d525 = this.CryptoJS[_0x5869e1].encrypt(this.CryptoJS.enc.Utf8.parse(_0x3482ec), this.CryptoJS.enc.Utf8.parse(_0x2ddb53), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x179e93),
          "mode": this.CryptoJS.mode[_0x4f928e],
          "padding": this.CryptoJS.pad[_0xb9b494]
        });
        return _0x14d525.toString();
      } else {
        const _0x30c904 = this.CryptoJS[_0x5869e1].decrypt(_0x3482ec, this.CryptoJS.enc.Utf8.parse(_0x2ddb53), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x179e93),
          "mode": this.CryptoJS.mode[_0x4f928e],
          "padding": this.CryptoJS.pad[_0xb9b494]
        });
        return _0x30c904.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x29c393, _0x2b8642) {
      const _0xbe7328 = require("node-rsa");
      let _0x1f3e03 = new _0xbe7328("-----BEGIN PUBLIC KEY-----\n" + _0x2b8642 + "\n-----END PUBLIC KEY-----");
      return _0x1f3e03.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x1f3e03.encrypt(_0x29c393, "base64", "utf8");
    }
    ["SHA_RSA"](_0x2cc18b, _0x10aa6f) {
      let _0x1e0bc3 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x10aa6f, 76) + "\n-----END PRIVATE KEY-----"),
        _0x2ff669 = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x2ff669.init(_0x1e0bc3);
      _0x2ff669.updateString(_0x2cc18b);
      let _0x4c45d4 = _0x2ff669.sign(),
        _0x554d9b = this.Sha_Rsa.hextob64u(_0x4c45d4);
      return _0x554d9b;
    }
  }();
}
async function _0x52d72b(_0x3e1caa, _0x35542b) {
  const _0x3103ff = require("node-rsa");
  let _0x5a989e = new _0x3103ff("-----BEGIN PUBLIC KEY-----\n" + _0x35542b + "\n-----END PUBLIC KEY-----");
  return _0x5a989e.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x5a989e.encrypt(_0x3e1caa, "base64", "utf8");
}
function _0x1d5791(_0x25fcf7) {
  const _0x5a4c82 = new Date(),
    _0x821acb = _0x5a4c82.getHours(),
    _0x4d533c = _0x5a4c82.getMinutes(),
    _0x37c505 = _0x5a4c82.getSeconds(),
    _0x149817 = _0x25fcf7 === 0 ? String(_0x821acb).padStart(2, "0") : String(_0x821acb),
    _0xbf13af = _0x25fcf7 === 0 ? String(_0x4d533c).padStart(2, "0") : String(_0x4d533c),
    _0x285103 = _0x25fcf7 === 0 ? String(_0x37c505).padStart(2, "0") : String(_0x37c505);
  return _0x149817 + ":" + _0xbf13af + ":" + _0x285103;
}
function _0x72ca8d(_0x2b3c9e) {
  let _0x15766f = "";
  const _0x1c7d57 = new Date(),
    _0x5cbbfb = _0x1c7d57.getFullYear();
  if (_0x2b3c9e == 0) _0x15766f = String(_0x1c7d57.getMonth() + 1).padStart(2, "0");else {
    _0x15766f = String(_0x1c7d57.getMonth() + 1);
  }
  const _0x44b993 = String(_0x1c7d57.getDate()).padStart(2, "0");
  return _0x5cbbfb + "-" + _0x15766f + "-" + _0x44b993;
}