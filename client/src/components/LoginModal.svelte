<script>
  export let show = false;
  /**
	 * @type {() => void}
	 */
   export let onClose;

  function close() {
    if (onClose) {
      onClose();
    }
  }
</script>

{#if show}
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded shadow-md w-96">
      <h2 class="text-2xl font-semibold mb-4">Login</h2>
      <input
        class="border border-gray-300 p-2 w-full mb-4 rounded"
        type="text"
        placeholder="Username or Email"
      />
      <input
        class="border border-gray-300 p-2 w-full mb-4 rounded"
        type="password"
        placeholder="Password"
      />
      <button
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full mb-4"
        on:click={close}
      >
        Login
      </button>
      <button
        class="text-blue-500 hover:underline w-full"
        on:click={close}
      >
        Cancel
      </button>
    </div>
  </div>
{/if}
