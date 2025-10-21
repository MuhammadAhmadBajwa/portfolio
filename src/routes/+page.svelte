<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
  <title>Muhammad Ahmad — Research & AI Engineer | TCP Acceleration · Diffusion · LLMs</title>
  <meta
    name="description"
    content="Research & AI Engineer from Lahore. Built TCP accelerator for satellite communication, trained custom diffusion models, implemented a 405M GPT from scratch, and produced production ML systems. Hire for research & ML engineering roles."
  />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://muhammadahmad.dev/" />
  <meta property="og:title" content="Muhammad Ahmad — Research & AI Engineer" />
  <meta
    property="og:description"
    content="Research & AI Engineer from Lahore. Built TCP accelerator for satellite communication, trained custom diffusion models, implemented a 405M GPT from scratch."
  />
  <meta property="og:image" content="https://muhammadahmad.dev/og-image.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://muhammadahmad.dev/" />
  <meta property="twitter:title" content="Muhammad Ahmad — Research & AI Engineer" />
  <meta
    property="twitter:description"
    content="Research & AI Engineer from Lahore. Built TCP accelerator for satellite communication, trained custom diffusion models, implemented a 405M GPT from scratch."
  />
  <meta property="twitter:image" content="https://muhammadahmad.dev/og-image.png" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://muhammadahmad.dev/" />

  <!-- Additional SEO -->
  <meta name="author" content="Muhammad Ahmad" />
  <meta name="keywords" content="Machine Learning Engineer, AI Researcher, TCP Accelerator, Diffusion Models, GPT, Deep Learning, Computer Vision, NLP, Lahore, Pakistan, SvelteKit, PyTorch" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<Hero />
<About />
<Projects />
<Experience />
<Skills />
<Contact />
