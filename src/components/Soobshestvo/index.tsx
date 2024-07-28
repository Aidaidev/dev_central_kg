import React from "react";

import SoobshestvoList from "./SoobshestvoList";
import Loading from "../../Loading";
import useFetch from "../../hooks/useFetch";

function Soobshestvo() {
  const { data, loading } = useFetch({ url: "http://3.38.98.134/community" });

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="community">
      <div className="container">
        <div className="community">
          <SoobshestvoList data={data} />
        </div>
      </div>
    </div>
  );
}

export default Soobshestvo;
