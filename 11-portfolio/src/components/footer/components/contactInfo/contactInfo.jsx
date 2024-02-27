import styles from "./contactInfo.module.scss";

const ContactInfo = ({ logo, contactInfo }) => {
  return (
    <div className={styles["contact-info"]}>
      <div className={styles.logo}>
        <img loading="lazy" src={logo} alt="Logo" />
        <span className="fs-3 fw-medium">{contactInfo.projectTitle}</span>
      </div>
      <div className={styles["contact-method"]}>
        {contactInfo.contactMethods.map((contactMethod, index) => {
          return (
            <p className="fs-5" key={index}>
              {contactMethod}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
