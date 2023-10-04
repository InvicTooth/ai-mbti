<script>
  import { onMount } from 'svelte';

  let userData = null;
  let estimatedMbti = null;

  onMount(async () => {
    // Fetch user data from your SNS API.
    userData = await fetchUserDataFromSNS();
    // Estimate MBTI by sending the preprocessed user data to your server.
    estimatedMbti = await estimateMbti(userData);
  });

  async function fetchUserDataFromSNS() {
    // Replace this with the actual implementation for fetching SNS data.
    // Use the APIs provided by social media platforms like Twitter, Facebook, or Instagram.

    return {
      // Dummy user data
      name: 'John Doe',
      tweets: [
        'I love spending time alone and reading books.',
        'Just finished my new project, feeling accomplished!',
      ],
    };
  }

  async function estimateMbti(userData) {
    const response = await fetch('/api/estimate-mbti', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      return data.mbti;
    } else {
      console.error('Failed to estimate MBTI');
      return null;
    }
  }
</script>

<h1>MBTI Estimation</h1>

{#if userData}
  <h2>User: {userData.name}</h2>
  {#each userData.tweets as tweet}
    <p>{tweet}</p>
  {/each}
  <br>
  {#if estimatedMbti}
    <p>Estimated MBTI: {estimatedMbti}</p>
  {:else}
    <p>Estimating MBTI...</p>
  {/if}
{:else}
  <p>Loading user data...</p>
{/if}