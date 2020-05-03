import React, { useEffect } from "react";

declare global {
  interface Window {
    DISQUS: any;
  }
}

const Comments = ({ fullUrl, id }: any) => {
  useEffect(() => {
    const DISQUS_SCRIPT = "disq_script";
    const sd = document.getElementById(DISQUS_SCRIPT);
    let disqus_config;
    if (!sd) {
      disqus_config = function (this: any) {
        this.page.url = fullUrl;
        this.page.identifier = id;
      };

      const d = document;
      const s = d.createElement("script");
      s.src = "https://beat-em-up-world.disqus.com/embed.js";
      s.id = DISQUS_SCRIPT;
      s.async = true;
      s.setAttribute("data-timestamp", new Date().toString());

      d.body.appendChild(s);
    } else {
      window.DISQUS.reset({
        reload: true,
        // eslint-disable-next-line
        config: disqus_config,
      });
    }
  }, []);
  return <div id="disqus_thread"></div>;
};

export default Comments;
