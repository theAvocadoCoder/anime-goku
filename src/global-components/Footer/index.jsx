// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import FooterStyles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import twitter from "./assets/twitter.png"
import discord from "./assets/discord.png"
import instagram from "./assets/instagram.png"

const Footer = () => {
  return (
		<>
			<div>
				<div className={FooterStyles.footer__wrapper}>
					<div className={FooterStyles.footer__col}>
						<div className={FooterStyles.footer__each}>
							<h1 className={FooterStyles.footer__logoName}>Anime Goku</h1>
						</div>
						<div className={FooterStyles.footer__each}>
							{/* <a href={url}>
								<img src={twitter} />
							</a>
							<a href={url}>
								<img src={discord} />
							</a>
							<a href={url}>
								<img src={instagram} />
							</a> */}
						</div>
					</div>
					<div className={FooterStyles.footer__col}>
						<h3 className={FooterStyles.footer__head}>Home</h3>
            <Link className={FooterStyles.footer__links}>Popular Anime</Link>
						<Link className={FooterStyles.footer__links}>Continue Watching</Link>
						<Link className={FooterStyles.footer__links}>Animes</Link>
						<Link className={FooterStyles.footer__links}>News</Link>
					</div>
					<div className={FooterStyles.footer__col}>
						<h3 className={FooterStyles.footer__head}>About Us</h3>
						<Link className={FooterStyles.footer__links}>Company</Link>
						<Link className={FooterStyles.footer__links}>Copyright Plans</Link>
						<Link className={FooterStyles.footer__links}>Advertisements</Link>
						<Link className={FooterStyles.footer__links}>Ads Choices</Link>
					</div>
					<div className={FooterStyles.footer__col}>
						<h3 className={FooterStyles.footer__head}>Membership</h3>
						<Link className={FooterStyles.footer__links}>Choose Membership</Link>
						<Link className={FooterStyles.footer__links}>Gift Membership</Link>
						<Link className={FooterStyles.footer__links}>Gift Cards</Link>
					</div>
					<div className={FooterStyles.footer__col}>
						<h3 className={FooterStyles.footer__head}>Community</h3>
						<Link className={FooterStyles.footer__links}>Help FAQ</Link>
						<Link className={FooterStyles.footer__links}>Join community</Link>
						<Link className={FooterStyles.footer__links}>Legal notice</Link>
						<Link className={FooterStyles.footer__links}>Terms and Agreements</Link>
						<Link className={FooterStyles.footer__links}>Forum</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer