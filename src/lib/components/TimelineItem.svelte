<script lang="ts">
  import { Motion } from 'svelte-motion';
  import { GraduationCap, Briefcase, Rocket, School } from 'lucide-svelte';

  export let item: {
    title: string;
    subtitle: string;
    date: string;
    icon: string;
  };
  export let index: number;

  const iconMap = {
    graduation: GraduationCap,
    briefcase: Briefcase,
    rocket: Rocket,
    school: School,
  };

  const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Briefcase;
</script>

<Motion
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  <div class="relative md:text-center">
    <!-- Icon -->
    <div class="flex md:justify-center mb-4">
      <div class="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center relative z-10">
        <svelte:component this={IconComponent} size={28} class="text-primary" />
      </div>
    </div>

    <!-- Content -->
    <div class="md:mt-8 ml-20 md:ml-0 -mt-16 md:-mt-0">
      <div class="text-sm text-primary font-semibold mb-1">{item.date}</div>
      <h4 class="font-semibold text-foreground mb-1">{item.title}</h4>
      <p class="text-sm text-muted-foreground">{item.subtitle}</p>
    </div>
  </div>
</Motion>

