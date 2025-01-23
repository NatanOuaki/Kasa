import '../assets/pageCSS/about.css';
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";

const aboutContent = [
  {
    "title": "Reliability",
    "content": "The listings posted on Kasa guarantee total reliability. The photos match the accommodations, and all information is regularly verified by our teams."
  },
  {
    "title": "Respect",
    "content": "Kindness is one of Kasa's core values. Any discriminatory behavior or disturbance to the neighborhood will result in exclusion from our platform."
  },
  {
    "title": "Service",
    "content": "Our teams are at your disposal to provide a perfect experience. Do not hesitate to contact us if you have any questions."
  },
  {
    "title": "Safety",
    "content": "Safety is Kasa's top priority. For both hosts and travelers, each accommodation meets the safety standards established by our services. By leaving a rating for both the host and the guest, it allows our teams to ensure that the standards are being met. We also organize workshops on home safety for our hosts."
  }
];

function About() {
  return (
    <div className='aboutContainer'>
      <Banner className = {'bannerAbout'}/>
      <div className="aboutDropdowns">
        {aboutContent.map((about) =>(
                  <Collapse key={about.title} type = {about.title} content={about.content}/>
              )
        )}
      </div>
    </div>
  );
}

export default About;
