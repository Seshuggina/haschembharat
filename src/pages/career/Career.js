import React, { useState, useEffect } from "react";
import jobs from "./../../assets/data/career.json";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./Career.scss";

export const Career = () => {
  const [postedJobs, setPostedJobs] = useState(jobs);
  const thumbnailsColors = ["primary", "danger", "info", "success", "warning"];

  return (
    <>
      <section className="section section-shaped section-lg pt-88 haschem-career">
        <Container>
          <h1 className="display-1 mb-0">Career</h1>
          <Row className="justify-content-center"></Row>
        </Container>
      </section>

      <section className="pt-5">
        <div className="career-search">
          <div className="container">
            <form>
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <label className="sr-only" for="search">
                    Search
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="search"
                    placeholder="Search jobs by skill or keyword"
                  />
                </div>
                <div className="col-sm-5">
                  <label className="sr-only" for="location">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="location"
                    placeholder="Location"
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-2">
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="pt-3">Latest Jobs:</h5>
              <div className="tr-job-posted section-padding">
                <div className="container">
                  <div className="job-tab text-center">
                    <ul
                      className="nav nav-tabs justify-content-center"
                      role="tablist"
                    >
                      <li role="presentation" className="active">
                        <a
                          className="active show"
                          href="#hot-jobs"
                          aria-controls="hot-jobs"
                          role="tab"
                          data-toggle="tab"
                          aria-selected="true"
                        >
                          Hot Jobs
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#recent-jobs"
                          aria-controls="recent-jobs"
                          role="tab"
                          data-toggle="tab"
                          className=""
                          aria-selected="false"
                        >
                          Recent Jobs
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#popular-jobs"
                          aria-controls="popular-jobs"
                          role="tab"
                          data-toggle="tab"
                          className=""
                          aria-selected="false"
                        >
                          Popular Jobs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <h6 className="text-center text-muted" >
            No Jobs Avialable at this moment
          </h6> */}
          </div>
        </div>
      </section>

      <section className="section section-lg pt-lg-0">
        <div className="tr-job-posted section-padding">
          <div className="container">
            <div className="job-tab text-center">
              {/* JObs */}
              <div className="tab-content text-left">
                <div
                  role="tabpanel"
                  className="tab-pane fade active show"
                  id="hot-jobs"
                >
                  <div className="row">
                    {postedJobs.map(function (job) {
                      return (
                        <>
                          <div className="col-md-6 col-lg-3">
                            <div className="job-item">
                              <div className="item-overlay">
                                <div className="job-info">
                                  <a href="#" className="btn btn-primary">
                                    {job.jobType}
                                  </a>
                                  <span className="tr-title">
                                    <a href="#">{job.jobTitle}</a>
                                    <span>
                                      <a href="#">Dig File</a>
                                    </span>
                                  </span>
                                  <ul className="tr-list job-meta">
                                    <li>
                                      <i
                                        className="fa fa-map-signs"
                                        aria-hidden="true"
                                      ></i>
                                      {job.location}
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-briefcase"
                                        aria-hidden="true"
                                      ></i>
                                      Mid Level
                                    </li>
                                    <li>
                                      <i
                                        className="fa fa-money"
                                        aria-hidden="true"
                                      ></i>
                                      {job.salaryRange}
                                    </li>
                                  </ul>
                                  <ul className="job-social tr-list">
                                    <li>
                                      <a href="#">
                                        <i
                                          className="fa fa-heart-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          className="fa fa-expand"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          className="fa fa-bookmark-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          className="fa fa-long-arrow-right"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="job-info">
                                <div className="company-logo">
                                  <img
                                    src="https://www.bootdey.com/image/300x100/7B68EE/000000"
                                    alt="images"
                                    className="img-fluid"
                                  />
                                </div>
                                <span className="tr-title">
                                  <a href="#">{job.jobTitle}</a>
                                  <span>
                                    <a href="#">Dig File</a>
                                  </span>
                                </span>
                                <ul className="tr-list job-meta">
                                  <li>
                                    <span>
                                      <i
                                        className="fa fa-map-signs"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    {job.location}
                                  </li>
                                  <li>
                                    <span>
                                      <i
                                        className="fa fa-briefcase"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    Mid Level
                                  </li>
                                  <li>
                                    <span>
                                      <i
                                        className="fa fa-money"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                    {job.salaryRange}
                                  </li>
                                </ul>
                                <div className="time">
                                  <a href="#">
                                    <span>{job.jobType}</span>
                                  </a>
                                  <span className="pull-right">
                                    {job.postedDate}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}

                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Part Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Associate</a>
                              <span>
                                <a href="#">Loop</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/F0F8FF/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Associate</a>
                            <span>
                              <a href="#">Loop</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="part-time">Part Time</span>
                            </a>
                            <small className="pull-right">Posted 1 day ago</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Freelance
                            </a>
                            <span className="tr-title">
                              <a href="#">Graphic Designer</a>
                              <span>
                                <a href="#">Humanity Creative</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/00FFFF/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Graphic Designer</a>
                            <span>
                              <a href="#">Humanity Creative</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="freelance">Freelance</span>
                            </a>
                            <span className="pull-right">Posted 10 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Full Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Consultant</a>
                              <span>
                                <a href="#">Families</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/7FFFD4/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Consultant</a>
                            <span>
                              <a href="#">Families</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span>Full Time</span>
                            </a>
                            <span className="pull-right">Posted Oct 09, 2017</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Part Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Project Manager</a>
                              <span>
                                <a href="#">Sky Creative</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/8A2BE2/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Project Manager</a>
                            <span>
                              <a href="#">Sky Creative</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="part-time">Part Time</span>
                            </a>
                            <span className="pull-right">Posted 1 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Freelance
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Associate</a>
                              <span>
                                <a href="#">Pencil</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/5F9EA0/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Associate</a>
                            <span>
                              <a href="#">Pencil</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="freelance">Freelance</span>
                            </a>
                            <span className="pull-right">Posted 23 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Full Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Graphic Designer</a>
                              <span>
                                <a href="#">Fox</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/6495ED/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Graphic Designer</a>
                            <span>
                              <a href="#">Fox</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span>Full Time</span>
                            </a>
                            <span className="pull-right">Posted Oct 09, 2017</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#">
                              <span className="btn btn-primary">Part Time</span>
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Consultant</a>
                              <span>
                                <a href="#">Owl</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/FF7F50/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Consultant</a>
                            <span>
                              <a href="#">Owl</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="part-time">Part Time</span>
                            </a>
                            <span className="pull-right">Posted 10 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Part Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Associate</a>
                              <span>
                                <a href="#">Loop</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/DC143C/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Associate</a>
                            <span>
                              <a href="#">Loop</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="part-time">Part Time</span>
                            </a>
                            <span className="pull-right">Posted 1 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Full Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Project Manager</a>
                              <span>
                                <a href="#">Dig File</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/00008B/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Project Manager</a>
                            <span>
                              <a href="#">Dig File</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span>Full Time</span>
                            </a>
                            <span className="pull-right">Posted 23 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Part Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Consultant</a>
                              <span>
                                <a href="#">Families</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/00CED1/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Consultant</a>
                            <span>
                              <a href="#">Families</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="part-time">Part Time</span>
                            </a>
                            <span className="pull-right">Posted Oct 09, 2017</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Freelance
                            </a>
                            <span className="tr-title">
                              <a href="#">Graphic Designer</a>
                              <span>
                                <a href="#">Humanity Creative</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/696969/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Graphic Designer</a>
                            <span>
                              <a href="#">Humanity Creative</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="freelance">Freelance</span>
                            </a>
                            <span className="pull-right">Posted 10 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Full Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Associate</a>
                              <span>
                                <a href="#">Pencil</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/008000/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Associate</a>
                            <span>
                              <a href="#">Pencil</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span>Full Time</span>
                            </a>
                            <span className="pull-right">Posted 23 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Freelance
                            </a>
                            <span className="tr-title">
                              <a href="#">Project Manager</a>
                              <span>
                                <a href="#">Sky Creative</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/FF69B4/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Project Manager</a>
                            <span>
                              <a href="#">Sky Creative</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="freelance">Freelance</span>
                            </a>
                            <span className="pull-right">Posted 1 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Part Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Consultant</a>
                              <span>
                                <a href="#">Owl</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/CD5C5C/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Consultant</a>
                            <span>
                              <a href="#">Owl</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="part-time">Part Time</span>
                            </a>
                            <span className="pull-right">Posted 10 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Full Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Graphic Designer</a>
                              <span>
                                <a href="#">Fox</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/90EE90/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Graphic Designer</a>
                            <span>
                              <a href="#">Fox</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span>Full Time</span>
                            </a>
                            <span className="pull-right">Posted Oct 09, 2017</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade in" id="popular-jobs">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Full Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Graphic Designer</a>
                              <span>
                                <a href="#">Fox</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/87CEFA/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Graphic Designer</a>
                            <span>
                              <a href="#">Fox</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span>Full Time</span>
                            </a>
                            <span className="pull-right">Posted Oct 09, 2017</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Part Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Associate</a>
                              <span>
                                <a href="#">Loop</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/FFB6C1/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Associate</a>
                            <span>
                              <a href="#">Loop</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="part-time">Part Time</span>
                            </a>
                            <span className="pull-right">Posted 1 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Full Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Project Manager</a>
                              <span>
                                <a href="#">Dig File</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/D3D3D3/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Project Manager</a>
                            <span>
                              <a href="#">Dig File</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span>Full Time</span>
                            </a>
                            <span className="pull-right">Posted 23 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Freelance
                            </a>
                            <span className="tr-title">
                              <a href="#">Graphic Designer</a>
                              <span>
                                <a href="#">Humanity Creative</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/B0C4DE/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Graphic Designer</a>
                            <span>
                              <a href="#">Humanity Creative</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="freelance">Freelance</span>
                            </a>
                            <span className="pull-right">Posted 10 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Full Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Consultant</a>
                              <span>
                                <a href="#">Families</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/BA55D3/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Consultant</a>
                            <span>
                              <a href="#">Families</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span>Full Time</span>
                            </a>
                            <span className="pull-right">Posted Oct 09, 2017</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Freelance
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Associate</a>
                              <span>
                                <a href="#">Pencil</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/48D1CC/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Associate</a>
                            <span>
                              <a href="#">Pencil</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="freelance">Freelance</span>
                            </a>
                            <span className="pull-right">Posted 23 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Part Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Design Consultant</a>
                              <span>
                                <a href="#">Owl</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/9370DB/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Design Consultant</a>
                            <span>
                              <a href="#">Owl</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span className="part-time">Part Time</span>
                            </a>
                            <span className="pull-right">Posted 10 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              Full Time
                            </a>
                            <span className="tr-title">
                              <a href="#">Project Manager</a>
                              <span>
                                <a href="#">Sky Creative</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                San Francisco, CA, US
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                Mid Level
                              </li>
                              <li>
                                <i className="fa fa-money" aria-hidden="true"></i>
                                $5,000 - $6,000
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                          <div className="company-logo">
                            <img
                              src="https://www.bootdey.com/image/300x100/48D1CC/000000"
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <span className="tr-title">
                            <a href="#">Project Manager</a>
                            <span>
                              <a href="#">Sky Creative</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              San Francisco, CA, US
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              Mid Level
                            </li>
                            <li>
                              <span>
                                <i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              $5,000 - $6,000
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span>Full Time</span>
                            </a>
                            <span className="pull-right">Posted 1 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
