"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    window.location.href = "/cookies"
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gaming-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Este sitio utiliza cookies para mejorar tu experiencia.
            <Link href="/cookies" className="underline ml-1">
              Más información
            </Link>
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={rejectCookies} variant="outline" size="sm" className="text-gaming-900">
            Rechazar
          </Button>
          <Button onClick={acceptCookies} size="sm" className="bg-brand-600 hover:bg-brand-700">
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  )
}
