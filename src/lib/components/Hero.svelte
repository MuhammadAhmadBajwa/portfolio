<script lang="ts">
  import { onMount } from 'svelte';
  import { Motion } from 'svelte-motion';
  import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-svelte';
  import Hero3DBackground from './Hero3DBackground.svelte';
  import KaggleIcon from './KaggleIcon.svelte';
  import { personalInfo, rotatingTaglines } from '$lib/data/portfolio';

  let currentTaglineIndex = 0;
  let typedText = '';
  let isTyping = true;
  let charIndex = 0;

  onMount(() => {
    const typeInterval = setInterval(() => {
      const currentTagline = rotatingTaglines[currentTaglineIndex];

      if (isTyping) {
        if (charIndex < currentTagline.length) {
          typedText = currentTagline.slice(0, charIndex + 1);
          charIndex++;
        } else {
          isTyping = false;
          setTimeout(() => {
            isTyping = false;
          }, 2000);
        }
      } else {
        if (charIndex > 0) {
          typedText = currentTagline.slice(0, charIndex - 1);
          charIndex--;
        } else {
          isTyping = true;
          currentTaglineIndex = (currentTaglineIndex + 1) % rotatingTaglines.length;
        }
      }
    }, 100);

    return () => clearInterval(typeInterval);
  });

  function scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub', isCustom: false },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', isCustom: false },
    { icon: KaggleIcon, href: personalInfo.kaggle, label: 'Kaggle', isCustom: true },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', isCustom: false },
  ];
</script>

<section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- 3D Background -->
  <Hero3DBackground />

  <!-- Gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-10"></div>

  <div class="w-full px-4 sm:px-6 lg:px-8 py-32 relative z-10">
    <div class="max-w-5xl mx-auto text-center">
      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight">
          {personalInfo.name}
        </h1>
      </Motion>

      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p class="text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-6">
          {personalInfo.title}
        </p>
      </Motion>

      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p class="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-1">
          {personalInfo.tagline}
        </p>
      </Motion>

      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div class="flex items-center justify-center mb-0">
          <p class="text-lg sm:text-xl font-mono text-primary">
            {typedText}<span class="animate-pulse">|</span>
          </p>
        </div>
      </Motion>

      <Motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div class="w-full -mt-1 mb-4 sm:mb-6">
          <div class="max-w-fit mx-auto flex flex-col gap-3">
            <button
              on:click={scrollToProjects}
              class="mx-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-auto px-8 py-4 bg-secondary text-foreground rounded-lg font-semibold text-lg hover:bg-secondary/80 transition-all hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </Motion>

      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div class="flex items-center justify-center gap-6">
          {#each socialLinks as link}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              aria-label={link.label}
            >
              {#if link.isCustom}
                <svelte:component this={link.icon} size={24} />
              {:else}
                <svelte:component this={link.icon} size={24} />
              {/if}
            </a>
          {/each}
        </div>
      </Motion>
    </div>
  </div>

  <!-- Scroll indicator -->
  <Motion
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 1.5 }}
  >
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <button
        on:click={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        class="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  </Motion>
</section>

