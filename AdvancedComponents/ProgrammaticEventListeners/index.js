//создаем экземпляр Vue
new Vue({
    el: "#app",
    data: {
        date: null
    },
    //определяем хук жизненного цикла
    //вызов метода после монтирования элемента в DOM дерево
    mounted: function() {
        //создаем экземпляр picker 
        var picker = new Pikaday({
            //привзываем его к инпуту по атрибуту ref
            field: this.$refs.dateInput,
            format: "YYYY-MM-DD"
        });

        //биндим метод на хук beforeDestroy для вызова только один раз
        this.$once("hook:beforeDestroy", function() {
            //удаляем пикер
            picker.destroy();
        });
    }
});