
export default  function getJsonData() {
  const data =  [
        {
          "imageSrc": "https://images.unsplash.com/photo-1709456136012-59707ec6217d",
          "category": "DESIGN & CREATIVE",
          "date": "10 June 2023",
          "title": "Lorem ipsum dolor sit",
          "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, modi! Fugiat provident deserunt exercitationem magnam suscipit quasi iusto quo aut!",
          "button": true,
          "author": false,
          "authorName": "Rashed"
        },
        {
          "imageSrc": "https://example.com/image2.jpg",
          "category": "TECHNOLOGY",
          "date": "15 July 2023",
          "title": "Nulla facilisi etiam dignissim diam",
          "content": "Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam.",
          "button": true,
          "author": false,
          "authorName": "John Doe"
        },
        {
          "imageSrc": "https://example.com/image3.jpg",
          "category": "TRAVEL",
          "date": "20 August 2023",
          "title": "Fusce ut placerat orci nulla",
          "content": "Fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut.",
          "button": false,
          "author": true,
          "authorName": "Jane Smith"
        },
        {
          "imageSrc": "https://example.com/image4.jpg",
          "category": "FOOD & DRINK",
          "date": "5 September 2023",
          "title": "Donec ac odio tempor orci dapibus",
          "content": "Donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.",
          "button": true,
          "author": false,
          "authorName": "Michael Brown"
        },
        {
          "imageSrc": "https://example.com/image5.jpg",
          "category": "HEALTH & FITNESS",
          "date": "12 October 2023",
          "title": "Quisque non tellus orci ac",
          "content": "Quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis.",
          "button": true,
          "author": true,
          "authorName": "Emily Johnson"
        },
        {
          "imageSrc": "https://example.com/image6.jpg",
          "category": "FASHION",
          "date": "8 November 2023",
          "title": "Vivamus arcu felis bibendum ut tristique",
          "content": "Vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum.",
          "button": true,
          "author": false,
          "authorName": "Sarah Wilson"
        },
        {
          "imageSrc": "https://example.com/image7.jpg",
          "category": "SPORTS",
          "date": "3 December 2023",
          "title": "Praesent tristique magna sit amet purus",
          "content": "Praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis.",
          "button": true,
          "author": true,
          "authorName": "David Clark"
        },
        {
          "imageSrc": "https://example.com/image8.jpg",
          "category": "BUSINESS",
          "date": "20 January 2024",
          "title": "Etiam dignissim diam quis enim",
          "content": "Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.",
          "button": false,
          "author": false,
          "authorName": "Jessica Turner"
        },
        {
          "imageSrc": "https://example.com/image9.jpg",
          "category": "EDUCATION",
          "date": "14 February 2024",
          "title": "Mauris a diam maecenas sed",
          "content": "Mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis.",
          "button": true,
          "author": true,
          "authorName": "Michael Smith"
        },
        {
          "imageSrc": "https://example.com/image10.jpg",
          "category": "MUSIC",
          "date": "5 March 2024",
          "title": "Cras fermentum odio eu feugiat",
          "content": "Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra.",
          "button": true,
          "author": false,
          "authorName": "Sophia Anderson"
        }
      ]
      

  return data
}