import React from "react"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <p className="text-sm">© 2024 Portfolio. Tüm hakları saklıdır.</p>
        
        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank" className="hover:text-primary">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-primary">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="mailto:email@example.com" className="hover:text-primary">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer 