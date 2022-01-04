<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>盤後資料 - 每月營收 - 0055元大MSCI金融</title>
    
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
                        <h3>每月營收<div class="clearfix"></div><cite class="downer-Numbers">(單位：仟元)</cite></h3>
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
            		  <div class="col-xs-12">
                      		<div id="mainb" style="height:400px;"></div>
                      </div>
                  </div><!-- 線圖 END -->
                  <div class="x_content">
                    <div class="table-responsive">
                      <table class="table StackTable" id="function_12">
                      	<thead>
                          <tr>
                            <th></th>
                            <th colspan="4" class="text-center">單期營業收入</th>
                            <th colspan="3" class="text-center">累計營業收入</th>
                          </tr>
                          <tr>
                            <th>月份</th>
                            <th>月營收</th>
                            <th>月增率%</th>
                            <th>去年同期營收</th>
                            <th>年增率%</th>
                            <th>累計營收</th>
                            <th>去年累計營收</th>
                            <th>年增率%</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="date">2016/12</td>
                            <td class="nums">78,112,016</td>
                            <td class="nums green">-16</td>
                            <td class="nums">58,347,000</td>
                            <td class="nums red">33.9</td>
                            <td class="nums">947,938,432</td>
                            <td class="nums">843,497,408</td>
                            <td class="nums red">12.4</td>
                          </tr>
                          <tr>
                            <td class="date">2016/11</td>
                            <td class="nums">93,029,912</td>
                            <td class="nums red">2.1</td>
                            <td class="nums">63,428,160</td>
                            <td class="nums red">46.7</td>
                            <td class="nums">869,826,304</td>
                            <td class="nums">785,150,400</td>
                            <td class="nums red">10.8</td>
                          </tr>
                          <tr>
                            <td class="date">2016/10</td>
                            <td class="nums">91,085,320</td>
                            <td class="nums red">1.5</td>
                            <td class="nums">81,743,392</td>
                            <td class="nums red">11.4</td>
                            <td class="nums">776,796,416</td>
                            <td class="nums">721,722,176</td>
                            <td class="nums red">7.6</td>
                          </tr>
                          <tr>
                            <td class="date">2016/09</td>
                            <td class="nums">89,702,808</td>
                            <td class="nums green">-4.9</td>
                            <td class="nums">64,514,080</td>
                            <td class="nums red">39</td>
                            <td class="nums">685,711,104</td>
                            <td class="nums">639,978,816</td>
                            <td class="nums red">7.2</td>
                          </tr>
                          <tr>
                            <td class="date">2016/08</td>
                            <td class="nums">94,311,424</td>
                            <td class="nums red">23.5</td>
                            <td class="nums red">67,038,020</td>
                            <td class="nums">40.7</td>
                            <td class="nums">596,008,320</td>
                            <td class="nums">575,464,704</td>
                            <td class="nums red">3.6</td>
                          </tr>
                          <tr>
                            <td class="date">2016/07</td>
                            <td class="nums">76,391,664</td>
                            <td class="nums green">-6.1</td>
                            <td class="nums">80,952,808</td>
                            <td class="nums green">-5.6</td>
                            <td class="nums">501,696,896</td>
                            <td class="nums">508,426,688</td>
                            <td class="nums green">-1.3</td>
                          </tr>
                          <tr>
                            <td class="date">2016/06</td>
                            <td class="nums">81,390,752</td>
                            <td class="nums red">10.6</td>
                            <td class="nums">59,955,480</td>
                            <td class="nums red">35.8</td>
                            <td class="nums">425,305,216</td>
                            <td class="nums">427,473,888</td>
                            <td class="nums green">-0.5</td>
                          </tr>
                          <tr>
                            <td class="date">2016/05</td>
                            <td class="nums">73,575,776</td>
                            <td class="nums red">10.1</td>
                            <td class="nums">70,154,760</td>
                            <td class="nums red">4.9</td>
                            <td class="nums">343,914,496</td>
                            <td class="nums">367,518,400</td>
                            <td class="nums green">-6.4</td>
                          </tr>
                          <tr>
                            <td class="date">2016/04</td>
                            <td class="nums">66,843,312</td>
                            <td class="nums green">-8.6</td>
                            <td class="nums">75,329,512</td>
                            <td class="nums green">-11.3</td>
                            <td class="nums">270,338,688</td>
                            <td class="nums">297,363,584</td>
                            <td class="nums green">-9.1</td>
                          </tr>
                          <tr>
                            <td class="date">2016/03</td>
                            <td class="nums">73,088,808</td>
                            <td class="nums red">22.7</td>
                            <td class="nums">72,269,000</td>
                            <td class="nums red">1.1</td>
                            <td class="nums">203,495,392</td>
                            <td class="nums">222,034,096</td>
                            <td class="nums green">-8.4</td>
                          </tr>
                          <tr>
                            <td class="date">2016/02</td>
                            <td class="nums">59,551,320</td>
                            <td class="nums green">-15.9</td>
                            <td class="nums">62,645,080</td>
                            <td class="nums green">-4.9</td>
                            <td class="nums">130,406,600</td>
                            <td class="nums">149,765,104</td>
                            <td class="nums green">-12.9</td>
                          </tr>
                          <tr>
                            <td class="date">2016/01</td>
                            <td class="nums">70,855,232</td>
                            <td class="nums red">21.4</td>
                            <td class="nums">87,120,064</td>
                            <td class="nums green">-18.7</td>
                            <td class="nums">70,855,232</td>
                            <td class="nums">87,120,064</td>
                            <td class="nums green">-18.7</td>
                          </tr>
                          <tr>
                            <td class="date">2015/12</td>
                            <td class="nums">58,347,004</td>
                            <td class="nums green">-8</td>
                            <td class="nums">69,510,192</td>
                            <td class="nums green">-16.1</td>
                            <td class="nums">843,497,344</td>
                            <td class="nums">762,806,464</td>
                            <td class="nums red">10.6</td>
                          </tr>
                          <tr>
                            <td class="date">2015/11</td>
                            <td class="nums">63,428,160</td>
                            <td class="nums green">-22.4</td>
                            <td class="nums">72,274,528</td>
                            <td class="nums green">-12.2</td>
                            <td class="nums">785,150,272</td>
                            <td class="nums">693,296,384</td>
                            <td class="nums red">13.3</td>
                          </tr>
                          <tr>
                            <td class="date">2015/10</td>
                            <td class="nums">81,743,392</td>
                            <td class="nums red">26.7</td>
                            <td class="nums">80,736,352</td>
                            <td class="nums red">1.3</td>
                            <td class="nums">721,722,176</td>
                            <td class="nums">621,021,824</td>
                            <td class="nums red">16.2</td>
                          </tr>
                          <tr>
                            <td class="date">2015/09</td>
                            <td class="nums">64,514,080</td>
                            <td class="nums green">-3.8</td>
                            <td class="nums">74,846,312</td>
                            <td class="nums green">-13.8</td>
                            <td class="nums">639,978,816</td>
                            <td class="nums">540,285,376</td>
                            <td class="nums red">18.5</td>
                          </tr>
                          <tr>
                            <td class="date">2015/08</td>
                            <td class="nums">67,038,020</td>
                            <td class="nums green">-17.2</td>
                            <td class="nums">69,278,552</td>
                            <td class="nums">-3.2</td>
                            <td class="nums">575,464,704</td>
                            <td class="nums">465,439,104</td>
                            <td class="nums red">23.6</td>
                          </tr>
                          <tr>
                            <td class="date">2015/07</td>
                            <td class="nums">80,952,808</td>
                            <td class="nums red">35</td>
                            <td class="nums">64,924,872</td>
                            <td class="nums red">24.7</td>
                            <td class="nums">508,426,688</td>
                            <td class="nums">396,160,512</td>
                            <td class="nums red">28.3</td>
                          </tr>
                          <tr>
                            <td class="date">2015/06</td>
                            <td class="nums">59,955,480</td>
                            <td class="nums green">-14.5</td>
                            <td class="nums">60,343,960</td>
                            <td class="nums green">-0.6</td>
                            <td class="nums">427,473,888</td>
                            <td class="nums">331,235,712</td>
                            <td class="nums red">29</td>
                          </tr>
                          <tr>
                            <td class="date">2015/05</td>
                            <td class="nums">70,154,760</td>
                            <td class="nums green">-6.9</td>
                            <td class="nums">60,789,140</td>
                            <td class="nums">15.4</td>
                            <td class="nums">367,518,400</td>
                            <td class="nums">270,891,712</td>
                            <td class="nums red">35.7</td>
                          </tr>
                          <tr>
                            <td class="date">2015/04</td>
                            <td class="nums">75,329,512</td>
                            <td class="nums red">4.2</td>
                            <td class="nums">61,887,392</td>
                            <td class="nums red">21.7</td>
                            <td class="nums">297,363,584</td>
                            <td class="nums">210,102,592</td>
                            <td class="nums red">41.5</td>
                          </tr>
                          <tr>
                            <td class="date">2015/03</td>
                            <td class="nums">72,269,000</td>
                            <td class="nums red">15.4</td>
                            <td class="nums">49,956,128</td>
                            <td class="nums red">44.7</td>
                            <td class="nums">222,034,096</td>
                            <td class="nums">148,215,200</td>
                            <td class="nums red">49.8</td>
                          </tr>
                          <tr>
                            <td class="date">2015/02</td>
                            <td class="nums">62,645,080</td>
                            <td class="nums green">-28.1</td>
                            <td class="nums">46,829,048</td>
                            <td class="nums red">33.8</td>
                            <td class="nums">149,765,104</td>
                            <td class="nums">98,259,040</td>
                            <td class="nums red">52.4</td>
                          </tr>
                          <tr>
                            <td class="date">2015/01</td>
                            <td class="nums">87,120,064</td>
                            <td class="nums red">25.3</td>
                            <td class="nums">51,429,992</td>
                            <td class="nums red">69.4</td>
                            <td class="nums">87,120,064</td>
                            <td class="nums">51,429,992</td>
                            <td class="nums red">69.4</td>
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
    <script src="js/candlestickchart/js/chart_04.js"></script>
  </body>
</html>