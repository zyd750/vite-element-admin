import{L as e}from"./index.f3301aa0.js";import{d as l,j as a,z as t,r,o,f as d,w as u,i as m,a as s,E as n}from"./vendor.71a11aaa.js";const i=l({name:"Editor",components:{YuLayout:e},setup(){const e=a(),l=t({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""});return{ruleForm:e,formState:l,rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},submitForm:l=>{e.value.validate((e=>{if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:()=>{e.value.resetFields()}}}}),p={class:"section-container"},f=n("-"),c=n("立即创建"),g=n("重置");i.render=function(e,l,a,t,n,i){const b=r("el-input"),y=r("el-form-item"),V=r("el-option"),_=r("el-select"),S=r("el-date-picker"),h=r("el-col"),v=r("el-time-picker"),F=r("el-switch"),q=r("el-checkbox"),U=r("el-checkbox-group"),x=r("el-radio"),k=r("el-radio-group"),w=r("el-button"),j=r("el-form"),C=r("yu-layout");return o(),d(C,{title:"表单示例",subtitle:"element plus 表单基础使用示例"},{body:u((()=>[m("div",p,[s(j,{model:e.formState,rules:e.rules,ref:"ruleForm","label-width":"100px",class:"demo-ruleForm"},{default:u((()=>[s(y,{label:"活动名称",prop:"name"},{default:u((()=>[s(b,{modelValue:e.formState.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.formState.name=l)},null,8,["modelValue"])])),_:1}),s(y,{label:"活动区域",prop:"region"},{default:u((()=>[s(_,{modelValue:e.formState.region,"onUpdate:modelValue":l[1]||(l[1]=l=>e.formState.region=l),placeholder:"请选择活动区域"},{default:u((()=>[s(V,{label:"区域一",value:"shanghai"}),s(V,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),s(y,{label:"活动时间",required:""},{default:u((()=>[s(h,{span:11},{default:u((()=>[s(y,{prop:"date1"},{default:u((()=>[s(S,{type:"date",placeholder:"选择日期",modelValue:e.formState.date1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.formState.date1=l),style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),s(h,{class:"line",span:2},{default:u((()=>[f])),_:1}),s(h,{span:11},{default:u((()=>[s(y,{prop:"date2"},{default:u((()=>[s(v,{placeholder:"选择时间",modelValue:e.formState.date2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.formState.date2=l),style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(y,{label:"即时配送",prop:"delivery"},{default:u((()=>[s(F,{modelValue:e.formState.delivery,"onUpdate:modelValue":l[4]||(l[4]=l=>e.formState.delivery=l)},null,8,["modelValue"])])),_:1}),s(y,{label:"活动性质",prop:"type"},{default:u((()=>[s(U,{modelValue:e.formState.type,"onUpdate:modelValue":l[5]||(l[5]=l=>e.formState.type=l)},{default:u((()=>[s(q,{label:"美食/餐厅线上活动",name:"type"}),s(q,{label:"地推活动",name:"type"}),s(q,{label:"线下主题活动",name:"type"}),s(q,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),s(y,{label:"特殊资源",prop:"resource"},{default:u((()=>[s(k,{modelValue:e.formState.resource,"onUpdate:modelValue":l[6]||(l[6]=l=>e.formState.resource=l)},{default:u((()=>[s(x,{label:"线上品牌商赞助"}),s(x,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),s(y,{label:"活动形式",prop:"desc"},{default:u((()=>[s(b,{type:"textarea",modelValue:e.formState.desc,"onUpdate:modelValue":l[7]||(l[7]=l=>e.formState.desc=l)},null,8,["modelValue"])])),_:1}),s(y,null,{default:u((()=>[s(w,{type:"primary",onClick:l[8]||(l[8]=l=>e.submitForm("ruleForm"))},{default:u((()=>[c])),_:1}),s(w,{onClick:l[9]||(l[9]=l=>e.resetForm("ruleForm"))},{default:u((()=>[g])),_:1})])),_:1})])),_:1},8,["model","rules"])])])),_:1})};export default i;
