import React, { useState, useEffect } from 'react';

const TestimonialSection = () => {
    const [testimonials, setTestimonials] = useState([
        {
            message: "I love the products from SFG Jewellery and Gems! The quality is amazing and the designs are stunning.",
            author: "Alice Johnson",
            image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            message: "Shopping at SFG Jewellery and Gems has been a wonderful experience. The customer service is top-notch and the delivery was fast.",
            author: "John Doe",
            image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            message: "I am extremely satisfied with my purchase from SFG Jewellery and Gems. The jewelry exceeded my expectations and I receive compliments every time I wear it.",
            author: "Jane Smith",
            image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ]);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="bg-blue-800 py-16 text-white rounded-md" style={{ backgroundColor: "#292b63" }}>
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-orange-600">What Our Customers Say</h2>
                <div className="flex justify-center items-center mb-8">
                    <img src={testimonials[currentTestimonialIndex].image} alt={testimonials[currentTestimonialIndex].author} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <p className="text-lg">{testimonials[currentTestimonialIndex].message}</p>
                        <p className="text-xl font-semibold">- {testimonials[currentTestimonialIndex].author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
