
//Создаем компонент google-map
Vue.component("google-map", {
    //определяем функцию для предоставления в дочерный элемент
    provide: function() {
        return {
            getMap: this.getMap
        };
    },
    //определяем свойства компонента
    data: function() {
        return {
            map: null
        };
    },
    //определяем хук жизненного цикла mounted
    //который вызывается после монтирования элемента в DOM
    mounted: function() {
        //инициализируем свойство map через google-api
        this.map = new google.maps.Map(this.$el, {
            //this.$el - элемент DOM, закрепленный за компонентом 
            center: {lat: 0, lng: 0},
            zoom: 1
        });
    },
    //определяем метод getMap
    methods: {
        getMap: function(found) { //found - callback-функция
            var vm = this;      //присваиваем компонент переменной
            function checkForMap() {    //определяем функцию checkForMap
                if (vm.map) {       //если map не null
                    found(vm.map);   //вызываем callback
                } else {                
                    setTimeout(checkForMap, 50); //иначе делаем рекурсию
                }
            }
            checkForMap();
        }
    },
    //определяем код шаблона
    template: '<div class="map"><slot></slot></div>'
    //оставляем slot для дочернего компонента 
});

//определяем компонент google-map-marker
Vue.component("google-map-marker", {
    //определяем функцию из родителя
    inject: ["getMap"],
    //определяем входные пераметры компонента
    props: ["places"],
    //определяем хук жизненного цикла created
    //вызывается после создания экземпляра
    created: function() {
        var vm = this;  //назначаем переменнной ссылку на экземпляр
        //вызываем функцию родителя getMap
        vm.getMap(function(map) {
            //итерируем по каждому place входного параметра places
            vm.places.forEach(function(place) {
                //выставляем маркер на place
                new google.maps.Marker({
                    position: place.position,
                    map: map
                });
            });
        });
    },
    //будет изучено позднее
    render(h) {
        return null;
    } 
});

//создаем экземлпяр Vue приложения
new Vue({
    //определяем DOM-элемент приложения
    el: "#app",
    data: {
        //определяем параметр экземлпяра, 
        //который будет передаваться компоненту
        //в качестве входного параметра places
        vueConfCities: [
            {
                name: "Wrocław",
                position: {
                  lat: 51.107885,
                  lng: 17.038538
                }
              },
              {
                name: "New Orleans",
                position: {
                  lat: 29.951066,
                  lng: -90.071532
                }
              } 
        ]
    } 
});