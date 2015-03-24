
function autoKeyIn(myValue)
{
	if(checkCodeText)
	{
		if(checkCodeText.value.length < 4)
		{
			checkCodeText.value = checkCodeText.value + myValue;
			checkCodeVal.value = checkCodeText.value + checkCodeID;
		}
	}
	
	return false;
};

function autoKeyDel()
{
	if(checkCodeText)
	{
		checkCodeText.value = "";
		checkCodeVal.value = "";
	}
	
	return false;
};

function vkeyInit()
{
	vkyStr = '';
	vkyStr += ('<table id=\"virtualKeyDiv\"> <tr> <td> ');
	vkyStr += ('    <b>請使用小鍵盤輸入驗證碼</b>');
	vkyStr += ('    <div id=\"virtualKeyboard\">');
	vkyStr += ('        <table id=\"virtualKeyTable\">');
	vkyStr += ('            <tr>');
	vkyStr += ('                <td>');
	vkyStr += ('                    <table border=\"1\" cellpadding=\"0\">');
	vkyStr += ('                        <tr>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'1\');\"><img src=\"vkey_img/1.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'2\');\"><img src=\"vkey_img/2.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'3\');\"><img src=\"vkey_img/3.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'4\');\"><img src=\"vkey_img/4.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'5\');\"><img src=\"vkey_img/5.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td>&nbsp;&nbsp;&nbsp;</td>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyDel();\"><img src=\"vkey_img/del.png\" border=\"0\"></button></td>');
	vkyStr += ('                        </tr>');
	vkyStr += ('                        <tr>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'6\');\"><img src=\"vkey_img/6.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'7\');\"><img src=\"vkey_img/7.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'8\');\"><img src=\"vkey_img/8.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'9\');\"><img src=\"vkey_img/9.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td><button onclick=\"return autoKeyIn(\'0\');\"><img src=\"vkey_img/0.png\" border=\"0\"></button></td>');
	vkyStr += ('                            <td>&nbsp;&nbsp;&nbsp;</td>');
	vkyStr += ('                            <td>&nbsp;&nbsp;&nbsp;</td>');
	vkyStr += ('                        </tr>');
	vkyStr += ('                    </table>');
	vkyStr += ('                </td>');
	vkyStr += ('            </tr>');
	vkyStr += ('        </table>');
	vkyStr += ('    </div>');
	vkyStr += ('</td> </tr> </table>');

	document.getElementById('vvKey').innerHTML = vkyStr;
};

if(window.addEventListener) //FireFox
{
	window.addEventListener('load', function() { vkeyInit(); }, false);
}
else if(window.attachEvent) //IE
{
	window.attachEvent('onload', function() { vkeyInit(); });
};
