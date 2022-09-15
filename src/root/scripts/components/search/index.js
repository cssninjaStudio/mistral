export function search() {
  return {
    searchTerms: '',
    toggleSearch() {
      this.$store.app.searchOpened = !this.$store.app.searchOpened
      this.searchTerms = ''
    },
  }
}
