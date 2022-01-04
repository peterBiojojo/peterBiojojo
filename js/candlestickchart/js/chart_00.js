var theme = {
          color: [
              '#3cabff', '#00425f', '#ec4747', '#46dac0',
              '#f88e47', '#aaa', '#f88e47', '#bfd3b7'
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
          text: '資產負債比較表',
          textStyle: {
            fontSize: 15,
            fontWeight: 'normal'
          }
        },
        calculable: true,
        legend: {
          data: ['流動資產', '長期投資', '固定資產', '流動負債', '長期負債', '股東權益', '股價(季底)'],
          y: 'bottom',
		  y: '358',
        },
        xAxis: [{
          type: 'category',
          data: ['2013Q3', '2013Q4', '2014Q1', '2014Q2', '2014Q3', '2014Q4', '2015Q1', '2015Q2', '2015Q3', '2015Q4', '2016Q1', '2016Q2']
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
          name: '流動資產',
          type: 'bar',
          data: [22, -12, 28, 10, -10, -62, 30, 10, -10, -62, 30, 25]
        }, {
          name: '長期投資',
          type: 'bar',
          data: [10, -2, -25, -16, 2, -67, 55, -2, -25, -16, 2, -15]
        }, {
          name: '固定資產',
          type: 'bar',
          data: [-5, -1, -4, -6, 3, 17, -23, -6, 3, 17, -23, 30]
        }, {
          name: '流動負債',
          type: 'bar',
          data: [20, -10, 60, 37, -13, 4, -10, 60, 37, -13, 6.0, 22]
        }, {
          name: '長期負債',
          type: 'bar',
          data: [ -1, -4, -6, 3, 17, -23, -6, 3, 17, -23, 30, -5]
        }, {
          name: '股東權益',
          type: 'bar',
          data: [-10, 60, 37, -13, 4, -10, 60, 37, -13, 6.0, 22, 20]
        }, {
          name: '股價(季底)',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]

        }]
      });