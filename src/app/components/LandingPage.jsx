"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import Navbar from "@/app/components/Navbar";
import { AiFillFileText, AiFillBulb, AiFillAudio } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";

const headings = [
  "Enhance your knowledge",
  "Achieve greater success",
  "Improve your health",
  "Develop better parenting skills",
  "Increase happiness",
  "Be the best version of yourself!",
];

const headings2 = [
  "Expand your learning",
  "Accomplish your goals",
  "Strengthen your vitality",
  "Become a better caregiver",
  "Improve your mood",
  "Maximize your abilities",
];

const reviews = [
  {
    name: "Hanna M.",
    rating: 5,
    text: "This app has been a <b>game-changer</b> for me! I can get the main ideas from books so much faster and still feel like I learned something valuable.",
  },
  {
    name: "David B.",
    rating: 5,
    text: "<b>Concise and accurate summaries</b> that are easy to understand. I use it almost every day when I want to learn something quickly.",
  },
  {
    name: "Nathan S.",
    rating: 5,
    text: "I love how simple everything is. The audio summaries are especially helpful when I’m driving or don’t have time to sit down and read.",
  },
  {
    name: "Ryan R.",
    rating: 5,
    text: "Summarist helps me stay consistent with learning. It feels premium, fast, and easy to use, and the recommendations are actually useful.",
  },
];

const ReviewStars = ({ rating = 5 }) => {
  const safeRating = Math.min(Math.max(rating, 0), 5);

  return (
    <div className="review__stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <BsStarFill
          key={index}
          style={{ opacity: index < safeRating ? 1 : 0.25 }}
        />
      ))}
    </div>
  );
};

const LandingPage = () => {
  const { openAuth, user, logout } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section id="landing">
        <div className="container">
          <div className="row">
            <div className="landing__wrapper">
              <div className="landing__content">
                <div className="landing__content__title">
                  Gain more knowledge <br className="remove--tablet" />
                  in less time
                </div>

                <div className="landing__content__subtitle">
                  Great summaries for busy people,
                  <br className="remove--tablet" />
                  individuals who barely have time to read,
                  <br className="remove--tablet" />
                  and even people who don’t like to read.
                </div>

                <button
                  className="btn home__cta--btn"
                  onClick={() => {
                    if (user) {
                      logout();
                    } else {
                      openAuth("/for-you");
                    }
                  }}
                >
                  {user ? "Logout" : "Login"}
                </button>
              </div>

              <figure className="landing__image--mask">
                <img src="/assets/landing.png" alt="landing" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <div className="row">
            <div className="section__title">
              Understand books in few minutes
            </div>

            <div className="features__wrapper">
              <div className="features">
                <div className="features__icon">
                  <AiFillFileText />
                </div>
                <div className="features__title">Read or listen</div>
                <div className="features__sub--title">
                  Save time by getting the core ideas from the best books.
                </div>
              </div>

              <div className="features">
                <div className="features__icon">
                  <AiFillBulb />
                </div>
                <div className="features__title">Find your next read</div>
                <div className="features__sub--title">
                  Explore book lists and personalized recommendations.
                </div>
              </div>

              <div className="features">
                <div className="features__icon">
                  <AiFillAudio />
                </div>
                <div className="features__title">Briefcasts</div>
                <div className="features__sub--title">
                  Gain valuable insights from briefcasts
                </div>
              </div>
            </div>

            <div className="statistics__wrapper">
              <div className="statistics__content--header">
                {headings.map((text, index) => (
                  <div
                    key={index}
                    className={`statistics__heading ${
                      activeIndex === index ? "statistics__heading--active" : ""
                    }`}
                  >
                    {text}
                  </div>
                ))}
              </div>

              <div className="statistics__content--details">
                <div className="statistics__data">
                  <div className="statistics__data--number">93%</div>
                  <div className="statistics__data--title">
                    of members <b>increase</b> reading frequency.
                  </div>
                </div>

                <div className="statistics__data">
                  <div className="statistics__data--number">96%</div>
                  <div className="statistics__data--title">
                    establish <b>better habits</b>.
                  </div>
                </div>

                <div className="statistics__data">
                  <div className="statistics__data--number">90%</div>
                  <div className="statistics__data--title">
                    made <b>positive changes</b>.
                  </div>
                </div>
              </div>
            </div>

            <div className="statistics__wrapper">
              <div className="statistics__content--details statistics__content--details-second">
                <div className="statistics__data">
                  <div className="statistics__data--number">91%</div>
                  <div className="statistics__data--title">
                    feel <b>more productive</b> daily.
                  </div>
                </div>

                <div className="statistics__data">
                  <div className="statistics__data--number">94%</div>
                  <div className="statistics__data--title">
                    improved <b>comprehension</b>.
                  </div>
                </div>

                <div className="statistics__data">
                  <div className="statistics__data--number">88%</div>
                  <div className="statistics__data--title">
                    feel <b>more informed</b>.
                  </div>
                </div>
              </div>

              <div className="statistics__content--header statistics__content--header-second">
                {headings2.map((text, index) => (
                  <div
                    key={index}
                    className={`statistics__heading ${
                      activeIndex === (index + 3) % headings2.length
                        ? "statistics__heading--active"
                        : ""
                    }`}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews">
  <div className="container">
    <div className="section__title">What our members say</div>

    <div className="reviews__wrapper">
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <div className="review__header">
            <div className="review__name">{review.name}</div>
            <ReviewStars rating={review.rating} />
          </div>

          <div
            className="review__body"
            dangerouslySetInnerHTML={{ __html: review.text }}
          />
        </div>
      ))}
    </div>

    <div className="reviews__btn--wrapper">
      <button
        className="btn home__cta--btn"
        onClick={() => openAuth("/for-you")}
      >
        Login
      </button>
    </div>
  </div>
</section>

      <section id="numbers">
        <div className="container">
          <div className="row">
            <div className="section__title">
              Start growing with Summarist now
            </div>

            <div className="numbers__wrapper">
              <div className="numbers">
                <div className="numbers__icon">
                  <BiCrown />
                </div>
                <div className="numbers__title">3 Million</div>
                <div className="numbers__sub--title">
                  Downloads on all platforms
                </div>
              </div>

              <div className="numbers">
                <div className="numbers__icon numbers__star--icon">
                  <BsStarFill />
                  <BsStarHalf />
                </div>
                <div className="numbers__title">4.5 Stars</div>
                <div className="numbers__sub--title">Average ratings</div>
              </div>

              <div className="numbers">
                <div className="numbers__icon">
                  <RiLeafLine />
                </div>
                <div className="numbers__title">97%</div>
                <div className="numbers__sub--title">Build better habits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
  <div className="container">
    <div className="row">
      <div className="footer__top--wrapper">
        <div className="footer__block">
          <div className="footer__link--title">Actions</div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Summarist Magazine</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Cancel Subscription</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Help</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Contact us</a>
          </div>
        </div>

        <div className="footer__block">
          <div className="footer__link--title">Useful Links</div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Pricing</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Summarist Business</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Gift Cards</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Authors & Publishers</a>
          </div>
        </div>

        <div className="footer__block">
          <div className="footer__link--title">Company</div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">About</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Careers</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Partners</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Code of Conduct</a>
          </div>
        </div>

        <div className="footer__block">
          <div className="footer__link--title">Other</div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Sitemap</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Legal Notice</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Terms of Service</a>
          </div>
          <div className="footer__link--wrapper">
            <a href="#" className="footer__link">Privacy Policies</a>
          </div>
        </div>
      </div>

      <div className="footer__copyright--wrapper">
        <div className="footer__copyright">
          Copyright © 2023 Summarist.
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default LandingPage;
