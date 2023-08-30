<script>
	import { navigate } from 'svelte-routing';
  import {login} from '../helper';
  const Signin = async (email, password) => {
    loading = true
    const [error, authData] = await login(email, password);
    loading = false
    if (error) {
      console.error(error)
    } else if (authData) {
      console.log(authData);
      navigate('/dashboard', {replace: true})
    }
  }
  let email = '';
  let password = '';
  $:loading = false
</script>

<main>
  <h3>Login</h3>
  <form on:submit|preventDefault={() => Signin(email, password)}>
    <label for="email">Email</label>
    <input type="email" bind:value={email} id="email" placeholder="email@domain.com" /><br />
    <label for="password">Password</label>
    <input type="password" bind:value={password} id="password" placeholder="***" /><br />
    {#if loading}
    <button disabled={loading}>
      loading...
    </button>
    {:else}
      <button type="submit">
        register
      </button>
    {/if}
  </form>
</main>