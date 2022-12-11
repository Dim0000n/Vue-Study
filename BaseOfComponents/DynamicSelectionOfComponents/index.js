Vue.component("tab-home" , {
    template: "<div>Home component</div>"
});
Vue.component("tab-posts", {
    template: "<div>Posts component</div>"
})
Vue.component("tab-archive", {
    template: "<div>Archive component</div>"
});

new Vue({
    el: "#dynamic-component-demo",
    data: {
        currentTab: "Home",
        tabs: ["Home", "Posts", "Archive"]
    },
    computed: {
        currentTabComponent: function() {
            return "tab-" + this.currentTab.toLowerCase();
        }
    }
});


//dynamic component demo V2
var tabs = [
    {
        name: "Home2",
        component: {
            template: "<div>Home component</div>"
        }
    },
    {
        name: "Posts2",
        component: {
            template: "<div>Posts component</div>"
        }
    },
    {
        name: "Archive2",
        component: {
            template: "<div>Archive component</div>"
        }
    }
]

new Vue({
    el: "#dynamic-component-demo2",
    data: {
        tabs: tabs,
        currentTab: tabs[0]
    }
})