<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>盤後資料 - 損益表 - 0055元大MSCI金融</title>

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

    <!-- Custom Theme Style -->
    <link href="build/css/custom.min.css" rel="stylesheet">
    <link href="css/style_add.css" rel="stylesheet">
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
                <h1 class="logo"></h1>
            </div>
            <div class="clearfix"></div>
              <?php require_once("./menu.php"); ?>
          </div>
        </div>
        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>
              <h1>盤後資料 - 0055<br class="rwd_1"> 元大MSCI金融</h1>
              <ul class="nav navbar-nav navbar-right">
                <li class="">
                  <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    瀏覽紀錄
                    <span class=" fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;">上一頁 1234 黑松</a></li>
                    <li><a href="javascript:;">上一頁 2330 台積電</a></li>
                    <li><a href="javascript:;">下一頁 1301 台塑</a>
                    </li>
                  </ul>
                </li>
                <li role="presentation" class="dropdown" style="display:none;">
                  <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-bell"></i>
                    <span class="badge bg-green">6</span>
                  </a>
                  <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                    <li>
                      <a class="red">
                        <span class="image"><i class="fa fa-arrow-up"></i></span>
                        <span>
                          <span>上漲快報</span>
                          <span class="time">3 分鐘前</span>
                        </span>
                        <span class="message">拉回1再上1爆量4</span>
                      </a>
                    </li>
                    <li>
                      <a class="green">
                        <span class="image"><i class="fa fa-arrow-down"></i></span>
                        <span>
                          <span>下跌快報</span>
                          <span class="time">3 分鐘前</span>
                        </span>
                        <span class="message">頂1跌破1爆量1</span>
                      </a>
                    </li>
                    <li>
                      <a class="red">
                        <span class="image"><i class="fa fa-arrow-up"></i></span>
                        <span>
                          <span>上漲快報</span>
                          <span class="time">3 分鐘前</span>
                        </span>
                        <span class="message">拉回1再上1爆量4</span>
                      </a>
                    </li>
                    <li>
                      <a class="green">
                        <span class="image"><i class="fa fa-arrow-down"></i></span>
                        <span>
                          <span>下跌快報</span>
                          <span class="time">3 分鐘前</span>
                        </span>
                        <span class="message">頂1跌破1爆量1</span>
                      </a>
                    </li>
                    <li>
                      <div class="text-center">
                        <a>
                          <strong>詳細</strong>
                          <i class="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="twse00 twse">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="page-title">
                      <div class="title_left">
                        <h3>損益表<div class="clearfix"></div><cite class="downer-Numbers">(單位：仟元)</cite></h3>
                      </div>
                      <div class="title_right">
                        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="股票代號">
                            <span class="input-group-btn">
                              <button class="btn btn-default" type="button">搜尋</button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <!-- 線圖 Start -->
                    <div class="row">
                      <div id="graph_bar" style=" display:none;"></div>
                      <div id="graph_bar_group" style=" display:none;"></div>
                      <div id="graph_donut" style=" display:none;"></div>
                      <div id="graph_area" style=" display:none;"></div>
        
                      <!-- bar charts group -->
                      <div class="col-xs-12">
                        <div class="x_panel">
                          <div class="x_content2">
                            <div id="mainb" style="height:400px;"></div>
                          </div>
                        </div>
                      </div>
                      <!-- /bar charts group -->        
                    </div><!-- 線圖 END -->
                  <div class="x_content">
                    <div class="table-responsive">
                          <table class="table StackTable" id="function_14">
                            <thead>
                                <tr>
                                    <th>年度/季別</th>
                                    <th>營業收入</th>
                                    <th>營業成本</th>
                                    <th>營業毛利</th>
                                    <th>營業利益</th>
                                    <th>業外損益</th>
                                    <th>稅前淨利</th>
                                    <th>稅後淨利</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="date">2016/Q3</td>
                                    <td class="nums">260,405,885</td>
                                    <td class="nums">128,366,813</td>
                                    <td class="nums">132,039,072</td>
                                    <td class="nums">106,262,122</td>
                                    <td class="nums">1,987,493</td>
                                    <td class="nums">108,249,615</td>
                                    <td class="nums">96,789,113</td>
                                </tr>
                                <tr>
                                    <td class="date">2016/Q2</td>
                                    <td class="nums">221,809,846</td>
                                    <td class="nums">107,468,601</td>
                                    <td class="nums">114,341,245</td>
                                    <td class="nums">91,321,001</td>
                                    <td class="nums">2,085,390</td>
                                    <td class="nums">93,406,391</td>
                                    <td class="nums">72,528,279</td>
                                </tr>
                                <tr>
                                    <td class="date">2016/Q1</td>
                                    <td class="nums">203,495,361</td>
                                    <td class="nums">112,124,894</td>
                                    <td class="nums">91,370,467</td>
                                    <td class="nums">70,467,314</td>
                                    <td class="nums">1,788,585</td>
                                    <td class="nums">72,255,899</td>
                                    <td class="nums">64,792,597</td>
                                </tr>
                                <tr>
                                    <td class="date">2015/Q4</td>
                                    <td class="nums">203,518,563</td>
                                    <td class="nums">104,608,037</td>
                                    <td class="nums">98,910,526</td>
                                    <td class="nums">77,963,670</td>
                                    <td class="nums">2,679,959</td>
                                    <td class="nums">80,643,629</td>
                                    <td class="nums">72,842,055</td>
                                </tr>
                                <tr>
                                    <td class="date">2015/Q3</td>
                                    <td class="nums">212,504,909</td>
                                    <td class="nums">110,188,424</td>
                                    <td class="nums">102,316,485</td>
                                    <td class="nums">78,388,924</td>
                                    <td class="nums">5,005,695</td>
                                    <td class="nums">83,394,619</td>
                                    <td class="nums">75,317,300</td>
                                </tr>
                                <tr>
                                    <td class="date">2015/Q2</td>
                                    <td class="nums">205,439,752</td>
                                    <td class="nums">105,735,807</td>
                                    <td class="nums">99,703,945</td>
                                    <td class="nums">77,069,058</td>
                                    <td class="nums">21,062,625</td>
                                    <td class="nums">98,131,683</td>
                                    <td class="nums">79,412,904</td>
                                </tr>
                                <tr>
                                    <td class="date">2015/Q1</td>
                                    <td class="nums">222,034,144</td>
                                    <td class="nums">112,585,333</td>
                                    <td class="nums">109,448,811</td>
                                    <td class="nums">86,626,123</td>
                                    <td class="nums">1,632,857</td>
                                    <td class="nums">88,258,980</td>
                                    <td class="nums">78,983,908</td>
                                </tr>
                                <tr>
                                    <td class="date">2014/Q4</td>
                                    <td class="nums">222,521,075</td>
                                    <td class="nums">111,973,199</td>
                                    <td class="nums">110,547,876</td>
                                    <td class="nums">88,222,030</td>
                                    <td class="nums">1,094,362</td>
                                    <td class="nums">89,316,392</td>
                                    <td class="nums">79,970,628</td>
                                </tr>
                                <tr>
                                    <td class="date">2014/Q3</td>
                                    <td class="nums">209,049,734</td>
                                    <td class="nums">103,468,164</td>
                                    <td class="nums">105,581,570</td>
                                    <td class="nums">84,431,984</td>
                                    <td class="nums"> 949,208</td>
                                    <td class="nums">85,381,192</td>
                                    <td class="nums">76,304,606</td>
                                </tr>
                                <tr>
                                    <td class="date">2014/Q2</td>
                                    <td class="nums">183,020,484</td>
                                    <td class="nums">91,823,190</td>
                                    <td class="nums">91,197,294</td>
                                    <td class="nums">70,713,919</td>
                                    <td class="nums">3,384,201</td>
                                    <td class="nums">74,098,120</td>
                                    <td class="nums">59,659,857</td>
                                </tr>
                                <tr>
                                    <td class="date">2014/Q1</td>
                                    <td class="nums">148,215,172</td>
                                    <td class="nums">77,836,093</td>
                                    <td class="nums">70,379,079</td>
                                    <td class="nums">52,522,360</td>
                                    <td class="nums">779,482</td>
                                    <td class="nums">53,301,842</td>
                                    <td class="nums">47,845,778</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <!-- /page content -->
        <!-- footer content -->
        <footer>
          <div class="pull-right">
             &copy; Copyright 2017 <a href="http://www.sound.com.tw/" target="_blank">聲達資訊</a> All rights reserved.
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

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
    <!-- morris.js -->
    <script src="js/raphael/raphael.min.js"></script>
    <script src="js/morris.js/morris.min.js"></script>
    <!-- ECharts -->
    <script src="js/echarts/echarts.min.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="build/js/custom.min.js"></script>
    <script src="js/candlestickchart/js/chart_09.js"></script>
  </body>
</html>