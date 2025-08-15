import React, { useState } from "react";

// Notus-React / Tailwind component
// Usage: import ProductDetailPage from './ProductDetailPage';
// <ProductDetailPage />
// Or pass images prop: <ProductDetailPage images={{top: 'url', bottom: 'url', left: 'url', right: 'url'}} />

export default function ItemView({
  images = {
    top: "https://images.unsplash.com/photo-1602524813755-7dd5f6a3d973?auto=format&fit=crop&w=1200&q=80",
    bottom:
      "https://images.unsplash.com/photo-1571689937755-6b4b4b3f7e5c?auto=format&fit=crop&w=1200&q=80",
    left:
      "https://images.unsplash.com/photo-1553456558-aff63285bdd2?auto=format&fit=crop&w=1200&q=80",
    right:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  title = "Classic Sneakers",
  sku = "SKU-12345",
  price = "₱2,450",
  rating = 4.6,
  reviews = 128,
  description = "A clean, comfortable pair of sneakers with breathable mesh and cushioned sole. Great for everyday wear.",
}) {
  const views = ["top", "left", "right", "bottom"];
  const [active, setActive] = useState("top");
  const [zoom, setZoom] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">

          {/* Left: Gallery */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">

            {/* Thumbnails (vertical on large screens) */}
            <div className="flex lg:flex-col gap-3 items-center">
              {views.map((v) => (
                <button
                  key={v}
                  onClick={() => setActive(v)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${active === v ? 'border-blue-500' : 'border-transparent'} shadow-sm bg-gray-100 flex-shrink-0`}
                  aria-label={`View ${v}`}
                >
                  <img src={images[v]} alt={`${v} view`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 w-full relative group">
              <div
                onMouseEnter={() => setZoom(true)}
                onMouseLeave={() => setZoom(false)}
                className="w-full h-96 md:h-[560px] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center"
              >
                {/* simple zoom transform on hover */}
                <img
                  src={images[active]}
                  alt={`${active} view large`}
                  className={`transition-transform duration-300 ease-out object-contain max-h-full max-w-full ${zoom ? 'scale-110' : 'scale-100'}`}
                />
              </div>

              {/* mini captions */}
              <div className="absolute bottom-3 left-3 bg-black bg-opacity-40 text-white text-sm px-3 py-1 rounded-full">
                {active.toUpperCase()} VIEW
              </div>
            </div>

          </div>

          {/* Right: Product info */}
          <div className="p-4 md:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
              <p className="text-sm text-gray-500 mt-1">{sku}</p>

              <div className="mt-4 flex items-center gap-4">
                <div className="text-2xl font-semibold text-rose-600">{price}</div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 inline-block mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                  <span className="font-medium">{rating}</span>
                  <span className="text-gray-400">({reviews} reviews)</span>
                </div>
              </div>

              <p className="mt-6 text-gray-700 leading-relaxed">{description}</p>

              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-600">
                <div>
                  <dt className="font-medium">Material</dt>
                  <dd>Mesh & rubber</dd>
                </div>
                <div>
                  <dt className="font-medium">Available</dt>
                  <dd>In stock</dd>
                </div>
                <div>
                  <dt className="font-medium">Color</dt>
                  <dd>White / Blue</dd>
                </div>
                <div>
                  <dt className="font-medium">Shipping</dt>
                  <dd>Free on orders ₱3,000+</dd>
                </div>
              </dl>
            </div>

            {/* Actions area - note: NO Add to Cart button per request. But keep variant selector */}
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <label className="text-sm text-gray-600">Size</label>
                <div className="flex gap-2">
                  {['6', '7', '8', '9', '10'].map((s) => (
                    <button key={s} className="px-3 py-2 border rounded-lg text-sm bg-white shadow-sm">{s}</button>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-500">No cart button included — this page is for display only.</div>
            </div>

          </div>

        </div>

        {/* Related suggestions / small gallery */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">More angles</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {views.map((v) => (
              <div key={v} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img src={images[v]} alt={`more ${v}`} className="w-full h-40 object-cover" />
                <div className="p-3 text-sm text-gray-600">{v.toUpperCase()} view</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
