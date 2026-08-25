import { useCallback, useEffect, useState } from "react"
import { Contact } from "../components/Contact"
import { Explorations } from "../components/Explorations"
import { Hero } from "../components/Hero"
import { Journal } from "../components/Journal"
import { LoadingScreen } from "../components/LoadingScreen"
import { Resume } from "../components/Resume"
import { SelectedWorks } from "../components/SelectedWorks"
import { Stats } from "../components/Stats"

export default function Index() {
  const [isLoading, setIsLoading] = useState(true)
  const handleComplete = useCallback(() => {
    setIsLoading(false)
    window.dispatchEvent(new Event("portfolio:ready"))
  }, [])

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleComplete} />}
      <main>
        <Hero />
        <SelectedWorks />
        <Journal />
        <Explorations />
        <Stats />
        <Resume />
        <Contact />
      </main>
    </>
  )
}
