const storage = (function () {
    const list = [
      {
        "text": "accusamus beatae ad facilis cum similique qui sunt",
        "hero": "https://placehold.it/600/92c952",
        "image": "https://placehold.it/150/92c952"
      },
      {
        "text": "reprehenderit est deserunt velit ipsam",
        "hero": "https://placehold.it/600/771796",
        "image": "https://placehold.it/150/771796"
      },
      {
        "text": "officia porro iure quia iusto qui ipsa ut modi",
        "hero": "https://placehold.it/600/24f355",
        "image": "https://placehold.it/150/24f355"
      },
      {
        "text": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "hero": "https://placehold.it/600/d32776",
        "image": "https://placehold.it/150/d32776"
      },
      {
        "text": "natus nisi omnis corporis facere molestiae rerum in",
        "hero": "https://placehold.it/600/f66b97",
        "image": "https://placehold.it/150/f66b97"
      },
      {
        "text": "accusamus ea aliquid et amet sequi nemo",
        "hero": "https://placehold.it/600/56a8c2",
        "image": "https://placehold.it/150/56a8c2"
      },
      {
        "text": "officia delectus consequatur vero aut veniam explicabo molestias",
        "hero": "https://placehold.it/600/b0f7cc",
        "image": "https://placehold.it/150/b0f7cc"
      },
      {
        "text": "aut porro officiis laborum odit ea laudantium corporis",
        "hero": "https://placehold.it/600/54176f",
        "image": "https://placehold.it/150/54176f"
      },
      {
        "text": "qui eius qui autem sed",
        "hero": "https://placehold.it/600/51aa97",
        "image": "https://placehold.it/150/51aa97"
      },
      {
        "text": "beatae et provident et ut vel",
        "hero": "https://placehold.it/600/810b14",
        "image": "https://placehold.it/150/810b14"
      },
      {
        "text": "nihil at amet non hic quia qui",
        "hero": "https://placehold.it/600/1ee8a4",
        "image": "https://placehold.it/150/1ee8a4"
      },
      {
        "text": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "hero": "https://placehold.it/600/66b7d2",
        "image": "https://placehold.it/150/66b7d2"
      },
      {
        "text": "repudiandae iusto deleniti rerum",
        "hero": "https://placehold.it/600/197d29",
        "image": "https://placehold.it/150/197d29"
      },
      {
        "text": "est necessitatibus architecto ut laborum",
        "hero": "https://placehold.it/600/61a65",
        "image": "https://placehold.it/150/61a65"
      },
      {
        "text": "harum dicta similique quis dolore earum ex qui",
        "hero": "https://placehold.it/600/f9cee5",
        "image": "https://placehold.it/150/f9cee5"
      },
      {
        "text": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "hero": "https://placehold.it/600/fdf73e",
        "image": "https://placehold.it/150/fdf73e"
      },
      {
        "text": "natus doloribus necessitatibus ipsa",
        "hero": "https://placehold.it/600/9c184f",
        "image": "https://placehold.it/150/9c184f"
      },
      {
        "text": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
        "hero": "https://placehold.it/600/1fe46f",
        "image": "https://placehold.it/150/1fe46f"
      },
      {
        "text": "perferendis nesciunt eveniet et optio a",
        "hero": "https://placehold.it/600/56acb2",
        "image": "https://placehold.it/150/56acb2"
      },
      {
        "text": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
        "hero": "https://placehold.it/600/8985dc",
        "image": "https://placehold.it/150/8985dc"
      },
      {
        "text": "ad et natus qui",
        "hero": "https://placehold.it/600/5e12c6",
        "image": "https://placehold.it/150/5e12c6"
      },
      {
        "text": "et ea illo et sit voluptas animi blanditiis porro",
        "hero": "https://placehold.it/600/45601a",
        "image": "https://placehold.it/150/45601a"
      },
      {
        "text": "harum velit vero totam",
        "hero": "https://placehold.it/600/e924e6",
        "image": "https://placehold.it/150/e924e6"
      },
      {
        "text": "beatae officiis ut aut",
        "hero": "https://placehold.it/600/8f209a",
        "image": "https://placehold.it/150/8f209a"
      },
      {
        "text": "facere non quis fuga fugit vitae",
        "hero": "https://placehold.it/600/5e3a73",
        "image": "https://placehold.it/150/5e3a73"
      },
      {
        "text": "asperiores nobis voluptate qui",
        "hero": "https://placehold.it/600/474645",
        "image": "https://placehold.it/150/474645"
      },
      {
        "text": "sit asperiores est quos quis nisi veniam error",
        "hero": "https://placehold.it/600/c984bf",
        "image": "https://placehold.it/150/c984bf"
      },
      {
        "text": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
        "hero": "https://placehold.it/600/392537",
        "image": "https://placehold.it/150/392537"
      },
      {
        "text": "aut ipsam quos ab placeat omnis",
        "hero": "https://placehold.it/600/602b9e",
        "image": "https://placehold.it/150/602b9e"
      },
      {
        "text": "odio enim voluptatem quidem aut nihil illum",
        "hero": "https://placehold.it/600/372c93",
        "image": "https://placehold.it/150/372c93"
      },
    ];

    const total = list.length;

    return{
        getList( from, to ) {
            return new Promise((resolve, reject) => {
                to = to + 1;
                let result = list.slice( from, to );

                if( to >= total ) resolve({list :result, isNext: false });
                else resolve( {list :result, isNext: true} );
            });
        }
    }

})();

export default storage;