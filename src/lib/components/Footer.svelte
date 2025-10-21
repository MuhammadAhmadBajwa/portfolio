<script lang="ts">
  import { Github, Linkedin, Mail } from 'lucide-svelte';
  import KaggleIcon from './KaggleIcon.svelte';

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/MuhammadAhmadBajwa',
      isCustom: false,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/muhammadahmadbajwa',
      isCustom: false,
    },
    {
      name: 'Kaggle',
      icon: KaggleIcon,
      href: 'https://www.kaggle.com/ahmadbajwa9898',
      isCustom: true,
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ahmadbajwa9898@gmail.com',
      isCustom: false,
    },
  ];
</script>

<footer class="bg-card border-t border-border py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div class="text-center md:text-left">
        <p class="text-sm text-muted-foreground">
          © {currentYear} Muhammad Ahmad. Built with SvelteKit & TailwindCSS.
        </p>
        <p class="text-xs text-muted-foreground mt-1">
          Designed & developed in Lahore, Pakistan
        </p>
      </div>

      <div class="flex items-center space-x-6">
        {#each socialLinks as link}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted-foreground hover:text-primary transition-colors"
            aria-label={link.name}
          >
            {#if link.isCustom}
              <svelte:component this={link.icon} size={20} />
            {:else}
              <svelte:component this={link.icon} size={20} />
            {/if}
          </a>
        {/each}
      </div>

      <div class="flex items-center space-x-4 text-sm">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          Resume
        </a>
        <span class="text-muted-foreground">•</span>
        <a
          href="https://github.com/MuhammadAhmadBajwa/portfolio1"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          Source
        </a>
      </div>
    </div>
  </div>
</footer>

