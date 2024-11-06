"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, "İsminiz en az 2 karakter olmalıdır"),
  email: z.string().email("Lütfen geçerli bir e-posta adresi giriniz"),
  message: z.string().min(10, "Mesajınız en az 10 karakter olmalıdır"),
})

const ContactSection = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Form gönderme işlemi burada yapılacak
    console.log(data)
  }

  return (
    <section id="contact" className="wrapper section-padding">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-4">İletişime Geçin</h2>
        <p className="text-lg text-muted-foreground">
          Projeleriniz veya işbirliği fırsatları için benimle iletişime geçebilirsiniz.
        </p>
      </div>
      
      <div className="mx-auto mt-8 max-w-2xl">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              placeholder="Adınız Soyadınız"
              {...form.register("name")}
              className="py-6"
            />
            {form.formState.errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="E-posta Adresiniz"
              {...form.register("email")}
              className="py-6"
            />
            {form.formState.errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          
          <div>
            <Textarea
              placeholder="Mesajınızı buraya yazabilirsiniz..."
              rows={5}
              {...form.register("message")}
              className="resize-none"
            />
            {form.formState.errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>
          
          <Button type="submit" className="w-full py-6 text-lg font-medium">
            Mesaj Gönder
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection