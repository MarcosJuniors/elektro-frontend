import facebookIcon from '../../assets/icons-redes-sociais/facebook.png';
import instagramIcon from '../../assets/icons-redes-sociais/instagram.png';
import tiktokIcon from '../../assets/icons-redes-sociais/tiktok.png';
import twitterIcon from '../../assets/icons-redes-sociais/twiter.png';
import linkedinIcon from '../../assets/icons-redes-sociais/linkedin.png';

export function Footer() {
  return (
    <footer className="bg-[#FFAE50] py-6 px-4 flex flex-col items-center justify-center gap-3 w-full">
      <p className="text-zinc-900 font-medium text-xs">
        Siga-nos nas redes sociais!
      </p>

      <div className="flex items-center justify-center gap-3">
        <a href="#" aria-label="Facebook">
          <img src={facebookIcon} alt="Facebook" className="w-6 h-6 object-contain" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6 object-contain" />
        </a>
        <a href="#" aria-label="TikTok">
          <img src={tiktokIcon} alt="TikTok" className="w-6 h-6 object-contain" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={twitterIcon} alt="Twitter" className="w-6 h-6 object-contain" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 object-contain" />
        </a>
      </div>
    </footer>
  );
}