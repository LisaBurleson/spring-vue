import { createApp } from "vue";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";


let myMap = new Map<string, any>();
myMap.set('HelloWorld', HelloWorld);
myMap.set('App', App);

const componentId: HTMLElement | null = document.getElementById("app");
validate(componentId)
if(!componentId) throw new Error('null app element');


createApp(myMap.get(componentId.dataset.src as string)).mount("#app");

function validate(el: HTMLElement | null) {
  if (!el) throw new Error("Unable to find app!");
  if (!el.dataset.src) throw new Error("Null Vue component name!");
  if (!myMap.has(el.dataset.src)) throw new Error("Unknown Vue component name!");
}
