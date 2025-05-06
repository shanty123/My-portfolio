export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen py-12 "  style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #FFEB3B, #B0BEC5)', // Yellow and Ash gradient
      animation: 'gradientAnimation 10s ease infinite', // Adding animation to the gradient
    }}>
      <div className="w-full max-w-md p-8 shadow-lg background-card rounded-xl">
        <h1 className="mb-6 text-3xl font-semibold text-center">Contact Information</h1>

        <div className="space-y-6 text-sm sm:text-base">
          {/* Email */}
          <div className="flex justify-between">
            <p className="font-semibold whitespace-nowrap">📧 Email</p>
            <a
              href="mailto:shantyshabu01@gmail.com"
              className="text-right text-orange-500 hover:text-yellow-700 hover:underline"
            >
              shantyshabu01@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex justify-between">
            <p className="font-semibold whitespace-nowrap">📞 Phone</p>
            <a
              href="tel:+353894824929"
              className="text-right text-orange-500 hover:text-yellow-700 hover:underline"
            >
              +353 894 824 929
            </a>
          </div>

          {/* Location */}
          <div className="flex justify-between">
            <p className="font-semibold whitespace-nowrap">📍 Location</p>
            <p className="text-right">
              31 Mariavilla Woods,<br />
              Mariavilla, Maynooth,<br />
              Kildare, W23 Y01X
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
