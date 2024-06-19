@if (@X)==(@Y) @end /* JScript comment
    @echo off

    rem :: the first argument is the script name as it will be used for proper help message
    cscript //E:JScript //nologo "%~f0" %*

    exit /b %errorlevel%

@if (@X)==(@Y) @end JScript comment */

////// 
FSOObj = new ActiveXObject("Scripting.FileSystemObject");
var ARGS = WScript.Arguments;
if (ARGS.Length < 1 ) {
 WScript.Echo("No file passed");
 WScript.Quit(1);
}
var filename=ARGS.Item(0);
var objShell=new ActiveXObject("Shell.Application");
/////


//fso
ExistsItem = function (path) {
    return FSOObj.FolderExists(path)||FSOObj.FileExists(path);
}

getFullPath = function (path) {
    return FSOObj.GetAbsolutePathName(path);
}
//

//paths
getParent = function(path){
    var splitted=path.split("\\");
    var result="";
    for (var s=0;s<splitted.length-1;s++){
        if (s==0) {
            result=splitted[s];
        } else {
            result=result+"\\"+splitted[s];
        }
    }
    return result;
}


getName = function(path){
    var splitted=path.split("\\");
    return splitted[splitted.length-1];
}
//

function main(filename){
    if (!ExistsItem(filename)) {
        WScript.Echo(filename + " does not exist");
        WScript.Quit(2);
    }
    var fullFilename=getFullPath(filename);
    var namespace=getParent(fullFilename);
    var name=getName(fullFilename);
    var objFolder=objShell.NameSpace(namespace);
    var objItem=objFolder.ParseName(name);
    //https://msdn.microsoft.com/en-us/library/windows/desktop/bb787870(v=vs.85).aspx
    WScript.Echo(" -------------- ");
    WScript.Echo(filename + " : ");
    WScript.Echo(objFolder.GetDetailsOf(objItem,-1));

}

var items = ['Bata1.png','Bata10.png','Bata2.png','Bata3.png','Bata4.png','Bata5.png','Bata6.png','Bata7.png','Bata8.png','Bata9.png','Blusa1.png','Blusa2.png','Blusa3.png','Blusa4.png','Blusa5.png','Blusa6.png','Camiseta1.png','Camiseta2.png','info.bat','infofile.txt','JuegoBebita1.png','JuegoBebita2.png','JuegoCuna1.png','JuegoCuna2.png','JuegoCuna3.png','JuegoCuna4.png','JuegoCuna5.png','JuegoCuna6.png','JuegoCuna7.png','JuegoNinno1.png','JuegoNinno2.png','JuegoSalon1.png','JuegoSalon2.png','JuegoSalon3.png','JuegoVaron.png','list.txt','MonoHembra1.png','MonoHembra2.png','Pannal1.png','Pannal2.png','Pannal3.png','Pannal4.png','Pannal5.png','Pannal6.png','Pannal7.png','ProductBackground.png','PulloverVaron1.png','PulloverVaron2.png','PulloverVaron3.png','PulloverVaron4.png','PulloverVaron5.png','PulloverVaron6.png','Salla1.png','ShortHembra1.png','ShortHembra2.png','ShortHembra3.png','ShortVaron1.png','ShortVaron2.png','ShortVaron3.png','ShortVaron4.png','ShortVaron5.png','ShortVaron6.png','Tetera.png'];
for(var item in items)
	main(items[item]);