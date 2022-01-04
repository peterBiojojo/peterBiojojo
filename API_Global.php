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
                        <h3>API List</h3>
                        <h4>Standard Object Pascal API</h4>
                      </div>
                    </div>
                    <div class="clearfix mart20"></div>
                    <!-- OpenPage toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">OpenPage<em><strong class="blk">function</strong> OpenPage(<strong class="blk">const</strong> PageID: <strong class="blk">string</strong>): Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function loads another page over the currently loaded one.<br>
<strong class="blk">PageID</strong> - a string with the identifier of the page to open<br><strong class="blk">Result</strong> - TRUE on success, FALSE otherwise</p>
                                </div>
                                <!-- 語法 <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- OpenPage toggle區結束 -->
                  
                  <!-- GlobalStrings toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">GlobalStrings<em><strong class="blk">function</strong> GlobalStrings(<strong class="blk">const</strong> Id: <strong class="blk">string</strong>):TStringList;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function is for accessing a global instance of TStringList object, that can be used for saving context between loading of different pages.
Because on every page load the variables from the previously opened page get freed, you can use this API as a mean to make some context persistent.
The content of the GlobalStrings does not get freed when loading a new page, it persists until you stop the book execution.<br>
<strong class="blk">Id</strong> - a symbolic name assigned to a particular context. If the context was not previously named, it will be created automatically.<br>
<strong class="blk">Result</strong> - a TStringList object assigned to your Id</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- GlobalStrings toggle區結束 -->
                  
                  <!-- strFindBySufixAndPrefix toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">strFindBySufixAndPrefix<em><strong class="blk">function</strong> strFindBySufixAndPrefix(Src,Sufix,Prefix: <strong class="blk">string</strong>): string;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function allows for text search that is enclosed by specified prefix and sufix.<br>
<strong class="blk">Src</strong> - a string with the text to be searched<br>
<strong class="blk">Sufix</strong> - a sufix that the searched text has to be limitted by.<br>
<strong class="blk">Prefix</strong> - a prefix that the searched text has to be limitted by.<br>
<strong class="blk">Result</strong> - if prefix and sufix are both found, the text between them will be returned. Otherwise an empty string is returned.</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- strFindBySufixAndPrefix toggle區結束 -->
                  
                  <!-- MediaPlay toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">MediaPlay<em><strong class="blk">procedure</strong> MediaPlay(fn: <strong class="blk">string</strong>)</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function attempts to load and play a multimedia file in a system default player. Whether or not a file specified will be played depends on whether or not the host system supports playback of given media format.<br>
<strong class="blk">fn</strong> - a full file name of a multimedia file to be played</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- MediaPlay toggle區結束 -->
                  
                  <!-- PageHeight toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">PageHeight<em><strong class="blk">function</strong> PageHeight: integer</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function returns height of the currently loaded page. On different devices we deal with different form factors, and sometimes also different screen orientations. On some platforms you are able to resize windows. Use this API to know the exact page height at any given time.<br>
<strong class="blk">Result</strong> - the height of the page</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- PageHeight toggle區結束 -->
                  
                  <!-- PageWidth toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">PageWidth<em><strong class="blk">function</strong> PageWidth: integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function returns width of the currently loaded page. On different devices we deal with different form factors, and sometimes also different screen orientations. On some platforms you are able to resize windows. Use this API to know the exact page width at any given time.<br>
<strong class="blk">Result</strong> - the width of the page</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- PageWidth toggle區結束 -->
                  
                  <!-- SetPageCaption toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">SetPageCaption<em><strong class="blk">procedure </strong> SetPageCaption(ACaption: <strong class="blk">string</strong>);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function allows you to set the caption text for the main window into which the page is loaded.<br>
<strong class="blk">ACaption</strong> - a string with the text to set as a window caption</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- SetPageCaption toggle區結束 -->
                  
                  <!-- GetPageCaption toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">GetPageCaption<em><strong class="blk">function</strong> GetPageCaption: <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function allows you to retrieve the caption text of the main window into which the page is loaded.<br>
<strong class="blk">Result</strong> - a string with the text of a window caption</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- GetPageCaption toggle區結束 -->
                  
                  <!-- ChangePixelColor toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">ChangePixelColor<em><strong class="blk">procedure</strong> ChangePixelColor(<strong class="blk">const</strong> ABitmap: TBitmap; FromColor,ToColor: TAlphaColor);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function allows you to replace a color of all pixels of a giveb color in a Bitmap object with another color.<br>
<strong class="blk">ABitmap</strong> - a refference to TBitmap object<br>
<strong class="blk">FromColor</strong> - a color to be replaced<br>
<strong class="blk">ToColor</strong> - a color to be replaced to</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- ChangePixelColor toggle區結束 -->
                  
                  <!-- GetTickCount toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">GetTickCount<em><strong class="blk">function</strong> GetTickCount: Cardinal;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function allows you to retrieve a tick count from the current thread. It can be usefule when you need to measure a very short time spent on a very fast operation.<br>
<strong class="blk">Result</strong> - a tick count</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- GetTickCount toggle區結束 -->
                  
                  <!-- Context toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Context<em><strong class="blk">property </strong> Context [ <strong class="blk">const</strong> Key: <strong class="blk">string</strong> ] : <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This is a global property for exchanging <strong>context</strong> between page loads. It uses a simple key,value interface, where both are string types. If you need to store different types, you may need to convert values to and from string on writeing and reading.<br>
<strong class="blk">Key</strong> - a key string that you want to read/write<br>
<strong class="blk">Result</strong> - a string value kept under the specified key</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Context toggle區結束 -->
                  
                  <!-- Strings toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Strings<em><strong class="blk">property </strong> Strings [ <strong class="blk">const</strong> Id: <strong class="blk">string</strong> ] : TStringList</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This is a global property identical to the API call of GlobalStrings(const Id: string): TStringList;<br>
<strong class="blk">Id</strong> - an Id of the TStringList object you want to access<br>
<strong class="blk">Result</strong> - a TStringList object assigned to the specified Id</p>
                                </div>
                                <!-- 語法 <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Strings toggle區結束 -->
                  <div class="x_content">
                    
                  </div>
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