import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const twitts = [
  {
    title:
      "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project",
    linkText: "@newspark #technology https://dribbble.com/subash_chandra",
    date: "March 26, 2020",
  },
  {
    title:
      "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project",
    linkText: "@newspark #technology https://dribbble.com/subash_chandra",
    date: "March 26, 2020",
  },
  {
    title:
      "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project",
    linkText: "@newspark #technology https://dribbble.com/subash_chandra",
    date: "March 26, 2020",
  },
  {
    title:
      "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project",
    linkText: "@newspark #technology https://dribbble.com/subash_chandra",
    date: "March 26, 2020",
  },
  {
    title:
      "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project",
    linkText: "@newspark #technology https://dribbble.com/subash_chandra",
    date: "March 26, 2020",
  },
  {
    title:
      "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project",
    linkText: "@newspark #technology https://dribbble.com/subash_chandra",
    date: "March 26, 2020",
  },
];

const TwitterWidget = () => {
  return (
    <div className="business3 padding20 white_bg border-radious5 mb30">
      <div className="twitter_feeds mb30">
        <h3 className="widget-title">Twitter feed</h3>
        {twitts.map((item, i) => (
          <React.Fragment key={i}>
            <div key={i} className="single_twitter_feed">
              <div className="twitter_feed_icon">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  style={{color: "#1DA1F2"}}
                />
              </div>
              <h6 style={{fontWeight: "100"}}>
                {item.title}… <p className="mt-2">{item.linkText}</p>
              </h6>
              <p style={{fontSize: "10px"}}>{item.date}</p>
            </div>
            {i + 1 < twitts.length ? (
              <React.Fragment>
                <div className="space-30" />
                <div className="border_black" />
                <div className="space-30" />
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TwitterWidget;
