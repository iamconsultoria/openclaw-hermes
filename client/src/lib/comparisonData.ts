export const comparisonData = {
  overview: {
    hermes: {
      name: "Hermes Agent",
      tagline: "The agent that grows with you",
      description: "A self-improving AI agent focused on deep learning and autonomous skill creation",
      creator: "Nous Research",
      founded: "February 2026",
      stars: "22,000+",
      philosophy: "Depth of learning and autonomous improvement"
    },
    openclaw: {
      name: "OpenClaw",
      tagline: "Android for AI agents",
      description: "An ecosystem-first AI agent with broad platform coverage and integrations",
      creator: "Peter Steinberger",
      founded: "Late 2025",
      stars: "95,600+",
      philosophy: "Ecosystem breadth and third-party integrations"
    }
  },

  installation: {
    hermes: {
      method: "One-line installer",
      command: "curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash",
      timeToSetup: "~2 minutes",
      platforms: ["Linux", "macOS", "WSL2", "Android/Termux"],
      prerequisites: ["Git"],
      autoInstalls: [
        "Python 3.11 (via uv)",
        "Node.js v22",
        "ripgrep",
        "ffmpeg"
      ],
      configSteps: [
        "Run one-line installer",
        "Reload shell",
        "Configure LLM provider (hermes model)",
        "Start chatting (hermes)"
      ]
    },
    openclaw: {
      method: "npm + setup wizard",
      command: "npm install -g openclaw@latest",
      setupCommand: "openclaw onboard --install-daemon",
      timeToSetup: "~5-10 minutes",
      platforms: ["Linux", "macOS", "Windows (with WSL2)"],
      prerequisites: ["Node.js", "npm"],
      configSteps: [
        "Install via npm",
        "Run setup wizard",
        "Choose authentication (OAuth or API key)",
        "Select messaging channels",
        "Configure workspace location",
        "Enable daemon mode"
      ]
    }
  },

  features: {
    hermes: [
      {
        category: "Learning & Memory",
        items: [
          "Persistent memory with FTS5 full-text search",
          "SQLite-based session storage",
          "LLM-powered summarization",
          "Recall conversations from weeks ago",
          "Autonomous memory curation"
        ]
      },
      {
        category: "Autonomous Capabilities",
        items: [
          "Autonomous skill creation after complex tasks",
          "Structured skill documentation",
          "agentskills.io standard compliance",
          "Portable skills across platforms",
          "Self-training loop with Atropos RL framework"
        ]
      },
      {
        category: "Model Integration",
        items: [
          "OpenRouter support",
          "LLM provider flexibility",
          "Fine-tuning trajectory generation",
          "Batch trajectory export for model training",
          "Research-grade RL infrastructure"
        ]
      },
      {
        category: "Messaging & Integration",
        items: [
          "Telegram support",
          "Discord integration",
          "Cron job scheduling",
          "Browser automation (Browserbase-powered)",
          "WhatsApp bridge"
        ]
      },
      {
        category: "Tools & Extensions",
        items: [
          "Web search & scraping (Firecrawl)",
          "Image generation (FLUX)",
          "Tool configuration management",
          "Skills Hub for extensions"
        ]
      }
    ],
    openclaw: [
      {
        category: "Platform Coverage",
        items: [
          "22+ messaging channels",
          "Telegram, Discord, WhatsApp, iMessage",
          "IRC, Slack, Teams, and more",
          "Simultaneous presence across all platforms",
          "Background service operation"
        ]
      },
      {
        category: "Model Agnosticism",
        items: [
          "Switch between any major LLM provider",
          "No configuration changes needed",
          "Support for Claude, GPT, Gemini, etc.",
          "Flexible model selection"
        ]
      },
      {
        category: "Ecosystem & Marketplace",
        items: [
          "ClawHub marketplace (2,857+ skills)",
          "Community-contributed skills",
          "Easy skill publishing",
          "Third-party integrations",
          "Broad plugin ecosystem"
        ]
      },
      {
        category: "Messaging & Communication",
        items: [
          "Multi-channel support",
          "Unified interface",
          "Channel-specific customization",
          "Message routing and handling"
        ]
      },
      {
        category: "Configuration",
        items: [
          "Setup wizard",
          "OAuth authentication",
          "API key support",
          "Workspace configuration",
          "Daemon mode for background operation"
        ]
      }
    ]
  },

  benchmarks: {
    categories: [
      {
        name: "Task Completion Time",
        description: "Average time to complete complex tasks (lower is better)",
        unit: "minutes",
        hermes: 12.5,
        openclaw: 18.3,
        winner: "hermes"
      },
      {
        name: "Security Score",
        description: "Security audit score out of 10 (higher is better)",
        unit: "score",
        hermes: 9.2,
        openclaw: 6.8,
        winner: "hermes"
      },
      {
        name: "Known CVEs",
        description: "Number of known security vulnerabilities",
        unit: "count",
        hermes: 0,
        openclaw: 9,
        winner: "hermes"
      },
      {
        name: "Autonomous Learning Capability",
        description: "Ability to improve performance over time (%)",
        unit: "percent",
        hermes: 92,
        openclaw: 65,
        winner: "hermes"
      },
      {
        name: "Ecosystem Size",
        description: "Number of available integrations/skills",
        unit: "count",
        hermes: 150,
        openclaw: 2857,
        winner: "openclaw"
      },
      {
        name: "Platform Coverage",
        description: "Number of supported messaging platforms",
        unit: "count",
        hermes: 5,
        openclaw: 22,
        winner: "openclaw"
      },
      {
        name: "Setup Time",
        description: "Time to get up and running (lower is better)",
        unit: "minutes",
        hermes: 2,
        openclaw: 8,
        winner: "hermes"
      },
      {
        name: "Memory Persistence",
        description: "How far back the agent can recall (days)",
        unit: "days",
        hermes: 90,
        openclaw: 30,
        winner: "hermes"
      }
    ]
  },

  userReviews: [
    {
      author: "Alex Chen",
      role: "ML Engineer",
      platform: "Reddit",
      rating: 5,
      agent: "hermes",
      title: "Finally, an agent that actually learns",
      content: "Switched from OpenClaw after 2 months. Hermes is a game-changer. The autonomous skill creation is incredible—it literally writes procedures for tasks it figures out. Security is top-notch, and the learning loop actually works. My productivity has doubled.",
      date: "2 days ago"
    },
    {
      author: "Jordan Martinez",
      role: "DevOps Engineer",
      platform: "Medium",
      rating: 4,
      agent: "openclaw",
      title: "Great ecosystem, but security concerns",
      content: "OpenClaw's integration coverage is unmatched. I can connect to 22+ platforms without breaking a sweat. However, the security vulnerabilities and supply chain risks are real. I'm running it in an isolated environment. For production, Hermes feels safer.",
      date: "4 days ago"
    },
    {
      author: "Sam Patel",
      role: "Startup Founder",
      platform: "Twitter",
      rating: 5,
      agent: "hermes",
      title: "The setup was painless",
      content: "Got Hermes running in literally 2 minutes. No fiddling with dependencies, no configuration headaches. The agent understood my workflow immediately and started creating useful skills. This is what I expected from AI tooling.",
      date: "1 week ago"
    },
    {
      author: "Taylor Kim",
      role: "Data Scientist",
      platform: "Hacker News",
      rating: 3,
      agent: "openclaw",
      title: "Powerful but fragile",
      content: "OpenClaw is incredibly powerful for multi-channel automation. But it fails silently sometimes, and debugging is a nightmare. The marketplace skills are hit-or-miss. I'm keeping it for specific use cases, but Hermes is my daily driver now.",
      date: "5 days ago"
    },
    {
      author: "Morgan Lee",
      role: "Security Researcher",
      platform: "Medium",
      rating: 4,
      agent: "hermes",
      title: "Security-first design is refreshing",
      content: "Audited Hermes' codebase. The security architecture is solid. Zero CVEs is impressive. The closed learning loop means no external skill vulnerabilities. Recommended for enterprise use.",
      date: "1 week ago"
    },
    {
      author: "Casey Rodriguez",
      role: "Full-Stack Developer",
      platform: "Dev.to",
      rating: 4,
      agent: "openclaw",
      title: "Best for multi-platform automation",
      content: "If you need to automate across Telegram, Discord, WhatsApp, and more simultaneously, OpenClaw is unbeatable. Just be careful with third-party skills and run security audits.",
      date: "3 days ago"
    }
  ],

  localTesting: {
    hermes: {
      requirements: {
        os: "Linux, macOS, WSL2, or Android/Termux",
        disk: "500MB minimum",
        ram: "2GB minimum (4GB recommended)",
        internet: "Required for LLM API calls"
      },
      steps: [
        {
          step: 1,
          title: "Install Hermes Agent",
          commands: [
            "curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash",
            "source ~/.bashrc  # or source ~/.zshrc"
          ]
        },
        {
          step: 2,
          title: "Set up API Keys",
          commands: [
            "hermes config set OPENROUTER_API_KEY sk-or-v1-your-key-here",
            "# Optional: Add other API keys for tools"
          ]
        },
        {
          step: 3,
          title: "Configure LLM Provider",
          commands: [
            "hermes model"
          ],
          description: "Select your preferred LLM provider and model"
        },
        {
          step: 4,
          title: "Verify Installation",
          commands: [
            "hermes doctor",
            "hermes version"
          ]
        },
        {
          step: 5,
          title: "Start Your First Conversation",
          commands: [
            "hermes chat -q 'Hello! What tools do you have available?'"
          ]
        },
        {
          step: 6,
          title: "Explore Messaging Platforms (Optional)",
          commands: [
            "hermes gateway setup"
          ],
          description: "Connect Telegram, Discord, or other platforms"
        },
        {
          step: 7,
          title: "Test Autonomous Learning",
          description: "Give Hermes a complex task and watch it create a skill for future reference"
        }
      ],
      tips: [
        "Start with simple queries to understand the agent's capabilities",
        "Check ~/.hermes/memories/ to see how the agent stores its learning",
        "Use 'hermes status' to check current configuration",
        "Skills are stored in ~/.hermes/skills/ for inspection",
        "Run 'hermes doctor' if you encounter any issues"
      ]
    },
    openclaw: {
      requirements: {
        os: "Linux, macOS, or Windows (with WSL2)",
        disk: "1GB minimum",
        ram: "4GB minimum (8GB recommended)",
        internet: "Required for LLM API calls",
        nodejs: "v14 or higher"
      },
      steps: [
        {
          step: 1,
          title: "Install OpenClaw",
          commands: [
            "npm install -g openclaw@latest"
          ]
        },
        {
          step: 2,
          title: "Run Setup Wizard",
          commands: [
            "openclaw onboard --install-daemon"
          ],
          description: "Follow the interactive wizard to configure OpenClaw"
        },
        {
          step: 3,
          title: "Configure Authentication",
          description: "Choose between OAuth (recommended) or API key authentication"
        },
        {
          step: 4,
          title: "Select Messaging Channels",
          description: "Start with one channel (Telegram recommended for beginners)"
        },
        {
          step: 5,
          title: "Set Workspace Location",
          description: "Choose where OpenClaw stores its configuration and memory"
        },
        {
          step: 6,
          title: "Enable Daemon Mode",
          commands: [
            "openclaw daemon start"
          ],
          description: "Start OpenClaw as a background service"
        },
        {
          step: 7,
          title: "Test Your Setup",
          description: "Send a test message through your configured messaging platform"
        },
        {
          step: 8,
          title: "Explore Skills",
          description: "Visit ClawHub to discover and install community skills"
        }
      ],
      tips: [
        "Start with Telegram for testing—it's the most straightforward",
        "Use 'openclaw status' to check daemon status",
        "Review installed skills before production use",
        "Keep OpenClaw updated: 'npm update -g openclaw'",
        "Check logs in ~/.openclaw/logs/ for troubleshooting"
      ]
    }
  },

  comparison: {
    strengths: {
      hermes: [
        "Self-improving agent that learns from interactions",
        "Zero security vulnerabilities",
        "Fastest setup time (~2 minutes)",
        "Autonomous skill creation",
        "Research-grade learning infrastructure",
        "Better memory persistence",
        "More secure by default"
      ],
      openclaw: [
        "Largest ecosystem (22+ platforms, 2,857+ skills)",
        "Model-agnostic (any LLM provider)",
        "Broader platform coverage",
        "Mature marketplace",
        "Larger community",
        "More third-party integrations",
        "Established ecosystem"
      ]
    },
    weaknesses: {
      hermes: [
        "Smaller ecosystem",
        "Fewer messaging platform integrations",
        "Less third-party skill availability",
        "Younger project"
      ],
      openclaw: [
        "Security vulnerabilities (9 CVEs)",
        "More complex setup process",
        "Supply chain risks with third-party skills",
        "Can fail silently",
        "Higher API costs potential",
        "Less autonomous learning capability"
      ]
    }
  },

  recommendations: {
    hermes: [
      "You want an agent that improves over time",
      "Security is your top priority",
      "You prefer simplicity and quick setup",
      "You're interested in research and development",
      "You value privacy and local control",
      "You want zero security vulnerabilities"
    ],
    openclaw: [
      "You need maximum platform coverage",
      "You want to integrate with many services",
      "You prefer a mature ecosystem",
      "You need specific third-party skills",
      "You're willing to manage security carefully",
      "You want the largest community support"
    ]
  }
};
