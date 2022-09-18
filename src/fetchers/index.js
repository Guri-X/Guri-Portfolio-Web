import { http } from "./http";

function get_api_endpoint() {
  if (process.env.NODE_ENV === "development") {
    let FETCHERS_API_ENDPOINT = "";
    return FETCHERS_API_ENDPOINT;
  }
  else {
    let FETCHERS_API_ENDPOINT = "/api";
    return FETCHERS_API_ENDPOINT;
  }
};

const getInformation = async () => {
  let res = await http.get(get_api_endpoint() + `/information.json`);
  return res.data;
};

const getServices = async () => {
  let res = await http.get(get_api_endpoint() + `/services.json`);
  return res.data;
};

const getTechskills = async () => {
  let res = await http.get(get_api_endpoint() + `/techskills.json`);
  return res.data;
};

const getLanguageskills = async () => {
  let res = await http.get(get_api_endpoint() + `/languageskills.json`);
  return res.data;
};

const getPortfolioFilters = async () => {
  let res = await http.get(get_api_endpoint() + `/portfoliofilters.json`);
  return res.data;
};

const getPortfolios = async () => {
  let res = await http.get(get_api_endpoint() + `/portfolios.json`);
  return res.data;
};

const getJobExperience = async () => {
  let res = await http.get(get_api_endpoint() + `/jobexperience.json`);
  return res.data;
};

const getEducationBackground = async () => {
  let res = await http.get(get_api_endpoint() + `/educationbackground.json`);
  return res.data;
};

const getClientReviews = async () => {
  let res = await http.get(get_api_endpoint() + `/clientsreview.json`);
  return res.data;
};

export {
  getInformation,
  getServices,
  getTechskills,
  getLanguageskills,
  getPortfolioFilters,
  getPortfolios,
  getJobExperience,
  getEducationBackground,
  getClientReviews,
};
