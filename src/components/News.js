import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Boureima Balima, Felix Onuah",
      title:
        "West Africa's ultimatum to Niger coup leaders nears deadline - Reuters",
      description:
        "West African nations were to determine on Friday a potential intervention if Niger's coup is not overturned by the weekend after mediation failed in a crisis rattling global powers.",
      url: "https://www.reuters.com/world/africa/west-african-bloc-seeks-solution-niger-coup-deadline-nears-2023-08-04/",
      urlToImage:
        "https://www.reuters.com/resizer/lNFcD0pLm4XfK4bCuJN0zRQYZQA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NX3Y5WMETBMRNH5PQR6NL7FXBU.jpg",
      publishedAt: "2023-08-04T11:48:00Z",
      content:
        "NIAMEY/ABUJA, Aug 4 (Reuters) - West African nations were to determine on Friday a potential intervention if Niger's coup is not overturned by the weekend after mediation failed in a crisis rattling … [+4092 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Lena H. Sun, Lenny Bernstein",
      title:
        "Second deadly TB outbreak linked to tainted bone grafts - The Washington Post",
      description:
        "Tuberculosis linked to contaminated bone graft material has killed one person and infected at least four others — the second TB outbreak involving Aziyo Biologics.",
      url: "https://www.washingtonpost.com/health/2023/08/04/tb-outbreak-tuberculosis-bone-graft/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VLZK2ZZX4RA33F2PFBKTAOWPRQ.jpeg&w=1440",
      publishedAt: "2023-08-04T11:45:35Z",
      content:
        "Comment on this story\r\nComment\r\nU.S. health officials are racing to control an outbreak of tuberculosis linked to contaminated bone graft material that has killed one person and infected at least fou… [+7855 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Catherine Nicholls, Teodora Preda, Sana Noor Haq",
      title:
        "Controversial influencer Andrew Tate released from house arrest in Romania - CNN",
      description:
        "Controversial internet influencer Andrew Tate and his brother Tristan have been released from house arrest in Romania ahead of their trial on charges of human trafficking and rape, Bucharest’s Court of Appeals announced on Friday.",
      url: "https://www.cnn.com/2023/08/04/europe/andrew-tate-released-house-arrest-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230804104529-02-andrew-tate-080123.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-04T11:06:00Z",
      content:
        "Controversial internet influencer Andrew Tate and his brother Tristan have been released from house arrest in Romania ahead of their trial on charges of human trafficking and rape, Bucharests Court o… [+2100 chars]",
    },
    {
      source: {
        id: null,
        name: "Inc.",
      },
      author: "Jeff Haden",
      title:
        "Taylor Swift Just Gave Tour Employees Bonuses Totaling an Estimated $55 Million. It's a Lesson in Leadership - Inc.",
      description:
        "Even if, unlike Swift, you can't afford to provide bonuses.",
      url: "https://www.inc.com/jeff-haden/taylor-swift-just-gave-tour-employees-bonuses-totaling-an-estimated-55-million-its-a-lesson-in-leadership.html",
      urlToImage:
        "https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/GettyImages-1524135911_533017_vdxzf5.jpg",
      publishedAt: "2023-08-04T10:05:16Z",
      content:
        'Four years ago, when I talked with Wright Thompson about his book The Cost of These Dreams, he called Taylor Swift "the most incredible person in American life."\r\nAs Thompson said:\r\nShe experienced g… [+3952 chars]',
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Brett Tingley",
      title:
        "Watch a brilliant fireball shine brighter than the full moon (video) - Space.com",
      description: "The fireball was seen across nine U.S. states.",
      url: "https://www.space.com/fireball-southern-united-states-august-2023",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/Kgd7jnz7ex3h9kFdbs3iWT-1200-80.jpg",
      publishedAt: "2023-08-04T10:00:01Z",
      content:
        "In the early morning hours of Wednesday (Aug. 2), a fireball streaked across southeastern United States skies. And thanks to stargazers in the area, the event was captured on film.\r\nThe American Mete… [+2501 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Matt Egan",
      title: "How extreme heat is making your gas more expensive - CNN",
      description:
        "This summer’s historic heatwave is making life more expensive for American drivers.",
      url: "https://www.cnn.com/2023/08/04/business/gas-prices-extreme-heat/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230803210758-gas-station-texas-080323.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-04T09:35:00Z",
      content:
        "This summers historic heatwave is making life more expensive for American drivers.\r\nEven as inflation cools across most of the economy, gasoline prices have surged to nine-month highs this week. Extr… [+4338 chars]",
    },
    {
      source: {
        id: null,
        name: "Game World Observer",
      },
      author: "Evgeny Obedkov",
      title:
        "Baldur's Game 3 peaks at over 472k concurrent players, second biggest launch of 2023 in terms of CCU - Game World Observer",
      description:
        "After nearly three years in Early Access, Baldur’s Gate 3 has finally launched globally. Larian Studios’ latest RPG is now taking Steam by storm.",
      url: "https://gameworldobserver.com/2023/08/04/baldurs-game-3-472k-ccu-second-biggest-steam-launch",
      urlToImage:
        "https://gameworldobserver.com/wp-content/previews/post/baldurs-game-3-472k-ccu-second-biggest-steam-launch.png",
      publishedAt: "2023-08-04T09:20:48Z",
      content:
        "After nearly three years in Early Access, Baldur’s Gate 3 has finally launched globally. Larian Studios’ latest RPG is now taking Steam by storm.\r\nReleased on August 3, Baldur’s Gate 3 has already pe… [+1450 chars]",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: "Adam Clark",
      title:
        "Apple Faces iPhone Headwinds. Why Analysts Are Nervous About the Stock. - Barron's",
      description:
        "After Apple's third consecutive quarter of declining revenue, some Wall Street analysts say its valuation is looking stretched.",
      url: "https://www.barrons.com/articles/apple-stock-price-earnings-buy-sell-9ac15c15",
      urlToImage: "https://images.barrons.com/im-731370/social",
      publishedAt: "2023-08-04T09:13:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "Kuo: iPhone 16 Pro Models to Adopt Stacked Camera Sensor Design - MacRumors",
      description:
        "Apple’s iPhone 16 series next year will adopt a stacked rear camera sensor design across the lineup, following similar adoption in this year’s...",
      url: "https://www.macrumors.com/2023/08/04/iphone-16-pro-stacked-camera-sensor/",
      urlToImage:
        "https://images.macrumors.com/t/k8fiawEGRqWwtaSm7T8KHxHTEnY=/1920x/article-new/2023/08/iPhone-15-Blue-Three-Quarters-Perspective-Feature.jpg",
      publishedAt: "2023-08-04T09:09:24Z",
      content:
        "Apples iPhone 16 series next year will adopt a stacked rear camera sensor design across the lineup, following similar adoption in this years standard iPhone 15 models, according to Apple industry ana… [+1123 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Deidre McPhillips",
      title:
        "Nearly half of US adults interested in using weight-loss drugs, new KFF poll finds - CNN",
      description:
        "Most adults in the United States have heard about a new class of drugs being used for weight loss – including Ozempic, Wegovy and Mounjaro – and nearly half say that they would be interested in using one, according to a new survey from KFF.",
      url: "https://www.cnn.com/2023/08/04/health/nearly-half-of-us-adults-interested-in-using-weight-loss-drugs/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/211222102206-weight-scale-doctors-office-stock.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-04T09:00:00Z",
      content:
        "Most adults in the United States have heard about a new class of drugs being used for weight loss including Ozempic, Wegovy and Mounjaro and nearly half say that they would be interested in using one… [+1639 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Rhea Mogul",
      title:
        "India’s top court stays Rahul Gandhi conviction, paving way for lawmaker return ahead of elections - CNN",
      description:
        "India’s top court on Friday stayed Rahul Gandhi’s defamation conviction, offering a crucial reprieve for the embattled former chair of the country’s main opposition party who was disqualified as a lawmaker following a trial he maintained was politically motiv…",
      url: "https://www.cnn.com/2023/08/04/india/rahul-gandhi-conviction-supreme-court-india-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230323040933-01-rahul-gandhi-030623-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-04T08:54:00Z",
      content:
        "Indias top court on Friday stayed Rahul Gandhis defamation conviction, offering a crucial reprieve for the embattled former chair of the countrys main opposition party who was disqualified as a lawma… [+3076 chars]",
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title:
        "Don't Miss: Perseid Meteor Shower and a Rare Super Blue Moon - SciTechDaily",
      description:
        "Saturn shines brightly all night in August, while the Perseids return for a good show on the 12th/13th, and a Super Blue Moon! What are some skywatching highlights in August 2023? Saturn reaches opposition this month, meaning it's at its biggest and brightest…",
      url: "https://scitechdaily.com/dont-miss-perseid-meteor-shower-and-a-rare-super-blue-moon/",
      urlToImage:
        "https://scitechdaily.com/images/Meteor-Shower-Art-Concept.jpg",
      publishedAt: "2023-08-04T08:17:10Z",
      content:
        "ByNASA Jet Propulsion LaboratoryAugust 4, 2023\r\nAugust offers a celestial extravaganza with clear views of Saturn at its opposition, the return of the annual Perseid meteor shower, and a rare super b… [+8042 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "GEIR MOULSON",
      title:
        "Austrian leader proposes enshrining the use of cash in his country's constitution - The Associated Press",
      description:
        "Austria’s leader is proposing to enshrine in the country’s constitution a right to use cash, which remains more popular in the Alpine nation than in many other places. Chancellor Karl Nehammer said Friday that “more and more people are concerned that cash cou…",
      url: "https://apnews.com/article/austria-cash-constitution-proposal-e63078b1682b375a84d0132857374e43",
      urlToImage:
        "https://dims.apnews.com/dims4/default/f9686e4/2147483647/strip/true/crop/3136x1764+0+164/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F32%2Fec%2Fefb48b4687aca6c63144e9f65d09%2Ff47a9cb9c7c942cea4857b31f4bdd386",
      publishedAt: "2023-08-04T07:34:00Z",
      content:
        "BERLIN (AP) Austrias leader is proposing to enshrine in the countrys constitution a right to use cash, which remains more popular in the Alpine nation than in many other places.\r\nChancellor Karl Neha… [+2359 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Aya Elamroussi, Morayo Ogunbayo",
      title:
        "A Florida man is charged with murder in the death of his wife, whose remains were found in suitcases - CNN",
      description:
        "A Florida man has been charged with first-degree murder on suspicion of killing and dismembering his wife, whose remains were found in suitcases at a beach last month, authorities said Thursday.",
      url: "https://www.cnn.com/2023/08/04/us/william-lowe-charged-murder-delray-beach-florida/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230803184220-william-lowe-arrested-delray-beach-murder.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-04T07:22:00Z",
      content:
        "A Florida man has been charged with first-degree murder on suspicion of killing and dismembering his wife, whose remains were found in suitcases at a beach last month, authorities said Thursday. \r\nWi… [+3201 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Joey Lynch",
      title:
        "Sweden 'know how to hurt' USWNT - Johanna Rytting Kaneryd - ESPN - ESPN",
      description:
        'Sweden will look to extend the legendary career of Caroline Seger as extra motivation to "make sure that we will knock out" the USWNT.',
      url: "https://www.espn.com/soccer/story/_/id/38131376/sweden-know-how-hurt-uswnt-johanna-rytting-kaneryd",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0804%2Fr1206140_1296x729_16%2D9.jpg",
      publishedAt: "2023-08-04T07:20:00Z",
      content:
        "Set for yet another meeting with old foes the United States, Sweden will not only look to build on their 3-0 win at the Tokyo Olympics in the rematch but also use extending the legendary career of Ca… [+3329 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Fox News",
      title:
        "Florida inmate James Phillip Barnes forgoes last meal before execution - New York Post ",
      description:
        "James Phillip Barnes, a Florida death row inmate executed Thursday for the brutal 1988 killing of a nurse he beat with a hammer, forwent the customary last meal hours before he was pronounced dead,…",
      url: "https://nypost.com/2023/08/04/florida-inmate-james-phillip-barnes-forgoes-last-meal-before-execution/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/08/newspress-collage-l0fuewmxx-1691127932173.jpg?quality=75&strip=all&1691113601&w=1024",
      publishedAt: "2023-08-04T06:14:00Z",
      content:
        "James Phillip Barnes, a Florida death row inmate executed Thursday for the brutal 1988 killing of a nurse he beat with a hammer, forwent the customary last meal hours before he was pronounced dead, s… [+1801 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Stephen Collinson",
      title:
        "Trump’s surreal arraignment day in Washington augurs ominous days ahead - CNN",
      description:
        "As former President Donald Trump left Washington after answering charges of trying to subvert democracy, it felt like all the previous trauma and divisions of his eight-year journey into the nation’s psyche were just the start.",
      url: "https://www.cnn.com/2023/08/04/politics/trump-arraignment-subvert-democracy/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230803162309-22-trump-arraignment-travel-dc-0803.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-04T05:38:00Z",
      content:
        "As former President Donald Trump left Washington after answering charges of trying to subvert democracy, it felt like all the previous trauma and divisions of his eight-year journey into the nations … [+9919 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: null,
      title:
        "The 2 expelled members of the 'Tennessee 3' win back their state House seats - NPR",
      description:
        "Tennessee Reps. Justin Pearson and Justin Jones advanced Thursday through a special election to fully reclaim their positions.",
      url: "https://www.npr.org/2023/08/04/1192068281/the-2-expelled-members-of-the-tennessee-3-win-back-their-state-house-seats",
      urlToImage:
        "https://media.npr.org/assets/img/2023/08/04/ap23214690089028_wide-d42674e2841ee5a72646ea073524529bd3c3d2ee-s1400-c100.jpg",
      publishedAt: "2023-08-04T05:31:21Z",
      content:
        "Tennessee Reps. Justin Pearson, D-Memphis, left, and Justin Jones, D-Nashville, speak to reporters outside the West Wing after meeting with President Joe Biden and Vice President Kamala Harris in the… [+4637 chars]",
    },
    {
      source: {
        id: null,
        name: "TODAY",
      },
      author: "Liz Calvario",
      title:
        "See Vanessa Bryant's Taylor Swift Jacket Featuring Late Husband Kobe - TODAY",
      description:
        "Vanessa Bryant is honoring husband Kobe Bryant and daughter Giana “Gigi” with her outfit for the Taylor Swift concert.",
      url: "https://www.today.com/popculture/news/vanessa-bryant-taylor-swift-jacket-kobe-eras-tour-rcna98098",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2023-08/taylor-swift-kobe-1acfc5.png",
      publishedAt: "2023-08-04T04:17:00Z",
      content:
        "Vanessa Bryant is honoring husband Kobe Bryant and daughter Giana Gigi with her outfit for the Taylor Swift concert. \r\nOn her Instagram story on Aug. 3, the late Los Angeles Lakers widow showed off h… [+2991 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container mt-3">
        <h2>All News</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mb-3" key={element.url}>
                <Newsitem
                  title={element.title.slice(0, 70)}
                  description={element.description.slice(0, 150)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
