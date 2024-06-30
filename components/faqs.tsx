export default function Faqs() {
  return (
    <section className="mt-28 min-h-screen">
      <div className="max-w-6xl lg:max-w-none lg:mx-8 mx-auto px-4 sm:px-6">
        <div className=" mx-8 md:mx-0 pb-12 md:pb-20 ">
          {/* Section header */}
          <div className=" mx-auto pb-10">
            <h2 className="text-5xl md:text-7xl font-extrabold font-poppins mb-16">Frequently asked questions</h2>
          </div>



          <div className=" md:flex ">
            <div className=" mx-auto space-y-6 md:w-1/2 md:mr-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-3xl font-poppins font-bold">What services do you specialize in?</h4>
                <p className="text-gray-500 text-2xl">
                  We specialize in a wide range of marketing services including branding, logo design, 3D/Product design, website design and development, content creation, social media marketing, search engine optimization (SEO), and pay-per-click (PPC) advertising. Our team of experts works closely with clients to develop customized strategies that drive results.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-3xl font-poppins font-bold">How do you approach the creative process?</h4>
                <p className="text-gray-500 text-2xl">
                  Our creative process begins with a deep dive into your business, industry, and target audience. We conduct thorough research to gain a comprehensive understanding of your unique needs and goals. From there, our team of designers and strategists collaborate to develop innovative concepts and ideas tailored specifically for your brand.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-3xl font-poppins font-bold">What is your pricing structure</h4>
                <p className="text-gray-500 text-2xl">
                  We understand that every client has different budgets and requirements. That's why we offer custom pricing based on the scope of each project. Our goal is to provide exceptional value and deliver a strong return on investment. We'll work with you to create a package that fits your needs and budget.
                </p>
              </div>

            </div>

            <div className=" mx-auto space-y-6 md:w-1/2">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-3xl font-poppins font-bold">How long will my project take?</h4>
                <p className="text-gray-500 text-2xl">
                  The timeline for a project can vary depending on its complexity and the deliverables involved. For example, a website design project typically takes 6-12 weeks from the initial meeting to launch, while a branding project can take 4-8 weeks to complete.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-3xl font-poppins font-bold">Do you offer ongoing support and maintenance?</h4>
                <p className="text-gray-500 text-2xl">
                  Absolutely. We believe in building long-term partnerships with our clients. Once a project is complete, we offer ongoing support and maintenance services to ensure your marketing efforts continue to be effective. This can include website updates, social media management, content creation, and performance tracking.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-3xl font-poppins font-bold">Can I work with you if I'm not located in your area?</h4>
                <p className="text-gray-500 text-2xl">
                  Yes, we work with clients across the globe. We use a variety of communication tools like email, phone, video conferencing, and project management software to collaborate effectively, regardless of location. Our team is experienced in managing remote projects and ensuring a smooth, seamless process.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
