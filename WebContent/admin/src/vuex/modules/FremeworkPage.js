/**
 * 用来存储框架页面数据（菜单、用户工具栏等）
 * @type {string}
 */

// 更新选中菜单
export const SET_ACTIVEMENU = 'fremeworkPage/SET_ACTIVEMENU';


const state  = {
	menuList : [
		{icon:"fa-file-text-o",      "name":"文章管理",    "subMenu":[
			{"path":"/home/addArticle",      "name":"新增文章"},
			{"path":"/home/editArticle",     "name":"编辑文章"},
			{"path":"/home/delArticle",      "name":"删除文章"}
		]},
		{icon:"fa-file-code-o",           "name":"笔记管理",    "subMenu":[
			{"path":"/home/addNote",         "name":"新增笔记"},
			{"path":"/home/editNote",        "name":"编辑笔记"},
			{"path":"/home/delNote",         "name":"删除笔记"}
		]},
		{icon:"fa-file-word-o",           "name":"图书管理",    "subMenu":[
			{"path":"/home/addBook",         "name":"新增图书"},
			{"path":"/home/editBook",        "name":"编辑图书"},
			{"path":"/home/delBook",         "name":"删除图书"},
		]},
		{icon:"fa-envelope-o",        "name":"评论管理",    "subMenu":[
			{"path":"/home/editComment",     "name":"编辑评论"},
			{"path":"/home/delComment",      "name":"删除评论"}
		]},
		{icon:"fa-link",         "name":"外链管理",    "subMenu":[
			{"path":"/home/addLink",         "name":"新增外链"},
			{"path":"/home/editLink",        "name":"编辑外链"},
			{"path":"/home/delLink",         "name":"删除外链"}
		]},
		{icon:"fa-th-large",     "name":"分类管理",    "subMenu":[
			{"path":"/home/addSort",         "name":"新增分类"},
			{"path":"/home/editSort",        "name":"编辑分类"},
			{"path":"/home/delSort",         "name":"删除分类"}
		]},
		{icon:"fa-thumbs-o-up",           "name":"推荐管理",    "subMenu":[
			{"path":"/home/articleRecom",    "name":"文章推荐量"},
			{"path":"/home/noteRecom",       "name":"笔记推荐量"},
			{"path":"/home/bookRecom",       "name":"图书推荐量"}
		]},
		{icon:"fa-user-o",           "name":"用户管理",    "subMenu":[
			{"path":"/home/addUser",         "name":"新增用户"},
			{"path":"/home/editUser",        "name":"编辑用户"},
			{"path":"/home/delUser",         "name":"删除用户"}
		]},
		{icon:"fa-cog",         "name":"系统管理",    "subMenu":[
			{"path":"/home/dataBackup",       "name":"恢复备份"}
		]}
	],
	activeMenu : {
		'path' : '/home/dashboard',
		'name' : '数据概览'
	}  // 当前选中的菜单
};

// getters
// 只能获取state中的值，并且可以进行数据处理，但是不建议，因为view中需要获取最初始的state的状态
const getters = {

};

// actions
const actions = {
	setCurrentMenu ({ dispatch, commit, state, rootState }, currentMenu) {
		return new Promise((resolve, reject) => {
			// 从菜单序列中组织得到当前的对象并设置
			let obj = {};
			if (currentMenu === '/home/dashboard') {
				obj.path = '/home/dashboard';
				obj.name = '数据概览';
			} else {
				// 循环activeMenu找出对应的菜单
				for (let i = 0, iLen = state.menuList.length; i < iLen; i++) {
					for (let j = 0, jLen = state.menuList[i].subMenu.length; j < jLen; j++) {
						if (state.menuList[i].subMenu[j].path === currentMenu) {
							obj.path = currentMenu;
							obj.name = state.menuList[i].subMenu[j].name;
							break;
						}
					}
				}
			}
			commit(SET_ACTIVEMENU, obj);
			resolve();
		})
	}
};

// mutations
// action会发送请求到此，在此对state的值做设置处理
const mutations = {
	[SET_ACTIVEMENU](state , activeMenu){
		state.activeMenu = activeMenu ;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
