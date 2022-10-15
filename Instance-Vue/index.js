//объект data
var data = {a: 1}

//создаем новый экземпляр Vue (ViewModel=vm)
var vm = new Vue({
    data: data
})

//сравнение свойства в объекте vue и data
let vmVsData = vm.a == data.a;
console.log('Свойство в объекте vue равно свойству в объекте data ' + vmVsData); //true

//изменение свойства в экземпляре
vm.a = 2;
console.log('data.a = ' + data.a);

//изменение свойства в data
data.a = 3;
console.log("vm.a = " + vm.a);


//изучение Object.freeze()

//без freeze()
var obj = {
    foo: 'bar'
};

new Vue({
    el: "#app1",
    data: obj
});

//это работает
obj.foo = 'new_value';

//c freeze
var obj_fz = {
    foo: 'bar'
};

Object.freeze(obj_fz)

new Vue({
    el: "#app1_freeze",
    data: obj_fz
});

//это НЕ работает
obj_fz.foo = 'new_value';



//служебные свойства и методы
data = {a: 1};

vm = new Vue({
    el: '#serv-methods',
    data: data
});

var serv_flag =  vm.$data === data
console.log('vm.$data === data ' + serv_flag);
serv_flag =  vm.$el === document.getElementById('serv-methods');
console.log("vm.$el === document.getElementById('serv-methods') " + serv_flag);

//$watch метод экземпляра
vm.$watch('a', function(newValue, oldValue) {
    // Этот коллбэк будет вызван, когда изменится `vm.a`
    alert("New value of 'a' is " + newValue);
})