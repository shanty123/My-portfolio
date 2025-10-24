export default function Contact() {
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 py-12"
      style={{
        background: 'linear-gradient(135deg, #7da43e, #B0BEC5)',
      }}
    >
      <div className="w-full max-w-md p-6 shadow-lg background-card sm:p-8 bg-opacity-80 rounded-xl">
        <h1 className="mb-6 text-2xl font-semibold text-center sm:text-3xl">Contact Information</h1>

        <div className="space-y-4 text-sm sm:text-base">
          {/* Email */}
          <div className="flex flex-wrap items-start gap-2">
            <span className="font-semibold whitespace-nowrap">📧 Email:</span>
            <a
              href="mailto:shantyshabu01@gmail.com"
              className="text-yellow-700 break-words hover:text-orange-600 hover:underline"
            >
              shantyshabu01@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-wrap items-start gap-2">
            <span className="font-semibold whitespace-nowrap">📞 Phone:</span>
            <a
              href="tel:+353894824929"
              className="text-yellow-700 break-words hover:text-orange-600 hover:underline"
            >
              +353 894 824 929
            </a>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2">
            <span className="font-semibold whitespace-nowrap">📍 Location:</span>
            <span className="not-italic break-words">
              45 Priory Quay, Priory Lane, New Ross, Wexford, Y34HT22
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
