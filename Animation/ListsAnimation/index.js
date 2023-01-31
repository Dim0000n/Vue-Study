//Анимирование одиночного элемента/компонента
new Vue({
    el: "#app1",
    data: {
        show: true
    }
})

//CSS-transition
new Vue({
    el: "#app2",
    data: {
        show: true
    }
})

//CSS-animation
new Vue({
    el: "#app3",
    data: {
        show: true
    }
})

//Custom transition classes
new Vue({
    el: "#app4",
    data: {
        show: true
    }
})

//JS hooks
new Vue({
    el:"#app5",
    data: {
        show: false
    },
    methods: {
        //функция, вызываемая перед началом анимации
        beforeEnter: function (el) {
            el.style.opacity = 0       
            el.style.transformOrigin = "left"
        },
        //анимация входа
        enter: function(el, done) {
            //для анимации используем библиотеку velocity
            Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300})
            Velocity(el, {fontSize: '1em'}, {complete: done})
        },
        //анимация выхода
        leave: function(el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg'}, {duration: 600})
            Velocity(el, {rotateZ: '100deg'}, {loop: 2})
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, {complete: done})
        }
    }
})