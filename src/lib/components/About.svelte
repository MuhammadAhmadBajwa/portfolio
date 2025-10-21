<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { MapPin, Mail, GraduationCap, Github, Linkedin } from 'lucide-svelte';
  import KaggleIcon from './KaggleIcon.svelte';
  import { personalInfo, education } from '$lib/data/portfolio';
  import TimelineItem from './TimelineItem.svelte';

  const timeline = [
    {
      title: 'FAST NUCES',
      subtitle: 'Started Bachelor of Computer Science',
      date: '2021',
      icon: 'graduation',
    },
    {
      title: 'NETSOL Technologies',
      subtitle: 'Machine Learning Intern',
      date: 'Jun 2024',
      icon: 'briefcase',
    },
    {
      title: 'SUPARCO Research',
      subtitle: 'TCP Accelerator Project',
      date: 'May 2025',
      icon: 'rocket',
    },
    {
      title: 'Teaching Assistant',
      subtitle: 'FAST NUCES',
      date: 'Sep 2025',
      icon: 'school',
    },
  ];

  const quickFacts = [
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Mail, label: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', link: personalInfo.github, isCustom: false },
    { icon: Linkedin, label: 'LinkedIn', link: personalInfo.linkedin, isCustom: false },
    { icon: KaggleIcon, label: 'Kaggle', link: personalInfo.kaggle, isCustom: true },
  ];
</script>

<section id="about" class="py-24 bg-card">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Motion
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-16"></div>
    </Motion>

    <div class="grid md:grid-cols-2 gap-12 mb-16">
      <!-- Left: Photo and Quick Facts -->
      <Motion
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div class="space-y-6">
          <div class="w-48 h-48 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/20">
            <div class="text-6xl font-bold text-primary">MA</div>
          </div>

          <div class="space-y-3">
            {#each quickFacts as fact}
              <div class="flex items-center gap-3 text-muted-foreground">
                <svelte:component this={fact.icon} size={20} class="text-primary" />
                {#if fact.link}
                  <a href={fact.link} class="hover:text-foreground transition-colors">
                    <span class="font-semibold text-foreground">{fact.label}:</span> {fact.value}
                  </a>
                {:else}
                  <span>
                    <span class="font-semibold text-foreground">{fact.label}:</span> {fact.value}
                  </span>
                {/if}
              </div>
            {/each}
          </div>

          <div class="p-4 bg-secondary rounded-lg">
            <div class="flex items-start gap-3">
              <GraduationCap size={24} class="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 class="font-semibold text-foreground mb-1">{education[0].degree}</h3>
                <p class="text-sm text-muted-foreground">{education[0].school}</p>
                <p class="text-xs text-muted-foreground mt-1">{education[0].period}</p>
              </div>
            </div>
          </div>

          <div class="flex gap-3">
            {#each socialLinks as social}
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 p-3 bg-secondary hover:bg-primary/10 rounded-lg transition-colors group flex items-center justify-center gap-2"
                aria-label={social.label}
              >
                {#if social.isCustom}
                  <svelte:component this={social.icon} size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                {:else}
                  <svelte:component this={social.icon} size={18} class="text-muted-foreground group-hover:text-primary transition-colors" />
                {/if}
                <span class="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{social.label}</span>
              </a>
            {/each}
          </div>
        </div>
      </Motion>

      <!-- Right: Bio -->
      <Motion
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Engineer. Researcher. Builder.</h3>
            <p class="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          <div class="space-y-3">
            <h4 class="font-semibold text-lg">What I Do</h4>
            <ul class="space-y-2 text-muted-foreground">
              <li class="flex items-start gap-2">
                <span class="text-primary mt-1">▸</span>
                <span>Design and optimize low-level networking protocols for high-latency environments</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary mt-1">▸</span>
                <span>Train custom deep learning models (diffusion, GPT, CNNs) from scratch</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary mt-1">▸</span>
                <span>Build end-to-end ML systems from embedded hardware to cloud deployment</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary mt-1">▸</span>
                <span>Bridge research and production with reliable, scalable engineering</span>
              </li>
            </ul>
          </div>
        </div>
      </Motion>
    </div>

    <!-- Timeline -->
    <Motion
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 class="text-2xl font-semibold text-center mb-12">My Journey</h3>
      <div class="relative">
        <!-- Timeline line (horizontal on desktop, vertical on mobile) -->
        <div class="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border"></div>
        <div class="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        <div class="grid md:grid-cols-4 gap-8 md:gap-4">
          {#each timeline as item, index}
            <TimelineItem {item} {index} />
          {/each}
        </div>
      </div>
    </Motion>
  </div>
</section>

