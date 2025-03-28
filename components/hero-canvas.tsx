"use client"

import { useEffect, useRef } from "react"

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Matrix rain effect
    class Symbol {
      x: number
      y: number
      fontSize: number
      text: string
      canvasHeight: number

      constructor(x: number, y: number, fontSize: number, canvasHeight: number) {
        this.x = x
        this.y = y
        this.fontSize = fontSize
        this.canvasHeight = canvasHeight
        this.text = ""
        this.setRandomText()
      }

      setRandomText() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/?[]{}|=+-*&^%$#@!~"
        this.text = characters.charAt(Math.floor(Math.random() * characters.length))
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvasHeight)
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)") // Primary blue
        gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.8)") // Purple
        gradient.addColorStop(1, "rgba(59, 130, 246, 0.8)") // Primary blue

        ctx.fillStyle = gradient
        ctx.font = `${this.fontSize}px JetBrains Mono`
        ctx.fillText(this.text, this.x, this.y)
      }

      update() {
        if (this.y > this.canvasHeight && Math.random() > 0.98) {
          this.y = 0
        } else {
          this.y += this.fontSize
        }

        if (Math.random() > 0.9) {
          this.setRandomText()
        }
      }
    }

    class MatrixRain {
      symbols: Symbol[]
      fontSize: number
      columns: number

      constructor(fontSize: number) {
        this.fontSize = fontSize
        this.symbols = []
        this.columns = Math.floor(canvas.width / this.fontSize)
        this.initialize()
      }

      initialize() {
        for (let i = 0; i < this.columns; i++) {
          const x = i * this.fontSize
          const y = Math.random() * canvas.height
          this.symbols.push(new Symbol(x, y, this.fontSize, canvas.height))
        }
      }

      resize(width: number, height: number) {
        this.columns = Math.floor(width / this.fontSize)

        // Adjust symbols array
        if (this.columns > this.symbols.length) {
          // Add more symbols
          for (let i = this.symbols.length; i < this.columns; i++) {
            const x = i * this.fontSize
            const y = Math.random() * height
            this.symbols.push(new Symbol(x, y, this.fontSize, height))
          }
        } else if (this.columns < this.symbols.length) {
          // Remove excess symbols
          this.symbols = this.symbols.slice(0, this.columns)
        }

        // Update all symbols with new canvas height
        this.symbols.forEach((symbol) => {
          symbol.canvasHeight = height
        })
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        this.symbols.forEach((symbol) => {
          symbol.draw(ctx)
          symbol.update()
        })
      }
    }

    // Initialize matrix rain
    const fontSize = 16
    const matrixRain = new MatrixRain(fontSize)

    // Animation loop
    let animationFrameId: number
    let lastTime = 0
    const fps = 15 // Lower FPS for better performance and more authentic matrix look

    const animate = (timeStamp: number) => {
      const deltaTime = timeStamp - lastTime

      if (deltaTime > 1000 / fps) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw background gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, "#000000")
        gradient.addColorStop(1, "#0f172a")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw matrix rain
        matrixRain.draw(ctx)

        lastTime = timeStamp
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    // Handle resize
    const handleResize = () => {
      setCanvasDimensions()
      matrixRain.resize(canvas.width, canvas.height)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

