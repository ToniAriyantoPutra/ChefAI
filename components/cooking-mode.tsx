"use client"

import { useState, useEffect } from "react"
import { Play, Pause, SkipForward, SkipBack, X, Volume2, VolumeX, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CookingModeProps {
  recipe: any
  onClose: () => void
}

export function CookingMode({ recipe, onClose }: CookingModeProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false)
            // Play notification sound or speak
            if (voiceEnabled) {
              speak("Timer selesai! Lanjut ke langkah berikutnya.")
            }
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timer, voiceEnabled])

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "id-ID"
      speechSynthesis.speak(utterance)
    }
  }

  const startTimer = (minutes: number) => {
    setTimer(minutes * 60)
    setIsTimerRunning(true)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const nextStep = () => {
    if (currentStep < recipe.steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
      setTimer(0)
      setIsTimerRunning(false)

      if (voiceEnabled) {
        const step = recipe.steps[currentStep + 1]
        speak(`Langkah ${step.step}. ${step.instruction}`)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
      setTimer(0)
      setIsTimerRunning(false)
    }
  }

  const currentStepData = recipe.steps[currentStep]
  const progress = ((currentStep + 1) / recipe.steps.length) * 100

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardContent className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>
                  Langkah {currentStep + 1} dari {recipe.steps.length}
                </span>
                <Badge variant="secondary">{Math.round(progress)}% selesai</Badge>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setVoiceEnabled(!voiceEnabled)}>
                {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </Button>
              <Button variant="outline" size="icon" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <Progress value={progress} className="mb-8 h-2" />

          {/* Current Step */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                {currentStepData.step}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">Langkah {currentStepData.step}</h2>
                {currentStepData.time && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Timer className="w-4 h-4" />
                    <span>{currentStepData.time} menit</span>
                    {currentStepData.temperature && (
                      <>
                        <span>•</span>
                        <span>{currentStepData.temperature}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg mb-4">
              <p className="text-lg leading-relaxed">{currentStepData.instruction}</p>
            </div>

            {currentStepData.tips && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 text-lg">💡</span>
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Tips:</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">{currentStepData.tips}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Timer Section */}
          {currentStepData.time && (
            <div className="mb-8 p-6 bg-white dark:bg-slate-800 border rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-mono font-bold mb-4">{formatTime(timer)}</div>
                <div className="flex justify-center gap-2">
                  <Button
                    onClick={() => startTimer(currentStepData.time)}
                    disabled={isTimerRunning}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    <Timer className="w-4 h-4 mr-2" />
                    Mulai Timer ({currentStepData.time}m)
                  </Button>
                  <Button variant="outline" onClick={() => setIsTimerRunning(!isTimerRunning)} disabled={timer === 0}>
                    {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
              <SkipBack className="w-4 h-4 mr-2" />
              Sebelumnya
            </Button>

            <div className="flex items-center gap-2">
              {recipe.steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep ? "bg-orange-500" : index < currentStep ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextStep}
              disabled={currentStep === recipe.steps.length - 1}
              className="bg-orange-500 hover:bg-orange-600"
            >
              {currentStep === recipe.steps.length - 1 ? "Selesai" : "Selanjutnya"}
              <SkipForward className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
