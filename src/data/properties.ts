import { Property } from "@/types/property";

export const properties: Property[] = [
  {
    id: "udaipur",
    slug: "the-ananta-udaipur",
    name: "The Ananta Udaipur",
    shortName: "Udaipur",
    tagline: "A tranquil sanctuary sprawled across 40+ acres in the Aravalli Hills",
    location: {
      city: "Udaipur",
      state: "Rajasthan",
      fullAddress: "Village Bujhda, Tehsil Girwa, Kodiyat Road, Udaipur, Rajasthan 313031",
      setting: "Nestled in the lush, rolling slopes of the picturesque Aravalli range",
      nearestTransit: "Approx. 30 km from Maharana Pratap Airport (UDR); 11 km from Udaipur Railway Station",
    },
    heroImage:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2810/x_2,y_0,w_4996,h_2810,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-hotels-resorts/The_Ananta_Udaipur_1_niakxc",
    cardImage:
      "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1499,h_843,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/ananta-hotels-resorts/facade_of_the_lobby_at_Ananta_udaipur_sgvzk2_d5ngdh_wxradf",
    gallery: [
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2810/x_2,y_0,w_4996,h_2810,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-hotels-resorts/The_Ananta_Udaipur_1_niakxc",
      "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1499,h_843,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/ananta-hotels-resorts/facade_of_the_lobby_at_Ananta_udaipur_sgvzk2_d5ngdh_wxradf",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_450,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/the-ananta-udaipur/Swimming_Pool_",
      "https://assets.simplotel.com/simplotel/image/upload/x_0,y_74,w_2400,h_1350,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-ananta-udaipur/Outdoor_seating_with_umbrellas_and_tables_at_our_resort_in_Udaipur_",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3378/x_0,y_283,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/ananta-hotels-resorts/The_staff_of_mudra_spa_welcomes_you_to_the_rejuvenating_spa_",
    ],
    shortDescription:
      "Spread over 40 sprawling acres of verdant landscape against the backdrop of the Aravalli Hills, offering 230+ contemporary villas with open-to-sky bathrooms and panoramic vistas.",
    overview: [
      "The Ananta Udaipur is a sprawling nature retreat set against the scenic backdrop of the Aravalli Hills in Rajasthan's City of Lakes.",
      "The property is thoughtfully designed to blend with its natural hillside topography, featuring standalone and clustered contemporary villas with expansive balconies, outdoor showers, and lush landscaped flora.",
      "Whether you are planning a serene family getaway, a wellness break at the Mudra Spa, or exploring destination wedding opportunities on expansive banquet lawns, Udaipur provides a secluded sanctuary away from the bustle of the city center.",
    ],
    keyStats: [
      { label: "Estate Area", value: "40+ Acres" },
      { label: "Luxury Villas", value: "230+" },
      { label: "Setting", value: "Aravalli Valley" },
      { label: "Key Feature", value: "Open-to-Sky Bathrooms" },
    ],
    highlights: [
      {
        title: "Panoramic Hillside Setting",
        description: "Expansive views of the Aravalli mountain ridges from private villa balconies and terraced lawns.",
        iconName: "Mountain",
      },
      {
        title: "Open-Air Garden Showers",
        description: "Signature contemporary villas designed with open-to-sky bathrooms for a distinctive nature connection.",
        iconName: "Droplets",
      },
      {
        title: "Expansive Infinity Pool",
        description: "A sweeping outdoor swimming pool framing the horizon and surrounding hillsides.",
        iconName: "Waves",
      },
      {
        title: "Mudra Wellness & Spa",
        description: "Holistic Ayurvedic therapies, relaxing massages, and rejuvenation treatments administered by skilled therapists.",
        iconName: "Sparkles",
      },
    ],
    amenities: [
      { name: "Infinity Swimming Pool", category: "leisure", iconName: "Waves", description: "Large outdoor pool with mountain vista" },
      { name: "Mudra Spa & Wellness", category: "wellness", iconName: "Sparkles", description: "Ayurvedic & international therapy suites" },
      { name: "Fitness Centre", category: "wellness", iconName: "Dumbbell", description: "Well-equipped cardio and strength zone" },
      { name: "Kids Activity Zone", category: "leisure", iconName: "Smile", description: "Dedicated indoor & outdoor children's play area" },
      { name: "Cycling & Walking Trails", category: "leisure", iconName: "Compass", description: "Paved trails across 40 acres of green estate" },
      { name: "Grand Banquet Lawns", category: "business", iconName: "Users", description: "Expansive open-air manicured grounds" },
      { name: "In-Room Dining", category: "dining", iconName: "Coffee", description: "Curated 24-hour in-villa dining service" },
      { name: "High-Speed Wi-Fi", category: "convenience", iconName: "Wifi", description: "Complimentary access throughout villas & public spaces" },
      { name: "Valet & Travel Desk", category: "convenience", iconName: "Car", description: "Dedicated concierge for local excursions and transfers" },
    ],
    dining: [
      {
        name: "Oasis",
        tagline: "All-Day Multi-Cuisine Dining",
        description: "An elegant all-day restaurant serving authentic Rajasthani delicacies alongside pan-Indian, Continental, and Oriental favorites.",
        cuisine: "Multi-cuisine, North Indian & Rajasthani",
        timing: "7:00 AM – 11:00 PM",
      },
      {
        name: "Float",
        tagline: "The Poolside Bar & Lounge",
        description: "Relax by the shimmering water with artisanal mocktails, refreshing beverages, and light finger food in an alfresco setting.",
        cuisine: "Beverages, Tapas & Refreshments",
        timing: "11:00 AM – 10:30 PM",
      },
      {
        name: "Ananta Tara",
        tagline: "Open-Air Hillside Terrace",
        description: "A romantic rooftop dinner experience under the starlit sky, capturing the cool breeze of the Aravalli range.",
        cuisine: "Speciality Grills & Chef's Degustation",
        timing: "7:30 PM – 11:00 PM (Subject to seasonal weather)",
      },
    ],
    accommodations: [
      {
        id: "udaipur-luxury-villa",
        name: "Luxury Villa",
        category: "Standalone Villa",
        size: "Approx. 580 sq.ft. (54 sq.m.)",
        occupancy: "Up to 3 Guests (2 Adults + 1 Child)",
        bedType: "King Bed or Twin Beds",
        view: "Aravalli Mountain Ridge & Lush Gardens",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3334/x_0,y_261,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-ananta-udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/the-ananta-udaipur/Open_to_sky_bathroom_featured_in_our_executive_suite_in_Udaipur_6881",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3334/x_199,y_0,w_5602,h_4001,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-ananta-udaipur/Ananta_Udaipur_Sep22_Day_03_Golf_Suite_0165-HDR_w5re8z",
        ],
        description:
          "The signature accommodation of The Ananta Udaipur. Each freestanding cottage features contemporary wooden accents, a plush king bed, a sunlit private balcony, and the property's acclaimed open-to-sky bathroom with a garden shower.",
        features: [
          "Private balcony with mountain views",
          "Enclosed open-to-sky shower with stone surround",
          "Separate dressing space & wardrobe",
          "Smart LED television with satellite channels",
          "Tea and coffee maker with selection of artisanal teas",
        ],
        amenities: ["Wi-Fi", "Air Conditioning", "Open-air Shower", "Private Balcony", "Mini Bar", "Safe"],
      },
      {
        id: "udaipur-deluxe-room",
        name: "Deluxe Room",
        category: "Resort Room",
        size: "Approx. 450 sq.ft. (42 sq.m.)",
        occupancy: "Up to 3 Guests",
        bedType: "King Bed or Twin Beds",
        view: "Lush Landscaped Courtyard",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3334/x_833,y_0,w_3334,h_3334,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/the-ananta-udaipur/Deluxe_Room_1_adv7ks",
          "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1499,h_843,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/ananta-hotels-resorts/facade_of_the_lobby_at_Ananta_udaipur_sgvzk2_d5ngdh_wxradf",
        ],
        description:
          "Tastefully appointed rooms situated in comfortable proximity to the resort's central facilities, dining venues, and swimming pool. Features serene earth-toned interiors, fine linen, and modern en-suite conveniences.",
        features: [
          "Direct access to garden paths",
          "Well-appointed en-suite marble bathroom",
          "Work desk and ergonomic armchair",
          "Floor-to-ceiling soundproof glass doors",
        ],
        amenities: ["Wi-Fi", "Air Conditioning", "En-suite Bath", "Garden View", "Room Service", "Coffee Station"],
      },
      {
        id: "udaipur-executive-suite",
        name: "Executive Suite",
        category: "Luxury Suite",
        size: "Approx. 850 sq.ft. (79 sq.m.)",
        occupancy: "Up to 3 Adults or 2 Adults + 2 Children",
        bedType: "Master King Bed",
        view: "Elevated Valley & Forest Views",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/the-ananta-udaipur/Executive_Suite_aebgh8",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/the-ananta-udaipur/Open_to_sky_bathroom_featured_in_our_executive_suite_in_Udaipur_6881",
        ],
        description:
          "Offering an elevated stay experience with a distinct living room, dining area, and an expansive master bedroom. Designed for couples and families desiring generous space and unobstructed valley views.",
        features: [
          "Separate spacious living salon with plush sofa seating",
          "Dining table for private in-room meals",
          "Double vanity and soaking bathtub",
          "Dual private balconies facing scenic hills",
        ],
        amenities: ["Wi-Fi", "Living Salon", "Bathtub", "Dual Balconies", "Mini Bar", "Espresso Machine"],
      },
      {
        id: "udaipur-presidential-villa",
        name: "Presidential Villa with Plunge Pool",
        category: "Palatial Villa",
        size: "Approx. 1,600 sq.ft. (148 sq.m.)",
        occupancy: "Up to 6 Guests (2 Interconnected Bedrooms)",
        bedType: "2 King Bedrooms",
        view: "360-Degree Aravalli Mountain Panorama",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/the-ananta-udaipur/Presidential_Villa_1_iicq7c",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/the-ananta-udaipur/Ananta_Villa_k443r8",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_450,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/the-ananta-udaipur/Swimming_Pool_",
        ],
        description:
          "The crowning villa experience at The Ananta Udaipur. Features two independent master suites, private outdoor plunge pool, personal sun lounger deck, grand entertaining lounge, and private butler service on request.",
        features: [
          "Private temperature-tempered plunge pool and sundeck",
          "Two separate master suites with en-suite stone bathrooms",
          "Expansive living and entertainment parlor",
          "Private pantry and dedicated concierge assistance",
        ],
        amenities: ["Private Plunge Pool", "Dual Bedrooms", "Sun Deck", "Butler Service", "VIP Check-in", "Wi-Fi"],
      },
    ],
  },
  {
    id: "pushkar",
    slug: "ananta-spa-resort-pushkar",
    name: "Ananta Spa & Resort Pushkar",
    shortName: "Pushkar",
    tagline: "Serene heritage luxury and tented sanctuaries near holy Pushkar",
    location: {
      city: "Pushkar",
      state: "Rajasthan",
      fullAddress: "Village Leela Sevri, 4 km before Pushkar, Pushkar, Rajasthan 305022",
      setting: "Spanning 9 acres framed by the Aravali hills and desert sands",
      nearestTransit: "Approx. 140 km from Jaipur International Airport (JAI); 13 km from Ajmer Junction Railway Station",
    },
    heroImage:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2813/x_0,y_0,w_4996,h_2813,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-spa-and-resort-pushkar/A_decorative_shade_at_our_5-star_resort_in_Pushkar_with_a_Ganesh_statue,_a_green_patch_and_trees_",
    cardImage:
      "https://assets.simplotel.com/simplotel/image/upload/x_0,y_172,w_3302,h_1858,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-and-resort-pushkar/Old_charm_with_new_age_ywbitd",
    gallery: [
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2813/x_0,y_0,w_4996,h_2813,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-spa-and-resort-pushkar/A_decorative_shade_at_our_5-star_resort_in_Pushkar_with_a_Ganesh_statue,_a_green_patch_and_trees_",
      "https://assets.simplotel.com/simplotel/image/upload/x_0,y_172,w_3302,h_1858,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-and-resort-pushkar/Old_charm_with_new_age_ywbitd",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3327/x_0,y_257,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/ananta-spa-and-resort-pushkar/Interiors_of_one_of_the_bedrooms_at_our_presidential_suite_in_Pushkar_featuring_a_bed,_a_blue_sofa_and_other_furniture_5761PS-68",
      "https://assets.simplotel.com/simplotel/image/upload/q_90,fl_progressive,w_1920,h_1080,f_auto,c_limit/ananta-spa-resorts-pushkar/15_26950974696_o_ht2pvh",
    ],
    shortDescription:
      "A 9-acre desert oasis blending 52 contemporary cottages and 20 bespoke tented suites, celebrating the spiritual mysticism and rugged elegance of Pushkar.",
    overview: [
      "Ananta Spa & Resort Pushkar is an oasis of calm located just a short drive from the historic pilgrimage town of Pushkar and its sacred lake.",
      "The resort weaves contemporary comforts with Rajasthani hospitality, showcasing distinctive standalone cottages and royal canopied tented suites set amid palm fronds, water fountains, and backdrop hills.",
      "Revered for its tranquil ambiance and restorative Mudra Spa, the resort provides an idyllic base for cultural explorations, camel safaris, and tranquil weekend retreats.",
    ],
    keyStats: [
      { label: "Resort Grounds", value: "9 Acres" },
      { label: "Cottages & Tents", value: "72 Keys" },
      { label: "Setting", value: "Desert & Hills" },
      { label: "Signature", value: "Tented Luxury Suites" },
    ],
    highlights: [
      {
        title: "Bespoke Tented Suites",
        description: "Regal air-conditioned canopied luxury tents with handcrafted wooden fixtures and modern comforts.",
        iconName: "Tent",
      },
      {
        title: "Palm Courtyard Pool",
        description: "A central turquoise pool bordered by palm gazebos and sun loungers.",
        iconName: "Waves",
      },
      {
        title: "Authentic Rajasthani Flavors",
        description: "Curated regional gastronomy and traditional thalis prepared with heritage spices.",
        iconName: "Utensils",
      },
      {
        title: "Mudra Ayurvedic Therapies",
        description: "Traditional wellness treatments designed to calm the senses and detoxify the body.",
        iconName: "Sparkles",
      },
    ],
    amenities: [
      { name: "Outdoor Swimming Pool", category: "leisure", iconName: "Waves", description: "Centrally positioned resort pool" },
      { name: "Mudra Ayurvedic Spa", category: "wellness", iconName: "Sparkles", description: "Rejuvenation massage & steam rooms" },
      { name: "Palm Courtyards", category: "leisure", iconName: "Compass", description: "Manicured gardens with seating gazebos" },
      { name: "Multi-Cuisine Dining", category: "dining", iconName: "Utensils", description: "Indoor restaurant & alfresco dining" },
      { name: "Banquet & Event Lawn", category: "business", iconName: "Users", description: "Accommodates gatherings and destination ceremonies" },
      { name: "High-Speed Wi-Fi", category: "convenience", iconName: "Wifi", description: "Wi-Fi access across guest areas" },
      { name: "Pushkar Sightseeing Desk", category: "convenience", iconName: "MapPin", description: "Assistance with desert safaris & temple visits" },
    ],
    dining: [
      {
        name: "Oasis Pushkar",
        tagline: "Fine Multi-Cuisine Restaurant",
        description: "Serves an exquisite selection of vegetarian and regional delicacies, complemented by Indian and global favorites.",
        cuisine: "Rajasthani Specialities, Indian & Continental",
        timing: "7:00 AM – 10:30 PM",
      },
      {
        name: "Gazebo Deck",
        tagline: "Poolside Evening Lounge",
        description: "Enjoy sunset beverages, aromatic masala chai, and evening snacks under shaded canopies.",
        cuisine: "Beverages, Teas & High Tea Snacks",
        timing: "4:00 PM – 9:00 PM",
      },
    ],
    accommodations: [
      {
        id: "pushkar-classic-cottage",
        name: "Classic Cottage",
        category: "Garden Cottage",
        size: "Approx. 420 sq.ft. (39 sq.m.)",
        occupancy: "Up to 3 Guests",
        bedType: "King Bed or Twin Beds",
        view: "Lush Greenery & Pathways",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-pushkar/The_interiors_of_the_Classic_Rooms_in_Pushkar_featuring_a_bed,_a_sofa_chair_and_exquisite_furnishings_at_our_resort_131",
          "https://assets.simplotel.com/simplotel/image/upload/x_267,y_0,w_1066,h_1066,r_0,c_crop,q_80,fl_progressive/w_1066,f_auto,c_fit/ananta-spa-and-resort-pushkar/LCT_with_Sit_Out_Bedroom_feugx9",
        ],
        description:
          "Independent single-level cottages boasting warm terracotta accents, polished stone floors, an inviting sit-out patio, and a spacious en-suite bathroom with premium amenities.",
        features: [
          "Private garden sit-out verandah",
          "Hand-carved wooden furnishings",
          "Spacious bathroom with rain shower",
          "Complimentary tea and coffee amenities",
        ],
        amenities: ["Wi-Fi", "Air Conditioning", "Sit-out Patio", "Rain Shower", "Tea Maker", "TV"],
      },
      {
        id: "pushkar-luxury-tent",
        name: "Luxury Tented Suite",
        category: "Heritage Canopied Tent",
        size: "Approx. 520 sq.ft. (48 sq.m.)",
        occupancy: "Up to 3 Guests",
        bedType: "Four-Poster King Bed",
        view: "Aravali Ridge & Palm Lawns",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-pushkar/Deluxe_Tent_zk9jm8",
          "https://assets.simplotel.com/simplotel/image/upload/x_443,y_0,w_1515,h_1515,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-pushkar/luxury-cottage-with-balcony",
        ],
        description:
          "Experience the timeless charm of royal caravan living without compromising on luxury. Fully climate-controlled canopied tents featuring ornate drapery, handcrafted colonial furnishings, and an elegant bathroom.",
        features: [
          "Double-insulated weather-proof canvas canopy",
          "Heritage four-poster bed with canopy drapes",
          "Modern en-suite bath with stone vanity",
          "Private wooden deck overlooking quiet lawns",
        ],
        amenities: ["Climate Control", "Private Veranda", "Four-Poster Bed", "Wi-Fi", "Safe", "Mini Fridge"],
      },
      {
        id: "pushkar-super-deluxe-jacuzzi",
        name: "Super Deluxe Cottage with Jacuzzi",
        category: "Jacuzzi Cottage",
        size: "Approx. 560 sq.ft. (52 sq.m.)",
        occupancy: "Up to 2 Adults",
        bedType: "King Bed",
        view: "Courtyard & Hill Horizon",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3327/x_0,y_257,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/ananta-spa-and-resort-pushkar/Interiors_of_one_of_the_bedrooms_at_our_presidential_suite_in_Pushkar_featuring_a_bed,_a_blue_sofa_and_other_furniture_5761PS-68",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3326/x_0,y_1384,w_4995,h_1942,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-and-resort-pushkar/Junior_Suite_Ananta_Spa_and_Resort,_Pushkar__(1",
        ],
        description:
          "A haven designed for romantic escapades and tranquil relaxation. Features a private open-air Jacuzzi plunge tub set within an enclosed private stone courtyard.",
        features: [
          "Private open-air heated jacuzzi tub",
          "Secluded private stone-walled courtyard",
          "Plush king bed with luxury linens",
          "Walk-in glass shower cubicle",
        ],
        amenities: ["Private Jacuzzi", "Enclosed Courtyard", "King Bed", "Air Conditioning", "Wi-Fi", "Bathrobes"],
      },
    ],
  },
  {
    id: "ajabgarh",
    slug: "ananta-spa-resort-ajabgarh",
    name: "Ananta Spa & Resort Ajabgarh",
    shortName: "Ajabgarh",
    tagline: "An intimate mountain hideaway in the secluded valley of Alwar",
    location: {
      city: "Ajabgarh",
      state: "Rajasthan",
      fullAddress: "Tehsil Thanagazi, District Alwar, Rajasthan 301027",
      setting: "Nestled quietly between the hills of Sariska and the ruins of Bhangarh",
      nearestTransit: "Approx. 95 km from Jaipur International Airport (JAI); 60 km from Dausa Railway Station",
    },
    heroImage:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-spa-and-resort-ajabgarh/Reception_a10391d9",
    cardImage:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_513,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/Fire_Villa_de9b59d1",
    gallery: [
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-spa-and-resort-ajabgarh/Reception_a10391d9",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_513,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/Fire_Villa_de9b59d1",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/fire-villa-with-sit-out-3",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/lagoon-villa",
    ],
    shortDescription:
      "An exclusive boutique hideaway tucked into the craggy hills of Ajabgarh, offering private pool villas, serene silence, and proximity to Sariska Tiger Reserve.",
    overview: [
      "Ananta Spa & Resort Ajabgarh is a hidden gem for travelers seeking privacy, natural stillness, and rugged mountain landscapes.",
      "Located in the serene valley near Alwar and Sariska, the boutique property provides a dramatic contrast of stone architecture against the untouched Aravali hills.",
      "The resort is centered around rejuvenating spa rituals, private courtyard living, and curated outdoor explorations, offering an ideal respite from city routines.",
    ],
    keyStats: [
      { label: "Ambiance", value: "Boutique Sanctuary" },
      { label: "Surroundings", value: "Sariska Foothills" },
      { label: "Signature", value: "Private Pool Villas" },
      { label: "Experiences", value: "Nature & Heritage" },
    ],
    highlights: [
      {
        title: "Secluded Valley Serenity",
        description: "Peaceful atmosphere far removed from urban noise, enveloped by the rugged Aravali landscape.",
        iconName: "Mountain",
      },
      {
        title: "Private Splash Pool Villas",
        description: "Standout villas featuring personal enclosed plunge pools and sun-dappled stone verandas.",
        iconName: "Waves",
      },
      {
        title: "Proximity to Sariska & Bhangarh",
        description: "Convenient access for wildlife safari drives at Sariska and visits to historical monuments.",
        iconName: "Compass",
      },
      {
        title: "Mudra Spa Wellness",
        description: "Customized Ayurvedic massages and wellness therapies using organic herbal oils.",
        iconName: "Sparkles",
      },
    ],
    amenities: [
      { name: "Central Swimming Pool", category: "leisure", iconName: "Waves", description: "Scenic pool facing craggy hills" },
      { name: "Mudra Spa", category: "wellness", iconName: "Sparkles", description: "Holistic therapy and steam rooms" },
      { name: "Courtyard Dining", category: "dining", iconName: "Coffee", description: "Farm-fresh regional and Indian menus" },
      { name: "Stargazing Terrace", category: "leisure", iconName: "Sparkles", description: "Clear unpolluted night skies" },
      { name: "Safari & Tour Desk", category: "convenience", iconName: "Compass", description: "Guidance for Sariska and heritage circuits" },
      { name: "Wi-Fi in Villas", category: "convenience", iconName: "Wifi", description: "Connected access in guest accommodations" },
    ],
    dining: [
      {
        name: "Valley Dine",
        tagline: "Rustic Elegance & Farm Flavours",
        description: "Freshly prepared home-style Rajasthani curries, oven-baked rotis, and comforting continental dishes.",
        cuisine: "Farm-to-Table, Regional Indian",
        timing: "7:30 AM – 10:30 PM",
      },
    ],
    accommodations: [
      {
        id: "ajabgarh-luxury-cottage",
        name: "Bamboo Villa with Courtyard",
        category: "Courtyard Cottage",
        size: "Approx. 480 sq.ft. (45 sq.m.)",
        occupancy: "Up to 3 Guests",
        bedType: "King Bed",
        view: "Valley & Private Courtyard",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_865,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/bamboo-villa",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/earth-villa-1",
        ],
        description:
          "Charming standalone villa built with earthy textures and sustainable bamboo accents, featuring an intimate walled courtyard, cozy reading nook, and an expansive bathroom with garden views.",
        features: [
          "Private stone-paved courtyard",
          "Handcrafted rustic furnishings",
          "Rainfall shower and deluxe bath amenities",
          "Individual climate controls",
        ],
        amenities: ["Private Courtyard", "King Bed", "Air Conditioning", "Wi-Fi", "Coffee Station", "Safe"],
      },
      {
        id: "ajabgarh-private-pool-villa",
        name: "Fire Villa with Private Pool",
        category: "Pool Villa",
        size: "Approx. 750 sq.ft. (70 sq.m.)",
        occupancy: "Up to 3 Guests",
        bedType: "King Bed",
        view: "Mountain Ridge & Private Pool",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/fire-villa-with-sit-out-3",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/lagoon-villa",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_834,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/AMP_6419-HDR",
        ],
        description:
          "The signature villa at Ajabgarh. Features an exclusive personal plunge pool, open-air sun deck, private courtyard lounge, and serene views of the adjacent Aravali hillsides.",
        features: [
          "Personal private plunge pool in enclosed garden",
          "Spacious sun terrace with cushioned loungers",
          "En-suite stone bathroom with deep soaking tub",
          "Personalized in-villa breakfast setup on request",
        ],
        amenities: ["Private Plunge Pool", "Sun Deck", "Bathtub", "King Bed", "Wi-Fi", "Mini Bar"],
      },
    ],
  },
  {
    id: "jaipur",
    slug: "ananta-spa-resort-jaipur",
    name: "Ananta Spa & Resort Jaipur",
    shortName: "Jaipur",
    tagline: "Royal palatial grandeur on the gateway of the Pink City",
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      fullAddress: "Delhi-Jaipur Highway, Kukas, Jaipur, Rajasthan 302028",
      setting: "Conveniently positioned in Kukas, adjacent to the historic Amer Fort trail",
      nearestTransit: "Approx. 32 km from Jaipur International Airport (JAI); 22 km from Jaipur Junction Railway Station",
    },
    heroImage:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3335/x_0,y_261,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-hotels-resorts/0A4A7146_k3um8e",
    cardImage:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3335/x_234,y_648,w_4766,h_2683,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/ananta-spa-resorts-jaipur/095A1236-HDR_bsfhxu",
    gallery: [
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3335/x_0,y_261,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-hotels-resorts/0A4A7146_k3um8e",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3335/x_234,y_648,w_4766,h_2683,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/ananta-spa-resorts-jaipur/095A1236-HDR_bsfhxu",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_468,w_4360,h_2453,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-resort-jaipur/Presidential_Suite(3",
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_514,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-resort-jaipur/Evoke(2",
    ],
    shortDescription:
      "A grand royal retreat on the Kukas highway blending classical Rajputana architecture, opulent domes, expansive banquet halls, and contemporary leisure.",
    overview: [
      "Ananta Spa & Resort Jaipur stands as a magnificent tribute to Rajasthan's royal heritage, featuring grand jharokhas, carved stone pillars, and manicured palatial gardens.",
      "Ideally situated in the hospitality enclave of Kukas near Amer Fort, the resort offers effortless connectivity for leisure travelers, weddings, and corporate gatherings.",
      "Guests can enjoy royal dining experiences, unwind at the expansive pool deck, or recharge with signature wellness therapies at the Mudra Spa.",
    ],
    keyStats: [
      { label: "Style", value: "Palatial Rajputana" },
      { label: "Location", value: "Kukas, Jaipur" },
      { label: "Events", value: "Grand Ballrooms" },
      { label: "Heritage", value: "Minutes from Amer Fort" },
    ],
    highlights: [
      {
        title: "Regal Rajputana Architecture",
        description: "Spectacular stone craftsmanship, jharokhas, and palatial courtyards reflecting royal heritage.",
        iconName: "Castle",
      },
      {
        title: "Amer Fort Proximity",
        description: "Situated on the historic golden triangle corridor with direct access to iconic Jaipur monuments.",
        iconName: "MapPin",
      },
      {
        title: "Grand Royal Swimming Pool",
        description: "A sweeping illuminated pool surrounded by arched pavilions and landscaped greens.",
        iconName: "Waves",
      },
      {
        title: "Palatial Banqueting Venues",
        description: "Extensive indoor ballrooms and vast outdoor lawns catering to majestic destination weddings.",
        iconName: "Users",
      },
    ],
    amenities: [
      { name: "Royal Swimming Pool", category: "leisure", iconName: "Waves", description: "Large pool with poolside sun loungers" },
      { name: "Mudra Spa & Salon", category: "wellness", iconName: "Sparkles", description: "Therapeutic massage and grooming rituals" },
      { name: "Fitness Pavilion", category: "wellness", iconName: "Dumbbell", description: "Modern gym equipment" },
      { name: "Signature Dining", category: "dining", iconName: "Utensils", description: "Royal Rajasthani & International delicacies" },
      { name: "Grand Ballrooms & Lawns", category: "business", iconName: "Users", description: "Extensive pillarless event facilities" },
      { name: "Valet & Concierge", category: "convenience", iconName: "Car", description: "Comprehensive guest mobility support" },
      { name: "High-Speed Wi-Fi", category: "convenience", iconName: "Wifi", description: "Seamless connectivity throughout the resort" },
    ],
    dining: [
      {
        name: "Sheesh Mahal Dining",
        tagline: "Royal Gastronomy",
        description: "An opulent multi-cuisine restaurant presenting authentic Rajasthani royal thalis alongside global culinary classics.",
        cuisine: "Rajasthani Royal, Pan-Indian & Global",
        timing: "7:00 AM – 11:00 PM",
      },
      {
        name: "Sura Lounge & Bar",
        tagline: "Courtyard Cocktail Lounge",
        description: "An atmospheric lounge bar offering premium spirits, signature cocktails, and gourmet appetizers.",
        cuisine: "Spirits, Cocktails & Hors d'œuvres",
        timing: "12:00 PM – 11:30 PM",
      },
    ],
    accommodations: [
      {
        id: "jaipur-royal-deluxe",
        name: "Evoke Deluxe Room",
        category: "Palace Deluxe Room",
        size: "Approx. 460 sq.ft. (43 sq.m.)",
        occupancy: "Up to 3 Guests",
        bedType: "King Bed or Twin Beds",
        view: "Lawn or Courtyard View",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_514,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-resort-jaipur/Evoke(2",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3335/x_234,y_648,w_4766,h_2683,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/ananta-spa-resorts-jaipur/095A1236-HDR_bsfhxu",
        ],
        description:
          "Elegantly crafted room reflecting the warm hues of Jaipur. Equipped with ornate carved furniture, plush bedding, a marble bathroom, and peaceful courtyard views.",
        features: [
          "Artisan wooden furniture and traditional motifs",
          "Marble en-suite bathroom with glass shower cubicle",
          "Ergonomic work station",
          "Smart LED TV and high-speed Wi-Fi",
        ],
        amenities: ["Wi-Fi", "Air Conditioning", "Marble Bath", "Smart TV", "Coffee Maker", "Safe"],
      },
      {
        id: "jaipur-executive-club-suite",
        name: "Elegant Suite",
        category: "Palace Suite",
        size: "Approx. 820 sq.ft. (76 sq.m.)",
        occupancy: "Up to 3 Adults",
        bedType: "King Bed",
        view: "Pool & Palatial Courtyards",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_658,y_270,w_3063,h_3063,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-resort-jaipur/Elegant(1",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_514,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-resort-jaipur/Evoke(2",
        ],
        description:
          "A regal suite featuring a separated living parlor, master bedroom with decorative archways, deep soaking bathtub, and views overlooking the illuminated resort courtyards.",
        features: [
          "Private living parlor with velvet sofas",
          "Deep soaking bathtub and separate shower",
          "Walk-in dressing space",
          "Complimentary fruit platter and welcome treats",
        ],
        amenities: ["Bathtub", "Living Parlor", "Dressing Area", "Wi-Fi", "Mini Bar", "Espresso Machine"],
      },
      {
        id: "jaipur-presidential-suite",
        name: "Presidential Plunge Pool Suite",
        category: "Royal Signature Suite",
        size: "Approx. 1,450 sq.ft. (135 sq.m.)",
        occupancy: "Up to 4 Guests",
        bedType: "Grand King Bed",
        view: "Panoramic Aravali Horizon & Pool Deck",
        images: [
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_468,w_4360,h_2453,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-resort-jaipur/Presidential_Suite(3",
          "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_622,y_0,w_3333,h_3333,r_0,c_crop,q_80,fl_progressive/w_1237,f_auto,c_fit/ananta-spa-resort-jaipur/Presidential_Suite(3",
        ],
        description:
          "The pinnacle of luxury in Kukas. Includes a private open-air terrace with a personal plunge pool, regal dining table, opulent marble bathroom, and dedicated VIP hospitality.",
        features: [
          "Private rooftop terrace with temperature plunge pool",
          "Grand living salon with 8-seat royal dining area",
          "Master bedroom with panoramic jharokha windows",
          "Whirlpool jacuzzi bath in master ensuite",
        ],
        amenities: ["Private Plunge Pool", "Whirlpool Tub", "Private Terrace", "Dining Salon", "VIP Concierge", "Wi-Fi"],
      },
    ],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAllPropertySlugs(): string[] {
  return properties.map((p) => p.slug);
}
