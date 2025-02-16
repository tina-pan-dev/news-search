const defaultImage =
  "https://cdn.glitch.com/655e76cf-bdf5-47cd-86d1-1b50783527ea%2Fdefault_article_image.jpg?1537713221812";

const searchApi = async (term, location, sortBy) => {
  try {
    const response = await fetch(`/api/search?q=${term}&order-by=${sortBy}`);

    const data = await response.json();

    if (!data.response.results) return;

    console.log("data", data);

    const articles = data.response.results.map((article) => ({
      id: article.id,
      imageSrc: defaultImage,
      title: article.webTitle,
      link: article.webUrl,
      section: article.sectionName,
      publication_date: convertDate(article.webPublicationDate),
    }));

    const sections = getUniqueSections(articles);

    return { returnedArticles: articles, returnedSections: sections };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// this could be implemented using an ES6 Set type
const getUniqueSections = (articles) => {
  let uniqueSections = [];
  articles.forEach((article) => {
    if (!uniqueSections.includes(article.section)) {
      uniqueSections.push(article.section);
    }
  });

  return uniqueSections;
};

const convertDate = (dateString) => {
  let date = new Date(dateString);
  return date.toLocaleDateString();
};

export { searchApi };
