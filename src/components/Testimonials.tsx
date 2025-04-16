import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      quote: "The most fun I've had playing bingo online! Great community and amazing prizes!",
      rating: 5
    },
    {
      name: "Mike Peterson",
      quote: "Smooth gameplay, fair odds, and excellent customer support. Highly recommended!",
      rating: 5
    },
    {
      name: "Lisa Chen",
      quote: "I won my first game last week! The excitement was incredible. Can't wait to play more!",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">What Players Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="text-purple-500 font-bold">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};