<script>
  import '../app.css'
  import SnsAuth from '../components/SnsAuth.svelte';
  import RegisterModal from '../components/RegisterModal.svelte';
  import LoginModal from '../components/LoginModal.svelte';
  
  import { onMount } from 'svelte';
  onMount(() => {
    document.title = 'AI-MBTI';
  });

  let showRegisterModal = false;
  let showLoginModal = false;

  function toggleRegisterModal() {
    showRegisterModal = !showRegisterModal;
  }

  function toggleLoginModal() {
    showLoginModal = !showLoginModal;
  }
</script>

<style>
  .image-placeholder {
    width: 100%;
    height: 300px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-semibold mb-4">Estimate Your MBTI</h1>
  <p class="mb-6">
    Discover your MBTI type based on your social media activity using our AI-powered estimation service.
  </p>

  <div class="image-placeholder mb-6">
    <span>Image Placeholder</span>
  </div>

  <div class="mb-6">
    <SnsAuth />
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4"
      on:click={toggleRegisterModal}
    >
      Register
    </button>
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      on:click={toggleLoginModal}
    >
      Login
    </button>
  </div>

  <div class="text-center">
    <a href="/about" class="text-blue-500 hover:underline mr-4">About</a>
    <a href="/privacy" class="text-blue-500 hover:underline mr-4">Privacy Policy</a>
    <a href="/contact" class="text-blue-500 hover:underline">Contact Us</a>
  </div>

  <RegisterModal show={showRegisterModal} onClose={toggleRegisterModal} />
  <LoginModal show={showLoginModal} onClose={toggleLoginModal} />
</div>
