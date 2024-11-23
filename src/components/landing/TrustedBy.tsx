const TrustedBy = () => {
  const testimonials = [
    {
      quote: "EduExcel has transformed my learning experience. The teachers are incredibly supportive!",
      author: "Sarah Chen",
      role: "Grade 11 Student"
    },
    {
      quote: "My daughter's grades have improved significantly since joining. The structured approach works wonders!",
      author: "Michael Thompson",
      role: "Parent"
    },
    {
      quote: "The personalized attention and detailed feedback helped me excel in my exams.",
      author: "David Kumar",
      role: "Grade 12 Student"
    },
    {
      quote: "The quality of education and dedication of teachers here is exceptional!",
      author: "Lisa Rodriguez",
      role: "Parent"
    }
  ];

  return (
    <section className="py-24 bg-neutral-200/50">
      <div className="container-padding">
        <h2 className="text-center text-2xl font-bold mb-12">What Our Students and Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl">
              <p className="text-neutral-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex flex-col">
                <span className="font-semibold text-primary">{testimonial.author}</span>
                <span className="text-sm text-neutral-600">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;