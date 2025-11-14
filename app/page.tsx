'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Mountain,
  Users,
  Brain,
  Feather,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Youtube,
} from 'lucide-react';
import PackageCard from '../components/PackageCard';
import PackageDetails from '../components/PackageDetails';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const galleryAutoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const packages = [
    {
      id: 1,
      title: '7-Day Spiritual Journey – Rishikesh',
      duration: '7 Days / 6 Nights',
      theme: 'Yoga, Mindfulness & Nature Connection',
      budget: '₹20,000 per person',
      stay: 'Ashram or yoga retreat in Tapovan/Lakshman Jhula area (e.g., Parmarth Niketan, Maa Yoga Ashram, Zostel Rishikesh)',
      image: '/rishikesh.jpeg',
      dayByDayPlan: [
        {
          day: 1,
          title: 'Arrival & Sacred Beginning',
          activities: [
            'Arrive in Rishikesh and check into ashram',
            'Evening Ganga Aarti ceremony at Triveni Ghat',
            'Welcome orientation and group introduction',
            'Reflection: "What does spiritual journey mean to me?"'
          ]
        },
        {
          day: 2,
          title: 'Yoga & River Connection',
          activities: [
            'Early morning yoga session by the Ganges',
            'Meditation workshop with experienced guide',
            'Visit to Beatles Ashram for cultural exploration',
            'Group discussion: "Finding inner peace through practice"'
          ]
        },
        {
          day: 3,
          title: 'Temple Wisdom & Learning',
          activities: [
            'Temple hopping: Neelkanth Mahadev, Kunjapuri',
            'Learn about Hindu philosophy and traditions',
            'Ayurvedic consultation and wellness session',
            'Evening satsang and spiritual discourse'
          ]
        },
        {
          day: 4,
          title: 'Adventure & Nature',
          activities: [
            'Trek to Kunjapuri Temple for sunrise',
            'White water rafting in the Ganges',
            'Waterfall visit and nature meditation',
            'Campfire sharing: "Courage and spiritual growth"'
          ]
        },
        {
          day: 5,
          title: 'Service & Community',
          activities: [
            'Volunteer at local ashram kitchen',
            'Teach basic English to local children',
            'Community service project',
            'Group reflection: "How service transforms us"'
          ]
        },
        {
          day: 6,
          title: 'Art & Expression',
          activities: [
            'Learn traditional chanting and mantras',
            'Art therapy and spiritual journaling',
            'Visit local markets and cultural sites',
            'Prepare for closing ceremony'
          ]
        },
        {
          day: 7,
          title: 'Integration & Farewell',
          activities: [
            'Final yoga session and meditation',
            'Closing ceremony and certificate presentation',
            'Group sharing: "My transformed perspective"',
            'Departure with renewed spirit'
          ]
        }
      ],
      tripHighlights: [
        'Daily yoga sessions by the holy Ganges',
        'Participate in traditional Ganga Aarti ceremony',
        'Trek to ancient temples in Himalayan foothills',
        'White water rafting adventure',
        'Visit Beatles Ashram and other cultural sites',
        'Volunteer service at local ashram',
        'Learn meditation and mindfulness techniques',
        'Authentic ashram living experience'
      ],
      included: [
        '6 nights stay in traditional ashram',
        'All vegetarian sattvic meals',
        'Daily yoga and meditation sessions',
        'Guided temple visits and cultural tours',
        'White water rafting experience',
        'Ayurvedic consultation',
        'All volunteer activities and materials',
        'Certificate of completion',
        'Local transportation for all activities'
      ]
    },
    {
      id: 2,
      title: '7-Day Spiritual Itinerary – Bodh Gaya',
      duration: '7 Days / 6 Nights',
      theme: 'Mindfulness & the Path to Enlightenment',
      budget: '₹20,000 per person',
      stay: 'Near Mahabodhi Temple – options like Root Institute for Wisdom Culture, Bodhgaya Regency Hotel, or Thai Monastery Guesthouse',
      image: '/bodh-gaya.jpeg',
      dayByDayPlan: [
        {
          day: 1,
          title: 'Arrival & Orientation',
          activities: [
            'Arrive and check in',
            'Walk around Mahabodhi Temple Complex',
            'Evening: Light meditation and introduction to Buddha\'s life',
            'Reflection: "Why is peace important to me?"'
          ]
        },
        {
          day: 2,
          title: 'The Bodhi Tree Experience',
          activities: [
            'Morning meditation under the Bodhi Tree',
            'Visit Vajrasana (Buddha\'s enlightenment spot)',
            'Attend short Dhamma talk by a monk',
            'Evening: Silent reflection and journaling'
          ]
        },
        {
          day: 3,
          title: 'Exploring Monasteries',
          activities: [
            'Visit Thai, Japanese & Bhutanese Monasteries',
            'Learn about different Buddhist traditions',
            'Participate in chanting or mindfulness prayer',
            'Reflection: "What does compassion mean to me?"'
          ]
        },
        {
          day: 4,
          title: 'Pilgrimage & Culture',
          activities: [
            'Visit Sujata Stupa (story of generosity)',
            'Stop at Dungeshwari Cave (where Buddha meditated before enlightenment)',
            'Lunch at a local vegetarian café',
            'Group meditation & discussion'
          ]
        },
        {
          day: 5,
          title: 'Volunteering & Selfless Service',
          activities: [
            'Spend a day helping at a local school or NGO',
            'Teach, paint, or assist with daily tasks',
            'Evening gratitude meditation',
            'Reflection: "How can service bring peace?"'
          ]
        },
        {
          day: 6,
          title: 'Learning Mindfulness',
          activities: [
            'Join a youth meditation workshop at Root Institute or Burmese Vihara',
            'Practice walking meditation in the temple gardens',
            'Visit local market for handicrafts',
            'Evening: Group sharing circle'
          ]
        },
        {
          day: 7,
          title: 'Gratitude & Departure',
          activities: [
            'Early morning meditation and final reflection',
            'Visit Mahabodhi Temple once more for blessings',
            'Depart Bodh Gaya',
            'Reflection: "What lesson will I carry forward?"'
          ]
        }
      ],
      tripHighlights: [
        'Meditation under the Bodhi Tree at Mahabodhi Temple',
        'Visit to international monasteries (Thai, Japanese, Bhutanese)',
        'Learn Buddhist teachings & mindfulness practices',
        'Visit Sujata Stupa & Dungeshwari Caves',
        'Participate in chanting, prayers, & youth meditation workshops',
        'Volunteer day at a local school or NGO',
        'Reflection & journaling on compassion and peace'
      ],
      included: [
        '6 nights / 7 days accommodation near Mahabodhi Temple',
        'All vegetarian meals',
        'Guided temple & monastery visits',
        'Meditation & mindfulness sessions',
        'Dhamma talks and youth workshops',
        'Volunteer activity with local community',
        'Transportation between local sites'
      ]
    },
    {
      id: 3,
      title: 'DHARAMSHALA – The Abode of Peace and Compassion',
      duration: '7 Days / 6 Nights',
      theme: 'Mindfulness, Compassion & Simple Living',
      budget: '₹20,000 per person',
      stay: 'McLeod Ganj / Dharamkot area — options like Tibet World, Norling Guest House, or youth-friendly hostels & monastery stays',
      image: '/dharmshala.jpeg',
      dayByDayPlan: [
        {
          day: 1,
          title: 'Arrival & Settling In',
          activities: [
            'Arrive in Dharamshala / McLeod Ganj',
            'Check-in and orientation walk through the hill town',
            'Evening tea circle: introduction to Buddhist philosophy',
            'Reflection: "What does inner peace mean to me?"'
          ]
        },
        {
          day: 2,
          title: 'Discovering Buddhism',
          activities: [
            'Visit Tsuglagkhang Monastery (Dalai Lama Temple Complex)',
            'Attend morning prayers and short meditation session',
            'Visit Namgyal Monastery & Tibetan Museum',
            'Group discussion on "Kindness as a way of life"'
          ]
        },
        {
          day: 3,
          title: 'Mindfulness in Action',
          activities: [
            'Morning yoga & meditation session',
            'Visit Norbulingka Institute – learn Tibetan art, thangka painting, or crafts',
            'Afternoon reflection journaling session',
            'Evening: Attend a monk-led mindfulness session'
          ]
        },
        {
          day: 4,
          title: 'Nature & Spiritual Connection',
          activities: [
            'Half-day nature walk or easy trek to Bhagsu Waterfall or Dharamkot',
            'Meditation by the waterfall',
            'Evening: Group gratitude sharing around a bonfire',
            'Reflection: "How does nature teach stillness?"'
          ]
        },
        {
          day: 5,
          title: 'Service & Compassion',
          activities: [
            'Volunteer at Tibet World or a local NGO (teach English, art, or help with meals)',
            'Lunch at a community café supporting Tibetan refugees',
            'Evening: Guided loving-kindness meditation'
          ]
        },
        {
          day: 6,
          title: 'Cultural Understanding',
          activities: [
            'Visit Gyuto Monastery and learn about monk life',
            'Attend a chanting session or debate class (if permitted)',
            'Free time in Tibetan Market (ethical shopping)',
            'Reflection journaling: "What does compassion mean to me now?"'
          ]
        },
        {
          day: 7,
          title: 'Farewell & Reflection',
          activities: [
            'Morning meditation and closing circle',
            'Write a gratitude note or plant a tree at the center',
            'Depart from Dharamshala with reflection on growth and peace'
          ]
        }
      ],
      tripHighlights: [
        'Visit Dalai Lama Temple, Norbulingka Institute, and Gyuto Monastery',
        'Daily yoga, meditation, & mindfulness sessions',
        'Cultural learning about Tibetan art, chants, and compassion',
        'Nature treks & peaceful reflection by waterfalls',
        'Volunteering experience with Tibetan community',
        'Group sharing, journaling, and gratitude practices'
      ],
      included: [
        '6 nights / 7 days accommodation in McLeod Ganj / Dharamkot',
        'All vegetarian meals (or monastery meals)',
        'Guided monastery & cultural visits',
        'Daily yoga and meditation sessions',
        'Workshops on mindfulness and compassion',
        'Volunteer activity at a local NGO or school',
        'Local transportation within Dharamshala'
      ]
    },
    {
      id: 4,
      title: 'RAMESWARAM – The Island of Purity and Devotion',
      duration: '7 Days / 6 Nights',
      theme: 'Faith, Cleansing, and Inner Peace through Pilgrimage',
      budget: '₹20,000 per person',
      stay: 'Near Ramanathaswamy Temple or Agni Theertham — options like Daiwik Hotel, Jiwan Residency, or budget homestays',
      image: '/rameshwaram.jpeg',
      dayByDayPlan: [
        {
          day: 1,
          title: 'Arrival & Orientation',
          activities: [
            'Arrive in Rameswaram (by train or bus from Madurai)',
            'Check-in and orientation walk near the beach',
            'Evening visit to Agni Theertham (sunset prayer)',
            'Reflection: "Why do people travel for faith?"'
          ]
        },
        {
          day: 2,
          title: 'Temple & Holy Wells',
          activities: [
            'Early morning visit to Ramanathaswamy Temple',
            'Participate in ritual bath at 22 holy wells inside the temple',
            'Attend temple aarti and guided temple tour',
            'Reflection journaling: "What does purification mean to me?"'
          ]
        },
        {
          day: 3,
          title: 'Ramayana Trail',
          activities: [
            'Visit Panchmukhi Hanuman Temple and floating stones exhibit',
            'Visit Rama Setu / Dhanushkodi (legendary bridge to Lanka)',
            'Meditation by the sea and storytelling about Lord Rama\'s journey',
            'Group discussion: "Faith and courage in life challenges"'
          ]
        },
        {
          day: 4,
          title: 'Nature & Spiritual Balance',
          activities: [
            'Early morning beach yoga and pranayama',
            'Visit Gandhamadhana Parvatham (highest point with Rama\'s footprints)',
            'Nature walk through coastal areas and bird-watching at Ariyaman Beach',
            'Evening bonfire & gratitude circle'
          ]
        },
        {
          day: 5,
          title: 'Service & Simplicity',
          activities: [
            'Volunteer in a local temple kitchen or school',
            'Learn about community life and Annadanam (free meal service)',
            'Reflection journaling: "What did I learn from serving others?"',
            'Evening meditation by Agni Theertham'
          ]
        },
        {
          day: 6,
          title: 'Culture & Craft',
          activities: [
            'Visit local handicraft and conch shell workshops',
            'Learn about sustainable coastal living and fishing communities',
            'Group art or reflection activity: draw/paint "My Journey of Faith"',
            'Attend final evening aarti at the temple'
          ]
        },
        {
          day: 7,
          title: 'Farewell & Reflection',
          activities: [
            'Sunrise meditation on the beach',
            'Closing gratitude circle and sharing experiences',
            'Departure from Rameswaram with reflection: "How has this journey changed me?"'
          ]
        }
      ],
      tripHighlights: [
        'Ramanathaswamy Temple & ritual bath in 22 holy wells',
        'Visit to Dhanushkodi (Rama Setu) and Hanuman Temple',
        'Beach yoga, meditation, and reflection sessions',
        'Volunteering experience with community or temple',
        'Ramayana storytelling & cultural learning',
        'Art, nature, and gratitude activities for inner growth'
      ],
      included: [
        '6 nights / 7 days accommodation near Ramanathaswamy Temple',
        'All vegetarian meals',
        'Guided temple visits and cultural tours',
        'Yoga, meditation, and reflection sessions',
        'Volunteer and community experiences',
        'Beach and nature excursions',
        'Local transportation'
      ]
    },
    {
      id: 5,
      title: 'PURI – The Land of Lord Jagannath',
      duration: '7 Days / 6 Nights',
      theme: 'Faith, Devotion, and Unity through Service and Culture',
      budget: '₹20,000 per person',
      stay: 'Near Jagannath Temple or Marine Drive — options like Mayfair Heritage, Hotel Niladri, or youth-friendly guesthouses',
      image: '/puri.jpeg',
      dayByDayPlan: [
        {
          day: 1,
          title: 'Arrival & Welcome',
          activities: [
            'Arrive in Puri and check-in at hotel/guesthouse',
            'Orientation walk along Marine Drive Beach',
            'Attend evening Sandhya Aarti near Jagannath Temple',
            'Reflection: "What does faith mean to me?"'
          ]
        },
        {
          day: 2,
          title: 'Jagannath Temple & Rituals',
          activities: [
            'Early morning darshan at Jagannath Temple (with local guide)',
            'Learn about Mahaprasad (holy meal) traditions',
            'Visit Ananda Bazaar (temple food market)',
            'Reflection journaling: "Why is sharing food sacred?"'
          ]
        },
        {
          day: 3,
          title: 'Spiritual Learning & Culture',
          activities: [
            'Visit Gundicha Temple and learn about Rath Yatra festival',
            'Attend a bhajan/kirtan session in a local ashram',
            'Visit Swargadwar Beach for sunset meditation',
            'Group discussion: "Faith as a celebration of life"'
          ]
        },
        {
          day: 4,
          title: 'Art & Creativity',
          activities: [
            'Visit Raghurajpur Heritage Village (famous for Pattachitra art)',
            'Learn traditional painting or craft from local artists',
            'Understand the connection between art and spirituality',
            'Reflection activity: "Expressing devotion through creativity"'
          ]
        },
        {
          day: 5,
          title: 'Service & Compassion',
          activities: [
            'Volunteer at temple\'s food service or local NGO',
            'Help distribute meals or teach basic English to kids',
            'Group reflection: "How does helping others bring peace?"',
            'Evening visit to Narendra Tank for peaceful chanting'
          ]
        },
        {
          day: 6,
          title: 'Nature & Reflection',
          activities: [
            'Morning yoga or meditation on the beach',
            'Day trip to Konark Sun Temple (UNESCO heritage site)',
            'Learn about solar symbolism and Indian temple architecture',
            'Return to Puri for closing group reflection at sunset'
          ]
        },
        {
          day: 7,
          title: 'Gratitude & Farewell',
          activities: [
            'Early morning gratitude meditation by the sea',
            'Free time for journaling, shopping, or visiting local markets',
            'Final sharing circle: "What spirituality means to me now"',
            'Departure from Puri'
          ]
        }
      ],
      tripHighlights: [
        'Jagannath Temple & Mahaprasad experience',
        'Visit to Gundicha Temple & Konark Sun Temple',
        'Art workshop at Raghurajpur Village',
        'Volunteer experience (community kitchen or NGO)',
        'Daily meditation, yoga & reflection sessions',
        'Cultural music & bhajan evenings',
        'Beach walks & spiritual storytelling'
      ],
      included: [
        '6 nights / 7 days stay near Jagannath Temple or Beach',
        'All vegetarian meals (includes temple Mahaprasad)',
        'Guided temple visits and cultural heritage tours',
        'Art & craft workshops at Raghurajpur',
        'Volunteer opportunity with local community',
        'Yoga, meditation, and reflection sessions',
        'Local transportation & day trip to Konark'
      ]
    }
  ];

  const galleryImages = [
    '/vibe1.jpeg',
    '/vibe2.jpeg',
    '/vibe3.jpeg', 
    '/vibe4.jpeg',
    '/vibe5.jpeg',
    '/vibe6.jpeg',
  ];

  const activities = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Sunrise Yoga',
      description: 'Start your day with intention and flow.',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Guided Meditation',
      description: 'Practical techniques to quiet the noise.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group Connect',
      description: 'Share and connect in a no-judgment space.',
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: 'Peace Techniques',
      description: 'Explore Qigong and Japanese mindfulness.',
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Mindful Hiking',
      description: 'Be present with every step.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Creative Workshops',
      description: 'Express yourself through art and journaling.',
    },
  ];

  const testimonials = [
    {
      quote:
        'I came in stressed and left feeling... like myself again. 10/10 would recommend.',
      author: 'Yash. I, 19',
    },
    {
      quote:
        "Honestly, I thought it would be cringe. It wasn't. It was just what I needed. The people were real.",
      author: 'Arya. C, 17',
    },
    {
      quote:
        'The best part was realizing everyone else felt the same way. Found some amazing friends.',
      author: 'Abhay. S, 18',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % packages.length);
    }, 5000);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [packages.length]);

  useEffect(() => {
    galleryAutoScrollRef.current = setInterval(() => {
      setCurrentGallerySlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => {
      if (galleryAutoScrollRef.current)
        clearInterval(galleryAutoScrollRef.current);
    };
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % packages.length);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % packages.length);
      }, 5000);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + packages.length) % packages.length);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % packages.length);
      }, 5000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleExplorePackage = (packageId: number) => {
    setSelectedPackage(packageId);
  };

  const handleBackToHome = () => {
    setSelectedPackage(null);
  };

  const selectedPackageData = packages.find(pkg => pkg.id === selectedPackage);

  // If a package is selected, show the details page
  if (selectedPackage && selectedPackageData) {
    return <PackageDetails package={selectedPackageData} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-emerald-800' : 'text-white'
            }`}>
              Zenith Journeys
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('retreats')}
                className={`transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-emerald-700'
                    : 'text-white hover:text-emerald-200'
                }`}
              >
                Retreats
              </button>
              <button
                onClick={() => scrollToSection('activities')}
                className={`transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-emerald-700'
                    : 'text-white hover:text-emerald-200'
                }`}
              >
                Activities
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-emerald-700'
                    : 'text-white hover:text-emerald-200'
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-emerald-700'
                    : 'text-white hover:text-emerald-200'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('retreats')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full transition-colors font-medium"
              >
                Book Your Escape
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X
                  className={isScrolled ? 'text-gray-800' : 'text-white'}
                  size={28}
                />
              ) : (
                <Menu
                  className={isScrolled ? 'text-gray-800' : 'text-white'}
                  size={28}
                />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('retreats')}
                className="block w-full text-left text-gray-700 hover:text-emerald-700"
              >
                Retreats
              </button>
              <button
                onClick={() => scrollToSection('activities')}
                className="block w-full text-left text-gray-700 hover:text-emerald-700"
              >
                Activities
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-gray-700 hover:text-emerald-700"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-emerald-700"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('retreats')}
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full transition-colors font-medium"
              >
                Book Your Escape
              </button>
            </div>
          </div>
        )}
      </nav>

      <section
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/misty-mountain.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Disconnect to Reconnect
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Mindful adventures for a new generation. Disconnect, find your flow,
            and recharge your life. This is wellness, your way.
          </p>
          <button
            onClick={() => scrollToSection('retreats')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105"
          >
            Explore Our Retreats
          </button>
        </div>
      </section>

      <section id="retreats" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Path
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="w-full flex-shrink-0 px-4 md:px-8"
                  >
                    <PackageCard 
                      package={pkg} 
                      onExplore={handleExplorePackage}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {packages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-emerald-600 w-8'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="activities" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              More Than Just a Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              It&apos;s an experience. Find your vibe with activities that calm the
              mind and energize the body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-emerald-600 mb-4">{activity.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See the Vibe
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentGallerySlide * 100}%)`,
              }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGallerySlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentGallerySlide === index
                      ? 'bg-white w-8'
                      : 'bg-white/50'
                  }`}
                  aria-label={`View image ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From the Tribe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl text-emerald-600 mb-4">&quot;</div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <p className="text-gray-600 font-medium">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book with Ease
            </h2>
            <p className="text-xl text-gray-600">
              We support all major payment methods for a secure and simple
              booking process.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-stone-50 px-8 py-4 rounded-xl text-lg font-medium text-gray-700">
              Credit Card
            </div>
            <div className="bg-stone-50 px-8 py-4 rounded-xl text-lg font-medium text-gray-700">
              Debit Card
            </div>
            <div className="bg-stone-50 px-8 py-4 rounded-xl text-lg font-medium text-gray-700">
              UPI
            </div>
            <div className="bg-stone-50 px-8 py-4 rounded-xl text-lg font-medium text-gray-700">
              NetBanking
            </div>
            <div className="bg-stone-50 px-8 py-4 rounded-xl text-lg font-medium text-gray-700">
              PayPal
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Zenith Journeys</h3>
              <p className="text-gray-400 leading-relaxed">
                Mindful adventures for a new generation. Disconnect, find your
                flow, and recharge your life.
              </p>
              <p>
              Mail : zenithjourneys01@gmail.com
              </p>
              <p>
              Contact: 7022316790
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Zenith Journeys. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
