"use client"

import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Privacy Policy Content */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="text-center mb-16">
                <h2 className="font-headline text-zul-grey-dark mb-4">
                  Privacy Policy
                </h2>
                <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
              </div>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                At Zul Energy, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-headline text-2xl text-zul-green mb-4">
                Information We Collect
              </h3>
              <p className="font-body text-zul-grey-dark mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="font-body text-zul-grey-dark mb-4 leading-relaxed list-disc pl-6 space-y-2">
                <li>Fill out forms on our website</li>
                <li>Subscribe to our newsletters</li>
                <li>Contact us for support</li>
                <li>Engage with our services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-headline text-2xl text-zul-green mb-4">
                How We Use Your Information
              </h3>
              <p className="font-body text-zul-grey-dark mb-4 leading-relaxed">
                We use the collected information for various purposes:
              </p>
              <ul className="font-body text-zul-grey-dark mb-4 leading-relaxed list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-headline text-2xl text-zul-green mb-4">
                Data Security
              </h3>
              <p className="font-body text-zul-grey-dark mb-4 leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-headline text-2xl text-zul-green mb-4">
                Your Rights
              </h3>
              <p className="font-body text-zul-grey-dark mb-4 leading-relaxed">
                Under GDPR, you have the following rights:
              </p>
              <ul className="font-body text-zul-grey-dark mb-4 leading-relaxed list-disc pl-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure of your data</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-headline text-2xl text-zul-green mb-4">
                Changes to This Policy
              </h3>
              <p className="font-body text-zul-grey-dark mb-4 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-zul-green">
              <p className="font-body text-sm text-zul-grey-dark">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
