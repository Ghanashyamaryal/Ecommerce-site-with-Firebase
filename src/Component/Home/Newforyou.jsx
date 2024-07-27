import React from 'react';

const NewForYou = () => {
  // Sample data for categories
  const categoryItems = [
    {
      imageUrl: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 1',
      Price: 'Description of Gift 1',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 2',
      Price: 'Description of Gift 2',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3634366/pexels-photo-3634366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gift 3',
      Price: 'Description of Gift 3',
    },
    // Add more categories as needed
  ];

  return (
    <div className="container mx-auto my-12 p-4">
      <h2 className="font-bold mb-8 text-center text-orange-700 text-4xl md:text-5xl">New For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categoryItems.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64">
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h3 className="text-white text-xl font-semibold mb-2">{category.title}</h3>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Explore
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700">{category.Price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="text-blue-500 hover:text-blue-700 font-bold">
          Next
        </button>
      </div>
    </div>
  );
};

export default NewForYou;
