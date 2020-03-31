function randomData () {
  return Math.round(Math.random() * 300)
}

var geoCoordMap = {
  上海: [121.4648, 31.2891],
  尼日利亚: [-4.388361, 11.186148],
  美国洛杉矶: [-118.24311, 34.052713],
  香港邦泰: [114.195466, 22.282751],
  美国芝加哥: [-87.801833, 41.870975],
  加纳库马西: [-4.62829, 7.72415],
  英国曼彻斯特: [-1.657222, 51.886863],
  德国汉堡: [10.01959, 54.38474],
  哈萨克斯坦阿拉木图: [45.326912, 41.101891],
  俄罗斯伊尔库茨克: [89.116876, 67.757906],
  巴西: [-48.678945, -10.493623],
  埃及达米埃塔: [31.815593, 31.418032],
  西班牙巴塞罗纳: [2.175129, 41.385064],
  柬埔寨金边: [104.88659, 11.545469],
  意大利米兰: [9.189948, 45.46623],
  乌拉圭蒙得维的亚: [-56.162231, -34.901113],
  莫桑比克马普托: [32.608571, -25.893473],
  阿尔及利亚阿尔及尔: [3.054275, 36.753027],
  阿联酋迪拜: [55.269441, 25.204514],
  匈牙利布达佩斯: [17.108519, 48.179162],
  澳大利亚悉尼: [150.993137, -33.675509],
  美国加州: [-121.910642, 41.38028],
  澳大利亚墨尔本: [144.999416, -37.781726],
  墨西哥: [-99.094092, 19.365711],
  加拿大温哥华: [-123.023921, 49.311753]
}
var BJData = [
  {
    name: '阿尔及利亚阿尔及尔',
    value: randomData()
  },
  {
    name: '上海',
    value: randomData()
  },
  {
    name: '澳大利亚墨尔本',
    value: randomData()
  },
  {
    name: '加拿大温哥华',
    value: randomData()
  }
]
var convertData = function (data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  console.log(res)
  return res
}
export default {
  tooltip: {
    trigger: 'item',
    backgroundColor: '#1540a1',
    borderColor: '#FFFFCC',
    showDelay: 0,
    hideDelay: 0,
    enterable: true,
    transitionDuration: 0,
    extraCssText: 'z-index:100',
    formatter: function (params, ticket, callback) {
      // 根据业务自己拓展要显示的内容
      var res = ''
      var name = params.name
      var value = params.value[params.seriesIndex + 1]
      res = "<span style='color:#fff;'>" + name + '</span><br/>数据：' + value
      return res
    }
  },
  visualMap: {
    // 图例值控制
    show: false,
    type: 'piecewise',
    pieces: [
      {
        max: 80,
        color: 'red'
      },
      {
        min: 80,
        max: 120,
        color: 'yellow'
      },
      {
        min: 120,
        color: 'green'
      }
    ],
    calculable: true
  },
  geo: {
    map: 'world',
    show: true,
    label: {
      emphasis: {
        show: false
      }
    },
    roam: true, // 是否允许缩放
    layoutCenter: ['50%', '50%'], // 地图位置
    layoutSize: '200%',
    itemStyle: {
      normal: {
        show: 'true',
        color: '#023498', // 地图背景色
        borderColor: '#0089A5' // 省市边界线
      },
      emphasis: {
        show: 'true',
        color: '#00D3FF' // 悬浮背景
      }
    }
  },
  legend: {
    orient: 'vertical',
    top: '30',
    left: 'center',
    align: 'right',
    data: [],
    textStyle: {
      color: '#fff',
      fontSize: 20
    },
    itemWidth: 50,
    itemHeight: 30,
    selectedMode: 'multiple'
  },
  series: [
    {
      name: '全部',
      type: 'effectScatter',
      coordinateSystem: 'geo', // 以地图为底图坐标
      data: convertData(BJData), // 数据来自于先前定义的函数
      // symbol: 'circle',
      rippleEffect: {
        period: 4,
        brushType: 'stroke',
        scale: 4
      },
      symbolSize: function (val) {
        return 8 + val[2] / 50 // 圆环大小
      },
      itemStyle: {
        normal: {
          show: true
        },
        emphasis: {
          show: true,
          color: '#FF6A6A'
        }
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        },
        emphasis: {
          show: true
        }
      }
    }
  ]
}
