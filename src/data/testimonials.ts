type Testimonial = {
    name: string;
    job: string;
    stars: number;
    description: string;
  };
  
  const testimonials: Testimonial[] = [
    {
      name: "Imane Akkal",
      job: "Tourism Enthusiast",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      name: "Karim Boulad",
      job: "Travel Blogger",
      stars: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac ligula vitae tortor dapibus vehicula in sed neque.",
    },
    {
      name: "Linda Haddad",
      job: "Luxury Travel Advisor",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse vitae venenatis eros, at luctus ex.",
    },
  ];
  
  export default testimonials;
  