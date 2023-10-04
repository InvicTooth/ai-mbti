<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.title = 'Contact Us - AI-MBTI';
  });

  function submitForm() {
    // Implement form submission logic here
  }
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-semibold mb-4">Contact Us</h1>
  <p class="mb-6">
    If you have any questions, suggestions, or concerns, please feel free to get in touch using the contact form below, and we will get back to you as soon as possible.
  </p>

  <form on:submit|preventDefault={submitForm}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Your Name"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Your Email"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
        Message
      </label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"
        id="message"
        placeholder="Your Message"
        required
      ></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Send Message
      </button>
    </div>
  </form>
</div>
