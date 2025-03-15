const rpc = globalThis.lvceRpc({
  getCount() {
    return {
      count: {
        value: 123,
      },
    }
  },
  setCount({ count }) {
    document.body.textContent = count.value
  },
})
