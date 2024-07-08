#2024-07-08 03:52:36
import random 
import time 
import os 
import requests 
def sign_in(O0OOOOO0OO0000OOO):
 OO00O0O00O0O0O0OO={"Content-Type":"application/json","Host":"ys.shajixueyuan.com","Referer":"https://servicewechat.com/wxebdf2c44a2a714c2/70/page-frame.html","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13)XWEB/9185","token":f"{O0OOOOO0OO0000OOO}","version":"1.0.13.2","xweb_xhr":"1"}
 OO0O00000OOOOO00O={}
 OO0O000OO0OO000OO=requests.post('https://ys.shajixueyuan.com/api/user_sign/sign',headers=OO00O0O00O0O0O0OO,json=OO0O00000OOOOO00O)
 print(OO0O000OO0OO000OO.text)
def Re(OOO0O000OOO0OO000):
 OO0O0OOO000OOO000={"Accept":"application/json","Referer":"https://servicewechat.com/wxebdf2c44a2a714c2/70/page-frame.html","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13)XWEB/9185","token":f"{OOO0O000OOO0OO000}","version":"1.0.13.2","xweb_xhr":"1"}
 OOO00OOO0OO000OOO={"quest_id":4}
 OO0O0OOO0OOOOOO00=requests.post('https://ys.shajixueyuan.com/api/quest.quest/issueRewards',headers=OO0O0OOO000OOO000,json=OOO00OOO0OO000OOO)
 print(OO0O0OOO0OOOOOO00.text)
def info(OOO0O0O00OOO00O0O):
 OO0OO0OOOOO0000O0={"Accept":"application/json","Content-Type":"application/json","Host":"ys.shajixueyuan.com","Referer":"https://servicewechat.com/wxebdf2c44a2a714c2/70/page-frame.html","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13)XWEB/9185","token":f"{OOO0O0O00OOO00O0O}","version":"1.0.13.2","xweb_xhr":"1"}
 OOOOOO00000O0OOOO=requests.get('https://ys.shajixueyuan.com/api/user/info',headers=OO0OO0OOOOO0000O0)
 if OOOOOO00000O0OOOO.status_code==200:
  OOOOOO00000O0OOOO=OOOOOO00000O0OOOO.json()
  print("果子剩余:",OOOOOO00000O0OOOO['data']['remaining_fruits'])
  return OOOOOO00000O0OOOO['data']['remaining_fruits']
def tx(O000000OO00OOOOO0,OOO000OO0OOOO00O0):
 O00OO000OOO00O0OO={"Accept":"application/json","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9","Connection":"keep-alive","Content-Length":"55","Content-Type":"application/json","Host":"ys.shajixueyuan.com","Referer":"https://servicewechat.com/wxebdf2c44a2a714c2/70/page-frame.html","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13)XWEB/9185","token":f"{O000000OO00OOOOO0}","version":"1.0.13.2","xweb_xhr":"1"}
 O00000O000OO00O0O={"fruit_withdraw_amount":f"{OOO000OO0OOOO00O0}","pay_gateway":"alipay"}
 OO0O0OOO0O000OO0O=requests.post('https://ys.shajixueyuan.com/api/user.user_withdraw/apply',headers=O00OO000OOO00O0OO,json=O00000O000OO00O0O)
 print(OO0O0OOO0O000OO0O.text)
def print_ascii_art():
 print("// ┏┓   ┏┓")
 print("// ┏┛┻━━━┛┻┓")
 print("// ┃       ┃")
 print("// ┃   ━   ┃")
 print("// ┃ ┳┛ ┗┳ ┃")
 print("// ┃       ┃")
 print("// ┃   ┻   ┃")
 print("// ┃       ┃")
 print("// ┗━┓   ┏━┛")
 print("// ┃   ┃ 分享群：")
 print("// ┃   ┃ 780261548")
 print("// ┃   ┗━━━┓")
 print("// ┃       ┣┓")
 print("// ┃       ┏┛")
 print("// ┗┓┓┏━┳┓┏┛")
 print("// ┃┫┫ ┃┫┫")
 print("// ┗┻┛ ┗┻┛")
if __name__=='__main__':
 print_ascii_art()
 cookie_list=os.getenv('dfjs')
 if cookie_list:
  if "@"in cookie_list:
   cookie_list=cookie_list.split('@')
  else:
   cookie_list=cookie_list.split(' ')
  for index,_ in enumerate(cookie_list):
   print("当前为:第{}个".format(index+1))
   try:
    info(_)
    print("="*10)
    time.sleep(random.uniform(1,3))
    Re(_)
    print("="*10)
    time.sleep(random.uniform(1,3))
    sign_in(_)
    print("="*10)
    time.sleep(random.uniform(1,3))
    balance=info(_)
    if balance!=0:
     print("="*8)
     tx(_,balance)
    else:
     print("不进行tx")
   except Exception as e:
    print("出现错误:",e)
    continue 
 else:
  print("变量不存在")
