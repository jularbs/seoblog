const TwitterWidget = () => {
  return (
    <div className="twitter-timeline">
      <a
        className="twitter-timeline"
        data-lang="en"
        data-dnt="true"
        data-theme="dark"
        href="https://twitter.com/dzrhnews?ref_src=twsrc%5Etfw"
      >
        Tweets by dzrhnews
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  );
};

export default TwitterWidget;
