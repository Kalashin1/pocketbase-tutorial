<script>
	import { navigate } from 'svelte-routing';
  import pb from "../helper";

  console.log(pb.authStore.model);
  $:currentUser = pb.authStore.model;

  pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth);
    currentUser = pb.authStore.model;
  });

  function signOut() {
    pb.authStore.clear();
    navigate('/login', {replace: true})
  }

</script>

<h1>Current user {currentUser?.email}</h1>

<button on:click={() => signOut()}>Logout</button>