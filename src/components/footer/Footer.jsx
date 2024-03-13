import Image from 'next/image';
import styles from './footer.module.scss';
import { MdOutlineMarkEmailRead, MdPhoneForwarded } from 'react-icons/md';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.companyContainer}>
        <div className={styles.info}>
          <span>Family Party Sp. z o.o.</span>
          <span>ul. Krakowska 62d</span>
          <span>32-090 Słomniki</span>
          <span>NIP: 682-177-77-38</span>
          <span>REGON: 381101585</span>
        </div>
        <div className={styles.btns}>
          <a href="mailto:kwatery@roomwork.pl" className={styles.btnAction}>
            <MdOutlineMarkEmailRead />
            <span>kwatery@roomwork.pl</span>
          </a>
          <a href="tel:+48664939711" className={styles.btnAction}>
            <MdPhoneForwarded />
            <span>664-939-711</span>
          </a>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.087537913689!2d20.066550950482323!3d50.232634078022706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165313b56b455b%3A0xbee57c823b9b8a2d!2sRoomWork%20-%20Kwatery%20pracownicze%20do%20wynaj%C4%99cia!5e0!3m2!1spl!2spl!4v1708123492036!5m2!1spl!2spl"
            width="400"
            height="250"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.webDevContainer}>
        <div className={styles.imgContainer}>
          <span>WebDev Img Cont</span>
        </div>
        <div className={styles.infoContainer}>
          <h1>WebDev Info Cont</h1>
        </div>
      </div>
    </div>
  );
}
