
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import { Card, Card2, Card3 } from './components/Card'
import Comparision from './components/Comparision'
import Products from './components/Products'
import Pricing from './components/Pricing'
import { InfiniteMovingCardsDemo } from './components/MovingCardsDemo'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className='h-[100%] flex flex-col items-center gap-[3rem] overflow-x-hidden'>

        <div className='w-[70%] m-auto flex flex-col items-center relative'>
          <Navbar />
        </div>

        <HeroSection />

        <Services />

        <div className='w-[100%] p-2 lg:w-[90%] flex flex-col gap-[1.5rem] items-center'>

          <h1 style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className="text-3xl px-2 w-[80%] lg:w-full  md:text-6xl font-bold text-center bg-clip-text text-transparent">
            Why Businesses Choose Us
          </h1>

          <div className='flex flex-col justify-center lg:flex-row lg:flex-wrap xl:flex-row xl:flex-nowrap w-[100%] m-auto items-center mb-4 gap-8 '>
            <Card2 />
            <Card3 />
            <Card />
          </div>



        </div>

        <Comparision />
        <Products />
        <Pricing />

        <div className='w-[100%] mt-2'>
          <h1 style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} className="text-4xl px-2 w-full w-full font-bold text-center bg-clip-text text-transparent">
            See What Our Clients Are Saying
          </h1>

          <InfiniteMovingCardsDemo />

        </div>

        <div className='flex justify-center items-center w-[100%]'>
          <Footer />
        </div>



      </div>
    </>
  )
}

const TableComponent = () => {
  const headers = ["Name", "Age", "Email", "Country"];
  const rows = [
    ["Alice", "25", "alice@example.com", "USA"],
    ["Bob", "30", "bob@example.com", "UK"],
    ["Charlie", "28", "charlie@example.com", "Canada"],
    ["Diana", "22", "diana@example.com", "Australia"],
    ["Ethan", "35", "ethan@example.com", "Germany"],
    ["Fiona", "27", "fiona@example.com", "India"],
  ];

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className=" px-4 py-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App
