<script>
  let isAuthenticating = false;

  function authenticate() {
    isAuthenticating = true;
    // Implement your authentication logic here
  }
</script>

<button
  class="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4"
  on:click={authenticate}
  disabled={isAuthenticating}
>
  {isAuthenticating ? 'Authenticating...' : 'Authenticate with SNS'}
</button>
