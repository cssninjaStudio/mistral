export function pricing() {
  return {
    yearly: false,
    toggle() {
      this.yearly = !this.yearly
    },
  }
}
