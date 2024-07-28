import React from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import JobsList from "./JobsList";
import Loading from "../../Loading";

const Vacancy = () => {
  const { data, loading } = useFetch();
  console.log(data);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div id="vacancy">
        <div className="container">
          <div className="vacancy">
            <div className="vacancy__content">
              <div className="filter">
                <Link to={"/"}>
                  <button>Добавить вакансию</button>
                </Link>
              </div>
              <div className="jobs-list">
                {data &&
                  data.map((job: any, index: number) => {
                    return (
                      <JobsList
                        key={index}
                        organization_icon={job.organization_icon_formats}
                        companyName={job.organization_name}
                        jobTitle={job.position}
                        paymentType={job.paymentType}
                        priceFrom={job.price_from}
                        priceTo={job.price_to}
                        type={job.type}
                        city={job.city}
                        currency={job.currency}
                        salary={job.salary}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="vacancy--btn">
              <button>Следующая страница</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vacancy;
