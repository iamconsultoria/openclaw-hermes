# Hermes Agent vs OpenClaw - Research Notes

## Key Differences

### Hermes Agent
- **Focus**: Depth of learning, autonomous skill creation, self-improvement
- **Architecture**: Closed learning loop with persistent memory, autonomous skill creation, self-training
- **Learning**: Generates thousands of tool-calling trajectories for fine-tuning smaller models
- **Memory**: FTS5 full-text search over SQLite with LLM-powered summarization
- **Skills**: Can write structured skill documents after complex tasks
- **GitHub Stars**: ~22,000 (as of early April 2026)
- **Installation**: One-line installer, ~2 minutes setup
- **Platforms**: Linux, macOS, WSL2, Android/Termux
- **Security**: Zero CVEs reported
- **Approach**: "The agent that grows with you"

### OpenClaw
- **Focus**: Ecosystem breadth, reach, third-party integrations
- **Architecture**: Gateway-centric assistant with broad platform coverage
- **Integrations**: 22+ messaging channels (iMessage, IRC, Telegram, Discord, WhatsApp, etc.)
- **Marketplace**: ClawHub with 2,857+ skills (though has security concerns)
- **GitHub Stars**: ~95,600+ (much larger community)
- **Installation**: npm install, setup wizard
- **Model Agnostic**: Switches between any major LLM provider without configuration
- **Security**: 9 CVEs, supply chain attack history, security concerns with untrusted skills
- **Approach**: "Android for AI agents" - ecosystem-first

## Installation Comparison

### Hermes Agent
```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```
- Automatic dependency detection
- Handles Python, Node.js, ripgrep, ffmpeg installation
- Termux-aware installer for Android
- WSL2 support for Windows

### OpenClaw
```bash
npm install -g openclaw@latest
openclaw onboard --install-daemon
```
- Setup wizard for configuration
- Daemon mode for background operation
- OAuth or API key authentication

## Features Comparison

### Hermes Agent
- Persistent memory with full-text search
- Autonomous skill creation
- Self-training loop (Atropos integration)
- Portable skills (agentskills.io standard)
- Research-grade RL infrastructure
- Messaging: Telegram, Discord, cron support
- Browser automation (Browserbase-powered)
- WhatsApp bridge

### OpenClaw
- 22+ messaging channels
- ClawHub marketplace for skills
- Model agnostic (any LLM provider)
- Background service with persistent presence
- Broader ecosystem integration
- More third-party skill options

## Benchmarks & Performance

### Hermes Agent
- Self-improving skills cut task time by ~40%
- Zero CVEs
- 22,000 GitHub stars
- Smaller, more opinionated codebase
- Better security defaults

### OpenClaw
- Larger ecosystem (95,600+ stars)
- More integrations available
- 9 CVEs reported
- Security concerns with untrusted skills
- Supply chain attack history (2,857 skills audited)

## User Reviews Summary

### Positive Hermes Feedback
- Much easier to get up and running
- More secure out of the box
- More autonomous behavior
- Better for learning and self-improvement
- Cleaner architecture

### Positive OpenClaw Feedback
- More capabilities and integrations
- Broader ecosystem
- More third-party options
- Good for specific use cases

### Negative Hermes Feedback
- Smaller ecosystem
- Fewer integrations
- Less third-party support

### Negative OpenClaw Feedback
- Setup not beginner-friendly
- Security risks
- API costs can add up
- Can fail silently
- Unpredictable autonomous behavior
- Supply chain vulnerabilities

## Use Case Recommendations

**Choose Hermes Agent if you want:**
- Self-improving agent that learns from your interactions
- Security-first approach
- Smaller, more maintainable codebase
- Better for research and development
- Privacy-conscious setup

**Choose OpenClaw if you want:**
- Maximum integrations and ecosystem support
- Broad messaging platform coverage
- Flexibility with LLM providers
- Larger community and marketplace
- More third-party skills available
