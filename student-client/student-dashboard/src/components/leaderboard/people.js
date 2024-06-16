const people = [

    //English

    { id: 1,
      name: 'Aditya Palande',
      rank : '1',
      percent: "100",
      category : "English",
      image:
        'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    { id: 2,
      name: 'Kush Garg',
      rank : '2',
      percent: "99",
      category : "English",
      image:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
    {
        id: 3,
        name: 'Shashank Bankar',
        rank : '3',
        percent: "96",
        category : "English",
        image:
          'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      },
      {
        id: 4,
        name: 'Divija',
        rank : '4',
        percent: "96",
        category : "English",
        image:
          'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },
      {
        id: 5,
        name: 'Rakshita',
        rank : '5',
        percent: "93",
        category : "English",
        image:
          'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      },
      {
        id: 6,
        name: 'Pratyush',
        rank : '6',
        percent: "91",
        category : "English",
        image:
          'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },
      {
        id: 7,
        name: 'Osama',
        rank : '7',
        percent: "90",
        category : "English",
        image:
          'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      },
      {
        id: 8,
        name: 'Khushi',
        rank : '8',
        percent: "87",
        category : "English",
        image:
          'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },
      {
        id: 9,
        name: 'Divij',
        rank : '9',
        percent: "86",
        category : "English",
        image:
          'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      },
      {
        id: 10,
        name: 'Rakshit',
        rank : '10',
        percent: "86",
        category : "English",
        image:
          'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },


      //Law

      { id: 11,
        name: 'Khushi',
        rank : '1',
        percent: "100",
        category : "Law",
        image:
          'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      },
      { id: 12,
        name: 'Divij',
        rank : '2',
        percent: "99",
        category : "Law",
        image:
          'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },
      {
          id: 13,
          name: 'Shashank',
          rank : '3',
          percent: "96",
          category : "Law",
          image:
            'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        },
        {
          id: 14,
          name: 'Osama',
          rank : '4',
          percent: "96",
          category : "Law",
          image:
            'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        },
        {
          id: 15,
          name: 'Aditya',
          rank : '5',
          percent: "93",
          category : "Law",
          image:
            'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        },
        {
          id: 16,
          name: 'Pratyush',
          rank : '6',
          percent: "91",
          category : "Law",
          image:
            'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        },
        {
          id: 17,
          name: 'Rakshita',
          rank : '7',
          percent: "90",
          category : "Law",
          image:
            'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        },
        {
          id: 18,
          name: 'Divija',
          rank : '8',
          percent: "87",
          category : "Law",
          image:
            'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        },
        {
          id: 19,
          name: 'Kush',
          rank : '9',
          percent: "86",
          category : "Law",
          image:
            'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        },
        {
          id: 20,
          name: 'Aditya',
          rank : '10',
          percent: "86",
          category : "Law",
          image:
            'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        },

        //Engineering

        { id: 21,
            name: 'Aditya Palande',
            rank : '1',
            percent: "100",
            category : "Engineering",
            image:
              'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
          },
          { id: 22,
            name: 'Kush Garg',
            rank : '2',
            percent: "99",
            category : "Engineering",
            image:
              'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
          },
          {
              id: 23,
              name: 'Shashank Bankar',
              rank : '3',
              percent: "96",
              category : "Engineering",
              image:
                'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            },
            {
              id: 24,
              name: 'Divija',
              rank : '4',
              percent: "96",
              category : "Engineering",
              image:
                'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            },
            {
              id: 25,
              name: 'Rakshita',
              rank : '5',
              percent: "93",
              category : "Engineering",
              image:
                'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            },
            {
              id: 26,
              name: 'Pratyush',
              rank : '6',
              percent: "91",
              category : "Engineering",
              image:
                'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            },
            {
              id: 27,
              name: 'Osama',
              rank : '7',
              percent: "90",
              category : "Engineering",
              image:
                'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            },
            {
              id: 28,
              name: 'Khushi',
              rank : '8',
              percent: "87",
              category : "Engineering",
              image:
                'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            },
            {
              id: 29,
              name: 'Divij',
              rank : '9',
              percent: "86",
              category : "Engineering",
              image:
                'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            },
            {
              id: 30,
              name: 'Rakshit',
              rank : '10',
              percent: "86",
              category : "Engineering",
              image:
                'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            },


            // Science

            { id: 31,
                name: 'Khushi',
                rank : '1',
                percent: "100",
                category : "Science",
                image:
                  'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
              },
              { id: 32,
                name: 'Divij',
                rank : '2',
                percent: "99",
                category : "Science",
                image:
                  'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
              },
              {
                  id: 33,
                  name: 'Shashank',
                  rank : '3',
                  percent: "96",
                  category : "Science",
                  image:
                    'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
                },
                {
                  id: 34,
                  name: 'Osama',
                  rank : '4',
                  percent: "96",
                  category : "Science",
                  image:
                    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
                },
                {
                  id: 35,
                  name: 'Aditya',
                  rank : '5',
                  percent: "93",
                  category : "Science",
                  image:
                    'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
                },
                {
                  id: 36,
                  name: 'Pratyush',
                  rank : '6',
                  percent: "91",
                  category : "Science",
                  image:
                    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
                },
                {
                  id: 37,
                  name: 'Rakshita',
                  rank : '7',
                  percent: "90",
                  category : "Science",
                  image:
                    'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
                },
                {
                  id: 38,
                  name: 'Divija',
                  rank : '8',
                  percent: "87",
                  category : "Science",
                  image:
                    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
                },
                {
                  id: 39,
                  name: 'Kush',
                  rank : '9',
                  percent: "86",
                  category : "Science",
                  image:
                    'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
                },
                {
                  id: 40,
                  name: 'Aditya',
                  rank : '10',
                  percent: "86",
                  category : "Science",
                  image:
                    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
                },
        ]


    
  

  export default people;