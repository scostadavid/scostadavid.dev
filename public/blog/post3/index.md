---
title: "Managing your containers lazily with lazydocker"
date: "2025-02-05"
description: "Learn how to manage your containers lazily with lazydocker the tui for your docker"
author: "David Costa"
cover: "./cover.webp"
---

If you work with Docker, you know that managing containers, images, and volumes can be a complex task filled with hard to remember commands. As someone who loves working with CLIs and terminal tools, I've always been drawn to Terminal User Interfaces (TUIs) for their blend of features and aesthetics. That's where **LazyDocker** comes in, a tool that caught my attention by its features and terminal interface. In this post, we will explore what LazyDocker is, how to install it and how to make the most of this tool.

<br/>

---

<br/>

## What is LazyDocker?

**LazyDocker** is a terminal based interface for managing Docker containers, images, volumes, and networks. It was created to be a visual and user-friendly alternative to the traditional Docker CLI (Command Line Interface). With it, you can perform operations like starting, stopping, rebuilding, and removing containers easily, without needing to memorize complex commands.

### Key Features:
- Real time visualization of containers, images, and volumes.
- Quick access to container logs and metrics (its so cool).
- Simplified operations with keyboard shortcuts.

<br/>

---

<br/>

## Why Use LazyDocker?

If you've ever gotten lost in Docker commands or spent time trying to remember the correct syntax for a specific operation, LazyDocker is the solution. Here are some advantages of using this tool:

1. **Time saving:**  
   With a visual interface, you can perform complex operations with just a few clicks or keyboard shortcuts.

2. **Ease of use:**  
   No more memorizing long and complex commands. Everything is presented clearly and organized.

3. **Real time monitoring:**  
   Track logs, metrics, and container statuses without leaving the terminal.

4. **Open source and free:**  
   LazyDocker is an open-source tool, meaning you can use it for free and even contribute to its development.

<br/>

---

<br/>

## How to Install LazyDocker?

Installing LazyDocker is simple and can be done in different ways. Let's look at the two main methods:

### 1. Installation via script (Linux/macOS):

<br/>

```bash
curl https://raw.githubusercontent.com/jesseduffield/lazydocker/master/scripts/install_update_linux.sh | bash
```

<br/>

This will download and install LazyDocker in the ~/.local/bin directory.

<br/>

Now you can add an alias to your .zshrc or .bashrc file to make it easier to use.

<br/>

```bash
echo "alias lazydocker='~/.local/bin/lazydocker'" >> ~/.bashrc
```

<br/>

Now you can just type `lazydocker` in your terminal to open the LazyDocker interface.

<br/>


### 2. Installation via Homebrew (macOS):

<br/>

```bash
brew install lazydocker
```

<br/>

This will install LazyDocker in the /usr/local/bin directory.

<br/>

---

<br/>

## Tips & Bits

Now that you've installed LazyDocker, here are some tips to make the most of this tool:

1. **Use keyboard shortcuts:**  
   LazyDocker is packed with shortcuts that make navigation and command execution easier. Some of the key ones are:
   - `Enter`: Access menus and options
   - `Space`: Select containers or images
   - `Q`: Quit the program
   - `D`: Remove a container or image

<br/>

2. **Monitor logs and metrics:**  
   Click on a container to view its logs in real-time. This is especially useful for debugging and monitoring how that bad configured container is messing with your hardware.

<br/>

3. **Customize the interface:**  
   LazyDocker allows you to customize the interface according to your preferences. Explore the settings to adjust colors, layouts, and behaviors.

<br/>

## Conclusion

After using LazyDocker for a while, i can say it's been a cool experience in my Docker workflow. I'm excited to keep exploring more features and shortcuts that LazyDocker offers, and I strongly recommend giving it a try if you work with Docker regularly like me.

