<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="background:#ebebeb;"
  >
    <el-button type="success" style="position:relative;top:30px; z-index:9" @click="goBackDatav">回到大屏</el-button>
    <el-main class="container">
      <div style="position:relative;width:100%;height:100%">
        <el-image
          ref="bigImage"
          :src="require(`@/assets/bim/${building}_${floor}F.svg`)"
          :style="{width:width,height:height,'margin-top': '5vh','position': 'absolute'}"
          fit="fill"
        >
          <div slot="placeholder" class="image-slot" />
        </el-image>
        <el-tooltip placement="top">
          <div slot="content">cctv111 <br> cctv</div>
          <el-image
            v-show="!isaActive"
            class="filter"
            :src="require(`@/assets/bim/cctv.png`)"
            style="position: absolute;width:3%;left:50%;top:30%"
            fit="fill"
          />
        </el-tooltip>
        <el-tooltip placement="top">
          <div slot="content">cctv2222 <br> cctv</div>
          <el-image
            v-show="!isaActive"
            class="filter"
            :src="require(`@/assets/bim/cctv.png`)"
            style="position: absolute;width:3%;left:45%;top:15%"
            fit="fill"
          />
        </el-tooltip>
        <el-tooltip placement="top">
          <div slot="content">cctv333 <br> cctv</div>
          <el-image
            v-show="!isaActive"
            class="filter"
            :src="require(`@/assets/bim/cctv.png`)"
            style="position: absolute;width:3%;left:30%;top:20%"
            fit="fill"
          />
        </el-tooltip>
        <el-tooltip placement="top">
          <div slot="content">cctv444 <br> cctv</div>
          <el-image
            v-show="!isaActive"
            class="filter"
            :src="require(`@/assets/bim/cctv.png`)"
            style="position: absolute;width:3%;left:35%;top:55%"
            fit="fill"
          />
        </el-tooltip>
        <el-tooltip placement="top">
          <div slot="content">cctv55555 <br> cctv</div>
          <el-image
            v-show="!isaActive"
            class="filter"
            :src="require(`@/assets/bim/cctv.png`)"
            style="position: absolute;width:3%;left:65%;top:15%"
            fit="fill"
          />
        </el-tooltip>
        <el-tooltip placement="top">
          <div slot="content">cctv6666 <br> cctv</div>
          <el-image
            v-show="!isaActive"
            class="filter"
            :src="require(`@/assets/bim/cctv.png`)"
            style="position: absolute;width:3%;left:70%;top:55%"
            fit="fill"
          />
        </el-tooltip>
        <el-tooltip placement="top">
          <div slot="content">cctv77777 <br> cctv</div>
          <el-image
            v-show="!isaActive"
            class="filter"
            :src="require(`@/assets/bim/cctv.png`)"
            style="position: absolute;width:3%;left:50%;top:65%"
            fit="fill"
          />
        </el-tooltip>
        <el-tooltip v-for="(item, index) in showSmoke" :key="index" placement="top">
          <div slot="content">smoking11111 <br> smoking</div>
          <el-image
            v-show="!isyActive"
            v-if="item.area === 'A' && item.floor === 1 && item.building === 'C' "
            class="smoke"
            :src="require(`@/assets/bim/smoking.png`)"
            :style="item.style"
            fit="fill"
          />
          <el-image
            v-show="!isyActive"
            v-else
            class="smoke"
            :src="require(`@/assets/bim/smoking.png`)"
            :style="item.style"
            fit="fill"
          />
        </el-tooltip>
        <el-tooltip v-for="(item, index) in showTemputer" :key="index + 'showTemputer'" placement="top">
          <div slot="content">温感 <br> 温感</div>
          <el-image
            v-show="!iswActive"
            v-if="item.area === 'A' && item.floor === 1 && item.building === 'C' "
            class="temputer"
            :src="require(`@/assets/bim/temputer.png`)"
            :style="item.style"
            fit="fill"
          />
          <el-image
            v-show="!iswActive"
            v-else
            class="temputer"
            :src="require(`@/assets/bim/temputer.png`)"
            :style="item.style"
            fit="fill"
          />
        </el-tooltip>
        <el-switch
          v-model="building"
          class="select-building"
          :width="50"
          active-color="#13ce66"
          inactive-color="#C0CCDA"
          active-value="D"
          inactive-value="C"
          active-text="D栋"
          inactive-text="C栋"
          @change="changeBuilding"
        />
        <el-select v-model="floor" class="select-floor" placeholder="请选择要查询的楼层" @change="selectFloor">
          <el-option
            v-for="({ label,value }) in floors"
            :key="value"
            :label="label"
            :value="value"
          />
        </el-select>
        <!-- <device-btn class="device-btn" @deviceBtn="deviceBtn" /> -->
        <el-button type="text" class="z-btn" :class="{ active:iszActive }" @click="zClick">照明</el-button>
        <el-button type="text" class="x-btn" :class="{ active:isyActive }" @click="yClick">烟感</el-button>
        <el-button type="text" class="a-btn" :class="{ active:isaActive }" @click="aClick">安防</el-button>
        <el-button type="text" class="n-btn" :class="{ active:iswActive }" @click="wClick">温感</el-button>
        <el-button type="text" class="j-btn" :class="{ active:isjActive }" @click="jClick">给排水</el-button>
        <el-button type="text" class="s-btn" :class="{ active:issActive }" @click="sClick">送排风</el-button>
        <el-button type="text" class="l-btn" :class="{ active:islActive }" @click="lClick">冷热源</el-button>
      </div>
    </el-main>
    <div class="table-top">
      <el-tag v-for="(item,index) in totalNum" :key="index + 'totalNum'" type="info" effect="dark">
        <span style="margin-left:20%">{{ item.title || '' }}：{{ item.totalNum || '' }} {{ item.normal || '' }}：{{ item.normalNum || '' }} {{ item.breakdown || '' }}：{{ item.breakdownNum || '' }}</span>
        <!-- <span style="margin-left:4%">{{ item.normal || '' }}</span>
        <span style="margin-left:2%">{{ item.normalNum || '' }}</span>
        <span style="margin-left:4%">{{ item.breakdown || '' }}</span>
        <span style="margin-left:2%">{{ item.breakdownNum || '' }}</span> -->
      </el-tag>
    </div>
    <div v-for="(item, index) in btnList" :key="index" class="table-list">
      <el-button type="info" :class="{'btn-active': item.id === currentId }" @click="changeTableType(item.id)">{{ item.type }}</el-button>
    </div>
    <el-table
      v-if="tableType.id === 'CCTV'"
      :header-cell-style="getRowClass"
      :header-row-style="getRowClass"
      :row-style="getRowClass"
      :cell-style="getRowClass"
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px;"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180"
      />
      <el-table-column
        prop="name"
        label="位置"
      />
      <el-table-column
        prop="amount1"
        label="站"
      />
      <el-table-column
        prop="amount2"
        label="主机"
      />
      <el-table-column
        prop="amount3"
      >
        <template
          slot="header"
        >
          <div>
            <span>状态</span>
            <div style="display:inline-block;position:relative;top:2px;left:60px;">
              <div style="width:50px; height: 30px; background: #FFD900; border-radius: 50%" />
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      v-if="tableType.id === 'SMOKE'"
      :header-cell-style="getRowClass"
      :header-row-style="getRowClass"
      :row-style="getRowClass"
      :cell-style="getRowClass"
      :data="tableDataSmokeDetector"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px;"
    >
      <el-table-column
        prop="area"
        label="区域"
        width="180"
        align="center"
      />
      <el-table-column
        prop="pointName"
        label="点名称"
        align="center"
      />
      <el-table-column
        prop="pointType"
        label="点类型"
        align="center"
      />
      <el-table-column
        prop="amount3"
        align="center"
      >
        <template
          slot="header"
        >
          <div>
            <span>状态</span>
            <div style="display:inline-block;position:relative;top:2px;left:60px;">
              <div style="width:50px; height: 30px; background: #FFD900; border-radius: 50%" />
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      v-if="tableType.id === 'TEMPUTER'"
      :header-cell-style="getRowClass"
      :header-row-style="getRowClass"
      :row-style="getRowClass"
      :cell-style="getRowClass"
      :data="tableDataTemputer"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px;"
    >
      <el-table-column
        prop="area"
        label="区域"
        width="180"
        align="center"
      />
      <el-table-column
        prop="pointName"
        label="点名称"
        align="center"
      />
      <el-table-column
        prop="pointType"
        label="点类型"
        align="center"
      />
      <el-table-column
        prop="amount3"
        align="center"
      >
        <template
          slot="header"
        >
          <div>
            <span>状态</span>
            <div style="display:inline-block;position:relative;top:2px;left:60px;">
              <div style="width:50px; height: 30px; background: #FFD900; border-radius: 50%" />
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      v-if="tableType.id === 'WATER'"
      :header-cell-style="getRowClass"
      :header-row-style="getRowClass"
      :row-style="getRowClass"
      :cell-style="getRowClass"
      :data="tableData1"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px;"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180"
      />
      <el-table-column
        prop="name"
        label="位置"
      />
      <el-table-column
        prop="amount1"
        label="信息"
      />
      <el-table-column
        prop="amount2"
        label="备注"
      />
      <el-table-column
        prop="amount3"
      >
        <template
          slot="header"
        >
          <div>
            <span>状态</span>
            <div style="display:inline-block;position:relative;top:2px;left:60px;">
              <div style="width:50px; height: 30px; background: #FFD900; border-radius: 50%" />
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import DeviceBtn from './deviceItem'
import showSmokeDetector from './staticData'
export default {
  name: 'SecurityBIM',
  // components: { DeviceBtn },
  data () {
    return {
      floor: -2,
      floors: [],
      loading: true,
      iszActive: true,
      isaActive: true,
      isyActive: true,
      iswActive: true,
      isjActive: true,
      issActive: true,
      islActive: true,
      totalNum: [],
      btnList: [],
      showSmoke: [],
      showTemputer: [],
      tableType: { id: '' },
      currentId: '',
      width: '100%',
      height: '85%',
      building: 'C',
      tableDataSmokeDetector: [],
      tableDataTemputer: [],
      spanArr: [],
      pos: 0,
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }, {
        id: '12987122',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }],
      tableData1: [{
        id: '12987123',
        name: '张三',
        amount1: '4',
        amount2: '13.2',
        amount3: 108
      }, {
        id: '12987124',
        name: '张三',
        amount1: '15',
        amount2: '4.3',
        amount3: 2
      }, {
        id: '12987122',
        name: '张三',
        amount1: '34',
        amount2: '10.9',
        amount3: 79
      }, {
        id: '12987122',
        name: '张三',
        amount1: '21',
        amount2: '0.2',
        amount3: 7
      }, {
        id: '12987122',
        name: '张三',
        amount1: '9',
        amount2: '4.1',
        amount3: 15
      }, {
        id: '12987122',
        name: '张三',
        amount1: '59',
        amount2: '4.1',
        amount3: 15
      }]
    }
  },
  computed: {
    showSmokeDetector () {
      return showSmokeDetector()
    },
    showTemputerDetector () {
      return [
        {
          pointName: '3#楼2F温感54',
          pointType: '点型感温探测器',
          id: '0x0065c504',
          area: 'O',
          floor: 2,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼3F温感60',
          pointType: '点型感温探测器',
          id: '0x0096bab1',
          area: 'O',
          floor: 3,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼4F茶水间温感127',
          pointType: '点型感温探测器',
          id: '0x0096e5cc',
          area: 'O',
          floor: 4,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼5F茶水间温感60',
          pointType: '点型感温探测器',
          id: '0x0096f15e',
          area: 'O',
          floor: 5,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼6F茶水间温感127',
          pointType: '点型感温探测器',
          id: '0x0096e70a',
          area: 'O',
          floor: 6,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼7F茶水间温感60',
          pointType: '点型感温探测器',
          id: '0x0096ccd1',
          area: 'O',
          floor: 7,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼8F茶水间温感127',
          pointType: '点型感温探测器',
          id: '0x0096baab',
          area: 'O',
          floor: 8,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼9F茶水间温感60',
          pointType: '点型感温探测器',
          id: '0x0093992d',
          area: 'O',
          floor: 9,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼10F茶水间温感127',
          pointType: '点型感温探测器',
          id: '0x0096f094',
          area: 'O',
          floor: 10,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼11F电梯前室温感9',
          pointType: '点型感温探测器',
          id: '0x00933e85',
          area: 'O',
          floor: 11,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼11F温感58',
          pointType: '点型感温探测器',
          id: '0x0096e5e0',
          area: 'O',
          floor: 11,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼12F茶水间温感128',
          pointType: '点型感温探测器',
          id: '0x0096bac6',
          area: 'O',
          floor: 12,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼13F茶水间温感48',
          pointType: '点型感温探测器',
          id: '0x0096e5d3',
          area: 'O',
          floor: 13,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼14F茶水间温感114',
          pointType: '点型感温探测器',
          id: '0x0096ccd5',
          area: 'O',
          floor: 14,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼15F茶水间温感48',
          pointType: '点型感温探测器',
          id: '0x0096e5a7',
          area: 'O',
          floor: 15,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼16F茶水间温感114',
          pointType: '点型感温探测器',
          id: '0x0096ce35',
          area: 'O',
          floor: 16,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼17F茶水间温感48',
          pointType: '点型感温探测器',
          id: '0x0096ce40',
          area: 'O',
          floor: 17,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼18F茶水间温感114',
          pointType: '点型感温探测器',
          id: '0x0096cd03',
          area: 'O',
          floor: 18,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼19F茶水间温感48',
          pointType: '点型感温探测器',
          id: '0x00939918',
          area: 'O',
          floor: 19,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼20F茶水间温感123',
          pointType: '点型感温探测器',
          id: '0x00939930',
          area: 'O',
          floor: 20,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '3#楼21F茶水间温感48',
          pointType: '点型感温探测器',
          id: '0x0093d0ee',
          area: 'O',
          floor: 21,
          building: 'C',
          style: {
            'top': '50%', 'left': '51%'
          }
        }, {
          pointName: '4#楼2F温感123',
          pointType: '点型感温探测器',
          id: '0x0093d102',
          area: 'O',
          floor: 2,
          building: 'D',
          style: {
            'top': '37%', 'left': '60%'
          }
        }, {
          pointName: '4#楼3F茶水间温感48',
          pointType: '点型感温探测器',
          id: '0x0096e5b0',
          area: 'O',
          floor: 3,
          building: 'D',
          style: {
            'top': '37%', 'left': '60%'
          }
        }, {
          pointName: '4#楼5F茶水间温感48',
          pointType: '点型感温探测器',
          id: '0x0096ccd2',
          area: 'O',
          floor: 5,
          building: 'D',
          style: {
            'top': '37%', 'left': '60%'
          }
        }, {
          pointName: '4#楼6F茶水间温感119',
          pointType: '点型感温探测器',
          id: '0x0096f0af',
          area: 'O',
          floor: 6,
          building: 'D',
          style: {
            'top': '37%', 'left': '60%'
          }
        }, {
          pointName: '4#楼7F茶水间温感48',
          pointType: '点型感温探测器',
          id: '0x0096f032',
          area: 'O',
          floor: 7,
          building: 'D',
          style: {
            'top': '37%', 'left': '60%'
          }
        }, {
          pointName: '4#楼8F茶水间温感119',
          pointType: '点型感温探测器',
          id: '0x0096e5b5',
          area: 'O',
          floor: 8,
          building: 'D',
          style: {
            'top': '37%', 'left': '60%'
          }
        }, {
          pointName: '3#楼B1F温感15',
          pointType: '点型感温探测器',
          id: '0x0096bac8',
          area: 'A',
          floor: -1,
          building: 'C',
          style: {
            'top': '30%', 'left': '62%'
          }
        }, {
          pointName: '3#楼B1F温感143',
          pointType: '点型感温探测器',
          id: '0x0096f169',
          area: 'C',
          floor: -1,
          building: 'C',
          style: {
            'top': '66%', 'left': '54%'
          }
        }, {
          pointName: '3#楼B1F温感87',
          pointType: '点型感温探测器',
          id: '0x0096e706',
          area: 'C',
          floor: -1,
          building: 'C',
          style: {
            'top': '66%', 'left': '54%'
          }
        }, {
          pointName: '3#楼B1F美食广场温感204',
          pointType: '点型感温探测器',
          id: '0x026bee81',
          area: 'O',
          floor: -1,
          building: 'C',
          style: {
            'top': '51%', 'left': '54%'
          }
        }, {
          pointName: '3#楼B1F美食广场温感206',
          pointType: '点型感温探测器',
          id: '0x00d134ba',
          area: 'O',
          floor: -1,
          building: 'C',
          style: {
            'top': '51%', 'left': '54%'
          }
        }, {
          pointName: '3#楼B1F美食广场温感207',
          pointType: '点型感温探测器',
          id: '0x00ccaf14',
          area: 'O',
          floor: -1,
          building: 'C',
          style: {
            'top': '51%', 'left': '54%'
          }
        }, {
          pointName: '3#楼B1F美食广场温感208',
          pointType: '点型感温探测器',
          id: '0x00d0ee4b',
          area: 'O',
          floor: -1,
          building: 'C',
          style: {
            'top': '51%', 'left': '54%'
          }
        }, {
          pointName: '3#楼B1F博风食堂温感188',
          pointType: '点型感温探测器',
          id: '0x00d2a455',
          area: 'O',
          floor: -1,
          building: 'C',
          style: {
            'top': '51%', 'left': '54%'
          }
        }, {
          pointName: '3#楼B1F博风食堂温感188',
          pointType: '点型感温探测器',
          id: '0x00d2a455',
          area: 'F',
          floor: -1,
          building: 'C',
          style: {
            'top': '51%', 'left': '54%'
          }
        }, {
          pointName: '3#楼B2F温感14',
          pointType: '点型感温探测器',
          id: '0x02354318',
          area: 'A',
          floor: -2,
          building: 'C',
          style: {
            'top': '30%', 'left': '62%'
          }
        }
      ]
    }
  },
  mounted () {
    this.building === 'C' ? this._get3Floor() : this._get4Floor()
    this.tableDataSmokeDetector = this.showSmokeDetector.filter(item => item.building === this.building).filter(item => item.floor === this.floor)
    this.tableDataTemputer = this.showTemputerDetector.filter(item => item.building === this.building).filter(item => item.floor === this.floor)
    this.getSpanArr(this.tableDataSmokeDetector)
    this.getSpanArr(this.tableDataTemputer)
    this.handleShowItem()
  },
  methods: {
    handleShowItem () {
      const { tableDataSmokeDetector, tableDataTemputer, commonFliter } = this
      this.showSmoke.push(...commonFliter(tableDataSmokeDetector, 'A'), ...commonFliter(tableDataSmokeDetector, 'B'), ...commonFliter(tableDataSmokeDetector, 'C'), ...commonFliter(tableDataSmokeDetector, 'D'), ...commonFliter(tableDataSmokeDetector, 'E'), ...commonFliter(tableDataSmokeDetector, 'F'), ...commonFliter(tableDataSmokeDetector, 'G'), ...commonFliter(tableDataSmokeDetector, 'O'))
      this.showTemputer.push(...commonFliter(tableDataTemputer, 'A'), ...commonFliter(tableDataTemputer, 'B'), ...commonFliter(tableDataTemputer, 'C'), ...commonFliter(tableDataTemputer, 'D'), ...commonFliter(tableDataTemputer, 'E'), ...commonFliter(tableDataTemputer, 'F'), ...commonFliter(tableDataTemputer, 'G'), ...commonFliter(tableDataTemputer, 'O'))
    },
    commonFliter (data, areaItem) {
      return data.filter(item => item.area === areaItem)
    },
    renderHeader (h, { column, $index }) {
      return (<div style='position:relative;top:2px;left:2px;'>
        <div style='width:50px; height: 30px; background: #FFD900; border-radius: 50% ' />
      </div>)
    },
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      return 'background:#ebebeb; color: #000; border: 1px solid #8BBED8'
    },
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    },
    getSpanArr (data) {
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr.push(1)
          this.pos = 0
        } else {
          if (data[i].area === data[i - 1].area) {
            this.spanArr[this.pos] += 1
            this.spanArr.push(0)
          } else {
            this.spanArr.push(1)
            this.pos = i
          }
        }
      }
    },
    deviceBtn () {
    },
    zClick () {
      this.iszActive = !this.iszActive
    },
    aClick () {
      this.isaActive = !this.isaActive
      this.allTypeActive()
      this.isaActive ? this.btnList = this.btnList.filter(item => item.id !== 'CCTV') : this.btnList.push({ id: 'CCTV', type: '安防' })
      this.isaActive ? this.totalNum = this.totalNum.filter(item => item.id !== 'CCTV') : this.totalNum.push({ id: 'CCTV', title: '摄像机总数', totalNum: 20, normal: '正常', normalNum: 18, breakdown: '故障', breakdownNum: 2 })
    },
    yClick () {
      this.isyActive = !this.isyActive
      this.allTypeActive()
      this.isyActive ? this.btnList = this.btnList.filter(item => item.id !== 'SMOKE') : this.btnList.push({ id: 'SMOKE', type: '烟感' })
      this.isyActive ? this.totalNum = this.totalNum.filter(item => item.id !== 'SMOKE') : this.totalNum.push({ id: 'SMOKE', title: '传感器总数', totalNum: 30, normal: '正常', normalNum: 18, breakdown: '故障', breakdownNum: 12 })
    },
    wClick () {
      this.iswActive = !this.iswActive
      this.allTypeActive()
      this.iswActive ? this.btnList = this.btnList.filter(item => item.id !== 'TEMPUTER') : this.btnList.push({ id: 'TEMPUTER', type: '温感' })
      this.iswActive ? this.totalNum = this.totalNum.filter(item => item.id !== 'TEMPUTER') : this.totalNum.push({ id: 'TEMPUTER', title: '温感总数', totalNum: 15, normal: '正常', normalNum: 11, breakdown: '故障', breakdownNum: 4 })
    },
    jClick () {
      this.isjActive = !this.isjActive
      this.allTypeActive()
      this.isjActive ? this.btnList = this.btnList.filter(item => item.id !== 'WATER') : this.btnList.push({ id: 'WATER', type: '给排水' })
      this.isjActive ? this.totalNum = this.totalNum.filter(item => item.id !== 'WATER') : this.totalNum.push({ id: 'WATER', title: '给排水', totalNum: 15, normal: '正常', normalNum: 11, breakdown: '故障', breakdownNum: 4 })
    },
    sClick () {
      this.issActive = !this.issActive
    },
    lClick () {
      this.islActive = !this.islActive
    },
    _get3Floor () {
      setTimeout(() => {
        this.loading = false
      }, 400)
      const floor = new Array(21).fill(-1).map((item, index) => {
        return {
          label: `第${index + 1}层`,
          value: index + 1
        }
      })
      const floors = new Array(4).fill(-1).map((item, index) => {
        return {
          label: `地下${-index + 4}层`,
          value: index - 4
        }
      })
      this.floors = [...floors, ...floor, { label: '第23层', value: 23 }, { label: '屋顶机房', value: 24 }]
    },
    _get4Floor () {
      setTimeout(() => {
        this.loading = false
      }, 400)
      const floor = new Array(8).fill(-1).map((item, index) => {
        return {
          label: `第${index + 1}层`,
          value: index + 1
        }
      })
      this.floors = [{ label: '地下1层', value: -1 }, ...floor, { label: '机房', value: 9 }, { label: '冷却塔', value: 10 }]
    },
    changeTableType (id) {
      console.log(id)
      this.tableType.id = id
      this.currentId = id
    },
    allTypeActive () {
      const { iszActive, isaActive, isyActive, iswActive, isjActive, issActive, islActive } = this
      if (iszActive && isaActive && isyActive && iswActive && isjActive && issActive && islActive) {
        this.tableType.id = ''
        this.currentId = ''
      }
    },
    changeBuilding (val) {
      this.building = val
      this.building === 'C' ? this._get3Floor() : this._get4Floor()
      this.floor = 1
      this.loading = true
      this.changeAllBtnToFalse()
      this.tableType.id = ''
      this.currentId = ''
      this.tableDataSmokeDetector = this.showSmokeDetector.filter(item => item.building === this.building).filter(item => item.floor === this.floor)
      this.showSmoke = []
      this.showTemputer = []
      this.handleShowItem()
      this.pos = 0
      this.spanArr = []
      this.getSpanArr(this.tableDataSmokeDetector)
      this.tableDataTemputer = this.showTemputerDetector.filter(item => item.building === this.building).filter(item => item.floor === this.floor)
      this.getSpanArr(this.tableDataTemputer)
      setTimeout(() => {
        this.loading = false
      }, 400)
    },
    selectFloor (val) {
      this.floor = val
      this.loading = true
      this.tableDataSmokeDetector = this.showSmokeDetector.filter(item => item.building === this.building).filter(item => item.floor === this.floor)
      this.pos = 0
      this.spanArr = []
      this.getSpanArr(this.tableDataSmokeDetector)
      this.tableDataTemputer = this.showTemputerDetector.filter(item => item.building === this.building).filter(item => item.floor === this.floor)
      this.getSpanArr(this.tableDataTemputer)
      this.showTemputer = []
      this.changeAllBtnToFalse()
      this.tableType.id = ''
      this.currentId = ''
      this.showSmoke = []
      this.handleShowItem()
      setTimeout(() => {
        this.loading = false
      }, 400)
    },
    goBackDatav () {
      this.$router.push('/datav')
    },
    changeAllBtnToFalse () {
      this.iszActive = true
      this.isaActive = true
      this.isyActive = true
      this.iswActive = true
      this.isjActive = true
      this.issActive = true
      this.islActive = true
      this.totalNum = []
      this.btnList = []
      // const arr = [this.iszActive, this.isaActive, this.isyActive, this.iswActive, this.isjActive, this.issActive, this.islActive]
      // arr.forEach(item => {
      //   item = true
      //   console.log(item)
      // })
    },
    rollImg () {
      var zoom = parseInt(this.$refs.bigImage.imageStyle.zoom) || 100
      zoom += event.wheelDelta / 48
      if (zoom > 115) {
        zoom = 115
      }
      this.width = (zoom - 16) + '%'
      this.height = (zoom - 16) * 0.75 + '%'
      // /* 最小范围 和 最大范围 的图片缩放尺度 */
      if (zoom >= 100 && zoom < 250) {
        this.$refs.bigImage.imageStyle.zoom = zoom + '%'
      }
      return false
    }
  }
}
</script>

<style scoped lang="less">
  .container {
    width: 100vw;
    height: 100vh;
    min-width: 1300px;
    min-height: 600px;
    background: #ebebeb;
    position: relative;
    transform: translateX(-6%);
    .select-floor{
    position: absolute;
    left: 85vw;
    top: 20vh;
    width: 8%;
    height: 5%;
  }
  .select-building {
    position: absolute;
    left: 85vw;
    top: 12vh;
    width: 8%;
    height: 5%;
  }
  .t-btn {
    position: absolute;
    left: 80vw;
    top: 30vh;
    width: 5%;
    height: 4%;
    z-index: -9999;
  }
  .z-btn {
    position: absolute;
    left: 85.5vw;
    top: 30vh;
    width: 4%;
    height: 4%;
  }
  .a-btn {
    position: absolute;
    left: 85vw;
    top: 35vh;
    width: 4%;
    height: 4%;
  }
  .x-btn {
    position: absolute;
    left: 85vw;
    top: 40vh;
    width: 4%;
    height: 4%;
  }
  .n-btn {
    position: absolute;
    left: 85vw;
    top: 45vh;
    width: 4%;
    height: 4%;
  }
  .j-btn {
    position: absolute;
    left: 85vw;
    top: 50vh;
    width: 4%;
    height: 4%;
  }
  .s-btn {
    position: absolute;
    left: 85vw;
    top: 55vh;
    width: 4%;
    height: 4%;
  }
  .l-btn {
    position: absolute;
    left: 85vw;
    top: 60vh;
    width: 4%;
    height: 4%;
  }
  .active {
    background: chocolate;
    color: aliceblue;
  }
  .device-btn {
    position: absolute;
    left: 55vw;
    top: 6vh;
    width: 50%;
    height: 15%;
  }
  }
  .table-top {
    position: absolute;
    top: 150px;
    left: -4%;
    width: 350px;
    height: 40px;
    line-height: 40px;
    // margin-top: 30px;
    // border: 1px solid #dfe6ec;
  }
  .table-list {
    position: relative;
    display: inline-block;
    top: 0%;
    left: 1%;
  }
  .sboder {
    width:2px;
    height: 40px;
    border-left: 1px solid #dfe6ec;
  }
  .el-tag {
    display: block;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
  }
  .smoke {
    position: absolute;
    width: 3%;
  }
  .temputer {
    position: absolute;
    width: 3%;
  }
  .btn-active {
    background: chocolate;
    color: aliceblue;
  }
</style>
