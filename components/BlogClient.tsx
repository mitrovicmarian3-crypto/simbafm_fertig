"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Search,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Home,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';

// A highly polished, custom SVG component styled in the Google Maps brand colors
const GoogleMapsPin = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 inline-block font-sans">
    <ellipse cx="12" cy="21" rx="4" ry="1.5" fill="#A6A6A6" opacity="0.3" />
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
    <path d="M12 2C10.05 2 8.35 2.8 7.15 4.1L12 9V2z" fill="#4285F4" />
    <path d="M7.15 4.1C5.8 5.3 5 7.05 5 9c0 1.95.82 3.8 2.15 5.1L12 9 7.15 4.1z" fill="#34A853" />
    <path d="M12 22s7-7.75 7-13c0-1.95-.8-3.7-2.15-4.9L12 9v13z" fill="#FBBC05" />
    <circle cx="12" cy="9" r="3.5" fill="#FFFFFF" />
    <circle cx="12" cy="9" r="1.5" fill="#4285F4" />
  </svg>
);
import { CATEGORIES, ALL_BLOG_POSTS, POPULAR_ARTICLES, getAuthenticImage } from '@/app/blog/posts';

export function BlogClientContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Alle");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isUrlLoaded, setIsUrlLoaded] = useState<boolean>(false);
  const searchParams = useSearchParams();

  // 1. Initial load & reactive updates from URL search parameters (handles back button & navigation)
  useEffect(() => {
    const page = searchParams.get('page');
    const cat = searchParams.get('category');
    const q = searchParams.get('q');

    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory("Alle");
    }

    if (q) {
      setSearchQuery(q);
    } else {
      setSearchQuery("");
    }

    if (page) {
      setCurrentPage(parseInt(page, 10) || 1);
    } else {
      setCurrentPage(1);
    }
    setIsUrlLoaded(true);
  }, [searchParams]);

  // 2. Sync to URL search parameters on internal state changes
  useEffect(() => {
    if (isUrlLoaded && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('page', currentPage.toString());
      url.searchParams.set('category', selectedCategory);
      if (searchQuery) {
        url.searchParams.set('q', searchQuery);
      } else {
        url.searchParams.delete('q');
      }
      window.history.replaceState({}, '', url.toString());
    }
  }, [currentPage, selectedCategory, searchQuery, isUrlLoaded]);

  // Dynamic filter lists based on selected category and text search query
  const filteredPosts = useMemo(() => {
    return ALL_BLOG_POSTS.filter(post => {
      const matchesCategory = selectedCategory === "Alle" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (post.theme && post.theme.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured / Highlight Article selection (prominent on top left) -> default to "4-farben-system" or first filtered match
  const featuredPost = useMemo(() => {
    if (filteredPosts.length === 0) return null;
    const foundFeatured = filteredPosts.find(p => p.isFeatured);
    // If the default featured article matches filtered constraints, showcase it. Otherwise showcase first match.
    return foundFeatured && filteredPosts.some(p => p.id === foundFeatured.id) ? foundFeatured : filteredPosts[0];
  }, [filteredPosts]);

  // Remaining list items to display as small magazin teasers in the Grid
  const gridPosts = useMemo(() => {
    if (!featuredPost) return [];
    return filteredPosts.filter(p => p.id !== featuredPost.id);
  }, [filteredPosts, featuredPost]);

  // Pagination parameters
  const POSTS_PER_PAGE = 6;
  const totalGridPages = useMemo(() => {
    if (gridPosts.length === 0) return 1;
    return Math.ceil(gridPosts.length / POSTS_PER_PAGE);
  }, [gridPosts]);

  // Slice list items on active page
  const paginatedGridPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return gridPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [gridPosts, currentPage]);

  // Custom Icon Assignment for Categories
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Reinigung & Hygiene":
        return <Sparkles size={14} className="text-[#0052b4]" />;
      case "Gebäudepflege":
        return <Home size={14} className="text-[#0052b4]" />;
      case "Branchenlösungen":
        return <Briefcase size={14} className="text-[#0052b4]" />;
      case "Einblicke & Qualität":
        return <ShieldCheck size={14} className="text-[#0052b4]" />;
      default:
        return <BookOpen size={14} className="text-[#0052b4]" />;
    }
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans min-h-screen pt-24 pb-0 overflow-x-hidden relative">
      {/* Bottom Right ambient glow elements to match hero banner */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_80%_80%,rgba(240,249,255,0.6)_0%,rgba(255,255,255,0)_70%)] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D9EAFF]/20 rounded-full blur-3xl z-0 pointer-events-none" />
      
      {/* ========================================================== */}
      {/* 1. HERO BANNER - Elegant Editorial Look                   */}
      {/* ========================================================== */}
      <section className="relative w-full bg-white overflow-hidden pt-12 pb-6 md:pt-16 md:pb-8 border-b border-stone-100" id="hero">
        {/* Background Glow similar to Startseite Hero */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(240,249,255,0.7)_0%,rgba(255,255,255,0)_50%)] z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D9EAFF]/30 rounded-full blur-3xl z-0 pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
              
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0052b4] uppercase mb-4 block leading-none">
                UNSER BLOG
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-[46px] font-black text-[#003067] tracking-tight leading-[1.12] mb-5">
                Wissen, das Sauberkeit schafft.
              </h1>

              <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed mb-8">
                Fachwissen, Praxisbeispiele und Einblicke in unsere Arbeit. Bleiben Sie informiert über alles, was saubere und gesunde Arbeitsumgebungen ausmacht. Einblicke unseres etablierten Wiener Meisterbetriebs.
              </p>

              {/* Minimalist Editorial Style Search Line */}
              <div className="relative max-w-sm w-full border-b border-slate-300 focus-within:border-[#003067] transition-all py-1.5 flex items-center">
                <Search size={16} className="text-slate-400 mr-2.5 shrink-0" />
                <input 
                  type="text"
                  placeholder="Thema oder Schlagwort suchen..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-xs font-semibold focus:outline-none"
                />
                {searchQuery && (
                  <button 
                    onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
                    className="text-slate-400 hover:text-[#003067] p-1 select-none focus:outline-none"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

            </div>

            {/* Right Column Image Frame (Rectilinear, zero rounding, authentic picture) */}
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/11] bg-slate-50 border border-slate-150">
                <Image
                  src="/images/ueber-uns/team.webp"
                  alt="Simba Facility Management Team - Meisterbetrieb Wien"
                  fill
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 2. MAIN BLOG LAYOUT (8-COL Left Column, 4-COL Right Sidebar)*/}
      {/* ========================================================== */}
      <section className="relative pt-6 pb-10 md:pt-8 md:pb-12 bg-transparent z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT MAIN MODULES: FEATURED + GRID + PAGINATION */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              
              {/* FEATURED / HIGHLIGHT COMPONENT - Spans full width of left zone */}
              {currentPage === 1 && featuredPost && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#0052b4] uppercase">HIGHLIGHT ARTIKEL</span>
                    <div className="h-[1px] bg-slate-100 flex-1" />
                  </div>

                  <Link 
                    href={`/blog/${featuredPost.id}?page=${currentPage}&category=${encodeURIComponent(selectedCategory)}${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ''}`}
                    className="relative block group overflow-hidden border border-slate-200/60 bg-slate-900 transition-all cursor-pointer rounded-none aspect-[16/9] min-h-[320px] md:min-h-[440px]"
                  >
                    {/* Background authentic image */}
                    <Image 
                      src={getAuthenticImage(featuredPost.id, featuredPost.category)}
                      alt={featuredPost.title}
                      fill
                      className="object-cover opacity-75 group-hover:scale-[1.01] transition-transform duration-[1.2s] ease-out"
                      style={
                        featuredPost.id === "richtige-reinigungsfirma-finden"
                          ? { objectPosition: "center 75%" }
                          : featuredPost.id === "qualitaetskontrollen-reinigung"
                          ? { objectPosition: "center 75%" }
                          : featuredPost.id === "4-farben-system"
                          ? { objectPosition: "center 75%" }
                          : undefined
                      }
                      referrerPolicy="no-referrer"
                      priority
                      sizes="(max-width: 1024px) 100vw, 800px"
                    />
                    
                    {/* Dark gradient overlay bottom-to-top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15 z-10" />

                    {/* Left overlay textual blocks */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 flex flex-col items-start text-left">

                      <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#0052b4] mb-2 font-mono">
                        <span className="text-slate-300">{featuredPost.category}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-300">{featuredPost.date}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-300">{featuredPost.readingTime}</span>
                      </div>

                      <h2 className="text-xl md:text-3xl font-black text-white leading-tight tracking-tight mb-3 group-hover:text-slate-100 transition-colors line-clamp-2">
                        {featuredPost.title}
                      </h2>

                      <p className="text-slate-300 text-xs md:text-sm font-normal max-w-2xl leading-relaxed mb-6 line-clamp-2">
                        {featuredPost.subtitle || featuredPost.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase text-white tracking-[0.15em] border-b border-white/50 pb-0.5 group-hover:border-white transition-all">
                        ARTIKEL LESEN <ArrowRight size={12} />
                      </span>

                    </div>
                  </Link>
                </div>
              )}

              {/* TEASERS GRID MODULE */}
              <div className="space-y-8">
                
                {/* Section header title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-6">
                  <div className="space-y-1 text-left">
                    <h2 className="text-lg md:text-xl font-bold text-[#003067] uppercase tracking-wider">
                      {selectedCategory === "Alle" ? "Magazin & Ratgeber" : selectedCategory}
                    </h2>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Praxisnahe Tipps ({filteredPosts.length} Beiträge gefunden)
                    </p>
                  </div>
                  
                  {/* Clear filter indicator button */}
                  {(selectedCategory !== "Alle" || searchQuery !== "") && (
                    <button 
                      onClick={() => {
                        setSelectedCategory("Alle");
                        setSearchQuery("");
                        setCurrentPage(1);
                      }}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#0052b4] bg-[#0052b4]/5 hover:bg-[#0052b4]/10 rounded-none px-4 py-1.5 transition-all self-start uppercase tracking-wider"
                    >
                      Filter aufheben <X size={11} />
                    </button>
                  )}
                </div>

                {/* POST TEASERS GRID */}
                {paginatedGridPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 pt-4">
                    {paginatedGridPosts.map((post) => (
                      <article 
                        key={post.id}
                        className="group flex flex-col h-full bg-white transition-all text-left"
                      >
                        <Link href={`/blog/${post.id}?page=${currentPage}&category=${encodeURIComponent(selectedCategory)}${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ''}`} className="flex flex-col h-full">
                          
                          {/* Square Cut image frame */}
                          <div className="relative w-full aspect-[3/2] overflow-hidden bg-slate-50 mb-4 border border-slate-100">
                            <Image 
                              src={getAuthenticImage(post.id, post.category)}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                              style={
                                post.id === "richtige-reinigungsfirma-finden"
                                  ? { objectPosition: "center 75%" }
                                  : post.id === "qualitaetskontrollen-reinigung"
                                  ? { objectPosition: "center 75%" }
                                  : post.id === "4-farben-system"
                                  ? { objectPosition: "center 75%" }
                                  : undefined
                              }
                              referrerPolicy="no-referrer"
                              sizes="(max-width: 768px) 100vw, 250px"
                            />
                          </div>

                          {/* Post Meta info strings */}
                          <div className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-wider text-slate-400 mb-2">
                            <span className="text-[#0052b4]">{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>

                          {/* Post Big Bold Title */}
                          <h3 className="text-base font-bold text-[#003067] group-hover:text-[#0052b4] transition-colors leading-snug tracking-tight mb-2 line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Short Teaser abstract */}
                          <p className="text-slate-500 text-xs leading-relaxed font-normal mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Read Link */}
                          <div className="pt-2 border-t border-slate-100/60 mt-auto">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#003067] tracking-wider group-hover:text-[#0052b4] group-hover:translate-x-1 transition-all">
                              Artikel lesen <ArrowRight size={10} className="text-[#0052b4]" />
                            </span>
                          </div>

                        </Link>
                      </article>
                    ))}
                  </div>
                ) : (
                  // Empty search / filter placeholders
                  <div className="bg-stone-50/50 p-12 text-center border border-slate-100 flex flex-col items-center max-w-lg mx-auto rounded-none">
                    <BookOpen size={40} className="text-slate-300 mb-4" />
                    <h4 className="text-base font-bold text-[#003067] uppercase tracking-wide mb-2">Keine Einträge gefunden</h4>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6">
                      Leider konnten wir keine Beiträge finden, die Ihrem gewählten Schlagwort entsprechen. Suchen Sie nach einem anderen Thema oder setzen Sie die Suchkriterien zurück.
                    </p>
                    <button 
                      onClick={() => {
                        setSelectedCategory("Alle");
                        setSearchQuery("");
                        setCurrentPage(1);
                      }}
                      className="px-5 py-2.5 bg-[#003067] hover:bg-[#0052b4] text-white text-[10px] font-bold uppercase tracking-widest transition-all rounded-none"
                    >
                      Alle Einträge anzeigen
                    </button>
                  </div>
                )}
              </div>

              {/* PAGINATION NAVIGATION ELEMENT MODULE */}
              {paginatedGridPosts.length > 0 && totalGridPages > 1 && (
                <div className="flex flex-row items-center justify-between gap-6 mt-12 pt-8 border-t border-slate-100">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-xs font-bold text-[#003067] hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 select-none cursor-pointer rounded-full"
                  >
                    <ChevronLeft size={14} className="stroke-[2.5]" />
                    <span className="hidden sm:inline">Vorherige</span>
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalGridPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setCurrentPage(p)}
                        className={`w-9 h-9 flex items-center justify-center text-xs font-bold transition-all duration-200 rounded-full cursor-pointer ${
                          currentPage === p
                            ? "bg-[#003067] text-white shadow-md shadow-[#003067]/10"
                            : "bg-white hover:bg-slate-50 text-slate-600 hover:text-[#003067] border border-slate-200"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalGridPages, prev + 1))}
                    disabled={currentPage === totalGridPages}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-xs font-bold text-[#003067] hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-all duration-200 select-none cursor-pointer rounded-full"
                  >
                    <span className="hidden sm:inline">Nächste</span>
                    <ChevronRight size={14} className="stroke-[2.5]" />
                  </button>
                </div>
              )}

            </div>

            {/* RIGHT SIDEBAR COLUMN GUESTS */}
            <aside className="lg:col-span-4 space-y-12 pl-0 lg:pl-6 text-left">
              
              {/* CATEGORIES MODULE */}
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#003067] uppercase block border-b border-slate-100 pb-2">
                  KATEGORIEN
                </span>
                
                <div className="flex flex-col">
                  {/* General selector */}
                  <button 
                    onClick={() => { setSelectedCategory("Alle"); setCurrentPage(1); }}
                    className={`w-full flex items-center justify-between py-3.5 text-xs font-bold uppercase tracking-wider transition-all border-b border-slate-100 ${
                      selectedCategory === "Alle"
                        ? "text-[#0052b4] font-black border-l-2 border-[#0052b4] pl-2.5"
                        : "text-slate-600 hover:text-[#0052b4] pl-0"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen size={14} className="text-[#0052b4]" />
                      Alle Beiträge
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2.5 py-1">
                      {ALL_BLOG_POSTS.length}
                    </span>
                  </button>

                  {/* Individual categories mappings */}
                  {CATEGORIES.map((cat) => {
                    const postCount = ALL_BLOG_POSTS.filter(post => post.category === cat).length;
                    const isActive = selectedCategory === cat;
                    return (
                      <button 
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                        className={`w-full flex items-center justify-between py-3.5 text-xs font-bold uppercase tracking-wider transition-all border-b border-slate-100 group ${
                          isActive
                            ? "text-[#0052b4] font-black border-l-2 border-[#0052b4] pl-2.5"
                            : "text-slate-600 hover:text-[#0052b4] pl-0"
                        }`}
                      >
                        <span className="flex items-center gap-2 truncate">
                          {getCategoryIcon(cat)}
                          {cat}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2.5 py-1">
                            {postCount}
                          </span>
                          <ChevronRight size={12} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* POPULAR ARTICLES COMPONENT */}
              <div className="space-y-6">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#003067] uppercase block border-b border-slate-100 pb-2">
                  BELIEBTE BEITRÄGE
                </span>

                <div className="space-y-6">
                  {POPULAR_ARTICLES.map((art) => (
                    <Link 
                      key={art.id}
                      href={`/blog/${art.id}?page=${currentPage}&category=${encodeURIComponent(selectedCategory)}${searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ''}`}
                      className="flex items-start gap-4 cursor-pointer group"
                    >
                      {/* Square aspect ratio thumb frame */}
                      <div className="relative w-14 h-14 bg-slate-50 border border-slate-100 shrink-0">
                        <Image 
                          src={getAuthenticImage(art.id)}
                          alt={art.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          sizes="56px"
                        />
                      </div>
                      
                      <div className="space-y-1 text-left min-w-0">
                        <h4 className="text-xs font-bold text-[#003067] group-hover:text-[#0052b4] leading-tight transition-colors line-clamp-2">
                          {art.title}
                        </h4>
                        <span className="text-[9px] font-bold uppercase text-slate-400 tracking-wider font-mono">
                          {art.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 3. CONTACT FORM SECTION - Clean corporate style            */}
      {/* ========================================================== */}
      <section id="kontakt" className="py-10 lg:py-14 bg-[#f4f7fa] border-t border-stone-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Contact Details Left Side */}
            <div className="text-left">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#0052b4] mb-4 font-bold block leading-none">
                KONTAKT
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#003067] leading-tight mb-6 tracking-tight">
                <span className="text-[#0052b4]">Kontakt Details</span>
              </h2>
              
              <div className="space-y-4 text-slate-500 text-sm md:text-base mb-8 max-w-md font-medium leading-relaxed">
                <p>
                  Sollten Sie noch weitere Fragen haben, stehen wir Ihnen selbstverständlich zur Verfügung.
                </p>
                <p>
                  Innerhalb von 24 Stunden erhalten Sie eine Antwort.
                </p>
              </div>
              
              <div className="space-y-4 mb-10">
                {/* Address info line */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-[#F0F7FF] border border-slate-100/80 rounded-xl flex items-center justify-center shadow-sm">
                    <GoogleMapsPin size={22} />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#003067]">Herthergasse 37/15/1, 1120 Wien</span>
                </div>

                {/* Phone info line */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Phone size={18} className="text-[#EA4335] fill-[#EA4335]" />
                  </div>
                  <a href="tel:+436601470316" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#0052b4] transition-colors font-sans">+43 660 147 0316</a>
                </div>
                
                {/* Email info line */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                    <Mail size={18} className="text-[#0078D4] fill-[#0078D4]/10" />
                  </div>
                  <a href="mailto:simba.facility@outlook.com" className="text-base md:text-lg font-bold text-[#003067] hover:text-[#0052b4] transition-colors break-all font-sans">simba.facility@outlook.com</a>
                </div>
              </div>
            </div>

            {/* Flat high-end styled contact form container (Rectilinear style) */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full bg-white border border-slate-200/60 rounded-none p-8 sm:p-10 text-left">
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-[#003067] mb-2 uppercase tracking-wide">Unverbindliche Anfrage</h3>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">Kontaktieren Sie uns für ein meisterhaftes Angebot in Wien &amp; Umgebung.</p>
              </div>
              <ContactForm defaultSubject="Anfrage von Magazin" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
