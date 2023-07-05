export const state = () => ({
  token: 'we'
})
export const mutations={
  setToken(state,token){
    state.token=token
  }
}
export const actions={
  nuxtServerInit(store,context){
    store.commit('setToken','abc123')
    console.log('nuxtServerInit');
  }
}
