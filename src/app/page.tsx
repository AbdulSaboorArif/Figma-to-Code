import Image from "next/image";
import Card from "@/app/component/Recent-post";

export default function Home() {
  return (
    <>
    <div className="bg-[#CFA6A61C]">
  <div className="max-w-[1030px] mx-auto">
    <div className="flex h-[500px] items-center justify-between">
      <div className="w-1/2 flex flex-col gap-5">
        <h1 className="text-4xl font-black">
          Hi, I am John, Creative Technologist
        </h1>
        <p className="text-base font-normal">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <button className="bg-[#F98585] px-5 py-2.5 text-white text-lg font-medium leading-6 cursor-pointer">
          Download Resume
        </button>
      </div>
      <div>
        <Image src="/image.png" width={300} height={300} alt="person" />
      </div>
    </div>
  </div>
</div>


<div className="bg-[#f4e2e2]">
  <div className="max-w-[1030px] mx-auto flex flex-col gap-6 py-10 px-4">
    {/* Header */}
    <div className="flex justify-between items-center">
      <h3 className="text-2xl font-medium text-gray-800">Recent Post</h3>
      <button className="text-[#F98585] text-lg font-medium hover:underline cursor-pointer">
        View All
      </button>
    </div>
    {/* Posts */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card />
      <Card />
    </div>
  </div>
</div>

<div className="bg-[#CFA6A61C]">
  <div className="max-w-[1030px] mx-auto flex flex-col gap-5 py-6">
    <h3 className="text-2xl font-medium text-center">Featured Works</h3>
    <div className="flex flex-wrap gap-[100px]">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-8 flex-col md:flex-row items-center">
          <Image
            src={`/Rectangle ${30 + i * 2}.png`}
            width={245}
            height={180}
            alt="image"
          />
          <div className="flex flex-col justify-around gap-4 md:w-4/5">
            <h2 className="text-2xl font-bold">Designing Dashboards</h2>
            <div className="flex items-center gap-5">
              <div className="bg-[#F98585] rounded-full px-7 py-1 text-white">
                <p>2020</p>
              </div>
              <p>Dashboard</p>
            </div>
            <p className="text-lg font-light">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="main-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <div>
                <Image
                  src="/image.png"
                  width={300}
                  height={300}
                  alt="person"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>Recent Post</h3>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="card-parent">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>Featured Works</h3>
            </div>
            
            <div className="card-parent">
                      <div className="card">
                      <Image
                        src="/Rectangle 30.png"
                        width={245}
                        height={180}
                        alt="image"
                      ></Image>

                      <div className="card-content">
                                <h2>Designing Dashboards</h2>
                                <div className="badge-parent">
                                    <div className="badge">
                                        <p>2020</p>
                                    </div>
                                    <p>Dashboard</p>
                                </div>
                                <p>
                                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                  amet sint. Velit officia consequat duis enim velit mollit.
                                  Exercitation veniam consequat sunt nostrud amet.
                                </p>
                              </div>
                      </div>

                    <div className="card">
                      <Image
                        src="/Rectangle 32.png"
                        width={245}
                        height={180}
                        alt="image"
                      ></Image>

                      <div className="card-content">
                        <h2>Designing Dashboards</h2>
                        <div className="badge-parent">
                            <div className="badge">
                                <p>2020</p>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                          amet sint. Velit officia consequat duis enim velit mollit.
                          Exercitation veniam consequat sunt nostrud amet.
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <Image
                        src="/Rectangle 34.png"
                        width={245}
                        height={180}
                        alt="image"
                      ></Image>

                      <div className="card-content">
                        <h2>Designing Dashboards</h2>
                        <div className="badge-parent">
                            <div className="badge">
                                <p>2020</p>
                            </div>
                            <p>Dashboard</p>
                        </div>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                          amet sint. Velit officia consequat duis enim velit mollit.
                          Exercitation veniam consequat sunt nostrud amet.
                        </p>
                      </div>
                    </div>
            </div>

          </div>
        </div>
      </div> */}
    </>
  );
}