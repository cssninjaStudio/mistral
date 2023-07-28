import '@purge-icons/generated'
import 'vidstack/define/media-player.js'
import 'vidstack/define/media-poster.js'
import 'vidstack/define/media-play-button.js'
import 'vidstack/define/media-icon.js'
import 'swiper/css/bundle'

//Alpine and plugins import
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'

import './demo'
import './components'

window.Alpine = Alpine
//Init intersect plugin
Alpine.plugin(intersect)
//Init collapse plugin
Alpine.plugin(collapse)
//Init persist plugin
Alpine.plugin(persist)
//Init Alpine store
Alpine.store('app', {
  init() {
    this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  isDark: Alpine.$persist(false),
})
//Start Alpine
Alpine.start()

document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    // Do something here
  }
}
