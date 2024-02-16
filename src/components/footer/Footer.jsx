import Link from 'next/link';
import styles from './navbar.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className="companyContainer">
        <div className="Info">
          <span>Family Party Sp. z o.o.</span>
        </div>
        <div className="Btn">
          <a href="tel:+48664939711">664-939-711</a>
        </div>
        <div className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.087537913689!2d20.066550950482323!3d50.232634078022706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165313b56b455b%3A0xbee57c823b9b8a2d!2sRoomWork%20-%20Kwatery%20pracownicze%20do%20wynaj%C4%99cia!5e0!3m2!1spl!2spl!4v1708123492036!5m2!1spl!2spl"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="webDevContainer">
        <div className="imgContainer">
          <span>WebDev Img Cont</span>
        </div>
        <div className="infoContainer">
          <h1>WebDev Info Cont</h1>
        </div>
      </div>
    </div>
  );
}
