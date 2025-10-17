export const siteConfig = {
  name: "King's Genomics Bioinformatics",
  title: "Part of King's Genomics based in Social, Genetic & Developmental Psychiatry Centre, King's College London",
  description: "Portfolio website of King's Genomics Bioinformatics",
  accentColor: "#1d4ed8",
  social: {
    email: "kclgenomics@kcl.ac.uk",
    twitter: "https://x.com/kclgenomics",
    instagram: "https://www.instagram.com/kclgenomics/",
    KCL: "https://www.kcl.ac.uk/research/kings-genomics",
    github: "https://github.com/KCLgenomics",
  },
  aboutMe:
    "This is the official homepage of the bioinformaticians at King's Genomics! We turn data into discoveries and genomes into stories.",
  skills: ["📊 R", "🐍 Python", "☁️ Amazon Web Services", "🧬 Genome Studio", "🐳 Docker", "🔍 Analysis"],
  services: [
    {
      name: "Nanopore",
      description:
        "Comprehensive analysis of long-read sequencing data using Oxford Nanopore Technologies",
      skills: ["Direct RNA", "Long-read", "Adaptive", "cDNA"],
      subServices: [
        {
          name: "Direct RNA",
          description: "Direct RNA sequencing for methylation pattern analysis",
          link: "#",
        },
        {
          name: "cDNA",
          description: "cDNA sequencing and analysis",
          link: "#",
        },
        {
          name: "Adaptive Sequencing",
          description: "Real-time selective sequencing to enrich targets of interest",
          link: "#",
        },
        {
          name: "Human Variation Analysis",
          description: "Detection of SNPs, SVs, CNVs and methylation patterns",
          link: "#",
        },
      ],
    },
    {
      name: "Microarray",
      description:
        "End-to-end microarray data analysis pipeline for genetic association studies",
      skills: ["CNV", "PRS", "Imputation", "Genome Studio", "Methylation", "QC"],
      subServices: [
        {
          name: "Quality Control - GenomeStudio",
          description: "QC raw Illumina genotyping data using the Illumina GenomeStudio software",
          link: "https://currentprotocols.onlinelibrary.wiley.com/doi/full/10.1002/cpz1.373",
        },
        {
          name: "Imputation",
          description: "Reference-based imputation to increase marker density",
          link: "#",
        },
        {
          name: "GWAS Analysis",
          description: "Genetic correlation, heritability analysis, and LDSC",
          link: "#",
        },
        {
          name: "CNV Analysis",
          description: "Copy number variation detection and analysis",
          link: "#",
        },
        {
          name: "Methylation Analysis",
          description: "DNA methylation pattern analysis and interpretation",
          link: "#",
        },
      ],
    },
  ],
  recent: [
    {
      Study: "PRADA",
      Group: "Led by Johan Zvrskovec from Translational Neuropsychiatry Group",
      dateRange: "Current",
      Support: [
        "Supporting setup of adaptive sequencing pipeline",
        "Custom tools for matching CPIC guidelines for clinicians",
      ],
    },
    {
      Study: "OPERA",
      Group: "Catheryn Lewis Research Group",
      dateRange: "May 2025- August 2025",
      Support: [
        "Quality Control of the Micro-Array Data",
        "Imputation using TOP-MED for QC'd data",
      ],
    },
  ],
  people: [
    {
      name: "Sang Hyuck Lee",
      title: "Lead Bioinformatician",
      category: "Team",
      profileUrl: "https://www.kcl.ac.uk/people/sang-hyuck-lee",
      image: "https://www.kcl.ac.uk/newimages/person-profile/2022b/sang-hyuck-lee-1.xf3ecbde9.png?w=160&h=160&f=webp",
      description: "He contributed to the GLAD and EDGI studies, leading genotyping data QC, and continues his research on eating disorders as a part-time PhD student at King's College London. And is the primary analyst for the PGCED freeze 3 data.",
    },
    {
      name: "Bhakti Nagpurkar",
      title: "Research Assistant",
      category: "Team",
      profileUrl: "https://www.linkedin.com/in/bhakti-nagpurkar?originalSubdomain=uk",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFT_o_jc4ecyw/profile-displayphoto-shrink_800_800/B4EZa5Tfe3HIAc-/0/1746865617534?e=1763596800&v=beta&t=SdbeWRFBO2EhDjrfLHGKN_deNt2JGmDs0V-lLzdD230",
      description: "",
    },
    {
      name: "Dr. Hyunah Lee",
      title: "Researcher/Bioinformatician",
      category: "Collaborator",
      profileUrl: "https://www.kcl.ac.uk/people/hyunah-lee",
      image: "https://www.kcl.ac.uk/newimages/person-profile/2022b/hyunah-lee-photo-mar-24.x4febdb79.jpg?w=160&h=174&crop=160,160,0,0&f=webp",
      description: "Dr. Lee is a neuroscientist and geneticist advancing understanding of how genetic variation shapes brain function and vulnerability to mental illness. She has led groundbreaking projects uncovering APOE-mediated mechanisms of neurogenesis in Alzheimer's disease and decoding the genetic architecture of depression, anxiety, and eating disorders in over 17,000 participants.",
    },
  ],
  microsoftFormUrl: "YOUR_MICROSOFT_FORM_URL_HERE",
};
