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
                  }
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
                      color: '#333'
                  }
              },
              detail: {
                  textStyle: {
                      color: 'auto'
                  }
              }
          },
          textStyle: {
              fontFamily: 'Arial, Verdana, sans-serif'
          }
      };

      var echartBarLine = echarts.init(document.getElementById('mainb'), theme);

      echartBarLine.setOption({
        title: {
          x: 'center',
          y: 'top',
          padding: [0, 0, 20, 0],
          text: '融資融券表',
          textStyle: {
            fontSize: 15,
            fontWeight: 'normal'
          }
        },
        calculable: true,
        legend: {
          data: ['資增', '券增', '資餘', '券餘', '股價(季底)'],
          y: 'bottom',
		  y: '358',
        },
        xAxis: [{
          type: 'category',
          data: ['20170305', '20170306', '20170307', '20170308', '20170310', '20170313', '20170314', '20170315', '20170316', '20170317', '20170321', '20170324']
        }],
        yAxis: [{
          type: 'value',
          name: '百萬',
          axisLabel: {
            formatter: '{value}'
          }
        }, {
          type: 'value',
          name: '股價',
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: [{
          name: '資增',
          type: 'bar',
          data: [3, -5, 20, 7, -8, -22, 10, 70, -2, -50, 3, 2]
        }, {
          name: '券增',
          type: 'bar',
          yAxisIndex: 1,
          data: [6, -4, 22, 5, -3, -24, 13, 72, -3, -51, 4, 3]

        }, {
          name: '資餘',
          type: 'line',
          yAxisIndex: 1,
          data: [-0.2, -2.2, -3.3, -4.5, -6.3, -10.2, -20.3, -23.4, 33.0, 26.5, 42.0, 50]

        }, {
          name: '券餘',
          type: 'line',
          yAxisIndex: 1,
          data: [20, 22, 33, 45, 63, 12, 20, 24, -30, -16, 18, 62]

        }, {
          name: '股價(季底)',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]

        }]
      });