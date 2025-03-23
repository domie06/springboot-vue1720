import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import guanggaodiaozhengxinxi from '@/views/modules/guanggaodiaozhengxinxi/list'
    import guanggaozhizuoshang from '@/views/modules/guanggaozhizuoshang/list'
    import guanggaozhizuoxuqiu from '@/views/modules/guanggaozhizuoxuqiu/list'
    import guanggaotian from '@/views/modules/guanggaotian/list'
    import guanggaoshang from '@/views/modules/guanggaoshang/list'
    import guanggaoshejiyulan from '@/views/modules/guanggaoshejiyulan/list'
    import guanggaotoufangqudao from '@/views/modules/guanggaotoufangqudao/list'
    import guanggaoshejitujiaofu from '@/views/modules/guanggaoshejitujiaofu/list'
    import guanggaokehu from '@/views/modules/guanggaokehu/list'
    import guanggaoqianshu from '@/views/modules/guanggaoqianshu/list'
    import guanggaojiesuan from '@/views/modules/guanggaojiesuan/list'
    import guanggaoxuqiu from '@/views/modules/guanggaoxuqiu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/guanggaodiaozhengxinxi',
        name: '广告调整信息',
        component: guanggaodiaozhengxinxi
      }
      ,{
	path: '/guanggaozhizuoshang',
        name: '广告制作商',
        component: guanggaozhizuoshang
      }
      ,{
	path: '/guanggaozhizuoxuqiu',
        name: '广告制作需求',
        component: guanggaozhizuoxuqiu
      }
      ,{
	path: '/guanggaotian',
        name: '广告提案',
        component: guanggaotian
      }
      ,{
	path: '/guanggaoshang',
        name: '广告商',
        component: guanggaoshang
      }
      ,{
	path: '/guanggaoshejiyulan',
        name: '广告设计预览',
        component: guanggaoshejiyulan
      }
      ,{
	path: '/guanggaotoufangqudao',
        name: '广告投放渠道',
        component: guanggaotoufangqudao
      }
      ,{
	path: '/guanggaoshejitujiaofu',
        name: '广告设计图交付',
        component: guanggaoshejitujiaofu
      }
      ,{
	path: '/guanggaokehu',
        name: '广告客户',
        component: guanggaokehu
      }
      ,{
	path: '/guanggaoqianshu',
        name: '广告签署',
        component: guanggaoqianshu
      }
      ,{
	path: '/guanggaojiesuan',
        name: '广告结算',
        component: guanggaojiesuan
      }
      ,{
	path: '/guanggaoxuqiu',
        name: '广告需求',
        component: guanggaoxuqiu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
