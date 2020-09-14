let {SyncHook} = require("tapable");

class Lesson {
  constructor(){
    this.hooks = {
      arch: new SyncHook(['name']),
    }
  }
  tab(){ // 注册监听函数
    // console.log('this.hooks.arch..........', this.hooks.arch);
    this.hooks.arch.tap('node', function(name){
      console.log('node.............', name);
    });
    this.hooks.arch.tap('react', function(name){
      console.log('react.............', name);
    })
  }
  start(){
    this.hooks.arch.call('sun');
  }
}

let l = new Lesson();
l.tab(); // 注册这两个事件
l.start(); // 启动钩子