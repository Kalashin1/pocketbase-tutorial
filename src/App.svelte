<script>
  import {Router, Route} from 'svelte-routing'
  import Login from "./pages/login.svelte";
  import Signup from "./pages/signup.svelte";
  import Index from './pages/index.svelte';

  export let url = "/";
</script>

<Router {url}>
  <Route path="/">
    <Signup />
  </Route>
  <Route path="/login">
    <Login />
  </Route>
  <Route path="/dashboard">
    <Index />
  </Route>
  
</Router>