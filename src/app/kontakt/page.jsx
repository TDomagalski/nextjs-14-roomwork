import styles from './page.module.scss';

export default function Kontakt() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Kontakt</h1>
        <h2 className={styles.subTitle}>Zapraszamy do kontaktu</h2>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.desc}>
          <div className={styles.companies}>
            <div className={styles.company}>
              <h3 className={styles.name}>Family Party Sp. z o.o.</h3>
              <span className={styles.street}>ul. Krakowska 62d</span>
              <span className={styles.post}>32-090 Słomniki</span>
              <span className={styles.nip}>NIP: 682-177-77-38</span>
              <span className={styles.regon}>REGON: 381101585</span>
            </div>
            <div className={styles.company}>
              <h3 className={styles.name}>RoomWork - Kwatery pracownicze</h3>
              <span className={styles.street}>ul. Krakowska 62d</span>
              <a href="https://www.roomwork.pl/">www.RoomWork.pl</a>
            </div>
          </div>
          <p className={styles.parag}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quaerat repudiandae doloribus omnis maxime explicabo dolorem beatae
            recusandae assumenda impedit et, nihil asperiores eveniet, delectus
            facilis veniam accusantium, repellat ea?
          </p>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.contactForm}>
          <label for="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" value="John" />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" value="Doe" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
