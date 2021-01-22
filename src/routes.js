const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: () => import("./view/home/index")
  },

  {
    path: "/blog",
    name: "blog",
    redirect: { name: "blogList" },
    component: () => import("./view/blog/index"),
    children: [
      {
        path: "list",
        name: "blogList",
        component: () => import("./view/blog/BlogList.vue"),
      },
      {
        path: "view/:id",
        name: "blogView",
        props: true,
        component: () => import("./view/blog/BlogDetail.vue"),
      }
    ]
  },

  {
    path: "/shop",
    name: "shop",
    component: () => import("./view/shop/index")
  },

  {
    path: "/baidu",
    name: "baidu",
    component: () => import("./view/baidu/baidu")
  },

  {
    path: "/personal",
    name: "personal",
    component: () => import("./view/personal/personal")
  },

  {
    path: "/question",
    name: "queation",
    redirect: { name: "queationList" },
    component: () => import("./view/question/index"),
    children: [
      {
        path: "list",
        name: "questionList",
        component: () => import("./view/question/questionList")
      },
      {
        path: "view/:id",
        name: "questionView",
        props: true,
        component: () => import("./view/question/questionDetails")
      }
    ]
  }
];

export default routes;
