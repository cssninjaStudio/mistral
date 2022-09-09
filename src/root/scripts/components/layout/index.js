export function layout() {
  return {
    initTheme() {
      if (this.$store.app.isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },

    toggleTheme() {
      this.$store.app.isDark = !this.$store.app.isDark
    },
  }
}
