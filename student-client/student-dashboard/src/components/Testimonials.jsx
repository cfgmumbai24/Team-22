import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
              First-generation learner who hails from the Nomadic Tribe community of the Vidarbha region (Central India). First-generation learners in India face the problem of accessing higher education opportunities. His own lived experience with this problem motivated him to start "Eklavya India", an organisation that promotes higher education and enables grassroots leadership of first-generation learners in Central India.              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://media.licdn.com/dms/image/C4D03AQEXIZSrDeIZ7A/profile-displayphoto-shrink_400_400/0/1642366570503?e=1723680000&v=beta&t=zNzrSrw0Sy_6FWZU5PTMBRV2S5P0GGpom6ilHrOQFms"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">Raju Kendre</div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Eklavya Org</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
