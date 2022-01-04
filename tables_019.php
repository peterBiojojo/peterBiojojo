<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>盤後資料 - 三大法人買賣彙總表 - 0055元大MSCI金融</title>

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
                        <h3>三大法人買賣彙總表</h3>
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
                            	<div class="col-sm-6 col-xs-6">
                                	<div class="pull-left"><h4>市場別：</h4></div>
                                    <fieldset class="fix">
                                        <select class="select2_single form-control select2-hidden-accessible">
                                            <option>集中市場</option>
                                            <option>店頭市場</option>
                                        </select>
                                    </fieldset>
                                </div>
                            	<div class="col-sm-6 col-xs-6">
                                	<div class="pull-left"><h4>查詢時間：</h4></div>
                                    <fieldset class="fix">
                                        <select class="select2_single form-control select2-hidden-accessible">
                                            <option>近10日</option>
                                            <option>30日</option>
                                            <option>60日</option>
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
            		  <div class="col-xs-12">
                      		<div id="mainb" style="height:400px;"></div>
                      </div>
                  </div><!-- 線圖 END -->
                  <div class="x_content">
                    <div class="table-responsive">
                      <table class="table StackTable" id="function_19">
                        <thead>
                          <tr>
                            <th></th>
                            <th colspan="4" class="text-center">三大法人買賣  (單位:億元 )</th>
                            <th colspan="2" class="text-center">摩台期指 (單位:口)</th>
                          </tr>
                          <tr>
                            <th>日期</th>
                            <th>外資</th>
                            <th>投信</th>
                            <th>自營商</th>
                            <th>單日合計</th>
                            <th>成交量</th>
                            <th>未平倉</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="date">2017/3/27</td>
                            <td class="nums">13,746</td>
                            <td class="nums">-340</td>
                            <td class="nums">-1,041</td>
                            <td class="nums red">12,365</td>
                            <td class="nums">20,602,360</td>
                            <td class="nums">240,473</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/24</td>
                            <td class="nums">2,292</td>
                            <td class="nums">-88</td>
                            <td class="nums">332</td>
                            <td class="nums red">2,536</td>
                            <td class="nums">20,589,840</td>
                            <td class="nums">240,813</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/23</td>
                            <td class="nums">545</td>
                            <td class="nums">-38</td>
                            <td class="nums">1,255</td>
                            <td class="nums red">1,762</td>
                            <td class="nums">20,589,350</td>
                            <td class="nums">240,901</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/22</td>
                            <td class="nums">1,080</td>
                            <td class="nums">-149</td>
                            <td class="nums">871</td>
                            <td class="nums red">1,802</td>
                            <td class="nums">20,588,800</td>
                            <td class="nums">240,939</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/21</td>
                            <td class="nums">18,516</td>
                            <td class="nums">321</td>
                            <td class="nums">-1,852</td>
                            <td class="nums red">16,985</td>
                            <td class="nums">20,587,700</td>
                            <td class="nums">241,088</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/20</td>
                            <td class="nums">4,571</td>
                            <td class="nums">-131</td>
                            <td class="nums">-298</td>
                            <td class="nums red">4,142</td>
                            <td class="nums">20,569,340</td>
                            <td class="nums">240,767</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/17</td>
                            <td class="nums">14,561</td>
                            <td class="nums">12</td>
                            <td class="nums">-263</td>
                            <td class="nums red">14,310</td>
                            <td class="nums">20,564,550</td>
                            <td class="nums">240,898</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/16</td>
                            <td class="nums">19,050</td>
                            <td class="nums">205</td>
                            <td class="nums">-410</td>
                            <td class="nums red">18,845</td>
                            <td class="nums">20,549,950</td>
                            <td class="nums">240,886</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/15</td>
                            <td class="nums">1,644</td>
                            <td class="nums">-19</td>
                            <td class="nums">-278</td>
                            <td class="nums red">1,347</td>
                            <td class="nums">20,530,880</td>
                            <td class="nums">240,681</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/14</td>
                            <td class="nums">6,534</td>
                            <td class="nums">-342</td>
                            <td class="nums">-895</td>
                            <td class="nums red">5,297</td>
                            <td class="nums">20,529,240</td>
                            <td class="nums">240,700</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/13</td>
                            <td class="nums">4,355</td>
                            <td class="nums">-136</td>
                            <td class="nums">-528</td>
                            <td class="nums red">3,691</td>
                            <td class="nums">20,522,700</td>
                            <td class="nums">241,042</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/10</td>
                            <td class="nums">-8,332</td>
                            <td class="nums">-72</td>
                            <td class="nums">559</td>
                            <td class="nums green">-7,845</td>
                            <td class="nums">20,518,350</td>
                            <td class="nums">241,178</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/9</td>
                            <td class="nums">-6,363</td>
                            <td class="nums">-320</td>
                            <td class="nums">785</td>
                            <td class="nums green">-5,898</td>
                            <td class="nums">20,526,680</td>
                            <td class="nums">241,250</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/8</td>
                            <td class="nums">5,560</td>
                            <td class="nums">-506</td>
                            <td class="nums">-1,202</td>
                            <td class="nums red">3,852</td>
                            <td class="nums">20,533,030</td>
                            <td class="nums">241,570</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/7</td>
                            <td class="nums">-3,567</td>
                            <td class="nums">1,274</td>
                            <td class="nums">-21</td>
                            <td class="nums green">-2,314</td>
                            <td class="nums">20,527,470</td>
                            <td class="nums">242,076</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/6</td>
                            <td class="nums">-3,886</td>
                            <td class="nums">-375</td>
                            <td class="nums">591</td>
                            <td class="nums green">-3,670</td>
                            <td class="nums">20,531,040</td>
                            <td class="nums">240,802</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/3</td>
                            <td class="nums">-7,987</td>
                            <td class="nums">-468</td>
                            <td class="nums">716</td>
                            <td class="nums green">-7,739</td>
                            <td class="nums">20,534,960</td>
                            <td class="nums">241,177</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/2</td>
                            <td class="nums">8,553</td>
                            <td class="nums">9</td>
                            <td class="nums">290</td>
                            <td class="nums red">8,851</td>
                            <td class="nums">20,542,940</td>
                            <td class="nums">241,645</td>
                          </tr>
                          <tr>
                            <td class="date">2017/3/1</td>
                            <td class="nums">-3,382</td>
                            <td class="nums">-58</td>
                            <td class="nums">774</td>
                            <td class="nums green">-2,666</td>
                            <td class="nums">20,534,390</td>
                            <td class="nums">241,636</td>
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
    <script src="js/candlestickchart/js/chart_12.js"></script>
  </body>
</html>