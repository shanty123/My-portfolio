export default function Education() {
    return (
      <div className="min-h-screen px-8 py-12 "  style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #FFEB3B, #B0BEC5)', // Yellow and Ash gradient
        animation: 'gradientAnimation 10s ease infinite', // Adding animation to the gradient
      }}>
        <h1 className="mb-8 text-4xl font-bold text-center">Education</h1>
  
        <div className="max-w-3xl mx-auto space-y-6" >
          
          <div className="p-6 shadow rounded-xl background-card">
            <h2 className="mb-2 text-2xl font-semibold">Msc. in Data Analytics</h2>
            <p >Dublin Buisness School,Dublin,Ireland • 2022 – 2023</p>
          </div>

          <div className="p-6 shadow rounded-xl background-card">
            <h2 className="mb-2 text-2xl font-semibold">Masters in Computer Applications</h2>
            <p >Marian College Kuttikanam,Kerala,India • 2019 – 2021</p>
            <ul className="mt-3 list-disc list-inside">
              <li>Graduated with 8.1 GPA</li>
             
            </ul>
          </div>
          <div className="p-6 shadow rounded-xl background-card">
            <h2 className="mb-2 text-2xl font-semibold">Bachelors in Computer Applications</h2>
            <p >MC Varghese college of arts and science,Kerala,India • 2016 – 2019</p>
            <ul className="mt-3 list-disc list-inside">
              <li>Graduated with 8.6 GPA</li>
             
            </ul>
          </div>
        </div>
      </div>
    )
  }
  