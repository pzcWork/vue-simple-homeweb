import App from './App.vue'
import Index from './components/Index.vue'
import Catetory from './components/Catetory.vue'
import Article from './components/Article.vue'
import InviteJob from './components/InviteJob.vue'
import Imagesensor from './view/AIpages/imagesensor.vue'
import Videosensor from './view/AIpages/videosensor.vue'
import Greenrouter from './view/hardware/greenrouter.vue'
import TeeEssential from './view/hardware/teeEssential.vue'
import DMS from './view/trafficsafety/DMS.vue'
import FaceID from './view/face/faceID.vue'
import Snapshop from './view/smartshop/snapshop.vue'
import FaceRecnitn from './view/face/faceRecnitn.vue'
import News from './view/news/news.vue'
import Facemakeup from './view/makeup/facemakeup.vue'
import Vrfitting from './view/makeup/vrfitting.vue'
import TeeMall from './view/hardware/teeMall.vue'
export default [
	{
		'path' : '/index',
		component : Index,
		children: [
	    ]
	},
	{
		path: '/catetory',
		component: Catetory
	},
	{
		path: '/article',
		component: Article
	},
	{
		path: '/',
	 	redirect : '/index'
	},
	{ 
		path: '',
	 	redirect : '/index'
	},
	{
		path:'*', 
		redirect :'/index'
	},
	{
		path:'/inviteJob', 
		component: InviteJob
	},
	{
		path:'/teeEssential', 
		component: TeeEssential
	},
	{
		path:'/imagesensor', 
		component: Imagesensor
	},
	{
		path:'/videosensor', 
		component: Videosensor
	},
	{
		path:'/greenrouter', 
		component: Greenrouter
	},
	{
		path:'/DMS', 
		component: DMS
	},
	{
		path:'/faceID', 
		component: FaceID
	},
	{
		path:'/snapshop', 
		component: Snapshop
	},
	{
		path:'/faceRecnitn', 
		component: FaceRecnitn
	},
	{
		path:'/news', 
		component: News
	},
	{
		path:'/facemakeup', 
		component: Facemakeup
	},
	{
		path:'/vrfitting', 
		component: Vrfitting
	}
	// {
	// 	path:'/teeMall', 
	// 	component: TeeMall
	// }
]