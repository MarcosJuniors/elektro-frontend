import facebookIcon from '../../assets/icons-redes-sociais/facebook.png';
import instagramIcon from '../../assets/icons-redes-sociais/instagram.png';
import tiktokIcon from '../../assets/icons-redes-sociais/tiktok.png';
import twitterIcon from '../../assets/icons-redes-sociais/twiter.png';
import linkedinIcon from '../../assets/icons-redes-sociais/linkedin.png';

export function Footer() {
  return (
    <footer className="bg-[#FFAE50] py-14 px-12 flex flex-col items-center justify-center gap-2 w-full">
      <p
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#000000',
          width: '212px',
          height: '20px',
          opacity: 1,
        }}
        className="flex items-center justify-center mb-4"
      >
        Siga-nos nas redes sociais!
      </p>
      <div className="flex items-center justify-center gap-5">
        <a href="#" aria-label="Facebook">
          <img src={facebookIcon} alt="Facebook" className="w-8 h-8 object-contain" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8 object-contain" />
        </a>
        <a href="#" aria-label="TikTok">
          <img src={tiktokIcon} alt="TikTok" className="w-8 h-8 object-contain" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={twitterIcon} alt="Twitter" className="w-8 h-8 object-contain" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 object-contain" />
        </a>
      </div>
    </footer>
  );
}