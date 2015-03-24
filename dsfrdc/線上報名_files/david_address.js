//國家縣市
function CountryOptions(column,source,args){
	column.options[1] = new Option('台北巿','台北巿');
	column.options[2] = new Option('基隆巿','基隆巿');
	column.options[3] = new Option('新北市','新北市'); //台北縣
	column.options[4] = new Option('宜蘭縣','宜蘭縣');
	column.options[5] = new Option('新竹巿','新竹巿');
	column.options[6] = new Option('新竹縣','新竹縣');
	column.options[7] = new Option('桃園縣','桃園縣');
	column.options[8] = new Option('苗栗縣','苗栗縣');
	column.options[9] = new Option('台中巿','台中巿');
	//column.options[10] = new Option('---','---'); //台中縣
	column.options[10] = new Option('彰化縣','彰化縣');
	column.options[11] = new Option('南投縣','南投縣');
	column.options[12] = new Option('嘉義巿','嘉義巿');
	column.options[13] = new Option('嘉義縣','嘉義縣');
	column.options[14] = new Option('雲林縣','雲林縣');
	column.options[15] = new Option('台南巿','台南巿');
	//column.options[17] = new Option('---','---'); //台南縣
	column.options[16] = new Option('高雄巿','高雄巿');
	//column.options[19] = new Option('---','---'); //高雄縣
	column.options[17] = new Option('澎湖縣','澎湖縣');
	column.options[18] = new Option('屏東縣','屏東縣');
	column.options[19] = new Option('台東縣','台東縣');
	column.options[20] = new Option('花蓮縣','花蓮縣');
	column.options[21] = new Option('金門縣','金門縣');   
	column.options[22] = new Option('連江縣馬祖','連江縣馬祖');   
}	

//區域
function showpage(column, menuList, seq)
{
	var page_index=menuList.selectedIndex;
	var page_html=menuList.options[page_index].value;

	if (page_index == 0)
	{
		count1= 1
		setcode(menuList,column, "", 000, seq)
	}
	else if (page_index == 1)
	{
		count1= 1
		setcode(menuList,column, "中正區", 100, seq)
		setcode(menuList,column, "大同區", 103, seq)    
		setcode(menuList,column, "中山區", 104, seq)   
		setcode(menuList,column, "松山區", 105, seq) 
		setcode(menuList,column, "大安區", 106, seq) 
		setcode(menuList,column, "萬華區", 108, seq)
		setcode(menuList,column, "信義區", 110, seq) 
		setcode(menuList,column, "士林區", 111, seq)
		setcode(menuList,column, "北投區", 112, seq)
		setcode(menuList,column, "內湖區", 114, seq)
		setcode(menuList,column, "南港區", 115, seq)
		setcode(menuList,column, "文山區", 116, seq)
	}   
	else if (page_index == 2 )
	{
		count1 = 1   
		setcode(menuList,column, "仁愛區", 200, seq)
		setcode(menuList,column, "信義區", 201, seq)
		setcode(menuList,column, "中正區", 202, seq)
		setcode(menuList,column, "中山區", 203, seq)
		setcode(menuList,column, "安樂區", 204, seq)                                 
		setcode(menuList,column, "暖暖區", 205, seq)
		setcode(menuList,column, "七堵區", 206, seq)                                                                  
	}
	else if (page_index == 3 )  //新北市
	{
		count1 = 1    
		setcode(menuList,column, "萬里區", 207, seq)
		setcode(menuList,column, "金山區", 208, seq)
		setcode(menuList,column, "板橋區", 220, seq)
		setcode(menuList,column, "汐止區", 221, seq)
		setcode(menuList,column, "深坑區", 222, seq)
		setcode(menuList,column, "石碇區", 223, seq)
		setcode(menuList,column, "瑞芳區", 224, seq)
		setcode(menuList,column, "平溪區", 226, seq)
		setcode(menuList,column, "雙溪區", 227, seq)
		setcode(menuList,column, "貢寮區", 228, seq)
		setcode(menuList,column, "新店區", 231, seq)
		setcode(menuList,column, "坪林區", 232, seq)
		setcode(menuList,column, "烏來區", 233, seq)
		setcode(menuList,column, "永和區", 234, seq)
		setcode(menuList,column, "中和區", 235, seq)
		setcode(menuList,column, "土城區", 236, seq)
		setcode(menuList,column, "三峽區", 237, seq) 
		setcode(menuList,column, "樹林區", 238, seq)
		setcode(menuList,column, "鶯歌區", 239, seq)
		setcode(menuList,column, "三重區", 241, seq)
		setcode(menuList,column, "新莊區", 242, seq)
		setcode(menuList,column, "泰山區", 243, seq)
		setcode(menuList,column, "林口區", 244, seq)
		setcode(menuList,column, "蘆洲區", 247, seq)
		setcode(menuList,column, "五股區", 248, seq)
		setcode(menuList,column, "八里區", 249, seq)
		setcode(menuList,column, "淡水區", 251, seq)
		setcode(menuList,column, "三芝區", 252, seq)
		setcode(menuList,column, "石門區", 253, seq)  
	  
	}
	else if (page_index == 4 )
	{
		count1 = 1      
		setcode(menuList,column, "宜蘭市", 260, seq)
		setcode(menuList,column, "頭城鎮", 261, seq)
		setcode(menuList,column, "礁溪鄉", 262, seq)
		setcode(menuList,column, "壯圍鄉", 263, seq)
		setcode(menuList,column, "員山鄉", 264, seq)
		setcode(menuList,column, "羅東鎮", 265, seq)
		setcode(menuList,column, "三星鄉", 266, seq)
		setcode(menuList,column, "大同鄉", 267, seq)
		setcode(menuList,column, "五結鄉", 268, seq)
		setcode(menuList,column, "冬山鄉", 269, seq)
		setcode(menuList,column, "蘇澳鎮", 270, seq)
		setcode(menuList,column, "南澳鎮", 271, seq) 
	  
	}
	else if ( page_index == 5 )
	{
		count1 = 1        
		setcode(menuList,column, "新竹市", 300, seq)
	}
	else if (page_index == 6 ) 
	{
		count1 = 1      
		setcode(menuList,column, "竹北市", 302, seq)
		setcode(menuList,column, "湖口鄉", 303, seq)
		setcode(menuList,column, "新豐鄉", 304, seq)
		setcode(menuList,column, "新埔鎮", 305, seq)
		setcode(menuList,column, "關西鎮", 306, seq)
		setcode(menuList,column, "芎林鄉", 307, seq)
		setcode(menuList,column, "寶山鄉", 308, seq)
		setcode(menuList,column, "竹東鎮", 310, seq)
		setcode(menuList,column, "五峰鄉", 311, seq)
		setcode(menuList,column, "橫山鄉", 312, seq)
		setcode(menuList,column, "尖石鄉", 313, seq)
		setcode(menuList,column, "北埔鄉", 314, seq)
		setcode(menuList,column, "峨眉鄉", 315, seq)
	}
	else if (page_index == 7 )
	{
		count1 = 1 
		setcode(menuList,column, "中壢市", 320, seq) 
		setcode(menuList,column, "平鎮市", 324, seq)  
		setcode(menuList,column, "龍潭鄉", 325, seq)  
		setcode(menuList,column, "楊梅鎮", 326, seq)  
		setcode(menuList,column, "新屋鄉", 327, seq)  
		setcode(menuList,column, "觀音鄉", 328, seq) 
		setcode(menuList,column, "桃園市", 330, seq)
		setcode(menuList,column, "龜山鄉", 333, seq) 
		setcode(menuList,column, "八德市", 334, seq)
		setcode(menuList,column, "大溪鎮", 335, seq) 
		setcode(menuList,column, "復興鄉", 336, seq) 
		setcode(menuList,column, "大園鄉", 337, seq)
		setcode(menuList,column, "蘆竹鄉", 338, seq)    

	}
	else if (page_index == 8 ) 
	{
		count1 = 1 
		setcode(menuList,column, "竹南鎮", 350, seq) 
		setcode(menuList,column, "頭份鎮", 351, seq) 
		setcode(menuList,column, "三灣鄉", 352, seq) 
		setcode(menuList,column, "南庄鄉", 353, seq) 
		setcode(menuList,column, "獅潭鄉", 354, seq) 
		setcode(menuList,column, "後龍鎮", 356, seq) 
		setcode(menuList,column, "通霄鎮", 357, seq) 
		setcode(menuList,column, "苑裡鎮", 358, seq)
		setcode(menuList,column, "苗栗市", 360, seq) 
		setcode(menuList,column, "造橋鄉", 361, seq) 
		setcode(menuList,column, "頭屋鄉", 362, seq)
		setcode(menuList,column, "公館鄉", 363, seq)
		setcode(menuList,column, "大湖鄉", 364, seq) 
		setcode(menuList,column, "泰安鄉", 365, seq) 
		setcode(menuList,column, "銅鑼鄉", 366, seq) 
		setcode(menuList,column, "三義鄉", 367, seq) 
		setcode(menuList,column, "西湖鄉", 368, seq) 
		setcode(menuList,column, "卓蘭鎮", 369, seq)      
		 
	}     
	else if (page_index == 9)
	{
		count1 = 1 
		setcode(menuList,column, "中區", 400, seq)
		setcode(menuList,column, "東區", 401, seq) 
		setcode(menuList,column, "南區", 402, seq) 
		setcode(menuList,column, "西區", 403, seq) 
		setcode(menuList,column, "北區", 404, seq) 
		setcode(menuList,column, "北屯區", 406, seq)
		setcode(menuList,column, "西屯區", 407, seq)
		setcode(menuList,column, "南屯區", 408, seq)   

		setcode(menuList,column, "太平區", 411, seq)
		setcode(menuList,column, "大里區", 412, seq)
		setcode(menuList,column, "霧峰區", 413, seq)
		setcode(menuList,column, "烏日區", 414, seq)
		setcode(menuList,column, "豐原區", 420, seq)
		setcode(menuList,column, "后里區", 421, seq)
		setcode(menuList,column, "石岡區", 422, seq)
		setcode(menuList,column, "東勢區", 423, seq)
		setcode(menuList,column, "和平區", 424, seq)
		setcode(menuList,column, "新社區", 426, seq)
		setcode(menuList,column, "潭子區", 427, seq)
		setcode(menuList,column, "大雅區", 428, seq)
		setcode(menuList,column, "神岡區", 429, seq)
		setcode(menuList,column, "大肚區", 432, seq)
		setcode(menuList,column, "沙鹿區", 433, seq)
		setcode(menuList,column, "龍井區", 434, seq)
		setcode(menuList,column, "梧棲區", 435, seq)
		setcode(menuList,column, "清水區", 436, seq)
		setcode(menuList,column, "大甲區", 437, seq)
		setcode(menuList,column, "外埔區", 438, seq)
		setcode(menuList,column, "大安區", 439, seq)  
	  
	}
	else if (page_index == 10 )
	{
		count1 = 1     
		setcode(menuList,column, "彰化市", 500, seq)
		setcode(menuList,column, "芬園鄉", 502, seq)
		setcode(menuList,column, "花壇鄉", 503, seq)
		setcode(menuList,column, "秀水鄉", 504, seq)
		setcode(menuList,column, "鹿港鎮", 505, seq)
		setcode(menuList,column, "福興鄉", 506, seq)
		setcode(menuList,column, "線西鄉", 507, seq)
		setcode(menuList,column, "和美鎮", 508, seq)
		setcode(menuList,column, "伸港鄉", 509, seq)
		setcode(menuList,column, "員林鎮", 510, seq)
		setcode(menuList,column, "員林鎮", 510, seq)
		setcode(menuList,column, "社頭鄉", 511, seq)
		setcode(menuList,column, "永靖鄉", 512, seq)
		setcode(menuList,column, "埔心鄉", 513, seq)
		setcode(menuList,column, "溪湖鎮", 514, seq)
		setcode(menuList,column, "大村鄉", 515, seq) 
		setcode(menuList,column, "埔鹽鄉", 516, seq)
		setcode(menuList,column, "田中鎮", 520, seq)
		setcode(menuList,column, "北斗鎮", 521, seq) 
		setcode(menuList,column, "田尾鄉", 522, seq)
		setcode(menuList,column, "埤頭鄉", 523, seq)
		setcode(menuList,column, "溪州鄉", 524, seq)
		setcode(menuList,column, "竹塘鄉", 525, seq)
		setcode(menuList,column, "二林鎮", 526, seq)
		setcode(menuList,column, "大城鄉", 527, seq)
		setcode(menuList,column, "芳苑鄉", 528, seq)
		setcode(menuList,column, "二水鎮", 530, seq)    
		 
	}     
	else if (page_index == 11 ) 
	{
		count1 = 1      
		setcode(menuList,column, "南投市", 540, seq)
		setcode(menuList,column, "中寮鄉", 541, seq)
		setcode(menuList,column, "草屯鎮", 542, seq)
		setcode(menuList,column, "國姓鄉", 544, seq)
		setcode(menuList,column, "埔里鎮", 545, seq)
		setcode(menuList,column, "仁愛鄉", 546, seq)
		setcode(menuList,column, "名間鄉", 551, seq)
		setcode(menuList,column, "集集鎮", 552, seq)
		setcode(menuList,column, "水里鄉", 553, seq)
		setcode(menuList,column, "魚池鄉", 555, seq)
		setcode(menuList,column, "信義鄉", 555, seq)
		setcode(menuList,column, "竹山鎮", 557, seq)
		setcode(menuList,column, "鹿谷鄉", 558, seq)       
	}   
	else if (page_index == 12 )
	{
		count1 = 1       
		setcode(menuList,column, "嘉義市", 600, seq)
	}     
	else if (page_index == 13 ) 
	{
		count1 = 1      
		setcode(menuList,column, "番路鄉", 602, seq)
		setcode(menuList,column, "梅山鄉", 603, seq)
		setcode(menuList,column, "竹崎鄉", 604, seq)
		setcode(menuList,column, "阿里山", 605, seq)
		setcode(menuList,column, "中埔鄉", 606, seq)
		setcode(menuList,column, "大埔鄉", 607, seq)
		setcode(menuList,column, "水上鄉", 608, seq)
		setcode(menuList,column, "鹿草鄉", 611, seq)
		setcode(menuList,column, "太保市", 612, seq)
		setcode(menuList,column, "朴子市", 613, seq)
		setcode(menuList,column, "東石鄉", 614, seq)
		setcode(menuList,column, "六腳鄉", 615, seq)
		setcode(menuList,column, "新港鄉", 616, seq)
		setcode(menuList,column, "民雄鄉", 621, seq)
		setcode(menuList,column, "大林鎮", 622, seq)
		setcode(menuList,column, "溪口鄉", 623, seq)
		setcode(menuList,column, "義竹鄉", 624, seq)
		setcode(menuList,column, "布袋鎮", 625, seq)

	}
	else if (page_index == 14 )
	{
		count1 = 1 
		setcode(menuList,column, "斗南鎮", 630, seq) 
		setcode(menuList,column, "大埤鄉", 631, seq)  
		setcode(menuList,column, "虎尾鎮", 632, seq)  
		setcode(menuList,column, "土庫鎮", 633, seq)  
		setcode(menuList,column, "褒忠鄉", 634, seq)  
		setcode(menuList,column, "東勢鄉", 635, seq) 
		setcode(menuList,column, "台西鄉", 636, seq)  
		setcode(menuList,column, "崙背鄉",637, seq) 
		setcode(menuList,column, "麥寮鄉", 638, seq) 
		setcode(menuList,column, "斗六市", 640, seq) 
		setcode(menuList,column, "林內鄉", 643, seq) 
		setcode(menuList,column, "古坑鄉", 646, seq)
		setcode(menuList,column, "莿桐鄉", 647, seq)
		setcode(menuList,column, "西螺鎮", 648, seq) 
		setcode(menuList,column, "二崙鄉", 649, seq) 
		setcode(menuList,column, "北港鎮", 651, seq) 
		setcode(menuList,column, "水林鄉", 652, seq) 
		setcode(menuList,column, "口湖鄉", 653, seq)  
		setcode(menuList,column, "四湖鄉", 654, seq) 
		setcode(menuList,column, "元長鄉", 655, seq) 
		 
	}     
	else if (page_index == 15)
	{
		count1 = 1     
		setcode(menuList,column, "中西區", 700, seq) 
		setcode(menuList,column, "東區", 701, seq) 
		setcode(menuList,column, "南區", 702, seq) 
		setcode(menuList,column, "北區", 704, seq)
		setcode(menuList,column, "安平區", 708, seq) 
		setcode(menuList,column, "安南區", 709, seq)     

		setcode(menuList,column, "永康區", 710, seq) 
		setcode(menuList,column, "歸仁區", 711, seq)  
		setcode(menuList,column, "新化區", 712, seq)  
		setcode(menuList,column, "左鎮區", 713, seq)  
		setcode(menuList,column, "玉井區", 714, seq) 
		setcode(menuList,column, "楠西區", 715, seq) 
		setcode(menuList,column, "南化區", 716, seq) 
		setcode(menuList,column, "仁德區", 717, seq) 
		setcode(menuList,column, "關廟區", 718, seq) 
		setcode(menuList,column, "龍崎區", 719, seq) 
		setcode(menuList,column, "官田區", 720, seq)
		setcode(menuList,column, "麻豆區", 721, seq)
		setcode(menuList,column, "佳里區", 722, seq)
		setcode(menuList,column, "西港區", 723, seq)
		setcode(menuList,column, "七股區", 724, seq)
		setcode(menuList,column, "將軍區", 725, seq)
		setcode(menuList,column, "學甲區", 726, seq)
		setcode(menuList,column, "北門區", 727, seq)
		setcode(menuList,column, "新營區", 730, seq)
		setcode(menuList,column, "後壁區", 731, seq) 
		setcode(menuList,column, "白河區", 732, seq)
		setcode(menuList,column, "東山區", 733, seq)
		setcode(menuList,column, "六甲區", 734, seq)
		setcode(menuList,column, "下營區", 735, seq)
		setcode(menuList,column, "柳營區", 736, seq)
		setcode(menuList,column, "鹽水區", 737, seq)
		setcode(menuList,column, "善化區", 741, seq)
		setcode(menuList,column, "大內區", 742, seq)
		setcode(menuList,column, "山上區", 743, seq)
		setcode(menuList,column, "新市區", 744, seq)
		setcode(menuList,column, "安定區", 745, seq)     
		   
	}    
	else if (page_index == 16)
	{
		count1 = 1  
		setcode(menuList,column, "新興區", 800, seq)
		setcode(menuList,column, "前金區", 801, seq)
		setcode(menuList,column, "苓雅區", 802, seq)
		setcode(menuList,column, "鹽埕區", 803, seq)
		setcode(menuList,column, "鼓山區", 804, seq)
		setcode(menuList,column, "旗津區", 805, seq)
		setcode(menuList,column, "前鎮區", 806, seq)
		setcode(menuList,column, "三民區", 807, seq)
		setcode(menuList,column, "楠梓區", 811, seq)
		setcode(menuList,column, "小港區", 812, seq)
		setcode(menuList,column, "左營區", 813, seq)        

		setcode(menuList,column, "仁武區", 814, seq)
		setcode(menuList,column, "大社區", 815, seq)
		setcode(menuList,column, "岡山區", 820, seq) 
		setcode(menuList,column, "路竹區", 821, seq) 
		setcode(menuList,column, "阿蓮區", 822, seq) 
		setcode(menuList,column, "田寮區", 823, seq) 
		setcode(menuList,column, "燕巢區", 824, seq) 
		setcode(menuList,column, "橋頭區", 825, seq) 
		setcode(menuList,column, "梓官區", 826, seq) 
		setcode(menuList,column, "彌陀區", 827, seq) 
		setcode(menuList,column, "永安區", 828, seq) 
		setcode(menuList,column, "湖內區", 829, seq)  
		setcode(menuList,column, "鳳山區", 830, seq)
		setcode(menuList,column, "大寮區", 831, seq)
		setcode(menuList,column, "林園區", 832, seq)
		setcode(menuList,column, "鳥松區", 833, seq)
		setcode(menuList,column, "大樹區", 840, seq)
		setcode(menuList,column, "旗山區", 842, seq)
		setcode(menuList,column, "美濃區", 843, seq)
		setcode(menuList,column, "六龜區", 844, seq)
		setcode(menuList,column, "內門區", 845, seq)
		setcode(menuList,column, "杉林區", 846, seq)
		setcode(menuList,column, "甲仙區", 847, seq)
		setcode(menuList,column, "桃源區", 848, seq)
		setcode(menuList,column, "三民區", 849, seq) 
		setcode(menuList,column, "茂林區", 851, seq)
		setcode(menuList,column, "茄萣區", 852, seq)
	}       
	else if (page_index == 17 )
	{
		count1 = 1  
		setcode(menuList,column, "馬公市", 880, seq)
		setcode(menuList,column, "西嶼鄉", 881, seq)
		setcode(menuList,column, "望安鄉", 882, seq)
		setcode(menuList,column, "七美鄉", 883, seq)
		setcode(menuList,column, "白沙鄉", 884, seq)
		setcode(menuList,column, "湖西鄉", 885, seq)         
	}       
	else if (page_index == 18 )
	{
		count1 = 1  
		setcode(menuList,column, "屏東市", 900, seq)
		setcode(menuList,column, "三地門鄉", 901, seq)
		setcode(menuList,column, "霧台鄉", 902, seq)
		setcode(menuList,column, "瑪家鄉", 903, seq)
		setcode(menuList,column, "九如鄉", 904, seq)
		setcode(menuList,column, "里港鄉", 905, seq) 
		setcode(menuList,column, "高樹鄉", 906, seq) 
		setcode(menuList,column, "鹽埔鄉", 907, seq)
		setcode(menuList,column, "長治鄉", 908, seq)
		setcode(menuList,column, "麟洛鄉", 909, seq) 
		setcode(menuList,column, "竹田鄉", 911, seq)
		setcode(menuList,column, "內埔鄉", 912, seq) 
		setcode(menuList,column, "萬丹鄉", 913, seq) 
		setcode(menuList,column, "潮州鎮", 920, seq) 
		setcode(menuList,column, "泰武鄉", 921, seq) 
		setcode(menuList,column, "來義鄉", 922, seq)
		setcode(menuList,column, "萬巒鄉", 923, seq)
		setcode(menuList,column, "崁頂鄉", 924, seq) 
		setcode(menuList,column, "新埤鄉", 925, seq) 
		setcode(menuList,column, "南州鄉", 926, seq)
		setcode(menuList,column, "林邊鄉", 927, seq) 
		setcode(menuList,column, "東港鎮", 928, seq) 
		setcode(menuList,column, "琉球鄉", 929, seq)
		setcode(menuList,column, "佳冬鄉", 931, seq) 
		setcode(menuList,column, "新園鄉", 932, seq)
		setcode(menuList,column, "枋寮鄉", 940, seq) 
		setcode(menuList,column, "枋山鄉", 941, seq)  
		setcode(menuList,column, "春日鄉", 942, seq) 
		setcode(menuList,column, "獅子鄉", 943, seq)  
		setcode(menuList,column, "車城鄉", 944, seq) 
		setcode(menuList,column, "牡丹鄉", 945, seq) 
		setcode(menuList,column, "恆春鎮", 946, seq) 
		setcode(menuList,column, "滿州鄉", 947, seq)     
		 
	}
	else if (page_index == 19 )
	{
		count1 = 1      
		setcode(menuList,column, "台東市", 950, seq)
		setcode(menuList,column, "綠島鄉", 951, seq)
		setcode(menuList,column, "蘭嶼鄉", 952, seq) 
		setcode(menuList,column, "延平鄉", 953, seq) 
		setcode(menuList,column, "卑南鄉", 954, seq) 
		setcode(menuList,column, "鹿野鄉", 955, seq)
		setcode(menuList,column, "關山鎮", 956, seq) 
		setcode(menuList,column, "海端鄉", 957, seq) 
		setcode(menuList,column, "池上鄉", 958, seq) 
		setcode(menuList,column, "東河鄉", 959, seq)
		setcode(menuList,column, "成功鎮", 961, seq)
		setcode(menuList,column, "長濱鄉", 962, seq)
		setcode(menuList,column, "太麻里", 963, seq)
		setcode(menuList,column, "金峰鄉", 964, seq)
		setcode(menuList,column, "大武鄉", 965, seq)
		setcode(menuList,column, "達仁鄉", 966, seq)     
	}   
	else if (page_index == 20 )
	{
		count1 = 1
		setcode(menuList,column, "花蓮市", 970, seq)
		setcode(menuList,column, "新城鄉", 971, seq)
		setcode(menuList,column, "秀林鄉", 972, seq) 
		setcode(menuList,column, "吉安鄉", 973, seq) 
		setcode(menuList,column, "壽豐鄉", 974, seq) 
		setcode(menuList,column, "鳳林鎮", 975, seq)
		setcode(menuList,column, "光復鄉", 976, seq)
		setcode(menuList,column, "豐濱鄉", 977, seq)
		setcode(menuList,column, "瑞穗鄉", 978, seq) 
		setcode(menuList,column, "萬榮鄉", 979, seq)
		setcode(menuList,column, "玉里鎮", 981, seq) 
		setcode(menuList,column, "卓溪鄉", 982, seq)
		setcode(menuList,column, "富里鄉", 983, seq)    
	}   
	else if (page_index == 21 )
	{
		count1 = 1
		setcode(menuList,column, "金沙鎮", 890, seq)
		setcode(menuList,column, "金湖鎮", 891, seq)
		setcode(menuList,column, "金寧鄉", 892, seq)
		setcode(menuList,column, "金城鎮", 893, seq)
		setcode(menuList,column, "烈嶼鄉", 894, seq)
		setcode(menuList,column, "烏坵鄉", 896, seq)          
	}
	else if (page_index == 22 )
	{
		count1 = 1
		setcode(menuList,column, "南竿鄉", 209, seq)
		setcode(menuList,column, "北竿鄉", 210, seq)
		setcode(menuList,column, "莒光鄉", 211, seq)
		setcode(menuList,column, "東引鄉", 212, seq)
	}   
}  

//郵遞區號
function showzipcode(addressCol,areaValue,zipcodeCol)
{
	var ctid = areaValue.value;
	var targetstr = ctid.split("|");
	addressCol.value=targetstr[0];
	zipcodeCol.value=targetstr[1];
} 

//產生區域option
function setcode(country,column, str, code, seq)
{
	var city= country.value;
	count1 = count1 + 1
	column.selectedIndex = 0; 
	column.options.length = count1;     
	column.options[count1-1].text = str;

	//if (count1==2)
	//{
	//	column.options[count1-1].value = str + '|' + code;
	//}
	//else
	//{
		column.options[count1-1].value = city + str + '|' + code;
	//}
}