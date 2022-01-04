<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>盤後資料 - 資產負債表 - 0055元大MSCI金融</title>

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
                        <h3>現金流量表<div class="clearfix"></div><cite class="downer-Numbers">(單位：仟元)</cite></h3>
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
                          <table class="table StackTable" id="function_16">
                            <thead>
                              <tr>
                                <th>年度/季別</th>
                                <th>營業現金流</th>
                                <th>投資現金流</th>
                                <th>融資現金流</th>
                                <th>淨現金流</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="date">2016/Q3</td>
                                <td class="nums">-575,156</td>
                                <td class="nums">23,672</td>
                                <td class="nums">152,644</td>
                                <td class="nums">-398,840</td>
                              </tr>
                              <tr>
                                <td class="date">2016/Q2</td>
                                <td class="nums">-59,424</td>
                                <td class="nums">7,481</td>
                                <td class="nums"> 457,092</td>
                                <td class="nums"> 405,149</td>
                              </tr>
                              <tr>
                                <td class="date">2016/Q1</td>
                                <td class="nums">-19,786</td>
                                <td class="nums">-86,438</td>
                                <td class="nums">292,696</td>
                                <td class="nums">186,472</td>
                              </tr>
                              <tr>
                                <td class="date">2015/Q4</td>
                                <td class="nums">48,049</td>
                                <td class="nums">-51,256</td>
                                <td class="nums">248,701</td>
                                <td class="nums">245,494</td>
                              </tr>
                              <tr>
                                <td class="date">2015/Q3</td>
                                <td class="nums">147,151</td>
                                <td class="nums">-75,499</td>
                                <td class="nums">-693,793</td>
                                <td class="nums">-622,141</td>
                              </tr>
                              <tr>
                                <td class="date">2015/Q2</td>
                                <td class="nums">38,451</td>
                                <td class="nums">-287,631</td>
                                <td class="nums">547,173</td>
                                <td class="nums">297,993</td>
                              </tr>
                              <tr>
                                <td class="date">2015/Q1</td>
                                <td class="nums">-148,151</td>
                                <td class="nums">30,185</td>
                                <td class="nums">19,448</td>
                                <td class="nums">-98,518</td>
                              </tr>
                              <tr>
                                <td class="date">2014/Q4</td>
                                <td class="nums">345,231</td>
                                <td class="nums">-83,591</td>
                                <td class="nums">-142,221</td>
                                <td class="nums">119,419</td>
                              </tr>
                              <tr>
                                <td class="date">2014/Q3</td>
                                <td class="nums">598,967</td>
                                <td class="nums">-58,480</td>
                                <td class="nums">-260,585</td>
                                <td class="nums">279,902</td>
                              </tr>
                              <tr>
                                <td class="date">2014/Q2</td>
                                <td class="nums">-114,607</td>
                                <td class="nums">-7,458</td>
                                <td class="nums">-11,496</td>
                                <td class="nums">-133,561</td>
                              </tr>
                              <tr>
                                <td class="date">2014/Q1</td>
                                <td class="nums"> 199,063</td>
                                <td class="nums">-65,260</td>
                                <td class="nums">99,516</td>
                                <td class="nums">233,319</td>
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
    <script src="js/candlestickchart/js/chart_08.js"></script>
  </body>
</html>