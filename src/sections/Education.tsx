export default function Education() {
  return (
    <div
      className="min-h-screen px-4 py-12 sm:px-8"
      style={{
        background: 'linear-gradient(135deg, #7da43e, #B0BEC5)',
      }}
    >
      <h1 className="mb-8 text-3xl font-bold text-center sm:text-4xl">Education</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* MSc. in Data Analytics */}
        <div className="p-4 shadow-md background-card sm:p-6 bg-opacity-80 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold sm:text-2xl">MSc. in Data Analytics</h2>
          <p className="text-sm sm:text-base">
            Dublin Business School, Dublin, Ireland • 2022 – 2023
          </p>
        </div>

        {/* Masters in Computer Applications */}
        <div className="p-4 shadow-md background-card sm:p-6 bg-opacity-80 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Masters in Computer Applications</h2>
          <p className="text-sm sm:text-base">
            Marian College Kuttikanam, Kerala, India • 2019 – 2021
          </p>
          <ul className="mt-3 space-y-1 text-sm list-disc list-inside sm:text-base">
            <li>Graduated with 8.1 GPA</li>
          </ul>
        </div>

        {/* Bachelors in Computer Applications */}
        <div className="p-4 shadow-md background-card sm:p-6 bg-opacity-80 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Bachelors in Computer Applications</h2>
          <p className="text-sm sm:text-base">
            MC Varghese College of Arts and Science, Kerala, India • 2016 – 2019
          </p>
          <ul className="mt-3 space-y-1 text-sm list-disc list-inside sm:text-base">
            <li>Graduated with 8.6 GPA</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
