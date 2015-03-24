function check_pid(source,args)
{
	var tid = args.Value.toUpperCase();
	if (tid.length !=10)
	{
		args.IsValid = false;
		return;
	}

	var ch = tid.charAt(0);
	if (ch < 'A' || ch > 'Z')
	{
		args.IsValid = false;
		return;
	}

/*  check Residence permit, mask this!!
	if (tid.charAt(1) < '1' || tid.charAt(1) > '2')
	{
		args.IsValid = false;
		return;
	}
*/

	for (var i=2;i<=9;i++)
	{
		if(tid.charAt(i) < '0' || tid.charAt(i) > '9')
		{
			args.IsValid = false;
			return;
		}
	}

	var chksum=0;
	var alphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var chv = alphabet.indexOf(ch)+65;
	if (ch>='A' && ch<='H'){
		chksum=Math.floor((chv-55)/10)+((chv-55)%10)*9;}
	else if (ch>='J' && ch<='N'){
		chksum=Math.floor((chv-56)/10)+((chv-56)%10)*9;}
	else if (ch>='P' && ch<='V'){
		chksum=Math.floor((chv-57)/10)+((chv-57)%10)*9;}
	else switch(ch){
		case 'X' : chksum=3; break;
		case 'Y' : chksum=12; break;
		case 'W' : chksum=21; break;
		case 'Z' : chksum=30; break;
		case 'I' : chksum=39; break;
		case 'O' : chksum=48; break;
	}

	var ArabicNumber ="0123456789";
	for (i=1;i<=8;i++){
		chksum += ArabicNumber.indexOf(tid.charAt(i))*(9-i);
	}
	
	chksum += ArabicNumber.indexOf(tid.charAt(9));	          
	if (chksum%10 == 0)
	{
		//personalID is Good...
		args.IsValid = true;
		return;
	}
	//else
	//{
	//	args.IsValid = false;	         
	//}


	//if personalID is bad,
	//need check [Residence permit]


	if (tid.length != 10)
	{
		args.IsValid = false;
		return;
	}

	if (isNaN(tid.substr(2,8)) || (tid.substr(0,1) < "A" || tid.substr(0,1) > "Z") || (tid.substr(1,1) < "A" || tid.substr(1,1) > "Z"))
	{
		args.IsValid = false;
		return;
	}

	var head="ABCDEFGHJKLMNPQRSTUVXYWZIO";
	myRID = (head.indexOf(tid.substr(0,1))+10) +''+ ((head.indexOf(tid.substr(1,1))+10)%10) +''+ tid.substr(2,8)

	s = parseInt(myRID.substr(0,1)) + 
	parseInt(myRID.substr(1,1)) * 9 + 
	parseInt(myRID.substr(2,1)) * 8 + 
	parseInt(myRID.substr(3,1)) * 7 + 			
	parseInt(myRID.substr(4,1)) * 6 + 
	parseInt(myRID.substr(5,1)) * 5 + 
	parseInt(myRID.substr(6,1)) * 4 + 
	parseInt(myRID.substr(7,1)) * 3 + 
	parseInt(myRID.substr(8,1)) * 2 + 
	parseInt(myRID.substr(9,1)) + 
	parseInt(myRID.substr(10,1));

	//
	if ((s % 10) != 0)
	{
		args.IsValid = false;
	}
	else
	{
		args.IsValid = true;
	}

	return;
}