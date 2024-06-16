const announcements = [
    {
        title: 'Pravara Rural Education Society - Principal',
        description: 'The Pravara Rural Education Society is looking for a Principal to lead their institution in enhancing educational opportunities for rural students. This role requires a strong background in educational leadership and a commitment to community development.',
        // image: 'https://images.pexels.com/photos/4308098/pexels-photo-4308098.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://www.google.com/search?q=jobs+for+rural+area+students&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&htidocid=-xaL0_XxXprMMOSuAAAAAA%3D%3D&sa=X&ved=2ahUKEwjo1MG_0N6GAxUjbmwGHSRlAjMQkd0GegQIEhAB#fpstate=tldetail&htivrt=jobs&htiq=jobs+for+rural+area+students&htidocid=-xaL0_XxXprMMOSuAAAAAA%3D%3D&sxsrf=ADLYWILq3OwF1OOIyNGGMjiEVqIwGO_hWw:1718489562775',
        cat : "Job"
    },
    {
        title: 'Indeed Full Time Jobs',
        description: 'Find full-time job opportunities across various industries. These positions offer stability, career growth, and benefits, making them ideal for professionals looking for long-term employment.',
      //   image: 'https://images.pexels.com/photos/4308043/pexels-photo-4308043.jpeg?auto=compress&cs=tinysrgb&w=600', // Add image URL here
        link: 'https://in.indeed.com/jobs?cgtk=f28a6170-8ae3-46f0-8ee4-ed4b822b76e8&from=careerguidepromo-IN&q=full+time&vjk=408b6608c45c2294',
        cat : "Job"
    },
    {
      title: 'buddy4study',
      description: 'PARD INDIA (Pragathi Association for Rural Development) has launched the “V-Kid Scholarship Program (VKSP)” in order to enhance the educational prospects of underprivileged students residing in the rural areas.',
    //   image: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.buddy4study.com/article/scholarships-for-rural-students#:~=Scholarships%20for%20Rural%20Students%20%E2%80%93%20V,residing%20in%20the%20rural%20areas.',
      cat : "Scholarship"
    },
    {
      title: 'rural-scholarships',
      description: 'For some people, pursuing higher education can be the best way to invest in the future. A degree can help you find a career you love with a higher salary, benefits, a work-life balance, and more. However, getting a degree is an investment and an expensive one at that.',
    //   image: 'https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://study.com/resources/rural-scholarships-college-guide.html',
      cat : "Scholarship"
    },
    {
        title: 'Rural Vacancies',
        description: 'Browse job openings specifically targeted towards rural areas. These positions are designed to support the growth and development of rural communities.',
      //   image: 'https://images.pexels.com/photos/763934/pexels-photo-763934.jpeg?auto=compress&cs=tinysrgb&w=600', 
        link: 'https://in.indeed.com/q-rural-school-jobs.html?vjk=587df5c672ec3513',
        cat : "Job"
      },
      {
        title: 'Rural School Jobs',
        description: 'Explore teaching and administrative job opportunities in rural schools. These roles are crucial for improving education and fostering development in rural communities.',
      //   image: 'https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=600',
        cat : "Job",
        link: 'https://in.indeed.com/q-rural-school-jobs.html',
      },
    {
      title: 'youth-programs',
      description: 'The foundation annually awards scholarships to an exceptional group of rural students for their first year of college or vocational school. All applicants require partnership with an NTCA—The Rural Broadband Association member company to be eligible.FRS has awarded over $1 million in scholarships since its inception.',
    //   image: 'https://images.pexels.com/photos/3381571/pexels-photo-3381571.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://www.frs.org/programs/youth-programs/scholarships',
      cat : "Scholarship"
    },
    {
      title: 'Collegeraptor',
      description: 'If you’re going to college in the city, you can still apply for these great opportunities. One of these scholarships awards $5,000 to four students who will be majoring in a STEM or medical field. There are also two $1,500 scholarships available, one $5,000 scholarship, and one $7,000.',
    //   image: 'https://images.pexels.com/photos/5909870/pexels-photo-5909870.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://www.collegeraptor.com/paying-for-college/articles/scholarships/scholarships-students-live-rural-areas/',
      cat : "Scholarship"
    },
    {
        title: 'Indeed Remote Jobs',
        description: 'Discover remote job opportunities that allow you to work from anywhere. Perfect for those seeking flexibility and the ability to balance work with personal commitments.',
      //   image: 'https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://in.indeed.com/jobs?cgtk=f28a6170-8ae3-46f0-8ee4-ed4b822b76e8&from=careerguidepromo-IN&q=remote+jobs&vjk=a964e0d7f4863e8b',
        cat : "Job"
      },
    {
      title: 'mykaleidoscope',
      description: 'FRS annually awards scholarships to rural students for their first year of 2-year or 4-year college, or vocational school. All applicants require sponsorship by an NTCA—The Rural Broadband Association member company to be eligible. FRS has awarded over $1 million in scholarships since its inception.',
    //   image: 'https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'https://apply.mykaleidoscope.com/scholarships/FRSScholarships2024',
      cat : "Scholarship"
    },
    {
        title: 'Indeed Part Time Jobs',
        description: 'Explore a variety of part-time job opportunities that cater to different skill sets and interests. Ideal for students and individuals looking to supplement their income with flexible working hours.',
      //   image: 'https://images.pexels.com/photos/4307866/pexels-photo-4307866.jpeg?auto=compress&cs=tinysrgb&w=600',
        link: 'https://in.indeed.com/jobs?cgtk=f28a6170-8ae3-46f0-8ee4-ed4b822b76e8&from=careerguidepromo-IN&q=part+time&vjk=823293be3a918c56',
        cat : "Job"
    },
  ]



export default announcements;

