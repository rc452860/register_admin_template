<style lang="less">
@import "./register-table.less";
</style>
<template>
  <div class="register-table">
      <Card>
        <Row slot="title" >
          <div class="register-table-search">
            <Input placeholder="搜索">
              <Button slot="append" icon="ios-search"></Button>
            </Input>
          </div>
        </Row>
        <Row>
          <Table ref="selection" border :columns="columns" :data="data"></Table> 
          <div class="register-table-page">
            <Page :total="100" show-sizer show-total></Page>
          </div>
        </Row>
      </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns:[{
        type:'selection',
        width:60,
        align:'center'
      },{
        title:"宝宝姓名",
        key:"babeName"
      },{
        title:"宝宝生日",
        key:"brithday"
      },{
        title:"父母姓名",
        key:"parentName"
      },{
        title:"联系方式",
        key:"contacts"
      },{
        title:"中心",
        key:"center"
      },{
        title:"备注",
        key:"remarks"
      }],
      data:[{
        babeName: "若尘",
        brithday: new Date(),
        parentName:"屠军",
        contacts: "13260677156",
        center: "汉口银行",
        remarks: null
      },{
        babeName: "若尘",
        brithday: new Date(),
        parentName:"屠军",
        contacts: "13260677156",
        center: "汉口银行",
        remarks: null
      },{
        babeName: "若尘",
        brithday: new Date(),
        parentName:"屠军",
        contacts: "13260677156",
        center: "汉口银行",
        remarks: null
      }]
    };
  }
};
</script>
