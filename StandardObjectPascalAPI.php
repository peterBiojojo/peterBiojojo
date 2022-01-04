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
                    
                    <!-- Abs toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Abs <em><strong class="blk">function</strong> Abs(X: Integer): Integer</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns an absolute value.<br>
<strong>Abs</strong> returns the absolute value of the argument, X.<br>
X is an integer-type or real-type expression.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> N1: Integer;
<strong class="blk">begin</strong>
N1:= -7 ;                       
ShowMessage(FloatToStr(<strong>Abs</strong>(N1))); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'7'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Abs toggle區結束 -->
                  
                  <!-- AnsiCompareStr toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">AnsiCompareStr<em><strong class="blk">function</strong> AnsiCompareStr(<strong class="blk">const</strong> S1, S2: <strong class="blk">string</strong>): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Compare two strings with case-sensitivity.<br>
<strong>AnsiCompareStr</strong> compares S1 to S2 with case-sensitivity. The compare operation is controlled by the current user locale. The return value is the same as CompareStr.<br>
To compare strings without case-sensitivity, use AnsiCompareText.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1,S2: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:='URANUS';
S2:='uranus';
<strong class="blk">if</strong> <strong>AnsiCompareStr</strong>(S1,S2)<>0 <strong class="blk">then</strong> 
ShowMessage('Not Same');
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'Not Same'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- AnsiCompareStr toggle區結束 -->
                  
                  <!-- AnsiCompareText toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">AnsiCompareText<em><strong class="blk">function</strong> AnsiCompareText(<strong class="blk">const</strong> S1, S2: <strong class="blk">string</strong>): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Compare two strings without case-sensitivity.<br>
<strong>AnsiCompareText</strong> compares S1 to S2 without case-sensitivity. The compare operation is controlled by the current user locale, unlike CompareText. The return value is the same as for CompareStr.<br>
To compare strings with case-sensitivity, use AnsiCompareStr.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1,S2: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:='URANUS';
S2:='uranus';
<strong class="blk">if</strong> <strong>AnsiCompareText</strong>(S1,S2)=0 <strong class="blk">then</strong> 
ShowMessage('Same');
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'Same'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- AnsiCompareText toggle區結束 -->
                  
                  <!-- AnsiLowerCase toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">AnsiLowerCase<em><strong class="blk">function</strong> AnsiLowerCase(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns a string that is a copy of the given string converted to lowercase.<br>
<strong>AnsiLowerCase</strong> returns a string that is a copy of the given string converted to lowercase. The conversion uses the current locale. This function supports multi-byte character sets (MBCS).</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>AnsiLowerCase</strong>('URANUS');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'uranus'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- AnsiLowerCase toggle區結束 -->
                  
                  <!-- AnsiUpperCase toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">AnsiUpperCase<em><strong class="blk">function</strong> AnsiUpperCase(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a string to uppercase.<br>
<strong>AnsiUpperCase</strong> returns a string that is a copy of S, converted to uppercase. The conversion uses the current locale.
Note: This function supports multi-byte character sets (MBCS)</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>AnsiUpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- AnsiUpperCase toggle區結束 -->
                  
                  <!-- ArcTan toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">ArcTan <em><strong class="blk">function</strong> ArcTan(<strong class="blk">const</strong> X: Double): Double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Calculates the arctangent of a given number.<br>
In Delphi code, <strong>ArcTan</strong> returns the arctangent of X.<br>
X is a real-type expression that gives an angle in radians.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> d:double; 
<strong class="blk">begin</strong>
d:= <strong>ArcTan</strong>(124.5);          
ShowMessage(FloatToStr(d)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'1.56276437100531'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- ArcTan toggle區結束 -->
                    
                    <!-- Assigned toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Assigned <em><strong class="blk">function</strong> Assigned(var P): Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Tests for a nil (unassigned) pointer or procedural variable.
Use <strong>Assigned</strong> to determine whether the pointer or the procedure referenced by P is nil. P must be a variable reference of a pointer or procedural type.<br>
<strong>Assigned</strong>(P) corresponds to the test P <> nil for a pointer variable, and @P <> nil for a procedural variable.<br>
<strong>Assigned</strong> returns False if P is nil, True otherwise.<br>
Tip: When testing object events and procedures for assignment, you cannot test for nil, and using <strong>Assigned</strong> is the right way.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
<em>// Pointer variables are not set to nil by default</em>
S1:= '1';
<strong class="blk">if</strong> <strong>Assigned</strong>(S1)
<strong class="blk">then</strong> ShowMessage('S1 is not nil')
<strong class="blk">else</strong> ShowMessage('S1 is nil');
  
<em>// So we must set them to nil to be sure that they are undefined</em>
S1 := Nil;
<strong class="blk">if</strong> <strong>Assigned</strong>(S1)
<strong class="blk">then</strong> ShowMessage('S1 <strong class="blk">is</strong> still <strong class="blk">not</strong> nil')
<strong class="blk">else</strong> ShowMessage('S1 <strong class="blk">is</strong> nil');
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'S1 is still not nil'}
{'S1 is nil'}  
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Assigned toggle區結束 -->
                  
                  <!-- Beep toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Beep <em><strong class="blk">procedure</strong> Beep;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Generates a message beep.<br>
<strong>Beep</strong> generates a conventional beep message.<br>
Note: On Windows, the <strong>Beep</strong> routine is based on the Windows API Messages.<br>
Note: On MAC OS, to minimize library dependencies in the runtime library, the <strong>Beep</strong> routine has limited functionality.<br>
Note: On MAC OS, the beep is generated by writing a "bell character" (ASCII #7) to either the STDERR or STDOUT terminal file streams when available.</p>
                                </div>
                                <pre class="ac mart20"><strong>Beep;</strong>
                  	    	</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Beep  toggle區結束 -->
                  
                  <!-- Chr toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Chr <em><strong class="blk">function</strong> Chr(X: Byte): Char;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the character for a specified ASCII value.<br>
<strong>Chr</strong> returns the character with the ordinal value (ASCII value) of the byte-type expression, X. The Byte parameter is an unsigned integer value large enough to represent a character. Word or UInt16 is also appropriate, because now that the string type is Unicode, a character is represented by two bytes.<br>
<strong>Chr</strong> is an old Pascal standard function. For clarity, you can use a typecast such as Char() or AnsiChar() depending on the character type needed.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= 'test';                    
ShowMessage(S1+chr(13)+<strong>chr</strong>(10)+S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'test'
'test'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Chr toggle區結束 -->
                  
                  <!-- CompareStr toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">CompareStr<em><strong class="blk">function</strong> CompareStr(<strong class="blk">const</strong> S1, S2: <strong class="blk">string</strong>): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Compares two strings, with case sensitivity.<br>
<strong>CompareStr</strong> compares S1 to S2, with case sensitivity. The return value is less than 0 if S1 is less than S2, 0 if S1 equals S2, or greater than 0 if S1 is greater than S2. The comparison operation is based on the 16-bit ordinal value of each character and is not affected by the current locale, when using the first <strong>CompareStr</strong> overloaded method.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1,S2: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:='URANUS';
S2:='uranus';
if <strong>CompareStr</strong>(S1,S2)<>0 <strong class="blk">then</strong> 
ShowMessage('Not Same');
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'Not Same'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- CompareStr toggle區結束 -->
                  
                  <!-- CompareText toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">CompareText<em><strong class="blk">function</strong> CompareText(<strong class="blk">const</strong> S1, S2: <strong class="blk">string</strong>): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Compares two strings by their ordinal value, without case sensitivity.<br>
<strong>CompareText</strong> compares S1 and S2 and returns 0 if they are equal. If S1 is greater than S2, <strong>CompareText</strong> returns an integer greater than 0. If S1 is less than S2, CompareText returns an integer less than 0. <strong>CompareText</strong> is not case sensitive and is not affected by the current locale, when using the first <strong>CompareText</strong> overloaded method.</p>
                                </div>
                                <pre class="ac mart20">
S1:='URANUS';
S2:='uranus';
if <strong>CompareText</strong>(S1,S2)=0 <strong class="blk">then</strong> 
ShowMessage('Same');
                  	    	</pre>
                            <pre class="ac">
{'Same'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- CompareText toggle區結束 -->
                  
                  <!-- Copy toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Copy <em><strong class="blk">function</strong> Copy(S: <strong class="blk">string</strong> ; Index: Integer; Count: Integer): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns a substring of a string or a segment of a dynamic array.<br>
S is an expression of a string or dynamic-array type. Index and Count are integer-type expressions. <strong>Copy</strong> returns a substring or subarray containing Count characters or elements starting at S[Index]. The substring or subarray is a unique copy (that is, it does not share memory with S; if the elements of the array are pointers or objects, these are not copied as well.)<br>
If Index is larger than the length of S, <strong>Copy</strong> returns an empty string or array.<br>
If Count specifies more characters or array elements than are available, only the characters or elements from S[Index] to the end of S are returned.<br>
Notes:<br>
<strong>Copy</strong> uses one-based array indexing even in platforms where the strings are zero-based.<br>
When S is a dynamic array, you can omit the Index and Count parameters and Copy copies the entire array.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=  <strong>Copy</strong>('Uranus',0,3);   
ShowMessage(S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'Ura'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Copy toggle區結束 -->
                  
                  <!-- Cos toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Cos <em><strong class="blk">function</strong> Cos(<strong class="blk">const</strong> X: Double): Double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Calculates the cosine of an angle.<br>
In Delphi code, Cos returns the cosine of the angle X.<br>
X is a real-type expression that represents an angle in radians.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> d:double;  
<strong class="blk">begin</strong>
d:= <strong>Cos</strong>(124.5);          
ShowMessage(FloatToStr(d)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'0.39593899065726'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Cos toggle區結束 -->
                                    
                  <!-- Date toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Date <em><strong class="blk">function</strong> Date: TDateTime;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the current date.<br>
Use <strong>Date</strong> to obtain the current local date as a System.TDateTime value. The time portion of the value is 0 (midnight).</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=DateToStr(<strong>Date</strong>); 
ShowMessage(S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'2017/1/1'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Date toggle區結束 -->
                  
                  <!-- DateTimeToStr toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">DateTimeToStr <em><strong class="blk">function</strong> DateTimeToStr(<strong class="blk">const</strong> DateTime: TDateTime): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a TDateTime value to a string, using the local settings for displaying date and time.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=<strong>DateTimeToStr</strong>(Now); 
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'2017/5/9 下午 04:36:19'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- DateTimeToStr  toggle區結束 -->
                  
                  <!-- DateToStr toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">DateToStr <em><strong class="blk">function</strong> DateToStr(<strong class="blk">const</strong> DateTime: TDateTime): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a TDateTime value into a string.<br>
Use DateToStr to obtain a string representation of a date value that can be used for display purposes.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=<strong>DateToStr</strong>(Now); 
ShowMessage(S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'2017/1/1'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- DateToStr  toggle區結束 -->
                  
                  <!-- DayOfWeek toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">DayOfWeek <em><strong class="blk">function</strong> DayOfWeek(<strong class="blk">const</strong> DateTime: TDateTime): Word;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the day of the week for a specified date.
<strong>DayOfWeek</strong> returns the day of the week of the specified date as an integer between 1 and 7, where Sunday is the first day of the week and Saturday is the seventh.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">begin</strong>
ShowMessage(inttostr(<strong>DayOfWeek</strong>(now)));
<strong class="blk">end</strong>;</em>
                  	    	</pre>
                            <pre class="ac">
{5}<em>//1-7</em>
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- DayOfWeek toggle區結束 -->
                  
                  <!-- Dec toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Dec <em><strong class="blk">function</strong> Dec(var X: Integer): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Decrements a variable by 1.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> N1: Integer;
<strong class="blk">begin</strong>
N1:= 10;
<strong>Dec</strong>(N1);
ShowMessage(inttostr(N1)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'9'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Dec toggle區結束 -->
                  
                  <!-- DecodeDate toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">DecodeDate<em><strong class="blk">procedure</strong> DecodeDate(<strong class="blk">const</strong> DateTime: TDateTime; var Year, Month, Day: Word);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns Year, Month, and Day values for a TDateTime value.<br>
The DecodeDate procedure breaks the value specified as the Date parameter into Year, Month, and Day values. If the given TDateTime value has a negative (BC) year, the year, month, and day return parameters are all set to zero.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> Year,Month,Day: Word;
<strong class="blk">begin</strong>
<strong>DecodeDate</strong>(now,Year,Month,day1); 
ShowMessage(inttostr(Year)+'-'+inttostr(Month)+'-'+inttostr(Day));
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'2017-01-01'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- DecodeDate toggle區結束 -->
                  
                  <!-- DecodeTime toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">DecodeTime <em><strong class="blk">procedure</strong> DecodeTime(<strong class="blk">const</strong> DateTime: TDateTime; var Hour, Min, Sec, MSec: Word);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Breaks a TDateTime value into hours, minutes, seconds, and milliseconds.<br>
DecodeTime breaks the object specified as the Time parameter into hours, minutes, seconds, and milliseconds.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> Hour, Min, Sec, MSec: Word;
<strong class="blk">begin</strong>
<strong>DecodeTime</strong>(now,Hour,Min,Sec,MSec);                                 
ShowMessage(inttostr(Hour)+'-'+inttostr(Min)+'-'+inttostr(Sec)+'-'+inttostr(MSec)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'12-00-00-000'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- DecodeTime toggle區結束 -->
                  
                  <!-- Delete toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Delete <em><strong class="blk">procedure</strong> Delete(var S: <strong class="blk">string</strong>; Index: Integer; Count: Integer);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Removes a substring from a string, or removes elements from a dynamic array and returns the modified array.<br>
In Delphi code, <strong>Delete</strong> removes a substring of Count characters from string or array S, starting with S[Index]. S is a string-type variable. Index and Count are integer-type expressions.<br>
If Index is larger than the length of the string or array (or less than 1), no characters are deleted.<br>
If Count specifies more characters or array fields than remain starting at Index, <strong>Delete</strong> removes the rest of the string or array. If Count is less than or equal to 0, no characters are deleted.<br>Note: <strong>Delete</strong> uses one-based array indexing even in platforms where the strings are zero-based.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= 'Uranus';
<strong>Delete</strong>(S1,1,3);   
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'nus'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Delete toggle區結束 -->
                  
                  <!-- DoRandom toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">DoRandom <em><strong class="blk">function</strong> DoRandom : double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">result is a real-type random number within the range:<br>
0 <= X < 1.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> F1: Single;
<strong class="blk">begin</strong>
<em>// Get floating point random numbers in the range 0 <= Number < 1.0</em>
F1:= <strong>DoRandom</strong>;
ShowMessage('F1 = '+FloatToStr(F1)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'F1 = [random numbers]'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- DoRandom toggle區結束 -->
                  
                  <!-- EncodeDate toggle區開始                     <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">EncodeDate<em><strong class="blk">function</strong> EncodeDate(Year, Month, Day: Word): TDateTime;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns a TDateTime value that represents a specified Year, Month, and Day.<br>
EncodeDate returns a TDateTime value from the values specified as the Year, Month, and Day parameters.<br>
The year must be from 1 through 9999.<br>
Valid Month values are from 1 through 12.<br>
Valid Day values are from 1 through 28, 29, 30, or 31, depending on the Month value. For example, the possible Day values for month 2 (February) are from 1 through 28 or from 1 through 29, depending on whether the Year value specifies a leap year.<br>
If the specified values are not within range, EncodeDate raises an EConvertError exception.</p>
                                </div>
                                <pre class="ac mart20">
S1:=DateToStr(<strong>EncodeDate</strong>('2017','03','08'));
ShowMessage(S1);
                  	    	</pre>
                            <pre class="ac">
{'2017/3/8'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- EncodeDate toggle區結束 -->
                  
                  <!-- EncodeTime toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">EncodeTime<em><strong class="blk">function</strong> EncodeTime(Hour, Min, Sec, MSec: Word): TDateTime;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns a TDateTime value for a specified Hour, Min, Sec, and MSec.<br>
<strong>EncodeTime</strong> encodes the given hour, minute, second, and millisecond into a TDateTime value.<br>
Valid Hour values are 0 through 23.<br>
Valid Min and Sec values are 0 through 59.<br>
Valid MSec values are 0 through 999.<br>
If the specified values are not within range, <strong>EncodeTime</strong> raises an EConvertError exception.<br>
The resulting value is a number between 0 and 1 (inclusive) that indicates the fractional part of a day given by the specified time or (if 1.0) midnight on the following day. The value 0 corresponds to midnight, 0.5 corresponds to noon, 0.75 corresponds to 6:00 P.M., and so on.</p>
                                </div>
                                <pre class="ac mart20">
S1:=TimeToStr(<strong>EncodeTime</strong>('12','00','00','00'));
ShowMessage(S1);
                  	    	</pre>
                            <pre class="ac">
{'下午 12:00:00'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- EncodeTime toggle區結束 -->
                  
                  <!-- Exp toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Exp <em><strong class="blk">function</strong> Exp(<strong class="blk">const</strong> X: Double): Double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the exponential of X.<br>
In Delphi code, <strong>Exp</strong> returns the value of e raised to the power of X, where e is the base of natural logarithms.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> d:double;
<strong class="blk">begin</strong>
d:= <strong>Exp</strong>(124.5);          
ShowMessage(FloatToStr(d)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'1.17398621369989E54'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Exp toggle區結束 -->
                  
                  <!-- FloatToStr toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">FloatToStr<em><strong class="blk">function</strong> FloatToStr(Value: double): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a floating-point value to a string.<br>
<strong>FloatToStr</strong> converts the floating-point value given by Value to its string representation. The conversion uses general number format with 15 significant digits.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=<strong>FloatToStr</strong>(3.14);
ShowMessage(S1);  
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'3.14'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- FloatToStr toggle區結束 -->
                  
                  <!-- FormatDateTime toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">FormatDateTime <em><strong class="blk">function</strong> FormatDateTime(<strong class="blk">const</strong> Format: <strong class="blk">string</strong>; DateTime: TDateTime): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Formats a TDateTime value.<br>
<strong>FormatDateTime</strong> formats the TDateTime value given by DateTime using the format given by Format. See the following table for information about the supported format strings.<br>
If the string specified by the Format parameter is empty, the TDateTime value is formatted as if a 'c' format specifier had been given.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>FormatDateTime</strong>('''DateTime is: ''yyyy-m-d h:n:s:zz', Now);                  
ShowMessage(S1);  
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'DateTime is: 2017-3-9 17:36:19:857'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- FormatDateTime  toggle區結束 -->
                  
                  <!-- FormatFloat toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">FormatFloat<em><strong class="blk">function</strong> FormatFloat(<strong class="blk">const</strong> Format: <strong class="blk">string</strong>; Value: double): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Formats a floating-point value.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=  <strong>FormatFloat</strong>('###.###',12.3456)
ShowMessage(S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'12.346'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- FormatFloat toggle區結束 -->
                  
                  <!-- Frac toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Frac <em><strong class="blk">function</strong> Frac(<strong class="blk">const</strong> X: Double): Double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the fractional part of a real number.<br>
In Delphi code, the <strong>Frac</strong> function returns the fractional part of the argument X.<br>
X is a real-type expression. The result is the fractional part of X; that is, <strong>Frac</strong>(X) = X - Int(X).</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> d:double;  
<strong class="blk">begin</strong>
d:= <strong>Frac</strong>(124.5);          
ShowMessage(FloatToStr(d)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'0.5'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Frac toggle區結束 -->
                  
                  <!-- Length toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Length <em><strong class="blk">function</strong> Length(S: <strong class="blk">string</strong>): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the number of characters in a string or of elements in an array.<br>
In Delphi code, <strong>Length</strong> returns the number of characters actually used in the string or the number of elements in the array. In C++ code, use the method of the same name on the AnsiString or DynamicArray class.<br>
S is a string-valued or array-valued expression.<br>
For single-byte and multibyte strings, <strong>Length</strong> returns the number of bytes used by the string.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= 'Uranus';
ShowMessage(IntToStr(<strong>Length</strong>(S1))); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'6'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Length toggle區結束 -->
                  
                  <!-- Ln toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Ln <em><strong class="blk">function</strong> Ln(<strong class="blk">const</strong> X: Double): Double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the natural logarithm of a real expression.<br>
In Delphi code, <strong>Ln</strong> returns the natural logarithm (Ln(e) = 1) of the real-type expression X.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> d:double;
<strong class="blk">begin</strong>
d:= <strong>Ln</strong>(124.5);          
ShowMessage(FloatToStr(d)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'4.82430571590476'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Ln toggle區結束 -->
                  
                  <!-- LowerCase toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">LowerCase<em><strong class="blk">function</strong> LowerCase(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts an ASCII string to lowercase.<br>
<strong>LowerCase</strong> returns a string with the same text as the string passed in S, but with all letters converted to lowercase. The conversion affects only 7-bit ASCII characters between 'A' and 'Z'. To convert 8-bit international characters, use AnsiLowerCase.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>LowerCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- LowerCase toggle區結束 -->
                  
                  <!-- Inc toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Inc <em><strong class="blk">procedure</strong> Inc(var X:Integer);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Increments an ordinal value by 1.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> N1: Integer;
<strong class="blk">begin</strong>
N1:= 0;
<strong>inc</strong>(N1);
ShowMessage(inttostr(N1)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'1'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Inc toggle區結束 -->
                  
                  <!-- IncMonth toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">IncMonth <em><strong class="blk">function</strong> IncMonth(<strong class="blk">const</strong> DateTime: TDateTime; NumberOfMonths: Integer): TDateTime;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns a date shifted by a specified number of months.<br>
<strong>IncMonth</strong> returns the value of the Date parameter, incremented by NumberOfMonths months. NumberOfMonths can be negative, to return a date N months previous.<br>
If the input day of month is greater than the last day of the resulting month, the day is set to the last day of the resulting month. The time of day specified by the Date parameter is copied to the result.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=datetimetostr(<strong>incMonth</strong>(Now,2)); 
ShowMessage(S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'2017/5/9 下午 04:36:19'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- IncMonth  toggle區結束 -->
                  
                  <!-- InputQuery toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">InputQuery <em><strong class="blk">function</strong> InputQuery(<strong class="blk">const</strong> ACaption, APrompt: <strong class="blk">string</strong>; var Value: <strong class="blk">string</strong>): boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac"></p>
                                </div>
                                <pre class="ac mart20">
NewString := 'Default String';
if <strong>InputQuery</strong>('Input Box', 'Prompt', NewString) <strong class="blk">then</strong> 
Button11.Text := NewString;
                  	    	</pre>
                            <pre class="ac">
{Button11.Text = NewString}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- InputQuery toggle區結束 -->
                  
                  <!-- Insert toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Insert <em><strong class="blk">procedure</strong> Insert(Source: <strong class="blk">string</strong>; var Dest: ; Index: Integer);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Inserts a substring into a string (or inserts a dynamic array into a dynamic array), beginning at a specified position.<br>
In Delphi code, <strong>Insert</strong> merges Source into Dest at the position Dest[Index].</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= '12345678';
<strong>insert</strong>('-+-', S1, 3);
ShowMessage('Target : '+S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'Target : 12-+-345678'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Insert toggle區結束 -->
                  
                  <!-- Int toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Int <em><strong class="blk">function</strong> Int(<strong class="blk">const</strong> X: Double): Double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the integer part of a real number.<br>
In Delphi code, <strong>Int</strong> returns the integer part of X; that is, X rounded toward zero. X is a real-type expression.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> d:double;  
<strong class="blk">begin</strong>
d:= <strong>Int</strong>(124.5);          
ShowMessage(FloatToStr(d)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'124'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Int toggle區結束 -->
                  
                  <!-- IntToHex toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">IntToHex<em><strong class="blk">function</strong> IntToHex(Value: Integer; Digits: Integer): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the hex representation of an integer.<br>
<strong>IntToHex</strong> converts a number into a string containing the number's hexadecimal (base 16) representation. Value is the number to convert. Digits indicates the minimum number of hexadecimal digits to return.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>IntToHex</strong>(10,2);                             
ShowMessage(S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'0A'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- IntToHex toggle區結束 -->
                  
                  <!-- IntToStr toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">IntToStr<em><strong class="blk">function</strong> IntToStr(Value: Integer): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts an integer to a string.<br>
<strong>IntToStr</strong> converts an integer to a string that contains the decimal representation of that number.<br>
To convert an unsigned integer to string, use the UIntToStr function.<br>
To convert an integer to a string with minimum length, use the Str procedure.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1：=<strong>IntToStr</strong>(10);
ShowMessage(S1)；
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'10'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- IntToStr toggle區結束 -->
                  
                  <!-- IsLeapYear toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">IsLeapYear <em><strong class="blk">function</strong> IsLeapYear(Year: Word): Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Indicates whether a specified year is a leap year.<br>
Call <strong>IsLeapYear</strong> to determine whether the year specified by the Year parameter is a leap year. Year specifies the calendar year.</p>
                                </div>
                                <pre class="ac mart20">
S1:= BooleantoStr(<strong>IsLeapYear</strong>('2017'));
ShowMessage(S1);
                  	    	</pre>
                            <pre class="ac">
{'false'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- IsLeapYear  toggle區結束 -->
                  
                  <!-- IsValidIdent toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">IsValidIdent<em><strong class="blk">function</strong> IsValidIdent(<strong class="blk">const</strong> Ident: <strong class="blk">string</strong>): Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Determines whether a string conforms to Delphi identifier rules.<br>
Call <strong>IsValidIdent</strong> to determine whether the passed Ident is valid for use as an identifier, such as the name of a component.<br>
An identifier is a sequence of letters, digits, or underscores. Only the first 63 characters are used uniquely. Letters are limited to A-Z and a-z, although the case is ignored. The first character cannot be a digit.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1,S2: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:='uranus';
S2:='uranus.com';
S1:= Booleantostr(<strong>IsValidIdent</strong>(S1));                            
S2:= Booleantostr(<strong>IsValidIdent</strong>(S2));
ShowMessage(S1+','+S2);  
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'true,false'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- IsValidIdent toggle區結束 -->
                  
                  <!-- Now toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Now <em><strong class="blk">function</strong> Now: TDateTime;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the current date and time.<br>
Returns the current date and time, corresponding to the sum of the value returned by the global Date and Time functions.<br>
Note: Although TDateTime values can represent milliseconds, <strong>Now</strong> is accurate only to the nearest second.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=DateTimeToStr(<strong>Now</strong>); 
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'2017/3/9 下午 04:36:19'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Now  toggle區結束 -->
                  
                  <!-- Odd toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Odd <em><strong class="blk">function</strong> Odd(X: Integer): Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns True if argument is an odd number.<br>
In Delphi code, <strong>Odd</strong> tests whether the argument is an odd number. It returns True if X is an odd number, False if X is even.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> N1,N2: Integer;
<strong class="blk">begin</strong>
N1:= 1;
N2:= 2;
ShowMessage(Booleantostr(<strong>Odd</strong>(N1))); 
ShowMessage(Booleantostr(<strong>Odd</strong>(N2))); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'true'}
{'false'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Odd toggle區結束 -->
                  
                  <!-- Ord toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Ord <em><strong class="blk">function</strong> Ord(X: Ordinal): Byte;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the ordinal value of an ordinal-type expression.<br>
X is a Delphi ordinal-type expression. The result is the ordinal position of X; its type is the smallest standard integer type that can hold all values of X's type.<br>
<strong>Ord</strong> cannot operate on Int64 values.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong>
A   : AnsiChar;
C   : Char;
W   : WideChar;
E   : Boolean;
I   : Integer;
I64 : Int64;
<strong class="blk">begin</strong>
<em>// Set the ordinal type values</em>
A   := 'A';
C   := 'C';
W   := 'W';
E   := True;
I   := 22;
I64 := 64;
<em>// And show the value of each</em>
ShowMessage('A = '+IntToStr(<strong>ord</strong>(A)));
ShowMessage('C = '+IntToStr(<strong>ord</strong>(C)));
ShowMessage('W = '+IntToStr(<strong>ord</strong>(W)));
ShowMessage('E = '+IntToStr(<strong>ord</strong>(E)));
ShowMessage('I = '+IntToStr(<strong>ord</strong>(I)));
ShowMessage('I64 = '+IntToStr(<strong>ord</strong>(I64)));
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'A = 65'}
{'C = 67'}
{'W = 87'}
{'E = 1'}
{'I = 22'}
{'I64 = 64'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Ord toggle區結束 -->
                  
                  <!-- Pos toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Pos <em><strong class="blk">function</strong> Pos(<strong class="blk">const</strong> SubStr, Str: _ShortStr): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Locates a substring in a given string.<br>
The <strong>Pos</strong> method returns the index of the first occurence of Substr in Str, starting the search at Offset.<br>
This method returns zero if Substr is not found or Offset is invalid (for example, if Offset exceeds the String length or is less than 1).<br>
The Offset argument is optional. Offset is set to 1 by default, if no value for Offset is specified it takes the default value to start the search from the beginning.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= 'Uranus';
ShowMessage(IntToStr(pos('a',S1))); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'3'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Pos toggle區結束 -->
                  
                  <!-- Randomize toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Randomize <em><strong class="blk">procedure</strong> Randomize;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Initializes the random number generator with a random value.<br>
0 <= X < 1.</p>
                                </div>
                                <pre class="ac mart20">
<strong>Randomize</strong>;
                  	    	</pre>

                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Randomize toggle區結束 -->
                  
                  <!-- Random toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Random <em><strong class="blk">function</strong> Random(<strong class="blk">const</strong> ARange: Integer): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Generates random numbers within a specified range.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> N1: Integer;
<strong class="blk">begin</strong>
<em>//The 10 value gives a range 0..9</em>
N1:= <strong>Random</strong>(10); 
ShowMessage('N1 = '+IntToStr(N1));
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'N1 = [random numbers]'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Random toggle區結束 -->
                  
                  <!-- Round toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Round <em><strong class="blk">function</strong> Round ( const Number : double ) : Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the value of X rounded to the integer number.<br>
In Delphi, the <strong>Round</strong> function rounds a real-type value to an integer-type value.<br>
X is a real-type expression. <strong>Round</strong> returns an Int64 value that is the value of X rounded to an integer number. The default Rounding mode is rmNearest. If X is exactly halfway between two integer numbers, the result is always the even number. This method of rounding is often called "Banker's </p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= IntToStr(<strong>Round</strong>(12.9456)); 
ShowMessage(S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'13'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Round  toggle區結束 -->
                  
                  <!-- ShowMessage toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">ShowMessage <em><strong class="blk">procedure</strong> ShowMessage ( const Text : string ) ;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Displays a dialog box with the specified message and an OK button.<br>
<strong>ShowMessage</strong> Behaves Differently On Different Platforms.<br>
On desktop platforms, <strong>ShowMessage</strong> behaves synchronously. The call finishes only when the user closes the dialog box.<br>
On mobile platforms, <strong>ShowMessage</strong> behaves asynchronously. The call finishes instantaneously, it does not wait for the user to close the dialog box.</p>
                                </div>
                                <pre class="ac mart20">
<strong>ShowMessage</strong>('Hello Uranus!');
                  	    	</pre>
                            <pre class="ac">
{'Hello Uranus!'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- ShowMessage toggle區結束 -->
                  
                  <!-- Sin toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Sin <em><strong class="blk">function</strong> Sin(<strong class="blk">const</strong> X: Double): Double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the sine of the angle, in radians.<br>
In Delphi code, the <strong>Sin</strong> function returns the sine of the argument.<br>
X is a real-type expression. <strong>Sin</strong> returns the sine of the angle X, in radians.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> d:double; 
<strong class="blk">begin</strong>
d:= <strong>Sin</strong>(124.5);          
ShowMessage(FloatToStr(d)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'-0.918276818653999'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Sin toggle區結束 -->
                  
                  <!-- StrToDate toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">StrToDate <em><strong class="blk">function</strong> StrToDate(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): TDateTime;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a string to a TDateTime value.<br>
Call <strong>StrToDate</strong> to parse a string that specifies a date. If S does not contain a valid date, <strong>StrToDate</strong> raises an EConvertError exception.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> 
myDate : TDateTime;
<strong class="blk">begin</strong>
myDate := <strong>StrToDate</strong>('2017/01/01');
ShowMessage('myDate = '+DateToStr(myDate)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'myDate = 2017/01/01'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- StrToDate  toggle區結束 -->
                  
                  <!-- StrToTime toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">StrToTime <em><strong class="blk">function</strong> StrToTime(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): TDateTime;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a string to a TDateTime value.<br>
Call <strong>StrToTime</strong> to parse a string that specifies a time value. If S does not contain a valid time, <strong>StrToTime</strong> raises an EConvertError exception.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong>
myTime : TDateTime;
<strong class="blk">begin</strong>
myTime := <strong>StrToTime</strong>('12:00:00');
ShowMessage('myTime = '+TimeToStr(myTime)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'myTime = 2017/01/01'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- StrToTime  toggle區結束 -->
                  
                  <!-- StrToDateTime toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">StrToDateTime <em><strong class="blk">function</strong> StrToDateTime(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): TDateTime;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a string to a TDateTime value.<br>
Call <strong>StrToDateTime</strong> to parse a string that specifies a date and time value. If S does not contain a valid date, <strong>StrToDateTime</strong> raises an EConvertError exception.<br>
The S parameter must use the current locale's date/time format. In the US, this is commonly MM/DD/YY HH:MM:SS format. Specifying A.M. or P.M. as part of the time is optional, as are the seconds. Use 24-hour time (7:45 PM is entered as 19:45, for example) if A.M. or P.M. is not specified.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong>
myDateTime : TDateTime;
<strong class="blk">begin</strong>
myDateTime := <strong>StrToDateTime</strong>('2017/01/01 12:00:00');
ShowMessage('myDateTime = '+DateTimeToStr(myDateTime)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'myDateTime = 2017/01/01 12:00:00'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- StrToDateTime  toggle區結束 -->
                  
                  <!-- StrToFloat toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">StrToFloat<em><strong class="blk">function</strong> StrToFloat(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a given string to a floating-point value.<br>
Use <strong>StrToFloat</strong> to convert a string, S, to a floating-point value (leading and trailing blanks are ignored).<br>
S must consist of an optional sign (+ or -), a string of digits with an optional decimal point, and an optional mantissa.<br>
The mantissa consists of 'E' or 'e' followed by an optional sign (+ or -) and an optional number.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> F1: Single;
<strong class="blk">begin</strong>
F1:=<strong>StrToFloat</strong>('3.14');
F1:= F1+1;
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{F1 = 4.14}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- StrToFloat toggle區結束 -->
                  
                  <!-- StrToInt toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">StrToInt<em><strong class="blk">function</strong> StrToInt(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a string that represents an integer (decimal or hex notation) into a number.<br>
<strong>StrToInt</strong> converts the string S, which represents an integer-type number in either decimal or hexadecimal notation, into a number.<br>
S must be an integer number, in either decimal or hexadecimal (see below) notation, with an optional sign ("-" or "+") at the beginning. Decimal or thousand separators are not supported. If S does not represent a valid number, StrToInt raises an EConvertError exception.</p>
                                </div>
                                <pre class="ac mart20">N1:= StrToInt('10');      
                  	    	</pre>
                            <pre class="ac">
{N1 = 10}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- StrToInt toggle區結束 -->
                  
                  <!-- StrToIntDef toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">StrToIntDef<em><strong class="blk">function</strong> StrToIntDef(<strong class="blk">const</strong> S: <strong class="blk">string</strong>; Default: Integer): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a string that represents an integer (decimal or hex notation) into a number with error default.<br>
<strong>StrToIntDef</strong> converts the string S, which represents an integer-type number in either decimal or hexadecimal notation, into a number. If S does not represent a valid number, StrToIntDef returns Default.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> N1: Integer;
<strong class="blk">begin</strong>
N1:= <strong>StrToIntDef</strong>('10',2);                             
<strong class="white">{N1 = 10}</strong>
N1:= <strong>StrToIntDef</strong>('TEST',2);                             
<strong class="white">{N1 = 2} </strong>                       
<strong class="blk">end</strong>;
                  	    	</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- StrToIntDef toggle區結束 -->
                  
                  <!-- Sqr toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Sqr <em><strong class="blk">function</strong> Sqr(X: Integer): Integer</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the square of a number.<br>
In Delphi code, the Sqr function returns the square of the argument.<br>
X is a floating-point expression. The result, of the same type as X, is the square of X (or X*X).</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> number, squared : Single; 
<strong class="blk">begin</strong>
<em>// The square of 15 = 225</em>
number  := 15;
squared := sqr(number);
ShowMessage(FloatToStr(number)+' squared = '+FloatToStr(squared));

<em>// The square of 17 = 289</em>
number  := 17;
squared := sqr(number);
ShowMessage(FloatToStr(number)+' squared = '+FloatToStr(squared));
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{15 squared = 225}
{17 squared = 289}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Sqr toggle區結束 -->
                  
                  <!-- Sqrt toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Sqrt <em><strong class="blk">function</strong> Sqrt(<strong class="blk">const</strong> X: Double): Double;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the square root of X.<br>
X is a Delphi floating-point expression. The result is the square root of X.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> d:double;   
<strong class="blk">begin</strong>
d:= <strong>Sqrt</strong>(124.5);          
ShowMessage(FloatToStr(d)); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'11.1579568022107'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Sqrt toggle區結束 -->
                  
                  <!-- Time toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Time <em><strong class="blk">function</strong> Time: TDateTime;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the current time.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=TimeToStr(<strong>Time</strong>); 
ShowMessage(S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'下午 12:00:00'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Time toggle區結束 -->
                  
                  <!-- TimeToStr toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">TimeToStr <em><strong class="blk">function</strong> TimeToStr(<strong class="blk">const</strong> DateTime: TDateTime): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns a string that represents a TDateTime value.<br>
<strong>TimeToStr</strong> converts the Time parameter, a TDateTime value, to a string.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:=<strong>TimeToStr</strong>(Now); 
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'下午 12:00:00'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- TimeToStr  toggle區結束 -->
                  
                  <!-- Trim toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Trim<em><strong class="blk">function</strong> Trim(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Trims leading and trailing spaces and control characters from a string.<br>
<strong>Trim</strong> removes leading and trailing spaces and control characters from the given string S.<br>
In the 7-bit ASCII character set defined in ANSI X3.4-1977 (C0 and G0), "control codes" are defined as all characters whose code is from 0 through 31.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1：='   uranus   ';
ShowMessage(<strong>Trim</strong>(S1))；
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'uranus'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Trim toggle區結束 -->
                  
                  <!-- TrimLeft toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">TrimLeft<em><strong class="blk">function</strong> TrimLeft(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Trims leading spaces and control characters from a string.<br>
<strong>TrimLeft</strong> returns a copy of the string S with leading spaces and control characters removed.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1：='   uranus   ';
ShowMessage(<strong>TrimLeft</strong>(S1))；
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'uranus   '}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- TrimLeft toggle區結束 -->
                  
                  <!-- TrimRight toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">TrimRight<em><strong class="blk">function</strong> TrimRight(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Trims trailing spaces and control characters from a string.<br>
<strong>TrimRight</strong> returns a copy of the string S with trailing spaces and control characters removed.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1：='   uranus   ';
ShowMessage(<strong>TrimRight</strong>(S1))；
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'   uranus'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- TrimRight toggle區結束 -->
                  
                  <!-- Trunc toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Trunc <em><strong class="blk">function</strong> Trunc ( const Number : double ) : Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Truncates a real number to an integer.<br>
In Delphi code, the <strong>Trunc</strong> function truncates a real-type value to an integer-type value. X is a real-type expression. <strong>Trunc</strong> returns an Int64 value that is the value of X rounded toward zero.<br>
If the truncated value of X is not within the Int64 range, an EInvalidOp exception is raised.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= IntToStr(<strong>Trunc</strong>(12.9456));
ShowMessage(S1); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'12'}
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Trunc  toggle區結束 -->
                  
                  <!-- uppercase toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">UpperCase<em><strong class="blk">function</strong> UpperCase(<strong class="blk">const</strong> S: <strong class="blk">string</strong>): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns a copy of a string in uppercase.<br>
<strong>UpperCase</strong> returns a copy of the string S, with the same text but with all 7-bit ASCII characters between 'a' and 'z' converted to <strong>uppercase</strong>. To convert 8-bit international characters, use AnsiUpperCase instead.</p>
                                </div>
                                <pre class="ac mart20">
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- uppercase toggle區結束 -->
                  
                  <!-- VarIsNull toggle區開始 -->
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">VarIsNull <em><strong class="blk">function</strong> VarIsNull(<strong class="blk">const</strong> V: Variant): Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Indicates whether the specified variant is Null.<br>
<strong>VarIsNull</strong> returns true if the given variant contains the value Null. If the variant contains any other value, the function result is false.<br>
Note: Do not confuse a Null variant with an unassigned variant. A Null variant is still assigned, but has the value Null. Unlike unassigned variants, Null variants can be used in expressions and can be converted to other types of variants.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= 1; 
ShowMessage(Booleantostr(<strong>VarIsNull</strong>(S1))); 
S1:= null; 
ShowMessage(Booleantostr(<strong>VarIsNull</strong>(S1))); 
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{false} 
{true} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- VarIsNull  toggle區結束 -->
                  
                  <!-- VarToStr toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">VarToStr <em><strong class="blk">function</strong> VarToStr(<strong class="blk">const</strong> V: Variant): <strong class="blk">string</strong>;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Converts a variant's value to a string.<br>
<strong>VarToStr</strong> converts the data in the variant V to a string and returns the result. If the variant has a null value, <strong>VarToStr</strong> returns an empty string.</p>
                                </div>
                                <pre class="ac mart20">
N1:= 10;
Dec(N1);
ShowMessage(<strong>VarToStr</strong>(N1)); 
                  	    	</pre>
                            <pre class="ac">
{'9'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- VarToStr toggle區結束 -->
                  
                  <!-- Raise toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Raise <em><strong class="blk">procedure</strong> Raise(msg: <strong class="blk">string</strong>); </em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac"></p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Raise toggle區結束 -->
                  
                  <!-- CreateOleObject toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">CreateOleObject <em><strong class="blk">function</strong> CreateOleObject(<strong class="blk">const</strong> ClassName: <strong class="blk">string</strong>): IDispatch;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Instantiates an Automation object.<br>
<strong>CreateOleObject</strong> creates a single uninitialized object of the class specified by the ClassName parameter. ClassName specifies the string representation of the Class ID (CLSID). <strong>CreateOleObject</strong> is used to create an object of a specified type when the CLSID is known, and when the object is on a local or in-proc server. Only objects that are not part of an aggregate are created using <strong>CreateOleObject</strong>.<br>
Note: In Delphi code, <strong>CreateOleObject</strong> is called once to create each new single instance of a class. To create multiple instance of the same class, using a class factory is recommended.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- CreateOleObject toggle區結束 -->
                  
                  <!-- GetActiveOleObject toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">GetActiveOleObject <em><strong class="blk">function</strong> GetActiveOleObject(<strong class="blk">const</strong> ClassName: <strong class="blk">string</strong>): IDispatch;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Retrieves a reference to an IDispatch interface to a currently running, registered COM object.<br>
<strong>GetActiveOleObject</strong> returns a reference to the IDispatch interface of the active object for the given class indicated by ClassName. ClassName is the programmatic ID for the class of the active object from the OLE running object table. <strong>GetActiveOleObject</strong> is used to access the OLE running object table. To add an object to this table, use the RegisterActiveObject API.<br>
If either the the class object or the IDispatch interface are not successfully returned, an EOleSysError exception is raised.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- GetActiveOleObject toggle區結束 -->
                  
                  <!-- High toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">High <em><strong class="blk">function</strong> High(var X): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the highest value in the range of an argument.<br>
In Delphi code, call <strong>High</strong> to obtain the upper limit of an Ordinal, Array, or ShortString value. The result type is X, or the index type of X.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- High toggle區結束 -->
                  
                  <!-- Low toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Low <em><strong class="blk">function</strong> Low(var X): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the lowest value in a range.<br>
In Delphi code, call <strong>Low</strong> to obtain the lowest value or first element of an Ordinal, Array, or ShortString. Result type is X, or the index type of X, where X is either a type identifier or a variable reference.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Low toggle區結束 -->
                  
                  <!-- VarArrayHighBound toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">VarArrayHighBound <em><strong class="blk">function</strong> VarArrayHighBound(<strong class="blk">const</strong> A: Variant; Dim: Integer): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns high bound for a dimension in a variant array.<br>
<strong>VarArrayHighBound</strong> returns the high bound of the given dimension in the given variant array. The Dim parameter should be 1 for the leftmost dimension, 2 for the second leftmost dimension, and so on. An exception is raised if the variant given by A is not an array (EVariantInvalidArgError), or if the dimension specified by Dim does not exist (EVariantBadIndexError).</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- VarArrayHighBound toggle區結束 -->
                  
                  <!-- VarArrayLowBound toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">VarArrayLowBound <em><strong class="blk">function</strong> VarArrayLowBound(<strong class="blk">const</strong> A: Variant; Dim: Integer): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the low bound of a dimension in a variant array.<br>
<strong>VarArrayLowBound</strong> returns the low bound of the given dimension in the given variant array. The Dim parameter should be 1 for the leftmost dimension, 2 for the second leftmost dimension, and so on. An exception is raised if the variant given by A is not an array (EVariantInvalidArgError), or if the dimension specified by Dim does not exist (EVariantBadIndexError).</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- VarArrayLowBound toggle區結束 -->
                  
                  <!-- VarArrayCreate toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">VarArrayCreate <em><strong class="blk">function</strong> VarArrayCreate(<strong class="blk">const</strong> Bounds: array of Integer; AVarType: TVarType): Variant;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Creates a variant array.<br>
<strong>VarArrayCreate</strong> creates a variant array with the bounds given by Bounds and the element type given by VarType.<br>
The Bounds parameter must contain an even number of values, where each pair of values specifies the upper and lower bounds of one dimension of the array.<br>
Note: The Bounds_size parameter is the index of the last value in the Bounds array. This is one less than the total number of values. Thus, Bounds_size must always be an odd number.<br>
The element type of the array, given by the VarType parameter, is a variant type code. This must be one of the constants defined in the System unit. It cannot include the varArray or varByRef bits. The element type cannot be varString or a custom Variant type. To create a variant array of strings use the varOleStr type code. If the element type is varVariant, the elements of the array are themselves variants and can in turn contain variant arrays.<br>
If <strong>VarArrayCreate</strong> is unable to create the array, an EVariantArrayCreateError is raised.<br>
Note: Variant arrays with an element type of varByte are the preferred method of passing binary data between OLE Automation controllers and servers. Such arrays are subject to no translation of their data, and can be efficiently accessed using the VarArrayLock and VarArrayUnlock routines.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- VarArrayCreate toggle區結束 -->
                                                      
                  <!-- Machine toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Machine <em></em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac"></p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Machine toggle區結束 -->
                  
                  <!-- Scripter toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Scripter <em></em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac"></p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Scripter toggle區結束 -->
                  
                  <!-- Interpret toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Interpret <em><strong class="blk">procedure</strong> Interpret(AScriptStr: <strong class="blk">string</strong>);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac"></p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Interpret toggle區結束 -->
                  
                  <!-- SetOf toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">SetOf <em></em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac"></p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- SetOf toggle區結束 -->
                  
                  <!-- Chdir toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Chdir <em><strong class="blk">procedure</strong> ChDir(<strong class="blk">const</strong> S: <strong class="blk">string</strong>);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Changes the current directory.<br>
Note: <strong>ChDir</strong> changes the current directory to the path specified by S or P. If this operation fails, an EInOutError is raised.<br>
Note: On Windows, the path can include a drive specifier, which causes the current drive to be changed as well.<br>
Note: In Delphi, {$I+} handles run-time errors using exceptions. When using {$I-}, use IOResult to check for an I/O error.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Chdir toggle區結束 -->
                  
                  <!-- AssignFile toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">AssignFile <em><strong class="blk">function</strong> AssignFile(AFileName : <strong class="blk">string</strong>);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac"></p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- AssignFile toggle區結束 -->
                  
                  <!-- Reset toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Reset <em><strong class="blk">procedure</strong> Reset(var F: File; [ RecSize: Integer]);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Opens an existing file.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Reset toggle區結束 -->
                  
                  <!-- Rewrite toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Rewrite <em><strong class="blk">procedure</strong> Rewrite(var F: File; [ RecSize: Integer]);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Creates a new file and opens it.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Rewrite toggle區結束 -->
                  
                  <!-- Append toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Append <em><strong class="blk">function</strong> Append(var F: Text): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Prepares an existing file for adding text to its end.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Append toggle區結束 -->
                  
                  <!-- CloseFile toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">CloseFile <em><strong class="blk">procedure</strong> CloseFile(var F: File);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Terminates the association between a file variable and an external disk file.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- CloseFile toggle區結束 -->
                  
                  <!-- Write toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">Write <em><strong class="blk">procedure</strong> Write([var F: File]; P1; [ ..., PN]);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Writes to either a typed file or a text file.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- Write toggle區結束 -->
                  
                  <!-- WriteLn toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">WriteLn <em><strong class="blk">procedure</strong> Writeln([var F: File]; [ P1; [ ..., PN] ]);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Writes to a text file and adds an end-of-line marker.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- WriteLn toggle區結束 -->
                  
                  <!-- ReadLn toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">ReadLn <em><strong class="blk">procedure</strong> Readln(var F: File; [ ..., VN]);</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Reads a line of text from a file.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- ReadLn toggle區結束 -->
                  
                  <!-- EOF toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">EOF <em><strong class="blk">function</strong> Eof([var F: File]): Boolean;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Tests whether the file position is at the end of a file.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- EOF toggle區結束 -->
                  
                  <!-- FilePos toggle區開始
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">FilePos <em><strong class="blk">function</strong> FilePos(var F: File): Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the current file position.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- FilePos toggle區結束 -->
                  
                  <!-- FileSize toggle區開始 
                    <div class="gd lh mart20">
                        <div class="x_panel tile">
                            <div class="x_title">
                                <h2 class="codeName">FileSize <em><strong class="blk">function</strong> FileSize(var F: File):Integer;</em></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class="collapse-link"><i class="fa fa-chevron-down"></i></a></li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content ac disNone">
                                <div class="panel-body">
                                    <h4>Description</h4>
                                    <p class="ac">Returns the number of records in a file.</p>
                                </div>
                                <pre class="ac mart20">
                              
<strong class="blk">var</strong> S1: <strong class="blk">String</strong>;
<strong class="blk">begin</strong>
S1:= <strong>UpperCase</strong>('uranus');
ShowMessage(S1);
<strong class="blk">end</strong>;
                  	    	</pre>
                            <pre class="ac">
{'URANUS'} 
                       		</pre>
                        </div>
                        </div>
     				    
                        <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div><!-- FileSize toggle區結束 -->
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