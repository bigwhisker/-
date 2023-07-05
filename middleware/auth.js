export default function({store,route,redirect,params,query,req,resolveComponent}){
  let token =store.state.token;
  if (!token) {
    redirect('/list')
  }
  console.log('middleware auth');
}