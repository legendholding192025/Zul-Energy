import React from 'react'

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
}

export default function SuccessPopup({ 
  isOpen, 
  onClose, 
  title = "Request Submitted Successfully!", 
  message = "Thank you for your interest. Our team will contact you shortly with the requested datasheet." 
}: SuccessPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full mx-auto transform transition-all duration-300 scale-100">
        <div className="p-6 text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="font-subhead text-zul-grey-dark mb-3">
            {title}
          </h3>

          {/* Message */}
          <p className="font-body text-zul-grey-dark text-sm mb-6 leading-relaxed">
            {message}
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-zul-yellow text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
