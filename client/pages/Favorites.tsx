import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Star,
  Trash2,
  Package,
  ArrowRight,
  ArrowLeft,
  Search,
  Bell,
  Eye,
  Plus,
  BookOpen,
  Briefcase,
  Users,
  Store,
  MessageCircle,
  Calendar,
  Award,
  FileText,
  Video,
  Building,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ModernUnifiedHeader from "@/components/ModernUnifiedHeader";
import UltraModernBottomNav from "@/components/UltraModernBottomNav";
import { useBookmarks } from "@/contexts/BookmarksContext";
import { useNavigation } from "@/contexts/NavigationContext";

type SectionType = "marketplace" | "community" | "jobs" | "education" | "all";

// بيانات المفضلة للمتجر
const favoriteProducts = [
  {
    id: 1,
    name: "Pro Ⅱ Composite Resin",
    arabicName: "راتنج مركب برو 2",
    price: 385,
    originalPrice: 450,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    category: "مواد حشو",
    brand: "DentalTech",
    discount: 15,
    addedDate: "2024-01-15",
    section: "marketplace",
  },
  {
    id: 2,
    name: "X-ray Composite Resin GI",
    arabicName: "راتنج مركب للأشعة السينية",
    price: 24000,
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&h=300&fit=crop",
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    category: "مواد تشخيص",
    brand: "XrayTech",
    addedDate: "2024-01-10",
    section: "marketplace",
  },
];

// بيانات المفضلة للمجتمع
const favoriteCommunityItems = [
  {
    id: 3,
    title: "نهج ثوري لعلاج ج��ور الأسنان بدون ألم",
    excerpt:
      "اكتشف أحدث الت��نيات التي تجعل إجراءات قناة الجذر خالية من الألم تقريباً وتقلل وقت التعافي بنسبة 50%.",
    author: {
      name: "د. سارة أحمد",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      title: "أخصائي علاج العصب",
      verified: true,
      location: "بغداد، العراق",
    },
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=300&fit=crop",
    stats: {
      likes: 324,
      comments: 42,
      shares: 18,
      views: 2340,
      bookmarks: 89,
    },
    tags: ["علاج العصب", "تقنيات حديثة", "تسكين الألم"],
    type: "article",
    posted: "منذ 3 ساع��ت",
    addedDate: "2024-01-12",
    section: "community",
    featured: true,
  },
  {
    id: 4,
    title: "ما هي أفضل طريقة للتعامل مع قلق الأطفال من طبيب الأسنان؟",
    content:
      "أعمل كطبيب أسنان أطفال منذ 5 سنوات وما زلت أواجه تحديات مع الأطفال القلقين. هل لديكم تقنيات مجربة للتعامل مع هذه الحالات�� 🦷👶",
    author: {
      name: "د. أحمد محمد",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      title: "طبيب أسنان أطفال",
      verified: true,
      location: "البصرة، العراق",
    },
    stats: {
      likes: 156,
      comments: 89,
      shares: 12,
      views: 1567,
      bookmarks: 45,
    },
    tags: ["طب أسنان الأطفال", "علم النفس", "إدارة القلق"],
    type: "discussion",
    posted: "منذ 6 ساعات",
    addedDate: "2024-01-08",
    section: "community",
  },
  {
    id: 5,
    title: "حالة معقدة: زراعة أسنان متعددة مع ترقيع عظمي",
    excerpt:
      "مريض 45 عاماً فقد 6 أسنان أمامية في حادث. شاهد كيف استطعنا استعادة ابتسامته باستخدام تقنيات متقدمة.",
    author: {
      name: "د. فاطمة حسن",
      avatar:
        "https://images.unsplash.com/photo-1594824475386-67eb4d8b5f59?w=100&h=100&fit=crop&crop=face",
      title: "جراح فم وفكين",
      verified: true,
      location: "أربيل، العراق",
    },
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=300&fit=crop",
    stats: {
      likes: 445,
      comments: 67,
      shares: 34,
      views: 3421,
      bookmarks: 156,
    },
    tags: ["زراعة الأسنان", "ترقيع عظمي", "جراحة فم"],
    type: "case_study",
    posted: "منذ يوم واحد",
    addedDate: "2024-01-11",
    section: "community",
    featured: true,
  },
];

// بيانات المفضلة للوظائف
const favoriteJobs = [
  {
    id: 5,
    title: "طبيب أسنان عام - الرياض",
    company: "مجمع النخبة الطبي",
    location: "الرياض",
    salary: "15,000 - 20,000 ر.س",
    type: "دوام كامل",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
    posted: "منذ 3 أيام",
    applications: 23,
    addedDate: "2024-01-14",
    section: "jobs",
  },
  {
    id: 6,
    title: "أخصائي تقويم أسنان",
    company: "عيادة الابتسامة المشرقة",
    location: "جدة",
    salary: "18,000 - 25,000 ر.س",
    type: "دوام كامل",
    logo: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=100&h=100&fit=crop",
    posted: "منذ أسبوع",
    applications: 15,
    addedDate: "2024-01-09",
    section: "jobs",
  },
];

// ب����انات المفضلة للتعليم
const favoriteEducationItems = [
  {
    id: 7,
    title: "دورة زراعة الأسنان المتقدمة",
    instructor: "د. سالم الأحمد",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
    duration: "40 ساعة",
    students: 1250,
    rating: 4.9,
    price: "��جاني",
    type: "course",
    addedDate: "2024-01-11",
    section: "education",
  },
  {
    id: 8,
    title: "تقنيات التشخيص الحديثة",
    author: "د. نور�� القحطاني",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=200&fit=crop",
    views: 3420,
    likes: 245,
    type: "video",
    duration: "15:30",
    addedDate: "2024-01-07",
    section: "education",
  },
];

const sectionConfig = {
  marketplace: {
    title: "مفضلاتي - المتجر",
    icon: Store,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    description: "المنتجات والمعدات الطبية المفضلة لديك",
  },
  community: {
    title: "مفضلاتي - المجتمع",
    icon: Users,
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    description: "المقالات والمناقشات التي أعجبتك",
  },
  jobs: {
    title: "مفضلاتي - ال��ظائف",
    icon: Briefcase,
    color: "violet",
    gradient: "from-violet-500 to-purple-500",
    description: "فرص العمل التي تهمك",
  },
  education: {
    title: "مفضلاتي - التعليم",
    icon: BookOpen,
    color: "rose",
    gradient: "from-rose-500 to-pink-500",
    description: "المحتوى التعليمي والدورات المحفوظة",
  },
  all: {
    title: "جميع الم��ضلات",
    icon: Heart,
    color: "gray",
    gradient: "from-gray-500 to-gray-600",
    description: "كل العناصر المفضلة لديك",
  },
};

export default function Favorites() {
  const [searchParams] = useSearchParams();
  const { bookmarks, removeBookmark } = useBookmarks();
  const { state: navState, goBack, isComingFromSection } = useNavigation();

  // تحديد القسم تلقائياً حسب القسم الذي جاء منه المستخدم
  const [selectedSection, setSelectedSection] = useState<SectionType>(
    isComingFromSection("marketplace")
      ? "marketplace"
      : isComingFromSection("community")
        ? "community"
        : isComingFromSection("jobs")
          ? "jobs"
          : isComingFromSection("education")
            ? "education"
            : "all",
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const section = searchParams.get("section") as SectionType;
    if (section && sectionConfig[section]) {
      setSelectedSection(section);
    }
  }, [searchParams]);

  const getAllFavorites = () => {
    // Combine bookmarks from context with static data
    const contextBookmarks = bookmarks.map((bookmark) => ({
      ...bookmark,
      // Ensure compatibility with existing card components
      name: bookmark.title,
      arabicName: bookmark.title,
    }));

    return [
      ...favoriteProducts,
      ...contextBookmarks,
      ...favoriteJobs,
      ...favoriteEducationItems,
    ];
  };

  const getFilteredFavorites = () => {
    let items = getAllFavorites();

    if (selectedSection !== "all") {
      items = items.filter((item) => item.section === selectedSection);
    }

    if (searchTerm) {
      items = items.filter(
        (item) =>
          item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.arabicName?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return items;
  };

  const config = sectionConfig[selectedSection];
  const filteredItems = getFilteredFavorites();

  const ProductCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name || item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {item.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{item.discount}%
          </div>
        )}
        <button
          onClick={() => removeBookmark(item.id)}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          title="إزالة من المفضلة"
        >
          <Heart className="w-4 h-4 text-red-500 fill-current" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
          {item.arabicName || item.name}
        </h3>
        {item.name && item.arabicName && (
          <p className="text-sm text-gray-600 mb-2">{item.name}</p>
        )}

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{item.rating}</span>
          </div>
          <span className="text-sm text-gray-500">
            ({item.reviewCount} تقييم)
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {item.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {item.originalPrice} ر.س
              </span>
            )}
            <span className="text-lg font-bold text-blue-600">
              {item.price} ر.س
            </span>
          </div>
          <span
            className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              item.inStock
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600",
            )}
          >
            {item.inStock ? "متوفر" : "غير متوفر"}
          </span>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/product/${item.id}`}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium"
          >
            عرض التفاصيل
          </Link>
          <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const CommunityCard = ({ item }: { item: any }) => {
    const getTypeLabel = (type: string) => {
      switch (type) {
        case "article":
          return "مقال";
        case "discussion":
          return "م��اقش��";
        case "case_study":
          return "حالة";
        case "video":
          return "فيديو";
        default:
          return "منشور";
      }
    };

    const getTypeColor = (type: string) => {
      switch (type) {
        case "article":
          return "bg-blue-100 text-blue-600";
        case "discussion":
          return "bg-green-100 text-green-600";
        case "case_study":
          return "bg-purple-100 text-purple-600";
        case "video":
          return "bg-red-100 text-red-600";
        default:
          return "bg-gray-100 text-gray-600";
      }
    };

    return (
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Post Header */}
        <div className="p-4">
          <div className="flex items-start gap-3 mb-3">
            <img
              src={item.author?.avatar || item.image}
              alt={item.author?.name || item.title}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-gray-900 text-sm">
                  {item.author?.name || item.author}
                </h4>
                {item.author?.verified && (
                  <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
                )}
                {item.featured && (
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                )}
              </div>
              <p className="text-xs text-gray-600">
                {item.author?.title} • {item.posted}
              </p>
            </div>
            <span
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium",
                getTypeColor(item.type),
              )}
            >
              {getTypeLabel(item.type)}
            </span>
          </div>

          {/* Post Content */}
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
            {item.title}
          </h3>

          {(item.excerpt || item.content) && (
            <p className="text-sm text-gray-700 mb-3 line-clamp-2">
              {item.excerpt || item.content}
            </p>
          )}

          {/* Tags */}
          {item.tags && (
            <div className="flex flex-wrap gap-1 mb-3">
              {item.tags.slice(0, 3).map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Post Image */}
        {item.image && (
          <div className="px-4 mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Post Stats & Actions */}
        <div className="px-4 pb-4 border-t border-gray-100 pt-3">
          <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {item.stats?.views?.toLocaleString() || item.views || 0}
              </span>
              <span>{item.stats?.comments || item.comments || 0} تعليق</span>
              <span>{item.stats?.shares || item.shares || 0} مشاركة</span>
            </div>
            <span>{item.stats?.bookmarks || 0} مفضلة</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Heart className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors" />
                <span className="text-sm text-gray-700">
                  {item.stats?.likes || item.likes || 0}
                </span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                <MessageCircle className="w-4 h-4 text-gray-500 hover:text-blue-500 transition-colors" />
                <span className="text-sm text-gray-700">
                  {item.stats?.comments || item.comments || 0}
                </span>
              </button>
            </div>

            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Share2 className="w-4 h-4 text-gray-500 hover:text-purple-500 transition-colors" />
              </button>
              <button
                onClick={() => removeBookmark(item.id)}
                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                title="إزالة من المفضلة"
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const JobCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <img
              src={item.logo}
              alt={item.company}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.company}</p>
            </div>
          </div>
          <button
            onClick={() => removeBookmark(item.id)}
            className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
            title="إزالة من المفضلة"
          >
            <Heart className="w-4 h-4 fill-current" />
          </button>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span>{item.location}</span>
          <span>•</span>
          <span>{item.type}</span>
          <span>•</span>
          <span>{item.posted}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">
            {item.salary}
          </span>
          <Link
            to={`/jobs/${item.id}`}
            className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium"
          >
            عرض التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );

  const EducationCard = ({ item }: { item: any }) => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              item.type === "course"
                ? "bg-blue-100 text-blue-600"
                : "bg-purple-100 text-purple-600",
            )}
          >
            {item.type === "course" ? "دورة" : "فيديو"}
          </span>
        </div>
        <button
          onClick={() => removeBookmark(item.id)}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          title="إزالة من المفضلة"
        >
          <Heart className="w-4 h-4 text-red-500 fill-current" />
        </button>
        {item.duration && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
            {item.duration}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 mb-3">
          {item.instructor
            ? `بواسطة ${item.instructor}`
            : `بواسطة ${item.author}`}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          {item.students && <span>{item.students.toLocaleString()} طالب</span>}
          {item.views && <span>{item.views.toLocaleString()} مشاهدة</span>}
          {item.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{item.rating}</span>
            </div>
          )}
        </div>

        <Link
          to={
            item.type === "course"
              ? `/education/courses/${item.id}`
              : `/education/videos/${item.id}`
          }
          className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors text-center text-sm font-medium block"
        >
          {item.type === "course" ? "بدء الدورة" : "��شاهدة ال��يديو"}
        </Link>
      </div>
    </div>
  );

  const renderCard = (item: any) => {
    switch (item.section) {
      case "marketplace":
        return <ProductCard key={item.id} item={item} />;
      case "community":
        return <CommunityCard key={item.id} item={item} />;
      case "jobs":
        return <JobCard key={item.id} item={item} />;
      case "education":
        return <EducationCard key={item.id} item={item} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 with-floating-nav relative">
      <ModernUnifiedHeader
        hidden={true}
        currentSection="favorites"
        searchPlaceholder="ابحث في المفضلة والمحفوظات..."
      />

      <div className="p-4 lg:p-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {/* زر الرجوع */}
              {navState.previousSection !== "favorites" &&
                navState.navigationHistory.length > 1 && (
                  <button
                    onClick={goBack}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {navState.previousSection === "marketplace"
                        ? "المتجر"
                        : navState.previousSection === "community"
                          ? "المجتمع"
                          : navState.previousSection === "jobs"
                            ? "الوظائف"
                            : navState.previousSection === "education"
                              ? "التعليم"
                              : "رجوع"}
                    </span>
                  </button>
                )}

              <div
                className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center",
                  `bg-gradient-to-r ${config.gradient}`,
                )}
              >
                <config.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {config.title}
                </h1>
                <p className="text-gray-600 mt-1">{config.description}</p>
              </div>
            </div>

            {/* Section Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
              {Object.entries(sectionConfig).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setSelectedSection(key as SectionType)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                    selectedSection === key
                      ? `bg-gradient-to-r ${section.gradient} text-white`
                      : "bg-white text-gray-700 hover:bg-gray-100",
                  )}
                >
                  <section.icon className="w-4 h-4" />
                  {section.title.replace("مفضلاتي - ", "")}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="البحث في الم��ضلات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Content */}
          {filteredItems.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map(renderCard)}
            </div>
          ) : (
            <div className="text-center py-12">
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",
                  `bg-gradient-to-r ${config.gradient}`,
                )}
              >
                <config.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                لا توجد مفضلات في {config.title.replace("مفضلاتي - ", "")}
              </h3>
              <p className="text-gray-600 mb-6">
                ابدأ في إضافة العناصر لمفضلاتك لتراها هنا
              </p>
              <Link
                to={
                  selectedSection === "marketplace"
                    ? "/dental-supply"
                    : selectedSection === "community"
                      ? "/community"
                      : selectedSection === "jobs"
                        ? "/jobs"
                        : selectedSection === "education"
                          ? "/education"
                          : "/"
                }
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-colors",
                  `bg-gradient-to-r ${config.gradient} hover:opacity-90`,
                )}
              >
                <Plus className="w-5 h-5" />
                تصفح {config.title.replace("مفضلاتي - ", "")}
              </Link>
            </div>
          )}
        </div>
      </div>

      <UltraModernBottomNav />

      {/* Extra space for the new floating nav */}
      <div className="h-24 w-full"></div>
    </div>
  );
}
