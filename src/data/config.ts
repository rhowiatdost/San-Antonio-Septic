export const COMPANY_INFO = {
  name: "San Antonio Septic LLC",
  phone: "(210) 405-5918",
  email: "contact@sanantonioseptics.com",
  address: "2626 McCullough Ave, San Antonio, TX 78212",
  businessHours: "Mon-Fri: 8:00 AM to 6:00 PM; Sat: 8:00 AM to 3:00 PM",
  emergencyAvailability: "24/7 Emergency Service Available for Platinum & Diamond Members",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com/business",
  },
};

export const HIGHER_RATINGS_REFERRAL = {
  name: "Higher Ratings LLC",
  url: "https://www.higherratingsllc.com",
  description: "Septic system design, site evaluations, planning materials, and permitting support.",
  primaryHeadline: "Don't Have a Septic Design Yet?",
  supportingCopy: "Before we can install your new septic system, your property may require a site evaluation, septic system design, planning materials, and permitting documentation. For professional septic system design services, visit Higher Ratings LLC.",
};

export const MAINTENANCE_PLANS = [
  {
    id: "bronze",
    name: "Bronze",
    tagline: "Essential Maintenance",
    description: "For property owners who want basic professional maintenance and system monitoring.",
    monthlyPrice: 24.99,
    annualPrice: 250,
    inspections: 3,
    priorityLevel: "Priority scheduling over non-members",
    repairDiscount: 0,
    pumpingCredit: 25,
    emergencyServiceFeeDiscount: 0,
    isPopular: false,
    features: [
      "Required routine system inspections (3/Year)",
      "Basic system performance inspection",
      "Visual inspection of accessible components",
      "Basic cleaning of serviceable filters",
      "Basic troubleshooting",
      "Inspection of spray heads where applicable",
      "Inspection of aerator operation",
      "Inspection of pump operation",
      "Inspection of control panel",
      "Maintenance documentation",
      "Service reminders",
      "Priority scheduling over non-members",
      "0% discount on eligible repairs",
      "$25 annual pumping credit",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    tagline: "Preventive Maintenance",
    description: "Enhanced monitoring with alarm troubleshooting and entry-level discounts.",
    monthlyPrice: 39.99,
    annualPrice: 399,
    inspections: 3,
    priorityLevel: "Priority over bronze members",
    repairDiscount: 5,
    pumpingCredit: 50,
    emergencyServiceFeeDiscount: 0,
    isPopular: false,
    features: [
      "Everything in Bronze, plus:",
      "Alarm troubleshooting assessment",
      "Priority scheduling over bronze members",
      "5% discount on eligible repairs",
      "$50 annual pumping credit",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "Complete Preventive Care",
    description: "Our most popular plan providing comprehensive preventive maintenance and solid discounts.",
    monthlyPrice: 54.99,
    annualPrice: 550,
    inspections: 3,
    priorityLevel: "Priority over silver members",
    repairDiscount: 10,
    pumpingCredit: 50,
    emergencyServiceFeeDiscount: 5,
    isPopular: true,
    features: [
      "Everything in Silver, plus:",
      "System optimization",
      "Enhanced preventive maintenance",
      "Annual comprehensive system health review",
      "Priority scheduling over silver members",
      "One complimentary standard service call annually if repaired by us!",
      "5% discount on emergency service calls",
      "10% discount on eligible repairs",
      "$50 annual pumping credit",
      "Includes one basic service call per year with no diagnostic fee",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "Advanced System Protection",
    description: "Preferred pricing on components with advanced system protection and high priority.",
    monthlyPrice: 74.99,
    annualPrice: 750,
    inspections: 3,
    priorityLevel: "Priority over gold members",
    repairDiscount: 15,
    pumpingCredit: 150,
    emergencyServiceFeeDiscount: 7.5,
    isPopular: false,
    features: [
      "Everything in Gold, plus:",
      "Preferred pricing on selected routine mechanical components",
      "Preferred pricing for selected electrical components",
      "Priority scheduling over gold members",
      "7.5% discount on emergency service calls",
      "15% discount on eligible repairs",
      "$150 annual pumping credit",
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    tagline: "Total Septic Care",
    label: "MAXIMUM PROTECTION",
    description: "Maximum septic maintenance coverage with fewer surprises and greater long-term protection.",
    monthlyPrice: 109.99,
    annualPrice: 1100,
    inspections: 4,
    priorityLevel: "Highest priority scheduling",
    repairDiscount: 20,
    pumpingCredit: 200,
    emergencyServiceFeeDiscount: 10,
    isPopular: false,
    features: [
      "Everything from the lower plans, plus:",
      "Highest priority scheduling",
      "Comprehensive preventive maintenance",
      "Included standard diagnostic service calls",
      "Covered routine mechanical repairs subject to plan terms",
      "Covered routine electrical repairs subject to plan terms",
      "Selected sprinkler head replacement where applicable",
      "Selected filter replacement",
      "10% discount on emergency service calls",
      "20% discount on eligible repairs",
      "$200 annual pumping credit",
      "Unused pumping credits roll over into the next year (max two years)",
      "Dedicated account support",
      "Detailed annual septic system health report",
    ],
  },
];

export const SERVICE_AREAS = [
  "San Antonio", "Boerne", "Bulverde", "Castle Hills", "Hill Country Village",
  "Hollywood Park", "China Grove", "Von Ormy", "Garden Ridge", "Grey Forest",
  "Timberwood Park", "Adkins", "Atascosa", "Lytle", "Devine", "Natalia",
  "Elmendorf", "Losoya", "Somerset", "Spring Branch", "New Braunfels",
  "Seguin", "Schertz", "Cibolo", "Helotes", "Leon Valley", "Fair Oaks Ranch",
  "Castroville", "Hondo", "Floresville", "La Vernia", "Canyon Lake"
];

export const FAQS = [
  {
    question: "How often should I pump my septic tank?",
    answer: "For most residential properties, we recommend pumping every 3 to 5 years. However, this depends on the size of your tank, the number of people in your household, and your overall water usage. Commercial properties or homes with heavy usage may require more frequent pumping. Always check your local regulations as requirements may vary by jurisdiction."
  },
  {
    question: "How often does an aerobic septic system need maintenance?",
    answer: "Aerobic septic systems generally require routine maintenance inspections three times per year to ensure all mechanical components (aerators, pumps, alarms) are functioning correctly and that effluent quality meets regulatory standards. Note that maintenance frequency may be dictated by your local county or state regulations."
  },
  {
    question: "What does a septic maintenance contract include?",
    answer: "A standard maintenance contract includes regular system inspections, basic filter cleaning, operational checks of mechanical and electrical components, and compliance reporting to local authorities. Upgraded plans like our San Antonio Septic Care Plans also include pumping credits, repair discounts, and priority service."
  },
  {
    question: "What are the signs that my septic tank needs pumping?",
    answer: "Common signs include slow draining sinks and toilets, gurgling sounds in the plumbing, sewage odors in your yard or home, lush green patches of grass over the drain field, or visible sewage backup."
  },
  {
    question: "Why is my septic alarm going off?",
    answer: "A septic alarm typically indicates a high water level in the pump tank or an issue with the aerator. This could be due to a failed pump, a tripped breaker, excessive water usage, or a blocked line. It's important to reduce water usage immediately and contact us for service."
  },
  {
    question: "Do you work on both residential and commercial septic systems?",
    answer: "Yes! San Antonio Septic LLC provides comprehensive services for both residential properties and commercial facilities, including restaurants, RV parks, retail centers, and office buildings."
  },
  {
    question: "Do you install new septic systems?",
    answer: "Yes, we provide professional installation services for both conventional and aerobic septic systems, ensuring they meet all local design and regulatory requirements."
  },
  {
    question: "Do I need a septic system design before installation?",
    answer: "Yes. Before installing a new septic system, a professional site evaluation and engineered septic design are required to ensure the system is appropriate for your soil type and property layout, and to obtain the necessary permits from the local jurisdiction."
  },
  {
    question: "What if I don't have a septic design yet?",
    answer: "If your property still needs a septic system design, visit Higher Ratings LLC at www.HigherRatingsLLC.com for septic system design services. Once your system is designed and ready for installation, contact San Antonio Septic LLC to discuss the next steps."
  },
  {
    question: "Where can I get a septic system designed?",
    answer: "We recommend visiting Higher Ratings LLC (www.HigherRatingsLLC.com) for professional site evaluations, septic system designs, planning materials, and permitting support. Requirements for design can vary by jurisdiction, so working with a knowledgeable local professional is key."
  },
  {
    question: "Can you repair an existing septic system?",
    answer: "Absolutely. We offer expert troubleshooting and repairs for all septic system components, including pumps, aerators, alarms, control panels, and drain fields."
  },
  {
    question: "Do you pump grease traps?",
    answer: "Yes, we provide commercial grease trap pumping services to keep your restaurant or commercial kitchen compliant with local health regulations and operating smoothly."
  },
  {
    question: "How do the San Antonio Septic Care Plans work?",
    answer: "Our Care Plans are designed to provide progressive levels of preventive maintenance, priority scheduling, repair discounts, and annual pumping credits. You pay a low monthly or annual fee, and we handle the routine inspections and maintenance required to keep your system healthy."
  },
  {
    question: "Can my pumping credit roll over?",
    answer: "On our Diamond Plan, unused pumping credits can roll over into the next year for a total of two years. For other plans, credits are applied annually toward your next scheduled pump but do not roll over."
  },
  {
    question: "What is included in the Diamond Plan?",
    answer: "The Diamond Plan provides maximum protection, including 4 inspections per year, highest priority scheduling, included standard diagnostic service calls, covered routine mechanical and electrical repairs (subject to terms), 20% repair discounts, a $200 annual pumping credit (rolls over up to 2 years), and more."
  },
  {
    question: "Can I upgrade my maintenance plan?",
    answer: "Yes, you can upgrade your maintenance plan at any time to take advantage of higher discounts, more pumping credits, and better priority scheduling."
  },
  {
    question: "Do you offer monthly and annual memberships?",
    answer: "Yes, we offer both flexible monthly billing and discounted annual billing options for all of our San Antonio Septic Care Plans."
  },
  {
    question: "Which maintenance plan is right for me?",
    answer: "If you want basic compliance, Bronze is great. For added value like repair discounts and pumping credits, consider Silver or Gold. For complete peace of mind and maximum coverage on components and diagnostics, Platinum or Diamond is the best choice."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve San Antonio and the surrounding Texas Hill Country and South Texas communities. Please check our Service Areas page for a more complete list of the cities and counties we cover."
  }
];
