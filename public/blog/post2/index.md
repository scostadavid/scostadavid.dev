---
title: "DeepSeek and Ollama: Running LLMs locally with the power of your GPU"
date: "2025-01-29"
description: "Running powerful AI models like DeepSeek locally has never been easier, thanks to Ollama. Whether you're a developer, researcher, or AI enthusiast, this guide will guide you through the steps to get started and help you choose the right DeepSeek model for your needs."
author: "David Costa"
cover: "./cover.webp"
---

The AI and LLMs development universe is shifting rapidly. Just last week, Nvidia, the powerhouse behind AI hardware saw its stock going down, Why you ask? Because the world is realizing that you don’t need to rely on massive cloud infrastructure or expensive GPUs to harness the power of AI.

Deepseek, the new model deveolped by the chinese DeepSeek
Inc offered an alternative to models already consolidated in the market.

But let's forget the volatility of the stock market and learn how we can run a local instance of Deepseek in our machines step by step.

<br/>

--- 

<br/>

## Step 1: Install Ollama
<br/>

First, you will need to install [Ollama](https://ollama.com/download) on your machine. Open your terminal and run the following command:

<br/>

```bash
$ curl -fsSL https://ollama.com/install.sh | sh
```

<br/>

This script will set up Ollama on your system. But what is Ollama David?

Basically, Ollama is an open-source tool that runs large language models (LLMs) directly on a local machine using the power of your GPU.

<br/>

--- 

<br/>

## Step 2: Verify the Installation

Once installed, check if Ollama is working by running:
```bash
$ ollama
```

If you see a response, ollama was installed successfully.

<br/>

---

<br/>

## Step 3: Choose Your DeepSeek Model

<br/>

Ollama supports multiple versions of DeepSeek. The two main models available are:

1. [DeepSeek-R1](https://ollama.com/library/deepseek-r1)
 - Parameters: 7B (7 billion parameters).
 - Best for: Beginners, lightweight tasks, and users with limited hardware.
 - Use cases: Simple text generation, basic coding assistance, and experimentation.
 - Hardware requirements: Can run on CPUs or low-end GPUs.

2. [DeepSeek-V3](https://ollama.com/library/deepseek-v3)
 - Parameters: 70B (70 billion parameters).
 - Best for: Advanced users, complex tasks, and professional use cases.
 - Use cases: Advanced coding, research, creative writing, and large-scale data analysis.
 - Hardware requirements: Requires a high-end GPU for optimal performance.

<br/>

### What Are Parameters?

<br/>

Parameters are the building blocks of AI models. They determine how much knowledge and complexity the model can handle. Here’s a quick breakdown:

- 7B (7 billion parameters): Smaller models like DeepSeek-R1 are faster and require less computational power. They’re great for basic tasks and experimentation.

- 70B (70 billion parameters): Larger models like DeepSeek-V3 are more powerful and capable of handling complex tasks with higher accuracy. However, they require more resources to run.

<br/>

---

<br/>

## Step 4: Run Your Chosen Model

<br/>

Once you’ve decided on a model, you can run it using Ollama. For example:

<br/>

- To run DeepSeek-R1:
```bash
$ ollama run deepseek-r1
```

<br/>

- To run DeepSeek-V3:
```bash 
$ ollama run deepseek-v3
```

<br/>

---

<br/>

## Step 5: Start Experimenting!

<br/>

Now that your model is running, you can use it for:

<br/>

- Coding assistance: Generate code snippets or debug errors.
- Creative writing: Write stories, poems, or scripts.
- Research: Analyze data or generate insights.
- Experiment with parameters: Adjust the model’s settings to optimize performance for your specific use case. Ollama has a lot of models to explore.

<br/>

--- 

<br/>

## Conclusion

<br/>

Whether you’re a beginner or an advanced user, running DeepSeek locally with Ollama opens up a world of possibilities. Start with DeepSeek-R1 for lightweight tasks or go all-in with DeepSeek-V3 for advanced projects.