"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { CONTACT_LINKS } from "@/lib/constants";
import type { ContactFormData, ContactLink } from "@/lib/types";
import SectionHeading from "@/components/ui/section-heading";

// Constants
const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// Components
const ContactLink = ({ link }: { link: ContactLink }) => {
  const baseClasses = "flex items-center gap-3 p-4 rounded-lg transition-all duration-300 border border-slate-200 w-64 hover:shadow-lg hover:scale-105";
  
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${link.shadowColor}`}
    >
      <div className={`${link.bgColor} p-3 rounded-full flex-shrink-0`}>
        <div className={link.iconColor}>{link.icon}</div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-slate-800 text-sm">{link.title}</p>
        <p className="text-slate-600 text-xs">{link.value}</p>
      </div>
    </a>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Reset form
      setFormData(INITIAL_FORM_DATA);

      // Show success message
      alert("Thank you for your message! I'll get back to you soon.");
    } catch (error) {
      console.error('Error sending message:', error);
      alert(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <Card>
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="text-xl sm:text-2xl text-center">Send Me a Message</CardTitle>
          <CardDescription className="text-center text-sm sm:text-base">
            I'd love to hear about your project. Fill out the form below and I'll get back to you soon.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                Subject *
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full text-sm sm:text-base"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full resize-none text-sm sm:text-base"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const ContactLinks = () => (
  <div className="max-w-8xl mx-auto">
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">Other Ways to Reach Me</h3>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      {CONTACT_LINKS.map((link, index) => (
        <ContactLink key={index} link={link} />
      ))}
    </div>
  </div>
);

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Let's discuss your next project" />

        <ContactForm />
      </div>

      <ContactLinks />
    </section>
  );
}
