import AppComponent from '../components/AppComponent.vue'
const routes = [
//   {
//     path: '/',
//     component: AppComponent,
//   },
  {
    path: "/:nameroute/:nameaction",
    name: "Datadisplay",
    props:true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../View/Datadisplay.vue"),
  },
];
export default routes