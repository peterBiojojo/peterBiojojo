<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>盤後資料 - 市場融資融券餘額 - 0055元大MSCI金融</title>

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
                        <h3>市場融資融券餘額<div class="clearfix"></div><cite class="downer-Numbers">(單位：張)</cite></h3>
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
                    <div class="x_content">
                        <div class="well">
                          <form class="form-horizontal">
                            <div class="row">
                            	<div class="col-xs-12">
                                	<div class="pull-left"><h4>市場別：</h4></div>
                                    <fieldset class="fix">
                                        <select class="select2_single form-control select2-hidden-accessible">
                                            <option>集中市場</option>
                                            <option>店頭市場</option>
                                        </select>
                                    </fieldset>
                                </div>
                            </div>
                          </form>
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
                  	<h3>市場融資融券餘額 - <strong>集中市場</strong> 日期：2017/4/10</h3>
                    <div class="table-responsive">
                          <table class="table StackTable" id="function_24">
                            <thead>
                              <tr>
                                <th>日期</th>
                                <th>資增(億)</th>
                                <th>融資餘額(億)</th>
                                <th>券增(張)</th>
                                <th>融券餘額(張)</th>
                                <th>加權指數</th>
                                <th>成交量(億)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="date">4/7</td>
                                <td class="nums">0.95</td>
                                <td class="nums">1,445.4</td>
                                <td class="nums">-47,778</td>
                                <td class="nums">206,482</td>
                                <td class="nums">9,873</td>
                                <td class="nums">998</td>
                              </tr>
                              <tr>
                                <td class="date">4/6</td>
                                <td class="nums">3.00</td>
                                <td class="nums">1,444.4</td>
                                <td class="nums">-20,622</td>
                                <td class="nums">254,260</td>
                                <td class="nums">9,898</td>
                                <td class="nums">898</td>
                              </tr>
                              <tr>
                                <td class="date">4/5</td>
                                <td class="nums">6.99</td>
                                <td class="nums">1,441.4</td>
                                <td class="nums">-16,518</td>
                                <td class="nums">274,889</td>
                                <td class="nums">9,949</td>
                                <td class="nums">1,243</td>
                              </tr>
                              <tr>
                                <td class="date">3/31</td>
                                <td class="nums">0.36</td>
                                <td class="nums">1,434.4</td>
                                <td class="nums">-19,276</td>
                                <td class="nums">291,407</td>
                                <td class="nums">9,812</td>
                                <td class="nums">1,008</td>
                              </tr>
                              <tr>
                                <td class="date">3/30</td>
                                <td class="nums">4.90</td>
                                <td class="nums">1,434.1</td>
                                <td class="nums">-2,434</td>
                                <td class="nums">310,683</td>
                                <td class="nums">9,848</td>
                                <td class="nums">892</td>
                              </tr>
                              <tr>
                                <td class="date">3/29</td>
                                <td class="nums">6.23</td>
                                <td class="nums">1,429.2</td>
                                <td class="nums">-13,063</td>
                                <td class="nums">313,117</td>
                                <td class="nums">9,856</td>
                                <td class="nums">872</td>
                              </tr>
                              <tr>
                                <td class="date">3/28</td>
                                <td class="nums">-9.07</td>
                                <td class="nums">1,422.9</td>
                                <td class="nums">-31,866</td>
                                <td class="nums">326,181</td>
                                <td class="nums">9,876</td>
                                <td class="nums">1,033</td>
                              </tr>
                              <tr>
                                <td class="date">3/27</td>
                                <td class="nums">-9.19</td>
                                <td class="nums">1,432.0</td>
                                <td class="nums">-17,191</td>
                                <td class="nums">358,047</td>
                                <td class="nums">9,877</td>
                                <td class="nums">864</td>
                              </tr>
                              <tr>
                                <td class="date">3/24</td>
                                <td class="nums">1.79</td>
                                <td class="nums">1,441.2</td>
                                <td class="nums">-16,122</td>
                                <td class="nums">375,238</td>
                                <td class="nums">9,903</td>
                                <td class="nums">882</td>
                              </tr>
                              <tr>
                                <td class="date">3/23</td>
                                <td class="nums">8.97</td>
                                <td class="nums">1,438.6</td>
                                <td class="nums">-11,407</td>
                                <td class="nums">391,360</td>
                                <td class="nums">9,931</td>
                                <td class="nums">1,000</td>
                              </tr>
                              <tr>
                                <td class="date">3/22</td>
                                <td class="nums">8.45</td>
                                <td class="nums">1,429.7</td>
                                <td class="nums">-11,979</td>
                                <td class="nums">402,767</td>
                                <td class="nums">9,923</td>
                                <td class="nums">957</td>
                              </tr>
                              <tr>
                                <td class="date">3/21</td>
                                <td class="nums">-2.71</td>
                                <td class="nums">1,421.2</td>
                                <td class="nums">-7,754</td>
                                <td class="nums">414,746</td>
                                <td class="nums">9,972</td>
                                <td class="nums">985</td>
                              </tr>
                              <tr>
                                <td class="date">3/20</td>
                                <td class="nums">5.14</td>
                                <td class="nums">1,423.9</td>
                                <td class="nums">1,468</td>
                                <td class="nums">422,500</td>
                                <td class="nums">9,913</td>
                                <td class="nums">828</td>
                              </tr>
                              <tr>
                                <td class="date">3/17</td>
                                <td class="nums">1.74</td>
                                <td class="nums">1,418.8</td>
                                <td class="nums">3,647</td>
                                <td class="nums">421,043</td>
                                <td class="nums">9,909</td>
                                <td class="nums">1,054</td>
                              </tr>
                              <tr>
                                <td class="date">3/16</td>
                                <td class="nums">-3.31</td>
                                <td class="nums">1,417.0</td>
                                <td class="nums">-9,450</td>
                                <td class="nums">417,396</td>
                                <td class="nums">9,838</td>
                                <td class="nums">939</td>
                              </tr>
                              <tr>
                                <td class="date">3/15</td>
                                <td class="nums">4.86</td>
                                <td class="nums">1,420.4</td>
                                <td class="nums">-1,576</td>
                                <td class="nums">426,846</td>
                                <td class="nums">9,740</td>
                                <td class="nums">717</td>
                              </tr>
                              <tr>
                                <td class="date">3/14</td>
                                <td class="nums">0.32</td>
                                <td class="nums">1,415.5</td>
                                <td class="nums">488</td>
                                <td class="nums">428,422</td>
                                <td class="nums">9,744</td>
                                <td class="nums">893</td>
                              </tr>
                              <tr>
                                <td class="date">3/13</td>
                                <td class="nums">-4.94</td>
                                <td class="nums">1,415.2</td>
                                <td class="nums">-5,589</td>
                                <td class="nums">427,934</td>
                                <td class="nums">9,697</td>
                                <td class="nums">797</td>
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
    <script src="js/candlestickchart/js/chart_13.js"></script>
  </body>
</html>