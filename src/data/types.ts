import { Project } from './types';

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'nebula-dashboard',
    name: 'Nebula Analytics Dashboard',
    tagline: 'Real-time data visualization in the cloud',
    description: 'A cutting-edge analytics platform that transforms complex data into intuitive visualizations, helping businesses make data-driven decisions with ease.',
    position: [15, 10, -20],
    scale: 1.2,
    luminosity: 0.8,
    color: '#3b82f6',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    client: {
      name: 'Galactic Solutions Inc.',
      testimonial: 'This dashboard transformed how we understand our data. The team delivered beyond our expectations.'
    },
    caseStudy: {
      challenge: 'Client needed to visualize massive datasets in real-time without overwhelming users.',
      solution: 'Implemented custom WebGL visualizations with progressive data loading and interactive filtering.',
      results: '90% faster data processing and 75% increase in user engagement.',
      imageUrl: 'https://placehold.co/800x400/1a1a2e/3b82f6?text=Nebula+Dashboard',
      fullPageUrl: '/projects/nebula-dashboard'
    },
    featured: true,
    status: 'completed'
  },
  {
    id: '2',
    slug: 'stellar-commerce',
    name: 'Stellar E-Commerce Platform',
    tagline: 'Next-generation shopping experience',
    description: 'A revolutionary e-commerce platform that uses AI to personalize every aspect of the shopping journey, from product discovery to checkout.',
    position: [-25, 5, -40],
    scale: 1.5,
    luminosity: 0.9,
    color: '#8b5cf6',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    client: {
      name: 'Cosmic Retail Group'
    },
    caseStudy: {
      challenge: 'Create a seamless shopping experience that adapts to each user in real-time.',
      solution: 'Built a microservices architecture with AI-powered recommendation engines.',
      results: '40% increase in conversion rates and 60% reduction in bounce rates.',
      imageUrl: 'https://placehold.co/800x400/1a1a2e/8b5cf6?text=Stellar+Commerce',
      fullPageUrl: '/projects/stellar-commerce'
    },
    featured: true,
    status: 'completed'
  },
  {
    id: '3',
    slug: 'orion-mobile',
    name: 'Orion Mobile App',
    tagline: 'Augmented reality meets productivity',
    description: 'An AR-powered productivity app that overlays digital information onto the physical world, revolutionizing how field technicians work.',
    position: [30, -15, -30],
    scale: 1.0,
    luminosity: 0.7,
    color: '#10b981',
    technologies: ['React Native', 'ARKit', 'TensorFlow.js', 'Firebase'],
    client: {
      name: 'Aerospace Dynamics',
      testimonial: 'Orion has reduced our field service times by 50% while improving accuracy.'
    },
    caseStudy: {
      challenge: 'Field technicians needed instant access to technical documentation and real-time guidance.',
      solution: 'Developed an AR interface that overlays instructions and diagrams onto equipment.',
      results: '50% reduction in service times and 95% improvement in first-time fix rates.',
      imageUrl: 'https://placehold.co/800x400/1a1a2e/10b981?text=Orion+Mobile',
      fullPageUrl: '/projects/orion-mobile'
    },
    featured: true,
    status: 'completed'
  },
  {
    id: '4',
    slug: 'quantum-api',
    name: 'Quantum API Gateway',
    tagline: 'Ultra-fast API management at scale',
    description: 'A high-performance API gateway that handles millions of requests per second with sub-millisecond latency, designed for enterprise-scale applications.',
    position: [-10, 20, -50],
    scale: 0.8,
    luminosity: 0.6,
    color: '#f59e0b',
    technologies: ['Go', 'gRPC', 'Kubernetes', 'Prometheus'],
    client: {
      name: 'TechCorp Enterprises'
    },
    caseStudy: {
      challenge: 'Existing API infrastructure couldn\'t handle traffic spikes during peak hours.',
      solution: 'Built a custom gateway with intelligent load balancing and auto-scaling.',
      results: '99.99% uptime and 70% reduction in response times.',
      imageUrl: 'https://placehold.co/800x400/1a1a2e/f59e0b?text=Quantum+API',
      fullPageUrl: '/projects/quantum-api'
    },
    featured: false,
    status: 'completed'
  },
  {
    id: '5',
    slug: 'cosmos-platform',
    name: 'Cosmos Social Platform',
    tagline: 'Decentralized social networking',
    description: 'A blockchain-based social platform that gives users complete control over their data while providing a familiar social experience.',
    position: [0, -25, -60],
    scale: 1.3,
    luminosity: 0.85,
    color: '#ec4899',
    technologies: ['Solidity', 'Web3.js', 'IPFS', 'React'],
    client: {
      name: 'Decentralized Future Labs',
      testimonial: 'Cosmos represents the future of social media - truly user-owned and privacy-focused.'
    },
    caseStudy: {
      challenge: 'Create a social platform that prioritizes user privacy without sacrificing functionality.',
      solution: 'Implemented a decentralized architecture with blockchain-based identity management.',
      results: '100K+ active users in first month with zero data breaches.',
      imageUrl: 'https://placehold.co/800x400/1a1a2e/ec4899?text=Cosmos+Platform',
      fullPageUrl: '/projects/cosmos-platform'
    },
    featured: true,
    status: 'ongoing'
  },
  {
    id: '6',
    slug: 'pulsar-analytics',
    name: 'Pulsar Predictive Analytics',
    tagline: 'AI-powered business forecasting',
    description: 'Advanced machine learning models that predict market trends and business outcomes with unprecedented accuracy.',
    position: [40, 0, -10],
    scale: 1.1,
    luminosity: 0.75,
    color: '#06b6d4',
    technologies: ['Python', 'PyTorch', 'Apache Spark', 'Docker'],
    client: {
      name: 'Future Insights Co.'
    },
    caseStudy: {
      challenge: 'Client needed to forecast demand with higher accuracy than traditional methods.',
      solution: 'Developed ensemble models combining time-series analysis with external data sources.',
      results: '85% accuracy in demand forecasting, saving $2M annually in inventory costs.',
      imageUrl: 'https://placehold.co/800x400/1a1a2e/06b6d4?text=Pulsar+Analytics',
      fullPageUrl: '/projects/pulsar-analytics'
    },
    featured: false,
    status: 'completed'
  },
  {
    id: '7',
    slug: 'nova-security',
    name: 'Nova Cybersecurity Suite',
    tagline: 'Next-gen threat protection',
    description: 'An integrated cybersecurity platform that uses behavioral analysis and AI to detect and prevent threats in real-time.',
    position: [-35, -10, -15],
    scale: 0.9,
    luminosity: 0.65,
    color: '#ef4444',
    technologies: ['Rust', 'Kafka', 'Elasticsearch', 'React'],
    client: {
      name: 'SecureNet Systems',
      testimonial: 'Nova detected zero-day threats our previous system missed for months.'
    },
    caseStudy: {
      challenge: 'Traditional signature-based security was insufficient against modern threats.',
      solution: 'Implemented behavioral analysis with machine learning anomaly detection.',
      results: '99.7% threat detection rate with zero false positives in production.',
      imageUrl: 'https://placehold.co/800x400/1a1a2e/ef4444?text=Nova+Security',
      fullPageUrl: '/projects/nova-security'
    },
    featured: true,
    status: 'completed'
  }
];