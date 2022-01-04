<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link rel="apple-touch-icon" href="apple-touch-icon.png">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>Uranus IDE - 技術支援</title>

    <!-- Bootstrap -->
    <link href="js/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="js/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- twse -->
    <link href="js/twse/css/twse.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="js/nprogress/nprogress.css" rel="stylesheet">
    <!-- iCheck -->
    <link href="js/iCheck/skins/flat/green.css" rel="stylesheet">
	  <link rel="stylesheet" type="text/css" href="scss/imagehover.min.css">
    <link rel="stylesheet" type="text/css" href="scss/style.css">
    <!-- Custom Theme Style -->
    <link href="build/css/custom.min.css" rel="stylesheet">
    <link href="scss/style_add.css" rel="stylesheet">
  </head>

  <body class="nav-md">
  	<!--Navigation bar-->
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <i class="fa fa-cog"></i>
            </button>
            <a class="navbar-brand" href="main.php" id="uranusLogo"></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
              <li><a>技術支援</a></li>
              <li><a href="main.php">首頁</a></li>
            </ul>
            </div>
          </div>
        </nav>
        <!--/ Navigation bar-->
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            	<?php require_once("./side.php"); ?>
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>
              <h1>技術說明</h1><!-- 技術子頁主標題 -->
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel x_panel_2">
                    <div class="page-title">
                      <div>
                        <h3>Sample</h3>
                      </div>
                    </div>
                    <div class="clearfix mart20"></div>
                    <!-- BarCode toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">BarCode</h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <!-- 說明 <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and return its code as a string.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">Result</strong> - a string containing the code of the page</p>
                                </div> -->
                                <pre class="ac mart20">
<strong class="blk">Procedure</strong> Page1OnImage4Click;
<strong class="blk">begin</strong>
Showmessage('This Demo do not Copying to clipboard.')
<strong class="blk">end</strong>;                                                   
                    
<strong class="blk">Procedure</strong> Page1On<strong>BarCode</strong>Scanner1Scan;
<strong class="blk">begin</strong>
LabelScanT.text:= <strong>barcode</strong>scanner1.scantext;
<strong class="blk">end</strong>;

{Main  <strong class="blk">Program</strong>}
<strong class="blk">var</strong>
s : <strong class="blk">string</strong>;                 
<strong class="blk">begin</strong>    
<strong>barcode</strong>scanner1.stop;     
<strong>barcode</strong>scanner1.start;   
<strong class="blk">end</strong>.              
                  	    		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- BarCode toggle區結束 -->
                  
                  <!-- DeviceInfo toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">DeviceInfo</h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <!-- 說明 <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and return its code into a stream passed as argument.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">SaveTo</strong> - a stream into which you want the page code to be written<br>
<strong class="blk">Result</strong> - a number of bytes written into the stream</p>
                                </div> -->
                                <pre class="ac mart20">
<strong class="blk">Procedure</strong> Page1OnTimer1Timer;
<strong class="blk">begin</strong>
Label1C4.text:= inttostr(API.<strong>deviceinfo</strong>.CPUUsage)+'%';
<strong class="blk">end</strong>;

<strong class="blk">procedure</strong> OffImage;
<strong class="blk">begin</strong>
ImageC.visible := False;
ImageD.visible := False;            
ImageS.visible := False; 
<strong class="blk">end</strong>; 

<strong class="blk">procedure</strong> OffPanel;
<strong class="blk">begin</strong>
Panel1.visible := False;
Panel2.visible := False;
Panel3.visible := False; 
<strong class="blk">end</strong>;  

<strong class="blk">Procedure</strong> Page1OnRectangle22Click;
<strong class="blk">begin</strong>
OffImage; 
OffPanel;
ImageS.visible := True;  
Panel3.visible := True;                  
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> Page1OnRectangle21Click;
<strong class="blk">begin</strong>
OffImage; 
OffPanel;
ImageD.visible := True;  
Panel2.visible := True;
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> Page1OnRectangle20Click;
<strong class="blk">begin</strong>
OffImage;  
OffPanel;
ImageC.visible := True; 
Panel1.visible := True;
<strong class="blk">end</strong>;

                      
{Main <strong class="blk">Program</strong>}
<strong class="blk">begin</strong> 
Rectangle20.width:= trunc(Rectangle23.width/3);
Rectangle22.width:= trunc(Rectangle23.width/3);
Label1C1.text:= API.<strong>deviceinfo</strong>.PlatformType;
Label1C2.text:= API.<strong>deviceinfo</strong>.Architecture;
Label1C3.text:= booleantostr(API.<strong>deviceinfo</strong>.IsIntel); 
Label1C4.text:= inttostr(API.<strong>deviceinfo</strong>.CPUUsage)+'%';

Label2C1.text:= API.<strong>deviceinfo</strong>.Device;
Label2C2.text:= API.<strong>deviceinfo</strong>.Lang;
Label2C3.text:= API.<strong>deviceinfo</strong>.ScreenPhis;
Label2C4.text:= API.<strong>deviceinfo</strong>.ScreenLogic;
Label2C5.text:= floattostr(API.<strong>deviceinfo</strong>.Scale);
Label2C6.text:= API.<strong>deviceinfo</strong>.DiskSize;
Label2C7.text:= API.<strong>deviceinfo</strong>.DiskFreeSize;
Label2C8.text:= API.<strong>deviceinfo</strong>.TotalMemory;
Label2C9.text:= API.<strong>deviceinfo</strong>.AvailableMemory;

<strong class="blk">if</strong> API.<strong>deviceinfo</strong>.Architecture2 = ''
<strong class="blk">then</strong> Label3C1.text := 'N/A'
else Label3C1.text := API.<strong>deviceinfo</strong>.Architecture2;
<strong class="blk">if</strong> API.<strong>deviceinfo</strong>.MacAddress = ''
<strong class="blk">then</strong> Label3C2.text := 'N/A'
<strong class="blk">else</strong> Label3C2.text := API.<strong>deviceinfo</strong>.MacAddress;
<strong class="blk">if</strong> API.<strong>deviceinfo</strong>.IPAddress = ''
<strong class="blk">then</strong> Label3C3.text := 'N/A'
<strong class="blk">else</strong> Label3C3.text := API.<strong>deviceinfo</strong>.IPAddress;
Label3C4.text:= API.<strong>deviceinfo</strong>.PlatformVer;
Label3C5.text:= API.<strong>deviceinfo</strong>.MobileOperator;
Label3C6.text:= inttostr(API.<strong>deviceinfo</strong>.TimeZone);
OffPanel
Panel1.visible := True;
  
<strong class="blk">end</strong>.
                  	    		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- DeviceInfo toggle區結束 -->
                  
                  <!-- FlashLight toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">FlashLight</h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <!-- 說明 <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and saves it to a file.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">SaveAs</strong> - filename of a file to write to. If file exists, it will be overwritten.<br>
<strong class="blk">Result</strong> - TRUE if successfully saved page code to a file, and FALSE otherwise</p>
                                </div> -->
                                <pre class="ac mart20">
<strong class="blk">Procedure</strong> Page1OnRectangle2Click;
<strong class="blk">begin</strong>
ImgOff.visible:=False;  
ImgSOS.visible:= True;
ProcessMessages;
<strong>Flashlight</strong>1.SOS; 
ImgOff.visible:=True;  
ImgSOS.visible:= False;
<strong class="blk">end</strong>;  
                        
<strong class="blk">Procedure</strong> ToggleFlash;
<strong class="blk">begin</strong>           
<strong class="blk">if</strong> <strong>Flashlight</strong>1.Active <strong class="blk">then</strong>
<strong class="blk">begin</strong>
<strong>Flashlight</strong>1.Active := False;
ImgOff.visible:=True; 
ImgOn.visible:= False;  
<strong class="blk">end else begin</strong>
<strong>Flashlight</strong>1.Active := True;
ImgOff.visible:=False;
ImgOn.visible:= True;   
<strong class="blk">end;   
end;</strong>

<strong class="blk">Procedure</strong> Page1OnImgOnClick;
<strong class="blk">begin</strong>                             
ToggleFlash
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> Page1OnImgOffClick;
<strong class="blk">begin</strong>
ToggleFlash  
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> Page1OnRectangle1Click;
<strong class="blk">begin</strong>
ToggleFlash
<strong class="blk">end</strong>;                           

{Main <strong class="blk">Program</strong>}                 
<strong class="blk">var</strong>
s : <strong class="blk">string</strong>;
<strong class="blk">begin</strong>
Rectangle2.width := trunc(ImgOn.width/3); 
Rectangle2.height:= trunc(ImgOn.height/3.5); 
Rectangle2.top   := ImgOn.height-Rectangle2.height;
Rectangle2.left  := Rectangle2.width;
ImgSOS.visible   := False;                  
ImgOn.visible    := False; 
<strong class="blk">if not</strong> <strong>Flashlight</strong>1.HasFlash 
<strong class="blk">then</strong> showmessage('This device does not provide support for a flashlight.');
<strong class="blk">end</strong>.
                  	    		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- FlashLight toggle區結束 -->
                  
                  <!-- Weather toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Weather</h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <!-- 說明 <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and return its code as a string, but using REST component.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">Result</strong> - a string containing the code of the page</p>
                                </div> -->
                                <pre class="ac mart20">
<strong class="blk">Procedure</strong> Page1OnTimer1Timer;
<strong class="blk">begin</strong>
Labeltimenow.text := Datetimetostr(now);    
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> Page1OnEdit2Click;
<strong class="blk">begin</strong>
Edit2.text:= '';
<strong class="blk">end</strong>;                          

<strong class="blk">Procedure</strong> Page1OnLabel5Click;
<strong class="blk">begin</strong>
Edit2.text:= Label5.text;
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> Page1OnLabel6Click;
<strong class="blk">begin</strong>
Edit2.text:= Label6.text;
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> Page1OnLabel4Click;
<strong class="blk">begin</strong>
Edit2.text:= Label4.text;                 
<strong class="blk">end</strong>;
                                                     
<strong class="blk">Procedure</strong> Page1OnLabel3Click;
<strong class="blk">begin</strong>
Edit2.text:= Label3.text; 
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> ValueIn;
<strong class="blk">var</strong> 
i                            : Integer;
Day,Temp,TempH,TempL,Comfort : <strong class="blk">string</strong>;
Sunrise,Sunset               : <strong class="blk">String</strong>;
<strong class="blk">begin</strong> 
memo1.text:= <strong>weather</strong>1.AllList.text;
memo4.text:= <strong>weather</strong>1.SunList.text; 
if <strong>weather</strong>1.AllList.count = 0 <strong class="blk">then</strong> exit;
LabelLocation.text:= <strong>weather</strong>1.LocationName;
Sunrise:= rightstr(memo4.lines[0],length(memo4.lines[0])-pos('@',memo4.lines[0]));
Sunrise:= LeftStr(Sunrise,length(Sunrise)-3);   
Sunset := rightstr(memo4.lines[1],length(memo4.lines[1])-pos('@',memo4.lines[1])); 
Sunset := LeftStr(Sunset,length(Sunset)-3); 
LabelSunrise.Text:= StringReplace(Sunrise,'@',#13+#10);  
LabelSunset.Text := StringReplace(Sunset,'@',#13+#10); 
<strong class="blk">for</strong> i:= <strong>weather</strong>1.AllList.count-1 downto 0   <strong class="blk">do
begin</strong>                                            
Day    := rightstr(copy(memo1.lines[i],pos('@',memo1.lines[i])+1,10),2); 
Temp   := copy(memo1.lines[i],pos('day[',memo1.lines[i])+4,2); 
TempL  := copy(memo1.lines[i],pos('min[',memo1.lines[i])+4,2);  
TempH  := copy(memo1.lines[i],pos('max[',memo1.lines[i])+4,2);
TempL:= StringReplace(TempL,'.','');
TempH:= StringReplace(TempH,'.','');
Comfort:=rightstr(memo1.lines[i],length(memo1.lines[i])-pos('#',memo1.lines[i]))
<strong class="blk">if</strong>(i>6)then exit;
<strong class="blk">if</strong>(i=6)<strong class="blk">then
  begin</strong>
    LabelCHi.text:= TempH+'°';
    LabelCLo.text:= TempL+'°';
    LabelDT.text := Temp+'°';
    LabelCom.text:= Comfort;       
  <strong class="blk">end</strong>;
  TempH := TempH+'°'+#13+#10+TempL+'°';  
  <strong class="blk">case</strong> i of
    0:<strong class="blk">begin</strong>
        LabelD7.text:= Day;
        LabelHL7.text:= TempH;  
      <strong class="blk">end</strong>;
    1:<strong class="blk">begin</strong>
        LabelD6.text:= Day;
      LabelHL6.text:= TempH;  
      <strong class="blk">end</strong>;
    2:<strong class="blk">begin</strong>
        LabelD5.text:= Day; 
        LabelHL5.text:= TempH;  
      <strong class="blk">end</strong>; 
    3:<strong class="blk">begin</strong>
        LabelD4.text:= Day; 
        LabelHL4.text:= TempH;  
      <strong class="blk">end</strong>;   
    4:<strong class="blk">begin</strong>
        LabelD3.text:= Day;                      
        LabelHL3.text:= TempH;  
      <strong class="blk">end</strong>;   
    5:<strong class="blk">begin</strong> 
        LabelD2.text:= Day; 
        LabelHL2.text:= TempH;  
      <strong class="blk">end</strong>;  
    6:<strong class="blk">begin</strong>
        LabelD1.text := Day;   
        LabelHL1.text:= TempH;  
      <strong class="blk">end</strong>;
  <strong class="blk">end</strong>;
<strong class="blk">end</strong>;                  
<strong class="blk">end</strong>;      
   
<strong class="blk">Procedure</strong> Page1OnImage4Click;
<strong class="blk">begin</strong>
<strong class="blk">if</strong> (LocationSensor1.Latitude ='NAN') or (LocationSensor1.Active = False) <strong class="blk">then</strong>
<strong class="blk">begin</strong>
showmessage('not support GPS')              
exit;
<strong class="blk">end</strong>;    
<strong>weather</strong>1.Lat:= LocationSensor1.Latitude;
<strong>weather</strong>1.Lon:= LocationSensor1.Longitude;
<strong>Weather</strong>1.DownBy;                          
memo1.text:= weather1.AllList.text; 
memo4.text:= weather1.SunList.text; 
ValueIn;   
<strong class="blk">end</strong>; 
    
<strong class="blk">Procedure</strong> ChangePage;
<strong class="blk">begin</strong>
panel10.visible  := panel1.visible;
panel1.visible   := <strong class="blk">not</strong> panel1.visible;
ImgSearch.visible:= <strong class="blk">not</strong> panel1.visible;
ImgCloud.visible := panel1.visible;   
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> Page1OnImgSearchClick;
<strong class="blk">begin</strong>
ChangePage; 
<strong class="blk">end</strong>;

<strong class="blk">Procedure</strong> Page1OnImgCloudClick;
<strong class="blk">begin</strong>
ChangePage; 
<strong class="blk">end</strong>;    

<strong class="blk">Procedure</strong> Page1OnImage16Click;
<strong class="blk">begin</strong>

<strong class="blk">if</strong> edit2.text <>'' <strong class="blk">then</strong>
<strong class="blk">begin</strong>       
<strong>weather</strong>1.City:=edit2.text;
<strong>weather</strong>1.down;  
memo1.text:= <strong>weather</strong>1.AllList.text;
memo4.text:= <strong>weather</strong>1.SunList.text;
ChangePage;
<strong class="blk">end</strong>; 
ValueIn;                              
<strong class="blk">end</strong>;                                      

{Main <strong class="blk">Program</strong>}          
<strong class="blk">var</strong>                                      
s : <strong class="blk">string</strong>;
i,j: Integer;
<strong class="blk">begin</strong> 
PanelButtom.height:=Trunc(panel1.height/1.8); 
LocationSensor1.active:= True;
<em>//weather1.City:=edit1.text;  </em>
Rectangle2.height:= Trunc(PanelButtom.height/2);    
i:= Trunc(Rectangle2.width/7); 
j:= Trunc(Rectangle1.width/4); 
Image6.width:= i;Image7.width:= i;
Image8.width:= i;Image9.width:= i;
Image10.width:= i;Image11.width:= i;
Image12.width:= i;       
LabelD1.width:= i;LabelD2.width:= i;
LabelD3.width:= i;LabelD4.width:= i;
LabelD5.width:= i;LabelD6.width:= i;
LabelD7.width:= i;         
LabelHL1.width:= i;LabelHL2.width:= i;
LabelHL3.width:= i;LabelHL4.width:= i;
LabelHL5.width:= i;LabelHL6.width:= i;
LabelHL7.width:= i; 
ImageSunrise.width:= j; ImageSunset.width:= j;  
LabelSunrise.width:= j; LabelSunset.width:= j; 
memo1.text:= <strong>weather</strong>1.AllList.text; 
memo4.text:= <strong>weather</strong>1.SunList.text; 
ValueIn;
PanelCom.width:= trunc(imgBg.width/2);
<em>//LabelSunrise.text:= '上午'+#13+#10+'06:30';</em>

<strong class="blk">end</strong>.
                  	    		</pre>
                        </div>
                        </div>
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Weather toggle區結束 -->
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
        </div>
        <!-- /page content -->
      </div>
    </div>
	<!--Footer-->
        <footer id="footer" class="footer">
          <div class="container text-center">
          <!-- <ul class="social-links">
            <li><a href="#link"><i class="fa fa-twitter fa-fw"></i></a></li>
            <li><a href="#link"><i class="fa fa-facebook fa-fw"></i></a></li>
            <li><a href="#link"><i class="fa fa-google-plus fa-fw"></i></a></li>
          </ul> 社群 -->
            &copy; Copyright 2017 <a href="http://www.sound.com.tw/" target="_blank">聲達資訊</a> All rights reserved.
          </div>
        </footer>
        <!--/ Footer-->
    <!-- jQuery -->
    <script src="js/jquery/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="js/bootstrap/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="js/fastclick/fastclick.js"></script>
    <!-- NProgress -->
    <script src="js/nprogress/nprogress.js"></script>
    <!-- iCheck -->
    <script src="js/iCheck/icheck.min.js"></script>
	  <script src="js/backtotop/back-to-top.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="build/js/custom.min.js"></script>
  </body>
</html>