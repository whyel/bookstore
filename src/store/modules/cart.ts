type BookType = {
     id: number, title: string, author: string, price: number, discount: number, count: number, imgUrl: string, bigImgURL: string,
     bookConcern: null, publishDate: null, brief: null
}
type StateType = { items: BookType[] }
type CtxType = { state: StateType; commit: (arg0: string, arg1: { id: number; count: number; title?: string; price?: number; img?: string }) => void }

const cart = {
    namespaced: true,
    state: {
        items: []
    },
    mutations: {
      pushProductToCart (state: StateType, book: BookType): void {
          if (book.count <= 0) {
              book.count = 1
          }
        state.items.push(book)
      },

      deleteCartItem (state: StateType, id: number): void {
          const index = state.items.findIndex(item => item.id === id)
          if (index >= 0) {
              state.items.splice(index, 1)
          }
      },

      incItemCount (state: StateType, info: {id: number, count: number}): void {
          const item = state.items.find(item => item.id === info.id)
          if (item) {
              item.count += info.count
          }
      },

      clearCart (state: StateType): void {
          state.items = []
      }
    },

    getters: {
        itemsCount: (state: StateType): number => {
            return state.items.length
        }
    },

    actions: {
        addProductToCart (ctx: CtxType, book: BookType): void {
            const cartItem = ctx.state.items.find((item: { id: number }) => item.id === book.id)
            if (!cartItem) {
                ctx.commit('pushProductToCart', book)
            } else {
                ctx.commit('incItemCount', { id: book.id, count: book.count })
            }
        }
    },

    modules: {
    }
}

export default cart
