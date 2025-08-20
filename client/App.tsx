import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import { Layout } from "./components/Layout";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { BookmarksProvider } from "./contexts/BookmarksContext";
import { SystemSettingsProvider } from "./contexts/SystemSettingsContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import MobileOptimizer from "./components/MobileOptimizer";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Accounts from "./pages/Accounts";
import Stocks from "./pages/Stocks";
import Reservations from "./pages/Reservations";
import Treatments from "./pages/Treatments";
import Staff from "./pages/Staff";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import Reports from "./pages/Reports";
import CustomerSupport from "./pages/CustomerSupport";
import PaymentMethods from "./pages/PaymentMethods";
import Peripherals from "./pages/Peripherals";
import PatientDetail from "./pages/PatientDetail";
import LandingPage from "./pages/LandingPage";
import Community from "./pages/Community";
import Jobs from "./pages/Jobs";
import JobsSimple from "./pages/JobsSimple";
import PlatformAdmin from "./pages/PlatformAdmin";
import Auth from "./pages/Auth";
import PatientMarketplace from "./pages/PatientMarketplace";
import DentalSupplyMarket from "./pages/DentalSupplyMarket";
import DentalSupplyMarketResponsive from "./pages/DentalSupplyMarketResponsive";
import StoreLayout from "./components/StoreLayout";
import MarketplaceAdmin from "./pages/MarketplaceAdmin";
import SuperAdminSettings from "./pages/SuperAdminSettings";
import AdminUsers from "./pages/AdminUsers";
import AdminSettings from "./pages/AdminSettings";
import Messages from "./pages/Messages";
import BrandDetail from "./pages/BrandDetail";
import AllProducts from "./pages/AllProducts";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Students from "./pages/Students";
import Trending from "./pages/Trending";
import Featured from "./pages/Featured";
import Offers from "./pages/Offers";
import Suppliers from "./pages/Suppliers";
import Brands from "./pages/Brands";
import CategoryProducts from "./pages/CategoryProducts";
import SupplierProfile from "./pages/SupplierProfile";
import UserDashboard from "./pages/UserDashboard";
import ProductDetail from "./pages/ProductDetail";
import AllCategories from "./pages/AllCategories";
import CommunityJobsAdmin from "./pages/CommunityJobsAdmin";
import CommunityGroups from "./pages/CommunityGroups";
import CommunityExperts from "./pages/CommunityExperts";
import CommunityEvents from "./pages/CommunityEvents";
import Education from "./pages/Education";
import Models3D from "./pages/Models3D";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import AIDiagnosis from "./pages/AIDiagnosis";
import SmartChat from "./pages/SmartChat";
import PhotoAnalysis from "./pages/PhotoAnalysis";
import CategoriesNew from "./pages/CategoriesNew";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import AppWithUnifiedHeader from "./components/AppWithUnifiedHeader";
import ClinicBooking from "./pages/ClinicBooking";
import ModernAppointmentBooking from "./pages/ModernAppointmentBooking";
import SimplifiedAppointmentBooking from "./pages/SimplifiedAppointmentBooking";
import IntegratedDentistProfile from "./pages/IntegratedDentistProfile";
import CommunityEducationHub from "./pages/CommunityEducationHub";
import ModernMedicalServices from "./pages/ModernMedicalServices";
import BookingShowcase from "./components/BookingShowcase";
import ClinicAdmin from "./pages/ClinicAdmin";
import AdvancedClinicManagement from "./pages/AdvancedClinicManagement";
import Notifications from "./pages/Notifications";
import UnifiedNotifications from "./pages/UnifiedNotifications";
import Emergency from "./pages/Emergency";
import UnifiedMedicalServices from "./pages/UnifiedMedicalServices";
import About from "./pages/About";
import PatientLandingPage from "./pages/PatientLandingPage";
import AdminArticles from "./pages/AdminArticles";
import EnhancedTestPage from "./pages/EnhancedTestPage";
import EnhancedClinicDashboard from "./pages/EnhancedClinicDashboard";
import PatientDetailsPage from "./pages/PatientDetailsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <I18nProvider>
        <CartProvider>
          <FavoritesProvider>
            <BookmarksProvider>
              <SystemSettingsProvider>
                <MobileOptimizer>
                  <Toaster />
                  <Sonner />
                  <BrowserRouter>
                    <NavigationProvider>
                      <ScrollToTop />
                      <AppWithUnifiedHeader>
                        <Routes>
                          {/* Public Routes */}
                          <Route path="/" element={<LandingPage />} />
                          <Route path="/landing" element={<LandingPage />} />
                          <Route
                            path="/patient-landing"
                            element={<PatientLandingPage />}
                          />
                          <Route
                            path="/community"
                            element={<CommunityEducationHub />}
                          />
                          <Route
                            path="/community-old"
                            element={<Community />}
                          />
                          <Route
                            path="/community/groups"
                            element={<CommunityGroups />}
                          />
                          <Route
                            path="/community/experts"
                            element={<CommunityExperts />}
                          />
                          <Route
                            path="/community/events"
                            element={<CommunityEvents />}
                          />
                          <Route path="/education" element={<Education />} />
                          <Route
                            path="/education/models"
                            element={<Models3D />}
                          />
                          <Route path="/jobs" element={<JobsSimple />} />
                          <Route path="/jobs-old" element={<Jobs />} />
                          <Route
                            path="/marketplace"
                            element={<UnifiedMedicalServices />}
                          />
                          <Route path="/articles" element={<Articles />} />
                          <Route
                            path="/articles/:id"
                            element={<ArticleDetail />}
                          />
                          <Route
                            path="/admin/articles"
                            element={<AdminArticles />}
                          />
                          <Route
                            path="/ai-diagnosis"
                            element={<AIDiagnosis />}
                          />
                          <Route path="/smart-chat" element={<SmartChat />} />
                          <Route
                            path="/photo-analysis"
                            element={<PhotoAnalysis />}
                          />
                          {/* Store Routes with Unified Layout */}
                          <Route
                            path="/dental-supply/*"
                            element={<StoreLayout />}
                          >
                            <Route
                              index
                              element={<DentalSupplyMarketResponsive />}
                            />
                            <Route
                              path="categories"
                              element={<AllCategories />}
                            />
                            <Route path="trending" element={<Trending />} />
                            <Route path="featured" element={<Featured />} />
                            <Route path="offers" element={<Offers />} />
                            <Route path="flash-deals" element={<Offers />} />
                            <Route path="new-arrivals" element={<Featured />} />
                            <Route path="products" element={<AllProducts />} />
                            <Route path="favorites" element={<Favorites />} />
                            <Route path="cart" element={<Cart />} />
                            <Route path="suppliers" element={<Suppliers />} />
                            <Route path="brands" element={<Brands />} />
                            <Route path="students" element={<Students />} />
                            <Route
                              path="product/:productId"
                              element={<ProductDetail />}
                            />
                            <Route
                              path="supplier/:supplierId"
                              element={<SupplierProfile />}
                            />
                            <Route
                              path="brand/:brandId"
                              element={<BrandDetail />}
                            />
                          </Route>

                          {/* Legacy Store Routes (for backward compatibility) */}
                          <Route
                            path="/dental-supply-old"
                            element={<DentalSupplyMarket />}
                          />
                          <Route path="/search" element={<Search />} />
                          <Route
                            path="/notifications"
                            element={<UnifiedNotifications />}
                          />
                          <Route
                            path="/notifications-old"
                            element={<Notifications />}
                          />
                          <Route
                            path="/messages"
                            element={<UnifiedNotifications />}
                          />
                          <Route path="/messages-old" element={<Messages />} />
                          <Route
                            path="/medical-services"
                            element={<ModernMedicalServices />}
                          />
                          <Route
                            path="/medical-services-old"
                            element={<UnifiedMedicalServices />}
                          />
                          <Route
                            path="/dentist-hub"
                            element={<IntegratedDentistProfile />}
                          />
                          <Route
                            path="/profile"
                            element={<IntegratedDentistProfile />}
                          />
                          <Route
                            path="/favorites"
                            element={<IntegratedDentistProfile />}
                          />
                          <Route
                            path="/settings"
                            element={<IntegratedDentistProfile />}
                          />
                          <Route path="/emergency" element={<Emergency />} />
                          <Route path="/about" element={<About />} />
                          <Route
                            path="/clinic/:clinicId/booking"
                            element={<ClinicBooking />}
                          />
                          <Route
                            path="/modern-booking/:clinicId?"
                            element={<ModernAppointmentBooking />}
                          />
                          <Route
                            path="/simplified-booking/:clinicId?"
                            element={<SimplifiedAppointmentBooking />}
                          />
                          <Route
                            path="/booking-systems"
                            element={<BookingShowcase />}
                          />
                          <Route
                            path="/clinic/admin"
                            element={<AdvancedClinicManagement />}
                          />
                          <Route
                            path="/clinic/:clinicId/dashboard"
                            element={<AdvancedClinicManagement />}
                          />
                          <Route
                            path="/clinic/admin/old"
                            element={<ClinicAdmin />}
                          />
                          <Route path="/products" element={<AllProducts />} />
                          <Route
                            path="/categories"
                            element={<CategoriesNew />}
                          />
                          <Route path="/favorites" element={<Favorites />} />
                          <Route path="/cart" element={<Cart />} />
                          <Route path="/students" element={<Students />} />
                          <Route path="/trending" element={<Trending />} />
                          <Route path="/featured" element={<Featured />} />
                          <Route path="/offers" element={<Offers />} />
                          <Route path="/suppliers" element={<Suppliers />} />
                          <Route
                            path="/suppliers/:supplierId"
                            element={<SupplierProfile />}
                          />
                          <Route path="/brands" element={<Brands />} />
                          <Route path="/brand/:id" element={<BrandDetail />} />
                          <Route
                            path="/categories/:categoryName"
                            element={<CategoryProducts />}
                          />
                          <Route
                            path="/categories/:categoryName/:subcategoryName"
                            element={<CategoryProducts />}
                          />
                          <Route
                            path="/product/:productId"
                            element={<ProductDetail />}
                          />
                          <Route path="/profile" element={<UserDashboard />} />
                          <Route
                            path="/dashboard"
                            element={<UserDashboard />}
                          />
                          <Route
                            path="/dentist/dashboard"
                            element={<UserDashboard />}
                          />
                          <Route
                            path="/supplier/dashboard"
                            element={<UserDashboard />}
                          />
                          <Route
                            path="/admin/dashboard"
                            element={<UserDashboard />}
                          />
                          <Route
                            path="/community-jobs-admin"
                            element={<CommunityJobsAdmin />}
                          />
                          <Route
                            path="/appointments"
                            element={
                              <Layout>
                                <Reservations />
                              </Layout>
                            }
                          />

                          {/* Auth Routes */}
                          <Route
                            path="/auth"
                            element={<Auth mode="signin" userType="dentist" />}
                          />
                          <Route
                            path="/signin"
                            element={<Auth mode="signin" userType="dentist" />}
                          />
                          <Route
                            path="/signup"
                            element={<Auth mode="signup" userType="dentist" />}
                          />
                          <Route
                            path="/signin/patient"
                            element={<Auth mode="signin" userType="patient" />}
                          />
                          <Route
                            path="/signup/patient"
                            element={<Auth mode="signup" userType="patient" />}
                          />
                          <Route
                            path="/signin/supplier"
                            element={<Auth mode="signin" userType="supplier" />}
                          />
                          <Route
                            path="/signup/supplier"
                            element={<Auth mode="signup" userType="supplier" />}
                          />
                          <Route
                            path="/signin/admin"
                            element={<Auth mode="signin" userType="admin" />}
                          />
                          <Route
                            path="/signup/admin"
                            element={<Auth mode="signup" userType="admin" />}
                          />

                          {/* Admin Routes */}
                          <Route
                            path="/admin"
                            element={<EnhancedClinicDashboard />}
                          />
                          <Route
                            path="/admin/dashboard"
                            element={<EnhancedClinicDashboard />}
                          />
                          <Route
                            path="/admin/dashboard/old"
                            element={
                              <Layout>
                                <Dashboard />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/patients"
                            element={
                              <Layout>
                                <Patients />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/patient/:id"
                            element={
                              <Layout>
                                <PatientDetail />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/patients/:id"
                            element={<PatientDetailsPage />}
                          />
                          <Route
                            path="/admin/patients/:id/old"
                            element={
                              <Layout>
                                <PatientDetail />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/accounts"
                            element={
                              <Layout>
                                <Accounts />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/stocks"
                            element={
                              <Layout>
                                <Stocks />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/reservations"
                            element={
                              <Layout>
                                <Reservations />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/treatments"
                            element={
                              <Layout>
                                <Treatments />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/staff"
                            element={
                              <Layout>
                                <Staff />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/sales"
                            element={
                              <Layout>
                                <Sales />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/purchases"
                            element={
                              <Layout>
                                <Purchases />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/reports"
                            element={
                              <Layout>
                                <Reports />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/customer-support"
                            element={
                              <Layout>
                                <CustomerSupport />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/support"
                            element={
                              <Layout>
                                <CustomerSupport />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/payment-methods"
                            element={
                              <Layout>
                                <PaymentMethods />
                              </Layout>
                            }
                          />
                          <Route
                            path="/admin/peripherals"
                            element={
                              <Layout>
                                <Peripherals />
                              </Layout>
                            }
                          />
                          <Route
                            path="/platform-admin"
                            element={<PlatformAdmin />}
                          />
                          <Route
                            path="/admin/platform-admin"
                            element={<PlatformAdmin />}
                          />
                          <Route
                            path="/marketplace-admin"
                            element={<MarketplaceAdmin />}
                          />
                          <Route
                            path="/super-admin"
                            element={<SuperAdminSettings />}
                          />
                          <Route path="/admin/users" element={<AdminUsers />} />
                          <Route
                            path="/admin/settings"
                            element={<AdminSettings />}
                          />
                          <Route path="/messages" element={<Messages />} />

                          {/* Patient Marketplace */}
                          <Route
                            path="/patient-marketplace"
                            element={<PatientMarketplace />}
                          />

                          {/* Enhanced Test Page */}
                          <Route
                            path="/test-enhanced"
                            element={<EnhancedTestPage />}
                          />

                          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </AppWithUnifiedHeader>
                    </NavigationProvider>
                  </BrowserRouter>
                </MobileOptimizer>
              </SystemSettingsProvider>
            </BookmarksProvider>
          </FavoritesProvider>
        </CartProvider>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
