<script>
  import {signUp} from '../helper';
  import {navigate} from 'svelte-routing'

  const Signin = async (email, password, name) => {
    loading = true
    const [error, authData] = await signUp({email, password, name});
    loading = false
    if (error) {
      console.error(error)
    } else if (authData) {
      console.log(authData);
      alert('account created successfully!')
      navigate('/login', { replace: true })
    }
  }
  let email = '';
  let password = '';
  let name = '';
  $:loading = false
</script>

<main>
  <h3>Logout</h3>
  <form on:submit|preventDefault={() => Signin(email, password, name)}>
    <label for="name">Name</label>
    <input type="text" bind:value={name} id="name" placeholder="John Doe" /><br />
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

<style>
  form {
    padding: 3rem
  }
</style>