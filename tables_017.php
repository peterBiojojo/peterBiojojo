<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link href="favicon.ico" rel="Shortcut Icon" type="image/x-icon" />
    <title>盤後資料 - 類股個股收盤 - 0055元大MSCI金融</title>

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
                        <h3>類股個股收盤</h3>
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
                            	<div class="col-sm-4 col-xs-6">
                                	<div class="pull-left"><h4>市場別：</h4></div>
                                        <select class="select2_single form-control select2-hidden-accessible">
                                            <option>集中市場</option>
                                            <option>店頭市場</option>
                                        </select>
                                </div>
                                <div class="col-sm-4 col-xs-6">
                                	<div class="pull-left"><h4>產業別：</h4></div>
                                        <select class="select2_single form-control select2-hidden-accessible">
                                            <option>半導體業</option>
                                            <option>金融</option>
                                            <option>科技</option>
                                        </select>
                                </div>
                                <div class="col-sm-4 col-xs-12 marTop_20">
                                	<div class="pull-left"><h4>查詢時間：</h4></div>
                                        <select class="select2_single form-control select2-hidden-accessible">
                                            <option>上週</option>
                                            <option>上上週</option>
                                        </select>
                                </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    <div class="clearfix"></div>
                  <div class="x_content">
                  	<h3>收盤行情 - <strong>集中市場 / 半導體業</strong> 日期：2017/3/28 </h3>
                    <div class="table-responsive">
                      <table class="table StackTable" id="function_17">
                        <thead>
                          <tr>
                            <th>代碼</th>
                            <th>股票名稱</th>
                            <th>收盤價</th>
                            <th>漲跌</th>
                            <th>最高價</th>
                            <th>最低價</th>
                            <th>成交張數</th>
                            <th>成交筆數</th>
                            <th>成交金額</th>
                            <th>本益比</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="idCode">1437</td>
                            <td class="idCode">勤益控</td>
                            <td class="nums">18.25</td>
                            <td class="nums green">-0.1</td>
                            <td class="nums">18.6</td>
                            <td class="nums">18.15</td>
                            <td class="nums">284</td>
                            <td class="nums">107</td>
                            <td class="nums">5,204,258</td>
                            <td class="nums">9.66</td>
                          </tr>
                          <tr>
                            <td class="idCode">2302</td>
                            <td class="idCode">麗　正</td>
                            <td class="nums">6.42</td>
                            <td class="nums green">-0.08</td>
                            <td class="nums">6.58</td>
                            <td class="nums">6.38</td>
                            <td class="nums">360</td>
                            <td class="nums">147</td>
                            <td class="nums">2,325,391</td>
                            <td class="nums">58.36</td>
                          </tr>
                          <tr>
                            <td class="idCode">2303</td>
                            <td class="idCode">聯　電</td>
                            <td class="nums">12.1</td>
                            <td class="nums green">-0.15</td>
                            <td class="nums">12.3</td>
                            <td class="nums">12.05</td>
                            <td class="nums">49,244</td>
                            <td class="nums">7,522</td>
                            <td class="nums">598,884,160</td>
                            <td class="nums">17.79</td>
                          </tr>
                          <tr>
                            <td class="idCode">2311</td>
                            <td class="idCode">日月光</td>
                            <td class="nums">39.9</td>
                            <td class="nums red">0.25</td>
                            <td class="nums">39.9</td>
                            <td class="nums">39.65</td>
                            <td class="nums">14,656</td>
                            <td class="nums">5,985</td>
                            <td class="nums">583,248,261</td>
                            <td class="nums">14.15</td>
                          </tr>
                          <tr>
                            <td class="idCode">2325</td>
                            <td class="idCode">矽　品</td>
                            <td class="nums">49.6</td>
                            <td class="nums red">0.15</td>
                            <td class="nums">49.6</td>
                            <td class="nums">49.4</td>
                            <td class="nums">5,484</td>
                            <td class="nums">2,407</td>
                            <td class="nums">271,551,642</td>
                            <td class="nums">15.55</td>
                          </tr>
                          <tr>
                            <td class="idCode">2329</td>
                            <td class="idCode">華　泰</td>
                            <td class="nums">10.3</td>
                            <td class="nums green">-0.25</td>
                            <td class="nums">10.6</td>
                            <td class="nums">10.3</td>
                            <td class="nums">2,222</td>
                            <td class="nums">674</td>
                            <td class="nums">23,191,465</td>
                            <td class="nums">9.9</td>
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
    <!-- bootstrap-daterangepicker -->
    <script src="js/moment/moment.min.js"></script>
    <script src="js/bootstrap-daterangepicker/daterangepicker.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="build/js/custom.min.js"></script>
    <!-- bootstrap-daterangepicker -->
    <script>
      $(document).ready(function() {
        var cb = function(start, end, label) {
          console.log(start.toISOString(), end.toISOString(), label);
          $('#reportrange_right span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        };

        var optionSet1 = {
          startDate: moment().subtract(29, 'days'),
          endDate: moment(),
          minDate: '01/01/2012',
          maxDate: '12/31/2015',
          dateLimit: {
            days: 60
          },
          showDropdowns: true,
          showWeekNumbers: true,
          timePicker: false,
          timePickerIncrement: 1,
          timePicker12Hour: true,
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          opens: 'right',
          buttonClasses: ['btn btn-default'],
          applyClass: 'btn-small btn-primary',
          cancelClass: 'btn-small',
          format: 'MM/DD/YYYY',
          separator: ' to ',
          locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Clear',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
          }
        };

        $('#reportrange_right span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

        $('#reportrange_right').daterangepicker(optionSet1, cb);

        $('#reportrange_right').on('show.daterangepicker', function() {
          console.log("show event fired");
        });
        $('#reportrange_right').on('hide.daterangepicker', function() {
          console.log("hide event fired");
        });
        $('#reportrange_right').on('apply.daterangepicker', function(ev, picker) {
          console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
        });
        $('#reportrange_right').on('cancel.daterangepicker', function(ev, picker) {
          console.log("cancel event fired");
        });

        $('#options1').click(function() {
          $('#reportrange_right').data('daterangepicker').setOptions(optionSet1, cb);
        });

        $('#options2').click(function() {
          $('#reportrange_right').data('daterangepicker').setOptions(optionSet2, cb);
        });

        $('#destroy').click(function() {
          $('#reportrange_right').data('daterangepicker').remove();
        });

      });
    </script>

    <script>
      $(document).ready(function() {
        var cb = function(start, end, label) {
          console.log(start.toISOString(), end.toISOString(), label);
          $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        };

        var optionSet1 = {
          startDate: moment().subtract(29, 'days'),
          endDate: moment(),
          minDate: '01/01/2012',
          maxDate: '12/31/2015',
          dateLimit: {
            days: 60
          },
          showDropdowns: true,
          showWeekNumbers: true,
          timePicker: false,
          timePickerIncrement: 1,
          timePicker12Hour: true,
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          opens: 'left',
          buttonClasses: ['btn btn-default'],
          applyClass: 'btn-small btn-primary',
          cancelClass: 'btn-small',
          format: 'MM/DD/YYYY',
          separator: ' to ',
          locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Clear',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
          }
        };
        $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
        $('#reportrange').daterangepicker(optionSet1, cb);
        $('#reportrange').on('show.daterangepicker', function() {
          console.log("show event fired");
        });
        $('#reportrange').on('hide.daterangepicker', function() {
          console.log("hide event fired");
        });
        $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
          console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
        });
        $('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
          console.log("cancel event fired");
        });
        $('#options1').click(function() {
          $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
        });
        $('#options2').click(function() {
          $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
        });
        $('#destroy').click(function() {
          $('#reportrange').data('daterangepicker').remove();
        });
      });
    </script>

  

    <script>
      $(document).ready(function() {
        $('#reservation').daterangepicker(null, function(start, end, label) {
          console.log(start.toISOString(), end.toISOString(), label);
        });
      });
    </script>
    <!-- /bootstrap-daterangepicker -->

  </body>
</html>