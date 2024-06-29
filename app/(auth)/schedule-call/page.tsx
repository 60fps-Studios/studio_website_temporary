import Link from 'next/link'
 import Head from 'next/head'
export const metadata = {
  title: 'Schedule a Call - Talent',
  description: 'Page description',
}

export default function ScheduleCall() {
  return (
    <>
      <div>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Description of your page for search engines" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Your Open Graph Title" />
        <meta property="og:description" content="Description for Open Graph" />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com/page-url" />
        <meta property="og:type" content="website" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Twitter Card Title" />
        <meta name="twitter:description" content="Description for Twitter" />
        <meta name="twitter:image" content="https://example.com/twitter-image.jpg" />

        {/* Schema.org JSON-LD metadata */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Article Headline",
              "description": "Article Description",
              "image": "https://example.com/article-image.jpg",
              "author": {
                "@type": "Person",
                "name": "Author Name"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Publisher Name",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://example.com/publisher-logo.jpg",
                  "width": 600,
                  "height": 60
                }
              },
              "datePublished": "2024-06-28",
              "dateModified": "2024-06-28",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://example.com/article-url"
              }
            }
          `}
        </script>
      </Head>
      <div className="mb-10">
        <h1 className="h2 font-cabinet-grotesk">Get matched to qualified Talents</h1>
      </div>

      <div className="text-xl font-cabinet-grotesk font-bold text-gray-900 mb-4">Let's get started.</div>

      {/* Form */}
      <form>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="company">
              Company Name <span className="text-pink-500">*</span>
            </label>
            <input id="company" className="form-input w-full" type="text" placeholder="E.g., Acme Inc." required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full Name <span className="text-pink-500">*</span>
            </label>
            <input id="name" className="form-input w-full" type="text" placeholder="Mario Rossi" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email <span className="text-pink-500">*</span>
            </label>
            <input id="email" className="form-input w-full" type="email" placeholder="mariorossi@company.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="role">
              What role would you like to hire? <span className="text-pink-500">*</span>
            </label>
            <select id="role" className="form-select w-full" required>
              <option>Developers</option>
              <option>Designers</option>
              <option>Project Managers</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2 mt-6">
          <span className="text-gray-500 text-sm">
            <span className="hidden sm:inline">Already a client? </span>
            <Link className="font-medium text-blue-600 hover:underline" href="/signin">
              Sign In
            </Link>
          </span>
          <button className="btn inline-flex items-center text-white bg-gray-900 hover:bg-gray-800 group">
            Schedule A Call
            <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="8">
                <path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z" />
              </svg>
            </span>
          </button>
        </div>
      </form>    
      </div>
    </>
  )
}