import Vue from "vue";

const create = (Component,props)=>{
  //创建组件并进行挂载
  const vm = new Vue({
    render(h) {
      return h(Component, { props });
    }
  }).$mount();

  //追加到body身上
  document.body.appendChild(vm.$el);

  const comp = vm.$children[0];

  //创建销毁方法
  comp.remove = () =>{
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
};

export default create;
