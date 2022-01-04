var theme = {
          color: [
              '#3cabff', '#00425f', '#ec4747', '#46dac0',
              '#f88e47', '#aaa', '#b5b5ed', '#f88e47'
          ],

          title: {
              itemGap: 8,
              textStyle: {
                  fontWeight: 'normal',
                  color: '#00425f'
              }
          },

          dataRange: {
              color: ['#1f610a', '#97b58d']
          },

          toolbox: {
              color: ['#00425f', '#00425f', '#00425f', '#00425f']
          },

          tooltip: {
              backgroundColor: 'rgba(0,0,0,0.5)',
              axisPointer: {
                  type: 'line',
                  lineStyle: {
                      color: '#00425f',
                      type: 'dashed'
                  },
                  crossStyle: {
                      color: '#00425f'
                  },
                  shadowStyle: {
                      color: 'rgba(200,200,200,0.3)'
                  }
              }
          },

          dataZoom: {
              dataBackgroundColor: '#eee',
              fillerColor: 'rgba(64,136,41,0.2)',
              handleColor: '#00425f'
          },
          grid: {
              borderWidth: 0
          },

          categoryAxis: {
              axisLine: {
                  lineStyle: {
                      color: '#00425f'
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: ['#eee']
                  }
              }
          },

          valueAxis: {
              axisLine: {
                  lineStyle: {
                      color: '#00425f'
                  }
              },
              splitArea: {
                  show: true,
                  areaStyle: {
                      color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                  }
              },
              splitLine: {
                  lineStyle: {
                      color: ['#eee']
                  }
              }
          },
          timeline: {
              lineStyle: {
                  color: '#00425f'
              },
              controlStyle: {
                  normal: {color: '#00425f'},
                  emphasis: {color: '#00425f'}
              }
          },

          k: {
              itemStyle: {
                  normal: {
                      color: '#68a54a',
                      color0: '#a9cba2',
                      lineStyle: {
                          width: 1,
                          color: '#00425f',
                          color0: '#86b379'
                      }
                  }
              }
          },
          map: {
              itemStyle: {
                  normal: {
                      areaStyle: {
                          color: '#ddd'
                      },
                      label: {
                          textStyle: {
                              color: '#c12e34'
                          }
                      }
                  },
                  emphasis: {
                      areaStyle: {
                          color: '#99d2dd'
                      },
                      label: {
                          textStyle: {
                              color: '#c12e34'
                          }
                      }
                  }
              }
          },
          force: {
              itemStyle: {
                  normal: {
                      linkStyle: {
                          strokeColor: '#00425f'
                      }
                  }
              }
          },
          chord: {
              padding: 4,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          width: 1,
                          color: 'rgba(128, 128, 128, 0.5)'
                      },
                      chordStyle: {
                          lineStyle: {
                              width: 1,
                              color: 'rgba(128, 128, 128, 0.5)'
                          }
                      }
                  },
                  emphasis: {
                      lineStyle: {
                          width: 1,
                          color: 'rgba(128, 128, 128, 0.5)'
                      },
                      chordStyle: {
                          lineStyle: {
                              width: 1,
                              color: 'rgba(128, 128, 128, 0.5)'
                          }
                      }
                  }
              }
          },
          gauge: {
              startAngle: 225,
              endAngle: -45,
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#00425f']],
                      width: 8
                  }
              },
              axisTick: {
                  splitNumber: 10,
                  length: 12,
                  lineStyle: {
                      color: 'auto'
                  }
              },
              axisLabel: {
                  textStyle: {
                      color: 'auto'
                  },
              },
              splitLine: {
                  length: 18,
                  lineStyle: {
                      color: 'auto'
                  }
              },
              pointer: {
                  length: '90%',
                  color: 'auto'
              },
              title: {
                  textStyle: {
                      color: '#333',
                  }
              },
              detail: {
                  textStyle: {
                      color: 'auto'
                  }
              }
          },
          textStyle: {
              fontFamily: 'Arial, Verdana, sans-serif',
          }
      };

        var dom = document.getElementById("mainb");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		app.title = '氣泡圖';
		
		var data = [
			[[28604,150,17096869,'1234黑松',1990],[31163,399,276624400,'1301台塑',1990],[13670,74.7,10582082,'2330台積電',1990],[28599,75,4986705,'6488環球晶',1990],[29476,77.1,56943299,'3532台勝科',1990],[31476,5.4,78958237,'6491晶碩光學',1990],[28666,78.1,254830,'2409友達',1990],[29550,79.1,122249285,'2727王品集團',1990],[2076,177,20194354,'6542隆中網絡',1990],[12087,122,42972254,'2303聯電',1990],[24021,75.4,3397534,'8406金可-KY',1990],[43296,76.8,4240375,'2439美律',1990],[10088,70.8,38195258,'3698隆達',1990],[19349,69.6,147568552,'3519綠能',1990],[10670,67.3,53994605,'4966譜瑞-KY',1990],[26424,75.7,57110117,'3630新鉅科',1990],[37062,275.4,252847810,'3380明泰',1990]],
			[[44056,-81.8,23968973,'3481群創',2015],[43294,-81.7,35939927,'3049和鑫',2015],[21291,-78.5,11389562,'4960奇美材',2015],[38923,-80.8,5503457,'2474可成',2015],[37599,-81.9,64395345,'3008大立光',2015],[44053,-150,80688545,'3514昱晶',2015],[42182,-82.8,329425,'8489三貝德數位文創',2015],[36162,-83.5,126573481,'4976佳凌',2015],[1390,-71.4,25155317,'4906正文',2015],[34644,-80.7,50293439,'4934太極能源',2015],[34186,-80.6,4528526,'3576新日光',2015],[64304,-81.6,5210967,'3356奇偶科技',2015],[24787,-77.3,38611794,'2448晶電',2015],[23038,-73.13,143456918,'6182合晶',2015],[19360,-76.5,78665830,'6443元晶',2015],[38225,-81.4,64715810,'6244茂迪',2015],[53354,-330,321773631,'3260威剛',2015]]
		];
		
		option = {
			backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
				offset: 0,
				color: '#fff'
			}, {
				offset: 1,
				color: '#fff'
			}]),
			title: {
				x: 'center',
				y: 'top',
				text: '資增個股排行表',
				textStyle: {
					fontSize: 15,
					fontWeight: 'normal'
				}
			},
			legend: {
				data: ['上漲', '下跌'],
				y: 'bottom',
				y: '358',
			},
			xAxis: {
				type: 'value',
				name: '融資增加數',
				splitLine: {
					lineStyle: {
						type: 'dashed'
					}
				}
			},
			yAxis: {
				type: 'value',
				name: '漲跌幅%',
				splitLine: {
					lineStyle: {
						type: 'dashed'
					}
				},
				scale: true
			},
			series: [{
				name: '上漲',
				data: data[0],
				type: 'scatter',
				symbolSize: function (data) {
					return Math.sqrt(data[2]) / 5e2;
				},
				label: {
					emphasis: {
						show: true,
						formatter: function (param) {
							return param.data[3];
						},
						position: 'top',
						textStyle: {
							fontSize: 15,
							fontWeight: 'normal',
							color:'#222'
						}
					}
				},
				itemStyle: {
					normal: {
						shadowBlur: 10,
						shadowColor: 'rgba(120, 36, 50, 0.5)',
						shadowOffsetY: 5,
						color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
							offset: 0,
							color: '#ec4747'
						}, {
							offset: 1,
							color: '#ec4747'
						}])
					}
				}
			}, {
				name: '下跌',
				data: data[1],
				type: 'scatter',
				symbolSize: function (data) {
					return Math.sqrt(data[2]) / 5e2;
				},
				label: {
					emphasis: {
						show: true,
						formatter: function (param) {
							return param.data[3];
						},
						position: 'top',
						textStyle: {
							fontSize: 15,
							fontWeight: 'normal',
							color:'#222'
						}
					}
				},
				itemStyle: {
					normal: {
						shadowBlur: 10,
						shadowColor: 'rgba(25, 100, 150, 0.5)',
						shadowOffsetY: 5,
						color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
							offset: 0,
							color: '#46dac0'
						}, {
							offset: 1,
							color: '#46dac0'
						}])
					}
				}
			}]
		};;
		if (option && typeof option === "object") {
			myChart.setOption(option, true);
		}