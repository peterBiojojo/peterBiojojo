<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>盤後資料 - 融資融券 - 0055元大MSCI金融</title>
    
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
                        <h3>融資融券<div class="clearfix"></div><cite class="downer-Numbers"></cite></h3>
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
                      <table class="table StackTable" id="function_11">
                        <thead>
                          <tr>
                            <th>日期</th>
                            <th>資餘</th>
                            <th>資增</th>
                            <th>券餘</th>
                            <th>券增</th>
                            <th>券資比%</th>
                            <th>資券互抵</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="date">2017/3/27</td>
                            <td class="nums">9,325</td>
                            <td class="nums green">-58</td>
                            <td class="nums">3,030</td>
                            <td class="nums green">-320</td>
                            <td class="nums">32.49</td>
                            <td class="nums">9</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/24</td>
                            <td class="nums">9,383</td>
                            <td class="nums red">133</td>
                            <td class="nums">3,350</td>
                            <td class="nums green">-346</td>
                            <td class="nums">35.7</td>
                            <td class="nums">27</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/23</td>
                            <td class="nums">9,250</td>
                            <td class="nums red">256</td>
                            <td class="nums">3,696</td>
                            <td class="nums green">-289</td>
                            <td class="nums">39.96</td>
                            <td class="nums">27</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/22</td>
                            <td class="nums">8,994</td>
                            <td class="nums red">102</td>
                            <td class="nums">3,985</td>
                            <td class="nums green">-346</td>
                            <td class="nums">44.31</td>
                            <td class="nums">37</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/21</td>
                            <td class="nums">8,892</td>
                            <td class="nums green">-456</td>
                            <td class="nums">4,331</td>
                            <td class="nums red">154</td>
                            <td class="nums">48.71</td>
                            <td class="nums">60</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/20</td>
                            <td class="nums">9,348</td>
                            <td class="nums green">-140</td>
                            <td class="nums">4,177</td>
                            <td class="nums green">-71</td>
                            <td class="nums">44.68</td>
                            <td class="nums">50</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/17</td>
                            <td class="nums">9,488</td>
                            <td class="nums green">-69</td>
                            <td class="nums">4,248</td>
                            <td class="nums red">137</td>
                            <td class="nums">44.77</td>
                            <td class="nums">15</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/16</td>
                            <td class="nums">9,557</td>
                            <td class="nums green">-787</td>
                            <td class="nums">4,111</td>
                            <td class="nums red">272</td>
                            <td class="nums">43.02</td>
                            <td class="nums">18</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/15</td>
                            <td class="nums">10,344</td>
                            <td class="nums green">-25</td>
                            <td class="nums">3,839</td>
                            <td class="nums green">-16</td>
                            <td class="nums">37.11</td>
                            <td class="nums">8</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/14</td>
                            <td class="nums">10,369</td>
                            <td class="nums green">-363</td>
                            <td class="nums">3,855</td>
                            <td class="nums red">15</td>
                            <td class="nums">37.18</td>
                            <td class="nums">72</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/13</td>
                            <td class="nums">10,732</td>
                            <td class="nums green">-312</td>
                            <td class="nums">3,840</td>
                            <td class="nums green">-10</td>
                            <td class="nums">35.78</td>
                            <td class="nums">12</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/10</td>
                            <td class="nums">11,044</td>
                            <td class="nums red">497</td>
                            <td class="nums">3,850</td>
                            <td class="nums green">-93</td>
                            <td class="nums">34.86</td>
                            <td class="nums">11</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/9</td>
                            <td class="nums">10,547</td>
                            <td class="nums red">489</td>
                            <td class="nums">3,943</td>
                            <td class="nums green">-166</td>
                            <td class="nums">37.39</td>
                            <td class="nums">8</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/8</td>
                            <td class="nums">10,058</td>
                            <td class="nums green">-499</td>
                            <td class="nums">4,109</td>
                            <td class="nums red">35</td>
                            <td class="nums">40.85</td>
                            <td class="nums">5</td>
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
    <script src="js/candlestickchart/js/chart_11.js"></script>
  </body>
</html>