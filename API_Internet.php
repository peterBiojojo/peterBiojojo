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
                    <!-- httpGET toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">httpGET<em><strong class="blk">function</strong> httpGET(URL: <strong class="blk">string</strong>): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and return its code as a string.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">Result</strong> - a string containing the code of the page</p>
                                </div>
                                <!-- 語法  語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- httpGET toggle區結束 -->
                  
                  <!-- httpGETToStream toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">httpGETToStream<em><strong class="blk">function</strong> httpGETToStream(URL: <strong class="blk">string</strong>; SaveTo: TStream): integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and return its code into a stream passed as argument.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">SaveTo</strong> - a stream into which you want the page code to be written<br>
<strong class="blk">Result</strong> - a number of bytes written into the stream</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- httpGETToStream toggle區結束 -->
                  
                  <!-- httpGETToFile toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">httpGETToFile<em><strong class="blk">function</strong> httpGETToFile(URL, SaveAs:<strong class="blk">string</strong>): Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and saves it to a file.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">SaveAs</strong> - filename of a file to write to. If file exists, it will be overwritten.<br>
<strong class="blk">Result</strong> - TRUE if successfully saved page code to a file, and FALSE otherwise</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- httpGETToFile toggle區結束 -->
                  
                  <!-- RESTClientGet_ToString toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">RESTClientGet_ToString<em><strong class="blk">function</strong> RESTClientGet_ToString(Url: <strong class="blk">string</strong>): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and return its code as a string, but using REST component.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">Result</strong> - a string containing the code of the page</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- RESTClientGet_ToString toggle區結束 -->
                  
                  <!-- RESTClientPost_ToString toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">RESTClientPost_ToString<em><strong class="blk">function</strong> RESTClientPost_ToString(Url: <strong class="blk">string</strong>; SL: TStringList) : <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and return its code as a string, but using REST component.<br>
Additionally, if SL argument is passed, it also writes the page code into the StringList object.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">SL</strong> - a TStringList object to write to. If nil is passed, it will be ignored.<br>
<strong class="blk">Result</strong> - a string containing the code of the page</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- RESTClientPost_ToString toggle區結束 -->
                  
                  <!-- RESTClientGet_ToStream toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">RESTClientGet_ToStream<em><strong class="blk">function</strong> RESTClientGet_ToStream(Url: <strong class="blk">string</strong>; AStream: TStream) : Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and return its code into a stream passed as argument. It uses REST component internally.<br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">AStream</strong> - a stream into which you want the page code to be written<br>
<strong class="blk">Result</strong> - TRUE if successfull, FALSE otherwise</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- RESTClientGet_ToStream toggle區結束 -->
                  
                  <!-- RESTClientPost_ToStream toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">RESTClientPost_ToStream<em><strong class="blk">function</strong> RESTClientPost_ToStream(Url: <strong class="blk">string</strong>); SL: TStringList; AStream: TStream) : Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function downloads content of a website of given URL and return its code into a stream passed as argument. It uses REST component internally.
This is a variant of a call with an additional SL argument, which is a refferencto to a TStringList object. <br>
<strong class="blk">URL</strong> - a string with URL of a page to download<br>
<strong class="blk">SL</strong> - if a valid refference is passed, the page code gets written into the Stringlist object. If nil is passed, then it is ignored.<br>
<strong class="blk">AStream</strong> - a stream into which you want the page code to be written<br>
<strong class="blk">Result</strong> - TRUE if successfull, FALSE otherwise</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- RESTClientPost_ToStream toggle區結束 -->
                  
                  <!-- GetGoogleTranslateAuthToken toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">GetGoogleTranslateAuthToken<em><strong class="blk">function</strong> GetGoogleTranslateAuthToken(<strong class="blk">const</strong> Secret,ID: <strong class="blk">string</strong>):<strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function is a wrapper around Google API for language translation. When passed valid Secret and ID arguments, an Auth Token is returned that other Google API calls require.<br>
<strong class="blk">Secret</strong> - a string with your Google API secret (password)
<strong class="blk">ID</strong> - a string with your Google API ID
<strong class="blk">Result</strong> - on successful authentication, a valid Google Auth Token is returned. Otherwise an empty string is returned.</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- GetGoogleTranslateAuthToken toggle區結束 -->
                  
                  <!-- GoogleTranslate toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">GoogleTranslate<em><strong class="blk">procedure</strong> GoogleTranslate(<strong class="blk">const</strong> AuthToken,From,Too,Text: <strong class="blk">string</strong>):<strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">This function is a wrapper around Google API for language translation. It requires a valid Google Auth Token.<br>
<strong class="blk">AuthToken</strong> - a string with your Google API secret (password)<br>
<strong class="blk">From</strong> - a string constant fefining the source language to translate from<br>
<strong class="blk">Too</strong> - a string constant fefining the source language to translate to<br>
<strong class="blk">Text</strong> - a string containing text to translate<br>
<strong class="blk">Result</strong> - a translated text</p>
                                </div>
                                <!-- 語法 <pre class="ac mart20">
                  	    		</pre>
                           		<pre class="ac">
                       			</pre> -->
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- GoogleTranslate toggle區結束 -->
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