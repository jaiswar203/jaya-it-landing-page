'use client'

import { useEffect, useState, useRef } from 'react'

interface ClickAnimation {
  id: string
  x: number
  y: number
  timestamp: number
}

interface BinaryDigit {
  id: string
  digit: string
  x: number
  y: number
  deltaX: number
  deltaY: number
  clickId: string
}

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [clickAnimations, setClickAnimations] = useState<ClickAnimation[]>([])
  const [binaryDigits, setBinaryDigits] = useState<BinaryDigit[]>([])
  const animationFrameRef = useRef<number | null>(null)

  // Smooth lerp function
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  // Generate random binary digits
  const generateBinaryDigits = (clickX: number, clickY: number, clickId: string) => {
    const digits: BinaryDigit[] = []
    const digitCount = 8 + Math.floor(Math.random() * 4) // 8-12 digits
    
    for (let i = 0; i < digitCount; i++) {
      const angle = (Math.PI * 2 * i) / digitCount + Math.random() * 0.5
      const speed = 50 + Math.random() * 100
      
      digits.push({
        id: `${clickId}-${i}`,
        digit: Math.random() > 0.5 ? '1' : '0',
        x: clickX,
        y: clickY,
        deltaX: Math.cos(angle) * speed,
        deltaY: Math.sin(angle) * speed,
        clickId
      })
    }
    
    return digits
  }

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleClick = (e: MouseEvent) => {
      const clickId = Date.now().toString()
      const newClick: ClickAnimation = {
        id: clickId,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      }

      setClickAnimations(prev => [...prev, newClick])
      setBinaryDigits(prev => [...prev, ...generateBinaryDigits(e.clientX, e.clientY, clickId)])

      // Remove click animation after duration
      setTimeout(() => {
        setClickAnimations(prev => prev.filter(click => click.id !== clickId))
        setBinaryDigits(prev => prev.filter(digit => digit.clickId !== clickId))
      }, 1500)
    }

    // Smooth animation loop
    const animate = () => {
      setPosition(prev => ({
        x: lerp(prev.x, targetPosition.x, 0.15),
        y: lerp(prev.y, targetPosition.y, 0.15)
      }))
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('click', handleClick)

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate)
    
    // Show cursor follower on initial load
    setIsVisible(true)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('click', handleClick)
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [targetPosition.x, targetPosition.y])

  return (
    <>
      {/* Cursor follower circle */}
      <div
        className={`fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-primary transition-opacity duration-200 ${
          isVisible ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          left: position.x - 12,
          top: position.y - 12,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Binary digits animations */}
      {binaryDigits.map((digit) => (
        <div
          key={digit.id}
          className="fixed pointer-events-none z-40 text-primary font-mono font-bold text-sm animate-pulse select-none"
          style={{
            left: digit.x,
            top: digit.y,
            transform: 'translate3d(0, 0, 0)',
            animation: `binaryDisperse 1.5s ease-out forwards`,
            '--delta-x': `${digit.deltaX}px`,
            '--delta-y': `${digit.deltaY}px`,
          } as React.CSSProperties & { '--delta-x': string; '--delta-y': string }}
        >
          {digit.digit}
        </div>
      ))}

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes binaryDisperse {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--delta-x), var(--delta-y)) scale(0.5);
          }
        }
      `}</style>
    </>
  )
} 