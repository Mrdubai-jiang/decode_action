import requests
import time
import json
import os

# 开一把游戏抓取openid的值
# 变量名DML_OPENIDS

# 从青龙环境变量中获取openid和备注，如果没有则使用本地定义的账号
# openid和备注之间用|分隔，不同的账号之间用换行符\n分隔
#

dmlcks = []
if 'DML_OPENIDS' in os.environ:
    dmlcks_str = os.getenv('DML_OPENIDS')
    for item in dmlcks_str.split('\n'):
        if item:
            openid, remark = item.split('|')
            dmlcks.append({"openid": openid, "remark": remark})
else:
    # 本地定义的账号信息，非青龙环境变量时使用
    dmlcks = [

        {"openid": "", "remark": "账号1"},
        {"openid": "", "remark": "账号2"},
     
    ]

score = "qVx2Ymm5YgzbNSiG/ecLLdqim9o2bJDYVoWq+0OxmzR/7m4HA0M++DWVpK9Cvd+04nBpc9asEWfBz92YhiUOTxURuZrUflERFMjb/UPuTEkjrmCWDv83RGrpbE9HTZntjYAuJLPFlLKRSPsiL8YtQtvB+mR2+6UtDTzVKdpLmy6vLjd3n2fdcAyxwWv1RGWPk1WBIHcEl36+blQddIQ8+Ilayyyn6jOzm5njOirh0GFCEgpQItSnviopiqPQgs2qUfhXYY30VhpS28WJxj4pSW47CH+GkXGGCpwKe1TDedjBYMr4oH4c4zESD8L6uY4ltirmWtM+VNE05yuSXFri7A=="

pushplus_token = "7e1837471a2d444ca698b2f6d075b38a"  # PushPlus推送token

lottery_url ="https://game.dominos.com.cn/abalone/game/gameDone"#line:2
share_url ="https://game.dominos.com.cn/abalone/game/sharingDone"#line:3
headers ={"Host":"game.dominos.com.cn","Connection":"keep-alive","Content-Length":"428","content-type":"application/x-www-form-urlencoded","Accept-Encoding":"gzip,compress,br,deflate","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 17_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.53(0x18003531) NetType/WIFI Language/zh_CN","Referer":"https://servicewechat.com/wx887bf6ad752ca2f3/71/page-frame.html"}#line:12
def lottery_request (OO0O00O0O00O0OO0O ,retry =35 ,delay =1 ):#line:15
    O0O0O0O000OO0OO00 ={"openid":OO0O00O0O00O0OO0O ,"score":score ,"tempId":"null"}#line:20
    O00OOO00OO000OOOO =0 #line:21
    while O00OOO00OO000OOOO <retry :#line:22
        O00O00OOO00OO00O0 =requests .post (lottery_url ,headers =headers ,data =O0O0O0O000OO0OO00 )#line:23
        if O00O00OOO00OO00O0 .status_code ==200 and O00O00OOO00OO00O0 .json ()['statusCode']==0 :#line:24
            return O00O00OOO00OO00O0 .json ()#line:25
        else :#line:26
            O00OOO00OO000OOOO +=1 #line:27
            print (f"❌ {OO0O00O0O00O0OO0O} 抽奖请求失败，正在重试...（{O00OOO00OO000OOOO}/{retry}）")#line:28
            time .sleep (delay )#line:29
    print (f"❌ {OO0O00O0O00O0OO0O} 抽奖请求失败超过重试次数，放弃重试")#line:30
    return None #line:31
def lottery_request (O00000OOO0OO0OOOO ):#line:33
    O0OOO00O0OOO00OO0 ={"openid":O00000OOO0OO0OOOO ,"score":score ,"tempId":"null"}#line:38
    OOOO0000O00O0O000 =requests .post (lottery_url ,headers =headers ,data =O0OOO00O0OOO00OO0 )#line:39
    return OOOO0000O00O0O000 .json ()#line:40
def share_request (O0O0O00O0O00O0O00 ):#line:42
    OOOO0O0OO0000O0O0 ={"openid":O0O0O00O0O00O0O00 ,"from":"1","target":"0"}#line:47
    OO00OOOO00000O000 =requests .post (share_url ,headers =headers ,data =OOOO0O0OO0000O0O0 )#line:48
    return OO00OOOO00000O000 .json ()#line:49
def push_result (O00OOOO0O0OO0O0OO ,O0OOOOOOO0OOOOOO0 ):#line:51
    O0O000OO0O000000O ='http://www.pushplus.plus/send'#line:52
    OO000O0O0000O0O0O ={"token":pushplus_token ,"title":O00OOOO0O0OO0O0OO ,"content":O0OOOOOOO0OOOOOO0 }#line:57
    O00O00OO00OO0OOO0 =requests .post (O0O000OO0O000000O ,data =json .dumps (OO000O0O0000O0O0O ))#line:58
    if O00O00OO00OO0OOO0 .status_code ==200 :#line:59
        print ("推送成功:",O00O00OO00OO0OOO0 .json ())#line:60
    else :#line:61
        print ("推送失败:",O00O00OO00OO0OOO0 .text )#line:62
def main ():#line:64
    global global_results #line:65
    global_results ={}#line:66
    O000000O0OO000000 =[]#line:67
    for O0O00OOO00O0OOOOO in dmlcks :#line:69
        OO0O0OOO0OOOO0OOO =O0O00OOO00O0OOOOO ["openid"]#line:70
        OOO00000O000O000O =O0O00OOO00O0OOOOO ["remark"]#line:71
        print (f"🔄 正在处理 {OOO00000O000O000O}...")#line:72
        OOO000OOOOOO0OOOO =0 #line:73
        O0O0O000OO0O0O000 =True #line:74
        OOO00OO00000OO0OO =[]#line:75
        try :#line:77
            while OOO000OOOOOO0OOOO <9 :#line:78
                O0OO00O00O0O0OOOO =lottery_request (OO0O0OOO0OOOO0OOO )#line:79
                if O0OO00O00O0O0OOOO :#line:80
                    if O0OO00O00O0O0OOOO ['statusCode']==0 :#line:81
                        OO00OOO0000O00OOO =O0OO00O00O0O0OOOO ['content']['name']#line:82
                        O0OO0O000OOOOO0OO ="🍰"if "蛋挞"in OO00OOO0000O00OOO else "🥤"#line:83
                        print (f"🎉 {OOO00000O000O000O} 抽奖成功: {O0OO0O000OOOOO0OO} {OO00OOO0000O00OOO}")#line:84
                        OOO00OO00000OO0OO .append (f"{O0OO0O000OOOOO0OO} {OO00OOO0000O00OOO}")#line:85
                        OOO000OOOOOO0OOOO +=1 #line:86
                        if "披萨"in OO00OOO0000O00OOO :#line:87
                            O000000O0OO000000 .append (OOO00000O000O000O )#line:88
                    elif O0OO00O00O0O0OOOO ['statusCode']==11 and O0O0O000OO0O0O000 :#line:89
                        print (f"🔄 {OOO00000O000O000O} 抽奖次数不足，尝试分享以获取额外机会")#line:90
                        OO0000OOO0O0O0O00 =share_request (OO0O0OOO0OOOO0OOO )#line:91
                        if OO0000OOO0O0O0O00 ['statusCode']==0 :#line:92
                            print (f"🔄 {OOO00000O000O000O} 分享成功，继续抽奖")#line:93
                        elif OO0000OOO0O0O0O00 ['statusCode']==11 :#line:94
                            print (f"⏰ {OOO00000O000O000O} 今日分享已用完，请明日再来")#line:95
                            O0O0O000OO0O0O000 =False #line:96
                        else :#line:97
                            print (f"❌ {OOO00000O000O000O} 分享失败，状态码：{OO0000OOO0O0O0O00['statusCode']}，错误信息：{OO0000OOO0O0O0O00.get('errorMessage')}")#line:98
                            OOO00OO00000OO0OO .append (f"❌ {OOO00000O000O000O} 分享失败：{OO0000OOO0O0O0O00.get('errorMessage')}")#line:99
                            break #line:100
                    else :#line:101
                        print (f"❌ {OOO00000O000O000O} 抽奖失败，状态码：{O0OO00O00O0O0OOOO['statusCode']}，错误信息：{O0OO00O00O0O0OOOO.get('errorMessage')}")#line:102
                        OOO00OO00000OO0OO .append (f"❌ {OOO00000O000O000O} 抽奖失败：{O0OO00O00O0O0OOOO.get('errorMessage')}")#line:103
                        break #line:104
                else :#line:105
                    OOO00OO00000OO0OO .append (f"❌ {OOO00000O000O000O} 抽奖请求失败，放弃重试")#line:106
                    break #line:107
                if 'extra'in O0OO00O00O0O0OOOO :#line:109
                    O0O0O000OO0O0O000 =O0OO00O00O0O0OOOO ['extra']['sharingNum']>0 #line:110
                time .sleep (1 )#line:112
        except Exception as OOOOO00000000O0O0 :#line:113
            print (f"❌ {OOO00000O000O000O} 发生错误: {OOOOO00000000O0O0}")#line:114
            OOO00OO00000OO0OO .append (f"❌ {OOO00000O000O000O} 发生错误: {OOOOO00000000O0O0}")#line:115
        global_results [OOO00000O000O000O ]=OOO00OO00000OO0OO #line:117
    if global_results :#line:120
        O0OOOOO000OOOO00O =""#line:121
        for OOO00000O000O000O ,OOOOO0OOOO0O0OOO0 in global_results .items ():#line:122
            if OOOOO0OOOO0O0OOO0 :#line:123
                O0OOOOO000OOOO00O +=f"📟 {OOO00000O000O000O} 抽奖结果\n"+"\n".join (OOOOO0OOOO0O0OOO0 )+"\n\n"#line:124
        if O000000O0OO000000 :#line:125
            O0OO00O0OOOOO00OO =f"🍕 恭喜！以下账号抽中达美乐披萨卷："+", ".join (O000000O0OO000000 )#line:126
        else :#line:127
            O0OO00O0OOOOO00OO ="🎟️ 达美乐抽奖推送结果"#line:128
        push_result (O0OO00O0OOOOO00OO ,O0OOOOO000OOOO00O .strip ())#line:129
    print ("🏁 所有账号处理完成")#line:131
if __name__ =="__main__":#line:133
    main ()
