var delayMult = 150
new Vue({
    el: "#app1",
    data: {
        query: '',
        list: [
            { msg: 'Брюс Ли'},
            { msg: 'Джеки Чан'},
            { msg: 'Чак Норрис'},
            { msg: 'Джет Ли'}
        ]
    },
    computed: {
        //проверяет является ли пользовательский query
        //подстрокой элементов в списке list
        //фильтрует по совпадению 
        computedList: function () {
            var vm = this
            return this.list.filter(function(item) {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
            })
        }
    },
    methods: {
       beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.height = 0
       },
       
       enter: function (el, done) {
        var delay = el.dataset.index * delayMult //устанавливаем задержку анимации в зависимости от индекса (параметр устанавливается в DOM)
        setTimeout(function () {
            Velocity(           //фреймворк для анимации
                el,
                {opacity: 1, height: '1.6em'},
                {complete: done}
            )
        }, delay)
       },
       leave: function (el, done) {
        var delay = el.dataset.index * delayMult //устанавливаем задержку анимации в зависимости от индекса (параметр устанавливается в DOM)
        setTimeout(function () {
            Velocity(           //фреймворк для анимации
                el,
                {opacity: 0, height: 0},
                {complete: done}
            )
        }, delay)
       },
    }
})