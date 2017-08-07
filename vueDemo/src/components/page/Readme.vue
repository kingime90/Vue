<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-setting"></i>报价首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <h3>车险报价</h3>
            <article>  
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="业务员手机号">
                        <el-input v-model="formInline.user" placeholder="业务员手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="行驶区域">
                        <el-select v-model="formInline.region" placeholder="行驶区域">
                            <el-option label="" v-for="item in citys" v-bind:value="item"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="车牌号">
                        <el-input v-model="formInline.plateNo" placeholder="车牌号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </article>
        </div>

    </div>
</template>

<script>

var areaData = {
  "result": [
    {
      "id": 1,
      "code": "110000",
      "name": "北京市",
      "child": [
        {
          "id": 2,
          "code": "110100",
          "name": "北京市",
          "vehiclePlate": "京A"
        }
      ]
    },
    {
      "id": 1806,
      "code": "430000",
      "name": "湖南省",
      "child": [
        {
          "id": 1807,
          "code": "430100",
          "name": "长沙市",
          "vehiclePlate": "湘A "
        },
        {
          "id": 1817,
          "code": "430200",
          "name": "株洲市",
          "vehiclePlate": "湘B"
        },
        {
          "id": 1827,
          "code": "430300",
          "name": "湘潭市",
          "vehiclePlate": "湘C"
        },
        {
          "id": 1833,
          "code": "430400",
          "name": "衡阳市",
          "vehiclePlate": "湘D"
        },
        {
          "id": 1846,
          "code": "430500",
          "name": "邵阳市",
          "vehiclePlate": "湘E"
        },
        {
          "id": 1859,
          "code": "430600",
          "name": "岳阳市",
          "vehiclePlate": "湘F"
        },
        {
          "id": 1869,
          "code": "430700",
          "name": "常德市",
          "vehiclePlate": "湘J"
        },
        {
          "id": 1879,
          "code": "430800",
          "name": "张家界市",
          "vehiclePlate": "湘G"
        },
        {
          "id": 1884,
          "code": "430900",
          "name": "益阳市",
          "vehiclePlate": "湘H"
        },
        {
          "id": 1891,
          "code": "431000",
          "name": "郴州市",
          "vehiclePlate": "湘L"
        },
        {
          "id": 1903,
          "code": "431100",
          "name": "永州市",
          "vehiclePlate": "湘M"
        },
        {
          "id": 1915,
          "code": "431200",
          "name": "怀化市",
          "vehiclePlate": "湘N"
        },
        {
          "id": 1928,
          "code": "431300",
          "name": "娄底市",
          "vehiclePlate": "湘K"
        },
        {
          "id": 1934,
          "code": "433100",
          "name": "湘西土家族苗族自治州",
          "vehiclePlate": "湘U"
        }
      ]
    },
    {
      "id": 1943,
      "code": "440000",
      "name": "广东省",
      "child": [
        {
          "id": 1944,
          "code": "440100",
          "name": "广州市",
          "vehiclePlate": "粤A"
        },
        {
          "id": 1956,
          "code": "440200",
          "name": "韶关市",
          "vehiclePlate": "粤F"
        },
        {
          "id": 1967,
          "code": "440300",
          "name": "深圳市",
          "vehiclePlate": "粤B"
        },
        {
          "id": 1974,
          "code": "440400",
          "name": "珠海市",
          "vehiclePlate": "粤C"
        },
        {
          "id": 1978,
          "code": "440500",
          "name": "汕头市",
          "vehiclePlate": "粤D"
        },
        {
          "id": 1986,
          "code": "440600",
          "name": "佛山市",
          "vehiclePlate": "粤E"
        },
        {
          "id": 1992,
          "code": "440700",
          "name": "江门市",
          "vehiclePlate": "粤J"
        },
        {
          "id": 2000,
          "code": "440800",
          "name": "湛江市",
          "vehiclePlate": "粤G"
        },
        {
          "id": 2010,
          "code": "440900",
          "name": "茂名市",
          "vehiclePlate": "粤K"
        },
        {
          "id": 2016,
          "code": "441200",
          "name": "肇庆市",
          "vehiclePlate": "粤H"
        },
        {
          "id": 2025,
          "code": "441300",
          "name": "惠州市",
          "vehiclePlate": "粤L"
        },
        {
          "id": 2031,
          "code": "441400",
          "name": "梅州市",
          "vehiclePlate": "粤M"
        },
        {
          "id": 2040,
          "code": "441500",
          "name": "汕尾市",
          "vehiclePlate": "粤N"
        },
        {
          "id": 2045,
          "code": "441600",
          "name": "河源市",
          "vehiclePlate": "粤P"
        },
        {
          "id": 2052,
          "code": "441700",
          "name": "阳江市",
          "vehiclePlate": "粤Q"
        },
        {
          "id": 2057,
          "code": "441800",
          "name": "清远市",
          "vehiclePlate": "粤R"
        },
        {
          "id": 2066,
          "code": "441900",
          "name": "东莞市",
          "vehiclePlate": "粤S"
        },
        {
          "id": 2067,
          "code": "442000",
          "name": "中山市",
          "vehiclePlate": "粤T"
        },
        {
          "id": 2068,
          "code": "445100",
          "name": "潮州市",
          "vehiclePlate": "粤U"
        },
        {
          "id": 2072,
          "code": "445200",
          "name": "揭阳市",
          "vehiclePlate": "粤V"
        },
        {
          "id": 2078,
          "code": "445300",
          "name": "云浮市",
          "vehiclePlate": "粤W"
        }
      ]
    }
  ],
  "status": 200
}

export default {
    data() {
      return {
        formInline: {
            user: '',
            plateNo: '',
            region: ''
        },
        citys:[]
      }
    },
    created(){
        this.getCity();
    },
    methods: {
        getCity() {
            var cityLen = '',
                itemName = '';

            for (var i = 0; i < areaData.result.length; i++) {
                var result = areaData.result[i];
                cityLen = result.child.length;
                for (var j = 0; j < cityLen; j++) {
                    itemName = result.child[j].name;
                    this.citys.push(itemName);
                }
            }
        },
        onSubmit() {
            console.log('submit!');
        }
    }
  }
</script>

<style scoped>
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
</style>