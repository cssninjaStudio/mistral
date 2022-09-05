//Alpine and plugins import
import Alpine from "alpinejs"
import intersect from "@alpinejs/intersect"
import collapse from '@alpinejs/collapse'

window.Alpine = Alpine
//Init intersect plugin
Alpine.plugin(intersect)
//Init collapse plugin
Alpine.plugin(collapse)
//Init Alpine store
Alpine.store("app", {
  isLoggedIn: false,
});
//Start Alpine
Alpine.start()

document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    
  }
}
