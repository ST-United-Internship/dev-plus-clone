import { useState } from "react";
import "./FAQ.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";

const FAQ = () => {
  const faqs = [
    {
      question: " Do I need be fulltime during the campus?",
      answer:
        "Yes, it’s mandatory. Fulltime as well as full commitment in order to obtain the best achievement.",
    },
    {
      question: " Does Devplus offer free courses?",
      answer:
        "  Yes, it’s kind of a scholarship. But, you need to pass our challenge through test and interview round.",
    },
    {
      question: " Which course will be suitable with me?",
      answer:
        "  The first plus (+) course is designed to students who would like to join the OJT (on-job-train) programme. Next level, the second plus (++) course will suitable for one who got the first plus or fresher, who would like to be trained in order to ready to onboard the real projects. The third plus (+++) course is intended to the alumni of the second plus degree or junior who would like to reach a specific tech-stack: AI, Blockchain, Devops...",
    },
    {
      question: "Does Devplus guarantee a job after graduating?",
      answer:
        " Yes, it’s could be a good job. Once you get the second plus (++) you will ready to onboard the projects of our partners, the most highly recommended places to work.",
    },
  ];

  const [target, setTarget] = useState(0);

  return (
    <div className=" pt-100">
      <div className="main-container">
        <div className="header">
          <div className="App">
            <div className="title">Some common concerns</div>
            <div className="faqs">
              {faqs.map((faq, index) => {
                return (
                  <div
                    className={"faq " + (index === target ? "open" : "")}
                    key={index}
                    onClick={() =>
                      setTarget((prev) => {
                        if (index === prev) return null;
                        return index;
                      })
                    }
                  >
                    <div
                      className="faq-question"
                      style={{
                        backgroundColor: index === target ? "#226FB7" : "",
                        color: index === target ? "#ffffff" : "",
                      }}
                    >
                      {index === target ? (
                        <NotificationsOffIcon style={{ width: "20px" }} />
                      ) : (
                        <NotificationsNoneIcon />
                      )}
                      {faq.question}
                    </div>

                    <div className="faq-answer">{faq.answer}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="header-part">
            <div className="img-part icon-img">
              <a
                className="button-play"
                href="https://www.youtube.com/embed/mUjhiT0zSKI"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
