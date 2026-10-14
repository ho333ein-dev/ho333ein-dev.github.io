import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './lib/cart.jsx';
import { Header, Footer, CartDrawer, ToTop } from './components/layout/Chrome.jsx';
import HomePage from './pages/HomePage.jsx';
import { CategoryPage, HubPage, BrandPage, BrandIndexPage, SearchPage, AllProductsPage } from './pages/Catalog.jsx';
import ProductPage from './pages/ProductPage.jsx';
import { BlogIndexPage, BlogPostPage, SoftwarePage, SoftwareDetailPage, PriceListPage } from './pages/Editorial.jsx';
import {
  AboutPage, ContactPage, InstallmentPage, DealershipPage, CartPage, AccountPage, NotFoundPage,
} from './pages/Static.jsx';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname, search]);
  return null;
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      {/* BASE_URL mirrors vite.config.js `base`. On GitHub Pages a project site
          lives under /<repo>/ , so the router must strip that prefix or every
          in-app link would resolve one level too high. */}
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header onOpenCart={() => setCartOpen(true)} />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/cctv-camera" element={<HubPage />} />
              <Route path="/burglar-alarm" element={<HubPage />} />
              <Route path="/fire-alarm-system" element={<HubPage />} />
              <Route path="/solar-panel-mashhad" element={<HubPage />} />

              <Route path="/shop" element={<AllProductsPage />} />
              <Route path="/shop/*" element={<CategoryPage />} />

              <Route path="/product/:slug" element={<ProductPage />} />

              <Route path="/brand" element={<BrandIndexPage />} />
              <Route path="/brand/:slug" element={<BrandPage />} />

              <Route path="/blog" element={<BlogIndexPage />} />
              <Route path="/blog/category/:slug" element={<BlogIndexPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              <Route path="/software" element={<SoftwarePage />} />
              <Route path="/software/:slug" element={<SoftwareDetailPage />} />

              <Route path="/price-list" element={<PriceListPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/installment-purchase" element={<InstallmentPage />} />
              <Route path="/request-for-dealership" element={<DealershipPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
          <ToTop />
        </div>
      </Router>
    </CartProvider>
  );
}

/* Only render a hub page for known hub slugs; otherwise fall through to 404. */
function HubPageGate() {
  return <HubPage />;
}
