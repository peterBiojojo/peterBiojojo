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
                        <h3>資產負債表<div class="clearfix"></div><cite class="downer-Numbers">(單位：仟元)</cite></h3>
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
                          <table class="table StackTable" id="function_15">
                            <thead>
                              <tr>
                                <th>年度/季別</th>
                                <th>流動資產</th>
                                <th>長期投資</th>
                                <th>固定資產</th>
                                <th>流動負債</th>
                                <th>長期負債</th>
                                <th>股東權益</th>
                                <th>每股淨值</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="date">2016/Q3</td>
                                <td class="nums">709,591,485</td>
                                <td class="nums">49,910,488</td>
                                <td class="nums">934,928,493</td>
                                <td class="nums">257,555,112</td>
                                <td class="nums">177,239,002</td>
                                <td class="nums">259,303,805</td>
                                <td class="nums">49</td>
                              </tr>
                              <tr>
                                <td class="date">2016/Q2</td>
                                <td class="nums">852,525,071</td>
                                <td class="nums">53,398,120</td>
                                <td class="nums">875,870,205</td>
                                <td class="nums">398,739,054</td>
                                <td class="nums">208,421,528</td>
                                <td class="nums">259,303,805</td>
                                <td class="nums">46</td>
                              </tr>
                              <tr>
                                <td class="date">2016/Q1</td>
                                <td class="nums">812,491,107</td>
                                <td class="nums">46,334,552</td>
                                <td class="nums">844,305,450</td>
                                <td class="nums">235,893,223</td>
                                <td class="nums">209,686,337</td>
                                <td class="nums">259,303,805</td>
                                <td class="nums">49</td>
                              </tr>
                              <tr>
                                <td class="date">2015/Q4</td>
                                <td class="nums">746,743,991</td>
                                <td class="nums">34,993,583</td>
                                <td class="nums">853,470,392</td>
                                <td class="nums">212,228,594</td>
                                <td class="nums">222,655,225</td>
                                <td class="nums">259,303,805</td>
                                <td class="nums">47</td>
                              </tr>
                              <tr>
                                <td class="date">2015/Q3</td>
                                <td class="nums">693,661,496</td>
                                <td class="nums">31,015,091</td>
                                <td class="nums">830,825,109</td>
                                <td class="nums">201,689,370</td>
                                <td class="nums">223,534,496</td>
                                <td class="nums">259,303,805</td>
                                <td class="nums">44</td>
                              </tr>
                              <tr>
                                <td class="date">2015/Q2</td>
                                <td class="nums">731,368,790</td>
                                <td class="nums">27,773,584</td>
                                <td class="nums">829,703,176</td>
                                <td class="nums">309,379,741</td>
                                <td class="nums">232,845,770</td>
                                <td class="nums">259,303,805</td>
                                <td class="nums">41</td>
                              </tr>
                              <tr>
                                <td class="date">2015/Q1</td>
                                <td class="nums">690,493,692</td>
                                <td class="nums">32,180,821</td>
                                <td class="nums">813,219,884</td>
                                <td class="nums">187,565,145</td>
                                <td class="nums">245,414,157</td>
                                <td class="nums">259,303,020</td>
                                <td class="nums">43</td>
                              </tr>
                              <tr>
                                <td class="date">2014/Q4</td>
                                <td class="nums">626,566,787</td>
                                <td class="nums">30,051,544</td>
                                <td class="nums">818,198,801</td>
                                <td class="nums">201,014,777</td>
                                <td class="nums">248,443,321</td>
                                <td class="nums">259,296,624</td>
                                <td class="nums">40</td>
                              </tr>
                              <tr>
                                <td class="date">2014/Q3</td>
                                <td class="nums">476,230,199</td>
                                <td class="nums">28,845,566</td>
                                <td class="nums">824,309,879</td>
                                <td class="nums">172,248,167</td>
                                <td class="nums">221,188,422</td>
                                <td class="nums">259,293,750</td>
                                <td class="nums">37</td>
                              </tr>
                              <tr>
                                <td class="date">2014/Q2</td>
                                <td class="nums">459,199,555</td>
                                <td class="nums">28,373,339</td>
                                <td class="nums">837,167,426</td>
                                <td class="nums">246,635,077</td>
                                <td class="nums">221,449,396</td>
                                <td class="nums">259,293,750</td>
                                <td class="nums">34</td>
                              </tr>
                              <tr>
                                <td class="date">2014/Q1</td>
                                <td class="nums">355,890,417</td>
                                <td class="nums">90,847,086</td>
                                <td class="nums">828,011,580</td>
                                <td class="nums">174,397,164</td>
                                <td class="nums">226,344,016</td>
                                <td class="nums">259,291,239</td>
                                <td class="nums">35</td>
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
    <script src="js/candlestickchart/js/chart_00.js"></script>
  </body>
</html>