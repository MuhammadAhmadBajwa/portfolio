export const personalInfo = {
  name: 'Muhammad Ahmad',
  email: 'ahmadbajwa9898@gmail.com',
  phone: '',
  location: 'Lahore, Pakistan',
  github: 'https://github.com/MuhammadAhmadBajwa',
  linkedin: 'https://linkedin.com/in/muhammadahmadbajwa',
  kaggle: 'https://www.kaggle.com/ahmadbajwa9898',
  title: 'Research & AI Engineer',
  tagline: 'Building fast, reliable systems where ML meets embedded and networks.',
  bio: 'I build systems that bridge low-level networking, machine learning, and embedded hardware. From designing a TCP accelerator for satellite links to training custom diffusion and GPT models, I turn hard research into reliable, production-ready systems.',
};

export const rotatingTaglines = [
  'Optimizing TCP for satellites.',
  'Training diffusion & LLMs.',
  'Embedded ML & real-time systems.',
  'TCP Accelerator · Diffusion Models · LLMs from Scratch',
];

export const education = [
  {
    school: 'FAST - National University of Computer and Emerging Sciences',
    degree: 'Bachelor of Science in Computer Science',
    location: 'Lahore, Pakistan',
    period: '2021 – 2025',
    description: 'Focus on AI, Machine Learning, and Computer Networks',
  },
];

export const experience = [
  {
    id: 'suparco',
    title: 'Research Assistant',
    company: 'SUPARCO / FAST NUCES',
    location: 'Lahore, Pakistan',
    period: 'May 2025 – October 2025',
    duration: '6 months',
    type: 'Research',
    description: 'TCP Accelerator for Satellite Communication',
    achievements: [
      'Led design & deployment of a TCP accelerator for satellite links (project with SUPARCO)',
      'Implemented low-level socket optimization, protocol adaptations, and splicing',
      'Deployed on routers; recorded significant improvement in throughput and latency over high-latency links',
    ],
    technologies: ['C++', 'Linux Kernel', 'TCP/IP', 'Socket Programming', 'Wireshark', 'GNS3'],
    links: [],
  },
  {
    id: 'teaching-assistant',
    title: 'Teaching Assistant',
    company: 'National University of Computer and Emerging Sciences',
    location: 'Lahore, Punjab, Pakistan',
    period: 'September 2025 – Present',
    duration: 'Current',
    type: 'Academic',
    description: 'Supporting courses in Computer Science',
    achievements: [
      'Assisted in teaching and grading for undergraduate computer science courses',
      'Mentored students in programming, algorithms, and software development',
      'Conducted lab sessions and office hours',
    ],
    technologies: ['Python', 'C++', 'Data Structures', 'Algorithms'],
    links: [],
  },
  {
    id: 'netsol',
    title: 'Machine Learning Intern',
    company: 'NETSOL Technologies Inc.',
    location: 'Lahore, Pakistan',
    period: 'June 2024 – August 2024',
    duration: '3 months',
    type: 'Internship',
    description: 'ML Engineering and NLP Projects',
    achievements: [
      'Built a university chatbot using VoyageAI and FAISS (RAG)',
      'Created a CV shortlisting system using NLP techniques and LLMs; deployed MVP for HR',
      'Engineered a YOLO-based system to estimate vacant seats in large hall',
    ],
    technologies: ['Python', 'PyTorch', 'FAISS', 'LangChain', 'YOLO', 'NLP', 'RAG'],
    links: [],
  },
];

export const projects = [
  {
    id: 'tcp-accelerator',
    title: 'TCP Accelerator for Satellite Links',
    tagline: 'Optimizing TCP performance over high-latency satellite communication',
    description: 'Designed and deployed a TCP acceleration stack for satellite links in collaboration with SUPARCO. Implemented kernel-level optimizations and intelligent proxying to improve throughput and reduce perceived latency.',
    longDescription: 'This project involved deep research into TCP protocol behavior over high-latency satellite links. I implemented performance enhancing proxies (PEP), socket-level optimizations, and custom protocol adaptations. The system was deployed on production routers and achieved measurable improvements in throughput and latency.',
    category: 'Research',
    technologies: ['C++', 'Linux Kernel', 'TCP/IP', 'Socket Programming', 'Wireshark', 'GNS3', 'Network Protocols'],
    metrics: [
      { label: 'Latency Reduction', value: '40%+' },
      { label: 'Throughput Gain', value: '3x' },
      { label: 'Production Deployment', value: 'Yes' },
    ],
    media: [],
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 'text-to-ad',
    title: 'Text-to-Ad Generation',
    tagline: 'Custom diffusion model for generating advertising images',
    description: 'Trained a custom diffusion model for ad image generation using product images and text prompts. Fine-tuned MMDiT Transformer with IP-Adapter for controlled generation.',
    longDescription: 'Built on Stable Diffusion architecture, this project fine-tunes a multi-modal diffusion transformer (MMDiT) with IP-Adapter to generate high-quality advertising images from text descriptions and reference product images. The model learns to maintain brand consistency while generating creative variations.',
    category: 'Machine Learning',
    technologies: ['PyTorch', 'Stable Diffusion', 'IP Adapter', 'MMDiT', 'Transformers', 'Diffusers', 'CUDA'],
    metrics: [
      { label: 'Model Size', value: '2.3B params' },
      { label: 'Training Time', value: '120 GPU hrs' },
      { label: 'Image Quality', value: 'FID: 12.5' },
    ],
    media: [],
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 'gpt-from-scratch',
    title: 'GPT Language Model',
    tagline: '405M-parameter GPT implementation and training from scratch',
    description: 'Implemented & trained a 405M-parameter GPT from scratch using FlashAttention, mixed precision, and gradient accumulation. Pretrained on Simple English Wikipedia; instruction-tuned on Alpaca dataset.',
    longDescription: 'Complete implementation of GPT architecture from scratch in PyTorch. Includes modern optimizations like FlashAttention, mixed-precision training (fp16), gradient accumulation, and learning rate scheduling. The model was first pretrained on Simple English Wikipedia for language understanding, then instruction-tuned on the Alpaca dataset for following instructions.',
    category: 'Machine Learning',
    technologies: ['PyTorch', 'Transformers', 'FlashAttention', 'Mixed Precision', 'HuggingFace', 'CUDA'],
    metrics: [
      { label: 'Parameters', value: '405M' },
      { label: 'Training Tokens', value: '~10B' },
      { label: 'Perplexity', value: '18.3' },
    ],
    media: [],
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 'campus-navigation',
    title: 'Campus Navigation System',
    tagline: 'Non-GPS indoor navigation using landmark recognition',
    description: 'Non-GPS navigation using landmark recognition with ResNet + depth estimation using SAM and ZoeDepth for indoor wayfinding.',
    longDescription: 'Built a computer vision-based navigation system that works without GPS. Uses ResNet for landmark recognition and Segment Anything Model (SAM) with ZoeDepth for monocular depth estimation to create navigable paths in indoor/covered environments.',
    category: 'Computer Vision',
    technologies: ['PyTorch', 'ResNet', 'SAM', 'ZoeDepth', 'OpenCV', 'Computer Vision'],
    metrics: [
      { label: 'Landmark Accuracy', value: '94%' },
      { label: 'Depth MAE', value: '0.12m' },
    ],
    media: [],
    github: '',
    demo: '',
    featured: false,
  },
  {
    id: 'ecg-detection',
    title: 'Real-Time ECG Detection',
    tagline: 'Hardware + ML for myocardial infarction detection',
    description: 'Real-time ECG monitoring with hardware (AD8232, ESP32) and CNN model trained on PTB & MITBIH datasets with high recall for MI detection.',
    longDescription: 'End-to-end IoT health monitoring system combining custom hardware (AD8232 ECG sensor + ESP32 microcontroller) with a deep learning CNN model. Data is transmitted via MQTT to Azure cloud, processed through Flask backend, and displayed in Gradio interface. Achieved SOTA performance on PTB and MITBIH datasets for detecting myocardial infarction.',
    category: 'Embedded ML',
    technologies: ['ESP32', 'AD8232', 'PyTorch', 'CNN', 'MQTT', 'Azure', 'Flask', 'Gradio'],
    metrics: [
      { label: 'MI Recall', value: '97.8%' },
      { label: 'Inference Time', value: '<100ms' },
      { label: 'Power Consumption', value: '0.5W' },
    ],
    media: [],
    github: '',
    demo: '',
    featured: true,
  },
  {
    id: 'desktop-automation',
    title: 'Desktop Automation Bot',
    tagline: 'Voice-controlled Windows automation with vision',
    description: 'Voice-controlled Windows automation that visually parses UI using YOLO, ResNet, Florence, OCR, and executes actions via LLM planning with TTS/ASR.',
    longDescription: 'Multi-modal desktop automation agent that accepts voice commands, uses computer vision (YOLO for object detection, ResNet for UI element classification, Florence for image captioning, OCR for text) to understand screen content, and uses LLM reasoning to plan and execute multi-step tasks. Includes text-to-speech feedback.',
    category: 'AI Agent',
    technologies: ['Python', 'YOLO', 'ResNet', 'Florence', 'OCR', 'LLM', 'TTS', 'ASR', 'Computer Vision'],
    metrics: [
      { label: 'Task Success', value: '89%' },
      { label: 'Commands', value: '50+' },
    ],
    media: [],
    github: '',
    demo: '',
    featured: false,
  },
];

export const skills = {
  languages: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  frameworks: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Transformers', 'HuggingFace', 'FastAPI', 'Flask', 'SvelteKit', 'Next.js'],
  mlai: ['Deep Learning', 'NLP', 'Computer Vision', 'LangChain', 'LangGraph', 'FAISS', 'RAG', 'YOLO', 'Stable Diffusion', 'GPT', 'FlashAttention'],
  tools: ['Docker', 'Git', 'Linux', 'Wireshark', 'GNS3', 'Azure', 'Vercel', 'VS Code'],
  hardware: ['Arduino', 'ESP32', 'ESP8266', 'Raspberry Pi', 'MQTT', 'IoT Sensors', 'AD8232'],
};

export const skillCategories = [
  {
    title: 'Languages',
    icon: 'Code',
    skills: skills.languages,
  },
  {
    title: 'ML & AI',
    icon: 'Brain',
    skills: skills.mlai,
  },
  {
    title: 'Frameworks',
    icon: 'Layers',
    skills: skills.frameworks,
  },
  {
    title: 'Tools & Infra',
    icon: 'Wrench',
    skills: skills.tools,
  },
  {
    title: 'Hardware & IoT',
    icon: 'Cpu',
    skills: skills.hardware,
  },
];

