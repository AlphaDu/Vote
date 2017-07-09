import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CommonLogin from '../view/common/login.vue'
import VoteList from '../view/common/voteList.vue'
import ManagerIndex from '../view/manage/index.vue'
import VoteDetail from '../view/common/voteDetail.vue'
import voteColumn from '../components/voteDetailColumn.vue'
import AddBaseAttr from '../view/manage/addBaseAttr.vue'
import AddMember from '../view/manage/addMember.vue'
import AddScore from '../view/manage/addScore.vue'
import AddVote from  '../view/manage/addVote.vue'
import Http404 from '../view/http404.vue'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'login',
      component: CommonLogin
    },
    {
      path: '/votelist',
      name: 'voteList',
      component: VoteList
    }, {
      path: '/manage/index',
      name: 'manager',
      component: ManagerIndex,
      children: [
        {
          path: '/addScore',
          name: 'addScore',
          component: AddScore
        }, {
          path: '/addVote',
          name: 'addName',
          component: AddVote
        }, {
          path: '/a',
          redirect: '/b'
        }
      ]
    }, {
      path: '/vote/:voteid',
      name: 'voteDetail',
      component: VoteDetail
    },

    {
      path: '/test',
      name: 'test',
      component: voteColumn
    }, {
      path: '/addMember',
      name: 'member',
      component: AddMember
    },{
      path:'*',
      name:'HTTP404',
      component:Http404
    }
  ]
})
