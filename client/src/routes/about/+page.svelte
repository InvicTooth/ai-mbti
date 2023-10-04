<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.title = 'About - AI-MBTI';
  });
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-semibold mb-4">About</h1>
  <p class="mb-6">
    Your App Name is an AI-powered service that estimates your MBTI type based on your social media activity.
  </p>

  <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
  <p class="mb-6">
    Our mission is to help individuals better understand their personalities and foster self-awareness by leveraging the power of AI and social media data.
  </p>

  <h2 class="text-2xl font-semibold mb-4">How It Works</h2>
  <p class="mb-6">
    Our application uses GPT-3.5, a state-of-the-art language model developed by OpenAI, to analyze your social media usage patterns and generate an MBTI estimation. The AI model examines your posts, comments, and interactions to identify patterns and characteristics associated with different MBTI types.
  </p>

  <h2 class="text-2xl font-semibold mb-4">Privacy & Security</h2>
  <p>
    We are committed to protecting your privacy and ensuring the security of your data. We only use your social media data to estimate your MBTI type and do not share it with any third parties. Please read our <a href="/privacy" class="text-blue-500 hover:underline">Privacy Policy</a> for more information.
  </p>
</div>
